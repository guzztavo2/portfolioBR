<!-- 
 - Enquanto o request do formulário carregar, desativar todos os inputs!
 - Após a conclusão do request do formulário, sistema de tempo!

 -->

<template>
    <div v-if="modalObject.visible" class="modalWrapper flexRow justify-content-center align-items-center">
        <div id="modal" class="modal flexColumn align-items-center">
            <header class="flexRow align-items-center">
                <h1>{{ modalObject.titleMessage }}</h1>
            </header>
            <main>
                <p> {{ modalObject.message }}</p>
            </main>
            <footer>
                <button @click="modalCloseEvent">Fechar</button>
            </footer>
        </div>
    </div>
    <form method="post" @submit.prevent="onSubmitFormContact">
        <h1 class="titleForm">Por favor, complete o formulário e envie-o, dessa maneira ele será direcionado diretamente a
            mim. Farei o possível para estabelecer uma comunicação o mais breve possível.</h1>
        <label for="nomeUsuario">
            <p><i class="fa-solid fa-user"></i> Nome completo:</p>
            <input v-model="userInput.nomeUsuario" required @focusout="verificarNomeUsuario" @keyup="verificarNomeUsuario"
                type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Digite aqui seu nome *">
            <div v-if="userError.nomeUsuario.length > 0" class="error"><small v-html="userError.nomeUsuario"></small></div>
        </label>
        <label for="emailUsuario">
            <p><i class="fa-solid fa-at"></i> E-mail para a comunicação:</p>
            <input v-model="userInput.emailUsuario" required @focusout="verificarEmailUsuario"
                @keyup="verificarEmailUsuario" type="email" name="emailUsuario" id="emailUsuario"
                placeholder="Digite aqui seu email *">
            <div v-if="userError.emailUsuario.length > 0" class="error"><small v-html="userError.emailUsuario"></small>
            </div>
        </label>
        <label for="numeroUsuario">
            <p><i class="fa-brands fa-whatsapp"></i> Digite seu WhatssApp (Opcional):</p>
            <input v-model="userInput.numeroUsuario" @focusout="verificarNumeroFocusOut" @keyup="verificarNumeroUsuario"
                type="text" name="numeroUsuario" id="numeroUsuario" placeholder="Digite aqui seu número *">
            <div v-if="userError.numeroUsuario.length > 0" class="error"><small v-html="userError.numeroUsuario"></small>
            </div>

        </label>
        <label for="mensagemUsuario">
            <p><i class="fa-regular fa-message"></i> Digite a mensagem para ser enviada:</p>
            <textarea v-model="userInput.mensagemUsuario" @focusout="verificarMensagemUsuario"
                @keyup="verificarMensagemUsuario" name="mensagemUsuario" id="mensagemUsuario"
                placeholder="Digite o motivo de sua mensagem *" cols="30" rows="5"></textarea>
            <div v-if="userError.mensagemUsuario.length > 0" class="error"><small
                    v-html="userError.mensagemUsuario"></small></div>

        </label>
        <div v-if="captchaObject.visibleCaptcha" class="captcha">
            <VueClientRecaptcha :value="captchaObject.captchaValue" :show-capital-case-letters="false"
                :show-lower-case-letters="false" @isValid="checkValidCaptcha" />
            <label for="">
                <input type="text" placeholder="Escreva o captcha acima**" v-model="captchaObject.captchaValue" />
                <div class="error"><small style="text-align: center;" :v-html="captchaObject.captchaError">Lembre-se: é
                        importante usar
                        letras maiúsculas e
                        minúsculas corretamente.</small></div>
                <p style="text-align: center;">Por favor, responda ao captcha para prosseguir!</p>


            </label>
        </div>
        <!-- formSubmitView -->
        <input v-if="formSubmitView" type="submit" value="Enviar">
        <div class="error" v-if="userError.submitError.length > 0"><small style="text-align: center;">{{
            userError.submitError }}</small></div>
    </form>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ref } from "vue";
import VueClientRecaptcha from 'vue-client-recaptcha';
import "@/assets/recaptchaStyle.css";
@Options({
    components: { VueClientRecaptcha },
    setup() {
        const inputValue = ref(null);
        return {
            inputValue,
        };
    },
})
export default class FormComponent extends Vue {
    inputSelector(selector: string) {
        return document.querySelector(selector);
    }
    userInput = { nomeUsuario: '', emailUsuario: '', mensagemUsuario: '', numeroUsuario: '' };
    input = {
        nomeUsuario: () => { return this.inputSelector('#nomeUsuario') },
        emailUsuario: () => { return this.inputSelector('#emailUsuario') },
        numeroUsuario: () => { return this.inputSelector('#numeroUsuario') },
        mensagemUsuario: () => { return this.inputSelector('#mensagemUsuario') }
    }
    userError = { nomeUsuario: '', numeroUsuario: '', emailUsuario: '', mensagemUsuario: '', submitError: '' };
    captchaObject = { captchaValue: '', captchaError: '', visibleCaptcha: false, captchFinalizado: false }
    modalObject = { visible: false, titleMessage: '', message: '' }
    formSubmitView = true;

