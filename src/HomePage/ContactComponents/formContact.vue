<template>
    <form method="post" @submit.prevent="onSubmitFormContact">
        <h1 class="titleForm">Por favor, complete o formulário e envie-o, dessa maneira ele será direcionado diretamente a
            mim. Farei o possível para estabelecer uma comunicação o mais breve possível.</h1>
        <label for="nomeUsuario">
            <p>Nome completo:</p>
            <input v-model="userInput.nomeUsuario" @focusout="verificarFinalizacao" @keyup="verificarNomeUsuario"
                type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Digite aqui seu nome *">
            <div v-if="userError.nomeUsuario.length > 0" class="error"><small v-html="userError.nomeUsuario"></small></div>
        </label>
        <label for="emailUsuario">
            <p>Digite seu e-mail para a comunicação:</p>
            <input v-model="userInput.emailUsuario" @focusout="verificarFinalizacao" @keyup="verificarEmailUsuario"
                type="email" name="emailUsuario" id="emailUsuario" placeholder="Digite aqui seu email *">
            <div v-if="userError.emailUsuario.length > 0" class="error"><small v-html="userError.emailUsuario"></small>
            </div>
        </label>
        <label for="numeroUsuario">
            <p>Digite seu WhatssApp (Opcional):</p>
            <input v-model="numeroUsuario" @keyup="verificarNumeroUsuario" type="text" name="numeroUsuario"
                id="numeroUsuario" placeholder="Digite aqui seu número *">
            <div v-if="userError.numeroUsuario.length > 0" class="error"><small v-html="userError.numeroUsuario"></small>
            </div>

        </label>
        <label for="mensagemUsuario">
            <p>Digite uma mensagem para ser enviada:</p>
            <textarea v-model="userInput.mensagemUsuario" @focusout="verificarFinalizacao" @keyup="verificarMensagemUsuario"
                name="mensagemUsuario" id="mensagemUsuario" placeholder="Digite o motivo de sua mensagem *" cols="30"
                rows="5"></textarea>
            <div v-if="userError.mensagemUsuario.length > 0" class="error"><small
                    v-html="userError.mensagemUsuario"></small></div>

        </label>
        <div v-if="visibleCaptcha == true" class="captcha">
            <VueClientRecaptcha :value="captchaValue" :show-capital-case-letters="false" :show-lower-case-letters="false"
                @isValid="checkValidCaptcha" />
            <label for="">
                <input type="text" placeholder="Escreva o captcha acima**" v-model="captchaValue" />
                <p style="text-align: center;">Por favor, responda ao captcha para prosseguir!</p>

                <div class="error"><small style="text-align: center;" :v-html="captchaError">Lembre-se: é importante usar
                        letras maiúsculas e
                        minúsculas corretamente.</small></div>
            </label>
        </div>
        <!-- formSubmitView -->
        <input type="submit" value="Acessar">
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
    mounted() {
        //this.verificarFinalizacao();
    }
})

export default class FormComponent extends Vue {
    userInput = { nomeUsuario: '', emailUsuario: '', mensagemUsuario: '' };
    userError = { nomeUsuario: '', numeroUsuario: '', emailUsuario: '', mensagemUsuario: '' };

    numeroUsuario = '';
    captchaValue = '';
    captchaError = '';
    // formSubmitView = true;
    visibleCaptcha = true;

    verificarNumeroUsuario(event: Event | any) {
        // (16)9459-3260
        if (this.numeroUsuario.length >= 15) {
            this.numeroUsuario = this.numeroUsuario.replace(this.numeroUsuario[this.numeroUsuario.length - 1], '')
        }

        for (let item of this.numeroUsuario) {
            if (!/^[0-9()-]$/.test(item)) {
                this.numeroUsuario = this.numeroUsuario.replace(item, '');
            }
        }

        if (this.numeroUsuario.length - 1 == 0 && this.numeroUsuario[0] !== '(')
            this.numeroUsuario = '(' + this.numeroUsuario;

        if (this.numeroUsuario.length - 1 == 2 && this.numeroUsuario[2] !== ')') {
            this.numeroUsuario += ')';
        }
        if (this.numeroUsuario.length >= 12) {
            // alert('a');
            this.numeroUsuario = this.numeroUsuario.replace('-', '');
            const aux = this.numeroUsuario.substring(0, 8);
            this.numeroUsuario = aux + '-' + this.numeroUsuario.substring(8, this.numeroUsuario.length);
        }
        if (this.numeroUsuario.length >= 14) {
            this.numeroUsuario = this.numeroUsuario.replace('-', '');
            const aux = this.numeroUsuario.substring(0, 9);
            this.numeroUsuario = aux + '-' + this.numeroUsuario.substring(9, this.numeroUsuario.length);
        }
        if ((this.numeroUsuario.length == 1 || this.numeroUsuario.length == 4 || this.numeroUsuario.length == 12)
            && (event.key == 'Backspace' || event.key == 'Delete'))
            this.numeroUsuario = this.numeroUsuario.substring(0, this.numeroUsuario.length - 2);



    }

    checkValidCaptcha(value: any) {
        if (value == true) {
            // alert('acêrto Mizerâve!');
        }
        else if (this.captchaValue.length >= 5 && value == false) {
            this.captchaValue = this.captchaValue.replace(this.captchaValue[this.captchaValue.length - 1], '');
        }
    }

    onSubmitFormContact() {

        alert('a');
    }
    private verificarCaracteres(input: string, min: number, max: number): string {
        if (input.length < min && input.length > 0)
            return 'O minímo de ' + min + ' caracteres / ' + input.length + ' caracteres';
        else if (input.length > max)
            return 'O máximo de ' + max + ' caracteres / ' + input.length + ' caracteres';
        else {
            return '';
        }
    }
    verificarNomeUsuario() {
        var userInput = this.userInput.nomeUsuario;

        if (userInput.length > 0 && !/^[A-Z]$/.test(userInput[userInput.length - 1].toLocaleUpperCase())) {
            this.userInput.nomeUsuario = userInput.replace(userInput[userInput.length - 1], '')
            this.verificarNomeUsuario();
        }

        this.userError.nomeUsuario = this.verificarCaracteres(userInput, 8, 25);
    }
    verificarEmailUsuario() {
        const emailUsuario = this.userInput.emailUsuario;
        this.userError.emailUsuario = this.verificarCaracteres(this.userInput.emailUsuario, 5, 30);
        if (emailUsuario.length >= 5 && emailUsuario.length <= 30) {
            const emailCheck = emailUsuario.search('@');
            if (emailCheck == -1) {
                this.userError.emailUsuario = 'O e-mail não é valido!';
            } else {
                if (emailUsuario.slice(emailCheck + 1, emailUsuario.length).length < 2) {
                    this.userError.emailUsuario = 'O e-mail não é valido!';

                }
            }
        }
    }
    verificarMensagemUsuario() {
        this.userError.mensagemUsuario = this.verificarCaracteres(this.userInput.mensagemUsuario, 5, 150);

    }
    verificarFinalizacao() {
        const userErrorValues = Object.values(this.userError);
        const userInputValues = Object.values(this.userInput);

        for (let input of userInputValues) {
            if (input.length === 0) {
                this.visibleCaptcha = false;
                return;
            }
        }

        for (let input of userErrorValues) {
            if (input.length > 0) {
                this.visibleCaptcha = false;
                return;
            }
        }

        this.visibleCaptcha = true;
    }


}


</script>
<style scoped>
form {
    background-color: var(--corVerde);
    border-end-start-radius: 0.5vw;
    padding: 2%;
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
form textarea {
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
    outline: 1px solid black;
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
}</style>