<template>
    <div v-if="feedbackCopy.visible" class="copyfeedback flexColumn justify-content-center align-items-center">
        <i class="fa-solid fa-copy"></i>
        <h1>Copiado para a área de transferência</h1>
    </div>
    <section class="flexColumn align-items-center">
        <h1>Veja meus principais repositórios do GitHub.</h1>
        <div class="flexColumn justify-content-center align-items-center itemsWrapper">
            <div class="folder flexColumn " @click="setWindow">
                <i v-if="!windowVisible" class="fa-solid fa-folder"></i>
                <i v-if="windowVisible" class="fa-solid fa-folder-open"></i>
                <p>Portfólio</p>
            </div>

            <div v-if="windowVisible" class="window flexColumn">
                <div class="windowTop flexRow align-items-center">
                    <p class="flexRow align-items-center windowTitle">
                        <i class="fa-solid fa-folder-closed" style="color:var(--corAmarelo)"></i> Explorador de arquivos
                    </p>
                    <p class="flexRow align-items-center windowTitle">
                        <i @click="setWindow" class="fa-regular fa-window-minimize minimize"></i>
                        <i @click="setWindow" class="fa-regular fa-rectangle-xmark close"></i>
                    </p>
                </div>
                <div class="windowAdress flexRow align-items-center">
                    <p>C:\Portfólio\repositórios</p>
                    <label for="buscarRepo" class="flexRow align-items-center">
                        <i class="fa-solid fa-magnifying-glass flexRow align-items-center"></i>
                        <input type="text" name="buscarRepo" id="buscarRepo" @keyup="pesquisarRepositorios"
                            placeholder="Buscar repositório">
                    </label>
                </div>
                <div class="windowMain flexRow">
                    <div v-for="(item) in dataResponse" @click="setSubwindow(item)" :key="item.name"
                        class="repositorio flexColumn">
                        <div class="icon" v-html="item.icone"></div>
                        <div class="title">
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="subWindowObj.visible" id="elementWrapper" @click="setSubwindow(undefined, $event)"
                class="subwindow_wrapper flexRow align-items-center justify-content-center">
                <div class="subwindow">
                    <div class="windowTop flexRow align-items-center">
                        <p class="flexRow align-items-center windowTitle" v-html="subWindowObj.name">

                        </p>
                        <p class="flexRow align-items-center windowTitle">
                            <i id="minimize" class="fa-regular fa-window-minimize minimize"></i>
                            <i id="close" class="fa-regular fa-rectangle-xmark close"></i>
                        </p>
                    </div>
                    <div class="windowMain flexColumn">
                        <div class="flexRow align-items-center justify-content-center title">
                            <h1 class="w-50" v-html="subWindowObj.name"></h1>
                            <h1 class="w-50 icon" v-html="subWindowObj.icone">
                            </h1>
                        </div>
                        <p v-html="subWindowObj.description">

                        </p>
                        <div class="flexRow buttons_wrapper">
                            <a v-bind:href="subWindowObj.html_url" target="_blank" rel="noopener noreferrer"
                                class="w-50 flexRow align-items-center">Acessar repositório <i
                                    class="fa-brands fa-github"></i></a>
                            <a @click="copyText(subWindowObj.clone_url)" class="w-50 flexRow align-items-center">Copiar
                                web-url<i class="fa-regular fa-file-code"></i></a>
                            <input type="text" style="opacity: 0;" name="" id="clone_url"
                                v-bind:value="subWindowObj.clone_url">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({
    async mounted() {
        this.verificarIniciarRequest();
    },
})