    modalCloseEvent() {
        this.setModalView();
    }
    setModalView(titleMessage?: string, message?: string) {
        const eventClickOutside = (event: Event) => {
            const target = (event.target as HTMLElement);
            if (target.classList.contains('modalWrapper')) {
                this.setModalView();
            }
        }
        const modalElement = () => {
            const element = document.getElementById('modal');
            return element;
        };
        if (titleMessage !== undefined && message !== undefined) {
            this.modalObject.titleMessage = titleMessage;
            this.modalObject.message = message;

        }
        if (this.modalObject.visible) {
            document.removeEventListener('click', eventClickOutside);
            const element = modalElement();

            if (element == null)
                return;
            element.classList.remove('fade-in-top');
            element.classList.add('fade-out');
            setTimeout(() => {
                this.modalObject.visible = false;
            }, 500);

        } else {
            document.addEventListener('click', eventClickOutside);
            this.modalObject.visible = true;
            this.$nextTick(() => {
                const element = modalElement();
                if (element == null)
                    return;
                element.classList.remove('fade-out-top');
                element.classList.add('fade-in-top');
            })
        }
    }

    verificarNumeroUsuario() {
        const { userInput, userError } = this;


        let numeroUsuario = userInput.numeroUsuario;

        if (numeroUsuario.length > 14) {
            numeroUsuario = numeroUsuario.slice(0, -1);
        }
        if (numeroUsuario.length > 20) {
            userInput.numeroUsuario = '';
            return;
        }

        userInput.numeroUsuario, numeroUsuario = numeroUsuario.replace('-', '');
        userInput.numeroUsuario = numeroUsuario.replace(/[^0-9-()]/g, '');


        if (numeroUsuario[0] !== '(' && numeroUsuario.search(/[(]/g) == -1)
            userInput.numeroUsuario = '(' + numeroUsuario;
        if (numeroUsuario.length > 2 && numeroUsuario[3] !== ')' && numeroUsuario.search(/[)]/g) == -1) {
            let aux = numeroUsuario.slice(0, 3);
            userInput.numeroUsuario = numeroUsuario.slice(3);
            userInput.numeroUsuario = aux + ')' + userInput.numeroUsuario;
        }
        if (numeroUsuario.length > 4 && /[(]{1}[0-9]{2}[)]{1}/g.test(numeroUsuario) == false) {
            userInput.numeroUsuario = userInput.numeroUsuario.slice(0, 1);
        }
        if (numeroUsuario.length == 12) {
            let aux = numeroUsuario.slice(0, 8);
            numeroUsuario = numeroUsuario.slice(8);
            numeroUsuario = aux + '-' + numeroUsuario;
            userInput.numeroUsuario = numeroUsuario;
            if (/([(]\d{2}[)]\d{4}[-]\d{4})/g.test(userInput.numeroUsuario))
                userError.numeroUsuario = '';
            else {
                userError.numeroUsuario = 'O número de celular informado não é válido!';
                userInput.numeroUsuario = '';
            }
        }
        else if (numeroUsuario.length >= 13) {
            let aux = numeroUsuario.slice(0, 9);
            numeroUsuario = numeroUsuario.slice(9);
            numeroUsuario = aux + '-' + numeroUsuario;
            userInput.numeroUsuario = numeroUsuario;
            if (/([(]\d{2}[)]\d{5}[-]\d{4})/g.test(userInput.numeroUsuario)) {
                userError.numeroUsuario = '';
            }
            else {
                userError.numeroUsuario = 'O número de celular informado não é válido!';
                userInput.numeroUsuario = '';
            }
        }
    }

    verificarNumeroFocusOut() {
        if (this.userInput.numeroUsuario.length > 0) {
            if (/([(]\d{2}[)]\d{4}[-]\d{4})/g.test(this.userInput.numeroUsuario))
                this.userError.numeroUsuario = '';
            else if (/([(]\d{2}[)]\d{5}[-]\d{4})/g.test(this.userInput.numeroUsuario))
                this.userError.numeroUsuario = '';
            else
                this.userError.numeroUsuario = 'Número de celular inválido! Por favor, tente novamente!';

        }

    }
    checkValidCaptcha(value: boolean) {
        this.userError.submitError = '';
        if (value == true) {
            this.captchaObject.captchFinalizado = true;
            this.formSubmitView = true;
            this.captchaObject.visibleCaptcha = false;
            this.setModalView('Tudo certo ✅', 'Captcha respondido com sucesso, agora é só clicar em enviar a mensagem!');

        }

        else if (this.captchaObject.captchaValue.length >= 5 && value == false)
            this.captchaObject.captchaValue = this.captchaObject.captchaValue.replace(this.captchaObject.captchaValue[this.captchaObject.captchaValue.length - 1], '');

    }