export default class gitHubComp extends Vue {
    dataResponse: githubRepo[] = [];
    windowVisible = false;
    async verificarIniciarRequest() {
        const setTimer = () => {
            const timer = new Date();
            timer.setMinutes(timer.getMinutes() + 5);
            localStorage.setItem('tempoAtualizar', timer.getTime().toString())
        }, getTimer = () => {
            const localItem = localStorage.getItem('tempoAtualizar');
            if (localItem == null)
                return;
            const timer = new Date();
            timer.setTime(Number.parseInt((localItem)));
            return timer;
        }
        const timer = getTimer() !== null ? getTimer()?.getTime() : null;


        if (timer !== null && timer !== undefined && timer <= new Date().getTime())
            localStorage.clear();

        if (localStorage.getItem('repositorios') == null) {
            this.dataResponse = await githubRepo.requestGitHub(this.dataResponse);
            setTimer();
        } else {
            this.dataResponse = githubRepo.JSONToObject(localStorage.getItem('repositorios'));
        }

    }
    feedbackCopy = {
        visible: false,
        element: () => { return document.querySelector('div.copyfeedback') }
    };
    setFeedBackCopy() {
        const { feedbackCopy } = this;
        if (feedbackCopy.visible) {
            feedbackCopy.element()?.classList.remove('opacity100');
            setTimeout(() => {
                feedbackCopy.visible = false;
            }, 200);
        } else {

            feedbackCopy.visible = true;
            this.$nextTick(() => {
                feedbackCopy.element()?.classList.add('opacity100');
            })

        }
    }
    subWindowObj = {
        name: '',
        description: '',
        icone: '',
        visible: false,
        html_url: '',
        clone_url: '',
        parentElement: () => { return document.querySelector('div.subwindow_wrapper'); },
        element: () => { return document.querySelector('div.subwindow_wrapper div.subwindow') },

    };
    copyText(text: string) {
        this.setFeedBackCopy();
        try {
            navigator.clipboard.writeText(text);

        } catch (err) {
            try {
                const input = (document.querySelector('#clone_url') as HTMLInputElement);
                input.classList.remove('dNone');
                input.focus();
                input.select();
                if (!document.execCommand('copy')) return;
                input.classList.add('dNone');
            } catch (err) {
                return;
            }

        }
        setTimeout(() => {
            this.setFeedBackCopy();
        }, 500);
    }
    setSubwindow(item?: githubRepo, event?: Event) {
        const { subWindowObj } = this;
        if (subWindowObj.visible) {
            const targetId = event?.target !== null ? (event?.target as HTMLElement).id : null;
            if (targetId !== 'elementWrapper' && targetId !== 'minimize' && targetId !== 'close')
                return;
            subWindowObj.element()?.classList.remove('fade-in');
            subWindowObj.element()?.classList.add('fade-out');
            setTimeout(() => {
                subWindowObj.visible = false;
            }, 300)

        } else if (subWindowObj.visible == false && item !== undefined) {
            subWindowObj.visible = true;
            this.$nextTick(() => {
                subWindowObj.element()?.classList.remove('fade-out');
                subWindowObj.element()?.classList.add('fade-in');
                for (const subitem in item)
                    // eslint-disable-next-line             
                    (subWindowObj as any)[subitem] = ((item as any))[subitem]

            });

        }
    }
    setWindow() {
        if (this.windowVisible) {
            const windowElement = document.querySelector('section div.window');
            windowElement?.classList.remove('fade-in');
            windowElement?.classList.add('fade-out');
            setTimeout(() => {
                this.windowVisible = false;
            }, 350);
        } else {
            this.windowVisible = true;
            this.$nextTick(() => {
                const windowElement = document.querySelector('section div.window');

                windowElement?.classList.remove('fade-out');
                windowElement?.classList.add('fade-in');


            })

        }
    }
    pesquisarRepositorios(event: Event) {
        if (event.target == null) return;


        const element = event.target as HTMLInputElement;
        if (element.value.length == 0) {
            this.verificarIniciarRequest();

        } else {
            const buscar = element.value.toLowerCase();
            const resultado: githubRepo[] = [];

            this.dataResponse.forEach(item => {
                const valor = item.name.toLowerCase();
                if (valor.includes(buscar)) {
                    resultado.push(item);
                }
            });
            this.dataResponse = resultado;
        }



    }
}
class githubRepo {
    name!: string;
    description!: string;
    html_url!: string;
    language!: string;
    icone!: string;
    clone_url!: string;
    // eslint-disable-next-line
    public static JSONToObject(response: any): githubRepo[] {
        response = JSON.parse(response);
        const dataResponse: githubRepo[] = [];
        // eslint-disable-next-line
        response.forEach(function (item: any) {
            if (item.name == 'guzztavo2' || item.name == 'numerosPrimosJavaScript' || item.name == 'JogoPongJava')
                return;
            const result = new githubRepo(item.name, item.description, item.html_url, item.language, item.clone_url);
            dataResponse.push(result);
        })

        return dataResponse;
    }
    public static async requestGitHub(dataResponse: Array<githubRepo>): Promise<Array<githubRepo>> {
        await new Promise<void>((sucess, error) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    sucess(this.response);
                }
            }
            xhttp.onloadend = function () {
                if (this.status !== 200) {
                    error();
                }
            }
            xhttp.open('GET', 'https://api.github.com/users/guzztavo2/repos');
            xhttp.setRequestHeader('Authorization', 'Bearer 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')
            xhttp.send();
        }).then(success => {
            localStorage.setItem('repositorios', (success as unknown as string));
            dataResponse = this.JSONToObject(success);
        })

        return dataResponse;

    }

    constructor(name: string, description: string, html_url: string, language: string, clone_url: string) {
        this.name = name;
        this.description = description;
        this.html_url = html_url;
        this.language = language;
        this.clone_url = clone_url;
        language = language.toLowerCase();


        switch (language) {
            case 'typescript' || 'javascript':
                this.icone = '<i class="fa-brands fa-js" style="color:var(--corAmarelo)"></i>';
                break;
            case 'vue':
                this.icone = '<i class="fa-brands fa-vuejs" style="color:var(--corVerde)"></i>';
                break;
            case 'php':
                this.icone = '<i class="fa-brands fa-php" style="color:var(--corPreto)"></i>';
                break;
            case 'laravel':
                this.icone = '<i class="fa-brands fa-laravel" style="color:var(--corVermelho)"></i>';
                break;
        }
    }
}
</script>
<style scoped>
.dNone {
    display: none;
}

.opacity100 {
    opacity: 100% !important;
    transition: ease-in-out 0.2s;

}

div.copyfeedback {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99999;
    left: 0;
    top: 0;
    font-size: 15vw;
    opacity: 0;
    transition: ease-in-out 0.2s;
}

div.copyfeedback i {
    opacity: 100%;
    color: var(--corBranco);
    text-shadow: 0 0 10px var(--corPreto), 0 0 15px var(--corPreto), 0 0 5px var(--corPreto);
}

div.copyfeedback h1 {
    font-size: 1.2vw;
    background-color: var(--corBranco);
    text-transform: uppercase;
    color: var(--corPreto);
    border: 2px solid var(--corPreto);
    padding: 1%;
    margin-top: 1%;
    opacity: 70%;
}

div.subwindow div.windowMain p {
    max-height: 5vw;
    overflow-y: auto;
    margin: 2%;
    font-size: 1vw;
}

div.subwindow div.buttons_wrapper a {
    text-decoration: none;
    font-size: 1vw;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: calc(100% / 2 - 2%);
    margin: 0 1%;
    padding: 2%;
    font-weight: 900;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: ease-in-out 0.2s;
}

div.subwindow div.buttons_wrapper a:nth-of-type(1) {
    background-color: var(--corVermelho);
    border: 2px solid var(--corPreto);
    color: var(--corBranco);
}

div.subwindow div.buttons_wrapper a:nth-of-type(2) {
    background-color: var(--corPreto);
    border: 2px solid var(--corVerde);
    color: var(--corBranco);
    position: relative;
}


div.subwindow div.buttons_wrapper a:nth-of-type(2):hover::after {
    display: block;
}

div.subwindow div.buttons_wrapper a:hover {

    border: 2px solid var(--corAmarelo);
}

div.subwindow div.windowMain h1 {
    font-size: 1.25vw;
    text-align: center;
    padding: 0 2%;

}

div.subwindow div.windowMain h1.icon {
    font-size: 5vw;
    text-align: center;
}

div.subwindow div.windowTop p:nth-of-type(2) {
    width: 30%;
    justify-content: right;
}

div.subwindow div.windowTop {
    justify-content: space-between;

}

div.subwindow_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;

}

div.subwindow {
    max-width: 35%
}

div.windowMain div.repositorio div.title {
    word-wrap: break-word;
    font-size: 1vw;
}

div.windowMain div.repositorio::v-deep i {
    font-size: 4vw;
}

div.window p.windowTitle {
    justify-content: space-between;
    padding: 0 1%;
    width: 40%;
}