    onSubmitFormContact() {
        this.verificarFinalizacao();
        if (this.captchaObject.captchFinalizado == false) {
            this.setModalView('Ops, esqueceu de responder o Captcha ❌', 'Responda o captcha e após isso clique novamente em enviar!');
            return;
        }

        this.submitRequest();
    }
    private submitRequest() {

        const xhr = new XMLHttpRequest();
        const modalView = this.setModalView;
        const userInput = { userInput: this.userInput, numeroUsuario: this.userInput.numeroUsuario };
        const redefinedSubmit = { captchaObject: this.captchaObject, formSubmitView: this.formSubmitView }

        const setInput = (listElements: { attribute: string, value: string }[], removeAtributes = false) => {
            const elements = Object.values(this.input);
            // eslint-disable-next-line
            elements.forEach((item: any) => {
                const result = (item() as HTMLElement);
                for (const n of listElements) {
                    if (removeAtributes)
                        result.removeAttribute(n.attribute);
                    else
                        result.setAttribute(n.attribute, n.value);

                }

            })

        }

        xhr.onloadstart = function () {
            setInput([{ attribute: "disabled", value: 'true' }, { attribute: "style", value: 'opacity:70%' }]);
        }
        xhr.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                setInput([{ attribute: "disabled", value: 'true' }, { attribute: "style", value: 'opacity:70%' }], true);
                alert('a');
                setInput([{ attribute: "disabled", value: 'true' }, { attribute: "style", value: 'opacity:70%' }]);
                modalView('Tudo certo, mensagem enviada com sucesso!', 'Entrarei em contato o mais breve possível, mediante as informações que você me passou! Obrigado e tenha um bom dia!');
                redefinedSubmit.captchaObject.visibleCaptcha = false;
                redefinedSubmit.formSubmitView = false;
                userInput.userInput.nomeUsuario = '';
                userInput.userInput.mensagemUsuario = '';
                userInput.userInput.emailUsuario = '';
                userInput.userInput.numeroUsuario = '';
            }
        }
        xhr.open('POST', 'https://eoi0vlixy77m7z9.m.pipedream.net');
        xhr.setRequestHeader("Content-Type", "application/json");
        const body = 'O cliente: ' + this.userInput.nomeUsuario + " entrou em contato!" + '<br/><br/> Seu e-mail:' + this.userInput.emailUsuario + '<br/><br/>Seu telefone: ' + this.userInput.numeroUsuario + '<br/><br/>E por fim, sua mensagem: ' + this.userInput.mensagemUsuario;
        xhr.send(JSON.stringify(JSON.stringify(body)));
    }
    private verificarCaracteres(input: string, min: number, max: number): string {
        if (input.length < min && input.length > 0)
            return 'O minímo de ' + input.length + ' / ' + min + ' caracteres';
        else if (input.length > max)
            return 'O máximo de ' + input.length + ' / ' + max + ' caracteres';
        else {
            return '';
        }
    }
    verificarNomeUsuario() {
        var userInput = this.userInput.nomeUsuario;

        if (userInput.length > 0 && !/^[A-Z ]$/.test(userInput[userInput.length - 1].toLocaleUpperCase())) {
            this.userInput.nomeUsuario = userInput.replace(userInput[userInput.length - 1], '')
            this.verificarNomeUsuario();
        }
        if (userInput.length > 50) {
            this.userInput.nomeUsuario = '';
        }
        this.userError.nomeUsuario = this.verificarCaracteres(userInput, 8, 25);
    }
    verificarEmailUsuario() {
        const emailUsuario = this.userInput.emailUsuario;
        this.userError.emailUsuario = this.verificarCaracteres(this.userInput.emailUsuario, 5, 50);
        if (emailUsuario.length >= 5 && emailUsuario.length <= 50) {
            const emailCheck = emailUsuario.search('@');
            if (emailCheck == -1) {
                this.userError.emailUsuario = 'O e-mail não é valido!';
            } else {
                if (emailUsuario.slice(emailCheck + 1, emailUsuario.length).length < 2) {
                    this.userError.emailUsuario = 'O e-mail não é valido!';

                }
            }
        }
        if (emailUsuario.length > 50) {
            this.userInput.emailUsuario = '';
        }
    }
    verificarMensagemUsuario() {
        this.userError.mensagemUsuario = this.verificarCaracteres(this.userInput.mensagemUsuario, 5, 150);

    }
    verificarFinalizacao() {
        this.userError.submitError
        // eslint-disable-next-line
        const { submitError: _, ...errorList } = this.userError;
        const userErrorValues = Object.values(errorList);
        // eslint-disable-next-line
        const { mensagemUsuario: __, numeroUsuario: ___, ...inputValues } = this.userInput;
        const userInputValues = Object.values(inputValues)
        const errorDispara = (titleMessage: string, message: string) => {
            this.modalObject.titleMessage = titleMessage
            this.modalObject.message = message
            this.setModalView();
        }

        for (let input of userInputValues) {
            if (input.length === 0) {
                this.captchaObject.visibleCaptcha = false;
                errorDispara('A campos com vazios ❌', 'Existem campos que são obrigatórios, e é preciso que você acesse-os e registre a informação necessária!');
                return;
            }
        }
        for (let input of userErrorValues) {
            if (input.length > 0) {
                this.captchaObject.visibleCaptcha = false;
                errorDispara('A campos com erros ❌', 'Verifique o campo que possui erro, e caso ele for opcional, você poderá simplessmente deletar os dados inválidos!')
                return;
            }
        }
        if (!this.captchaObject.captchFinalizado)
            this.captchaObject.visibleCaptcha = true;
    }
} 
</script>
<style scoped>
div.modalWrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

}