div.window p.windowTitle:nth-of-type(2) {
    justify-content: right;
    width: 60%;
    padding: 0 0%;
}

div.windowMain div.repositorio {
    padding: 2%;
    border: 1px solid white;
    text-align: center;
    margin: 2%;
    width: calc(100% / 4 - 4%);
    cursor: pointer;
}

div.repositorio>div:nth-child(2)>p:nth-child(1) {
    font-weight: 900;
    white-space: normal;
    padding: 2%;
}

div.windowMain div.repositorio:hover {
    background-color: rgba(59, 59, 255, 0.178);
}

div.windowMain div.repositorio i {
    font-size: 4vw;
}

div.windowMain {
    max-height: 80%;
    overflow-y: auto;
}

div.folder {
    position: absolute;
    left: 2%;
    top: 5%;
    cursor: pointer;
    padding: 1%;
}

div.folder:hover {
    background-color: rgba(0, 0, 255, 0.137);
}

div.folder i {
    font-size: 5vw;
    color: var(--corAmarelo);
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 4px black, 0 0 2px black;
}

div.folder p {
    font-size: 1vw;
    text-align: center;
    font-weight: 900;
}

div.window div.windowAdress input {
    height: 100%;
    width: 80%;
    padding: 2% 1%;
    outline: 0;
    font-size: 0.8vw;
}

div.window div.windowAdress input:focus {
    border: 1px solid black;
}

div.window div.windowAdress label {
    padding: 1%;
    width: 60%;
    justify-content: right;
}

div.windowAdress label i {
    font-size: 1vw;
    margin: 0 2%;
    height: 100%;
}

div.window div.windowAdress {
    border-bottom: 1px solid rgba(0, 0, 0, 0.486);
    padding: 0.2% 1%;

}

div.window div.windowAdress p {
    word-spacing: 50px;
    width: 40%;
    padding: 1% 2%;
    border: 0.1vw solid rgba(0, 0, 0, 0.37);
    text-align: left;
    cursor: default;
    user-select: none;
    font-size: 0.9vw;
}

div.window div.windowTop i.minimize:hover,
div.subwindow div.windowTop i.minimize:hover {
    background-color: rgb(201, 201, 201);
}

div.window div.windowTop i.close:hover,
div.subwindow div.windowTop i.close:hover {
    color: var(--corVermelho);
}

div.window,
div.subwindow {
    background-color: var(--corBranco);
    width: 100%;
    box-shadow: 0 0 8px black, 0 0 4px black, 0 0 1px black;
    padding: 0.2%;
}

div.window div.windowTop,
div.subwindow div.windowTop {
    border-bottom: 0.1vw solid rgba(0, 0, 0, 0.541);
    width: 100%;
    padding: 1%;
    font-size: 1vw;
}

div.window div.windowTop i,
div.subwindow div.windowTop i {
    font-size: 1.9vw;
    padding: 1% 3%;
    cursor: pointer;
}

section {
    width: 100%;
    height: 100%;
    padding: 2%;
    margin-top: 5%;
    border: 1px solid var(--corBranco);
    box-shadow: 0 0 5px var(--corBranco), 0 0 2px var(--corBranco), 0 0 2px var(--corBranco);
}

section>h1 {
    text-align: center;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
    font-size: 1.2vw;
    padding: 1%;
    color: var(--corBranco);
}

section>h1:hover::after {
    display: block;
    opacity: 100%;
    text-transform: none;
}

section>h1::after {
    content: "Se você ainda não está familiarizado, o GitHub é uma plataforma excepcional que permite armazenar e compartilhar seus códigos e outros arquivos vitais. Além disso, o GitHub oferece recursos poderosos de controle de versão, permitindo que você mantenha várias versões dos seus projetos em um único repositório.";

    display: none;
    background-color: var(--corVermelho);
    border: 2px solid var(--corBranco);
    padding: 2%;
    position: absolute;
    top: 100%;
    left: 50%;
    opacity: 0%;
    font-size: 0.9vw;
    transform: translateX(-50%);
    transition: ease-in-out 2s;
    z-index: 99;
}

section div.itemsWrapper {
    background-image: url('@/assets/Imagens/wallpaperXP.jpg');
    background-position: 0, 0;
    background-size: cover;
    height: 40vw;
    width: 100%;
    padding: 2% 25%;
    position: relative;
}

@media (max-width:1500px) {
    div.copyfeedback {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 99999;
        left: 0;
        top: 0;
        font-size: 90px;
        opacity: 0;
        transition: ease-in-out 0.2s;
    }

    div.copyfeedback h1 {
        font-size: 20px;

    }



    section>h1[data-v-2075db6d]::after {
        font-size: 20px;

    }

    section>h1 {

        font-size: 25px;

    }

    section div.itemsWrapper {
        height: 100%;
        padding: 9%;
        min-height: 700px
    }

    div.window p.windowTitle:nth-of-type(2) {
        width: calc(100% - 33%);
    }

    div.window p.windowTitle {
        justify-content: space-between;
        padding: 0 1%;
        width: 33%;
        font-size: 19px;

    }

    div.window div.windowTop i {
        font-size: 30px;
    }

    div.windowMain div.repositorio::v-deep i {
        font-size: 60px;
    }

    div.folder p {
        font-size: 16px;
    }

    div.folder i {
        font-size: 65px;
    }

    div.window {
        position: relative;
        left: 10%;
    }

    div.windowAdress label i {
        font-size: 20px;
    }

    div.window div.windowAdress p,
    div.window div.windowAdress input {
        font-size: 16px;
    }

    div.repositorio>div:nth-child(2)>p {
        font-size: 20px;
    }

    div.subwindow div.windowTop {
        font-size: 22px;
        text-transform: uppercase;
    }

    div.subwindow div.windowTop i[data-v-2075db6d] {
        font-size: 35px;
    }

    div.subwindow div.windowMain h1:nth-of-type(1) {
        font-size: 20px;
    }

    div.subwindow div.windowMain h1:nth-of-type(2) {
        font-size: 80px;
    }

    div.subwindow div.windowMain p {
        font-size: 18px;
        max-height: 300px;
    }

    div.subwindow div.buttons_wrapper a {
        font-size: 20px;
    }
}

@media (max-width:1322px) {
    div.window p.windowTitle:nth-of-type(1) {
        white-space: nowrap;
        flex-wrap: nowrap;
        width: 50%;
        justify-content: left;
    }

    div.window p.windowTitle:nth-of-type(2) {
        width: 50%;
    }

    div.subwindow {
        max-width: 50%;
    }
}

@media(max-width:673px) {
    div.window div.windowAdress p {
        white-space: nowrap;
        min-width: 40%;
        max-width: 40%;
        overflow-x: auto;
    }

    div.subwindow {
        max-width: 80%;
    }
}

@media(max-width:550px) {
    div.window {
        background-color: var(--corBranco);
        width: 120%;
        height: 550px;
        box-shadow: 0 0 8px black, 0 0 4px black, 0 0 1px black;
        padding: 0.2%;
        left: 0;
    }

    div.subwindow {
        max-width: 99%;
    }
}

@media(max-width: 436px) {
    div.windowMain div.repositorio {
        padding: 2%;
        border: 1px solid white;
        text-align: center;
        margin: 2%;
        width: calc(100% / 2 - 4%);
        cursor: pointer;
    }
}

.fade-out {
    -webkit-animation: fade-out-br 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: fade-out-br 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.fade-in {
    -webkit-animation: fade-in-br 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-br 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}


/* ----------------------------------------------
 * Generated by Animista on 2023-5-11 13:26:39
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-out-br
 * ----------------------------------------
 */
@-webkit-keyframes fade-out-br {
    0% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(50px) translateY(50px);
        transform: translateX(50px) translateY(50px);
        opacity: 0;
    }
}

@keyframes fade-out-br {
    0% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(50px) translateY(50px);
        transform: translateX(50px) translateY(50px);
        opacity: 0;
    }
}

@-webkit-keyframes fade-in-br {
    0% {
        -webkit-transform: translateX(50px) translateY(50px);
        transform: translateX(50px) translateY(50px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
    }
}

@keyframes fade-in-br {
    0% {
        -webkit-transform: translateX(50px) translateY(50px);
        transform: translateX(50px) translateY(50px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
        opacity: 1;
    }
}
</style>