div.modal {
    background-color: #fdfffc8c;
    border: 2px solid var(--corBranco);
    width: 30%;

}

div.modal header {
    background-color: var(--corPreto);
    width: 100%;
    padding: 2%;
    color: var(--corBranco);
}

div.modal header h1 {
    font-weight: 300;
    font-size: 1.40vw;
}

div.modal footer {
    background-color: var(--corBranco);
    width: 100%;
    display: block;
    padding: 2% 10%;
}

div.modal footer>button {
    width: 100%;
    padding: 2%;
    font-size: 1.20vw;
    font-weight: 400;
    text-transform: uppercase;
    background-color: var(--corPreto);
    border: 1px solid black;
    color: var(--corBranco);
    border-radius: 10px;
    cursor: pointer;
}

div.modal main {
    background-color: var(--corBranco);
    text-align: center;
    padding: 2%;
    margin: 2%;
    user-select: none;
    cursor: text;
    font-weight: 900;
    font-size: 1vw;
}

form {
    background-color: var(--corVerde);
    border-end-start-radius: 0.5vw;
    padding: 2%;
    box-shadow: 0 0 5px var(--corVerde), 0 0 5px var(--corVerde), 0 0px 10px var(--corVerde);

}

form label {
    display: block;
    padding: 1% 3%;
}

form h1 {
    font-size: 1vw;
    padding: 2%;
    text-align: center;
    color: var(--corPreto);
}

form div.error {
    display: flex;
    align-items: center;
    font-size: 1vw;
    font-weight: 900;
    color: var(--corBranco);
    padding: 1%;
    background-color: var(--corVermelho);
}

form label p {
    font-size: 1vw;
    padding: 2% 0;
}

form label input {
    border: 0;
    outline: 0;
    border-radius: 0.2vw;
}

form input,
form textarea,
button {
    border: 0;
    outline: 0;
    padding: 2% 1%;
    resize: vertical;
    font-size: 1vw;
    width: 100%;
    font-weight: 400;
    font-family: 'IBM Plex Sans';
    transition: ease-in-out 0.2s;
}

form input:hover,
form textarea:hover {
    outline: 2px solid black;
}

form input:focus:hover,
form textarea:focus:hover {
    outline: 2px solid rgb(255, 255, 255);

}

form input:focus,
form textarea:focus {
    background-color: var(--corPreto);
    color: white;

}

input[type="submit"] {
    background-color: var(--corPreto);
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;
}

input[type="submit"]:hover {
    opacity: 90%;
}

form textarea {
    min-height: 4vw;
}

form div.captcha {
    padding: 2% 4%;
}

form div.captcha label {
    padding: 2% 4%;
}

@media (max-width:1500px) {
    div.modal header h1 {
        font-size: 22px;
    }

    div.modal footer>button {
        font-size: 22px;
    }

    div.modal main {
        font-size: 20px;
    }

    form h1 {
        font-size: 22px;

    }

    form div.error {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 900;
        color: var(--corBranco);
        padding: 1%;
        background-color: var(--corVermelho);
    }

    form label p {
        font-size: 20px;
        padding: 2% 0;
    }

    form input,
    form textarea,
    button {
        font-size: 20px;

    }
}

@media (max-width:1000px) {
    div.modal {
        width: 60%;

    }
}
</style>