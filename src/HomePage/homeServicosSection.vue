<template>
    <section id="services" class="servicos ">
        <div class="container">
            <h1 class="title">
                SERVIÇOS
            </h1>
            <h1 class="tag">&lt;services&gt;</h1>
            <h1 class="tag">&lt;/services&gt;</h1>
            <div class="textWrapper flexRow ">
                <h1 class="w-50 flexColumn align-items-center">
                    <span class="icon"><i class="fa-solid fa-cube"></i></span>
                    <span class="title">Desenvolvimento Front-End</span>
                    Como um profissional de desenvolvimento front-end, é minha responsabilidade criar a interface do usuário
                    de
                    um projeto de software. A interface do usuário é tudo o que é visível e interativo para o usuário final.
                    Meu
                    objetivo é garantir que a aparência e a funcionalidade do aplicativo ou website sejam atraentes,
                    intuitivas
                    e fáceis de usar, incluindo a responsividade, que permite que o website seja acessível em qualquer
                    dispositivo escolhido pelo cliente.

                    Para desenvolver interfaces de usuário eficazes, utilizo tecnologias como HTML5, CSS, JavaScript e
                    frameworks como o VueJS.
                </h1>
                <h1 class="w-50 flexColumn align-items-center">
                    <span class="icon"><i class="fa-brands fa-perbyte"></i></span>
                    <span class="title">Desenvolvimento Back-End</span>
                    Como um profissional de desenvolvimento back-end, minha responsabilidade é garantir que os recursos e a
                    lógica de um projeto de software estejam funcionando corretamente por trás da interface do usuário.
                    Trabalho com tecnologias como PHP, MySQL, SQL, Asp.Net e Laravel para desenvolver soluções escaláveis e
                    confiáveis que atendam às necessidades dos usuários finais.


                </h1>
            </div>
            <h1 class="servicoComponent">Aqui estão algumas das tecnologias em que sou proficiente:</h1>
        </div>
        <servicoComponent></servicoComponent>
        <gitHubComp></gitHubComp>
    </section>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import servicoComponent from './ServicosComponents/servicoComponent.vue';
import gitHubComp from './ServicosComponents/githubComponent.vue';
@Options({
    components: {
        servicoComponent, gitHubComp
    },
})
export default class sectionServicos extends Vue {

}
</script>
<style scoped>
section.servicos {
    width: 100%;
    position: relative;
    padding: 4% 0;
}

div.textWrapper {
    margin: 3% 0;
    border-radius: 5px;

}

.w-50 {
    width: calc(50% - 2%);
}

div.textWrapper h1 {
    font-weight: 300;
    color: white;
    font-size: 1.10vw;
    padding: 1% 3%;
    margin: 2% 2% 0 0;
    word-wrap: break-word;
    background-color: #e71d3585;
    box-shadow: 0px 0px 10px #e71d3585, 0px 0px 10px #e71d3585;
}

div.textWrapper h1:nth-of-type(2) {
    background-color: #2ec4b59f;
    box-shadow: 0px 0px 10px #2ec4b59f, 0px 0px 10px #2ec4b59f;

}

h1.servicoComponent {
    padding: 4% 2%;
    color: white;
    font-weight: 900;
    text-transform: uppercase;
}

h1.servicoComponent:hover::after {
    width: 100%;
}

h1.servicoComponent::after {
    content: "";
    display: block;
    margin-top: 2%;
    background-color: white;
    width: 2%;
    height: 0.2vw;
    transition: ease-in-out 0.5s;
}

div.textWrapper h1 span.icon {
    text-align: center;
    padding: 2%;
    width: 80%;
    display: block;
    font-size: 10vw;
    text-shadow: 0px 0px 10px black, 0px 0px 10px black;
}

div.textWrapper h1 span.title {

    font-weight: 600;
    text-transform: uppercase;
    font-size: 2vw;
    text-align: center;
    margin: 1% 0;
    width: 100%;
    text-shadow: 0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black;

}

section.servicos h1.title {
    padding: 1%;
    font-size: 4vw;
    font-weight: 300;
    display: block;
    text-align: center;
    height: auto;
    color: var(--corAmarelo);
    width: 100%;
    text-transform: uppercase;
    text-shadow: 0px 0px 0.1vw var(--corAmarelo), 0px 0px 0.2vw var(--corAmarelo), 0px 0px 0.3vw var(--corAmarelo);
}

h1.tag {
    font-size: 3vw;
    text-transform: lowercase;
    font-weight: 300;
    color: var(--corBranco);
    opacity: 25%;
    text-shadow: 0px 0px 0.1vw var(--corBranco), 0px 0px 0.2vw var(--corBranco), 0px 0px 0.5vw var(--corBranco);
    position: absolute;
}

h1.tag:nth-child(2) {
    top: 1%;
    right: 2%;
}

h1.tag:nth-child(3) {
    bottom: 0;
    right: 0;
}

h1.button {
    margin-top: 4%;

}

h1.button a {
    width: 80%;
    background-color: #2ec4b593;

    text-align: center;
    text-decoration: none;
    color: var(--corAmarelo);
    text-transform: uppercase;
    text-shadow: 0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black;
    font-weight: 900;
    padding: 2%;
    z-index: 5;
    transition: ease-in-out 0.2s;
    border-radius: 2px;
    outline: 4px solid white;
    font-size: 1.4vw;
}

h1.button a:hover {
    background-color: var(--corVermelho);
}

@media (max-width:1500px) {
    h1.button a {
        font-size: 20px;
    }

    div.textWrapper h1 {
        font-weight: 300;
        color: white;
        font-size: 25px;
    }

    div.textWrapper h1 span.title {

        font-size: 35px;

    }

    div.textWrapper h1 span.icon {
        width: 100%;
        font-size: 130px;
    }

    section.servicos h1.title {
        padding: 1%;
        font-size: 60px;
        text-shadow: 0px 0px 3px var(--corAmarelo), 0px 0px 5px var(--corAmarelo), 0px 0px 4px var(--corAmarelo);
    }

    h1.tag {
        font-size: 40px;
        font-weight: 300;
        text-shadow: 0px 0px 2px var(--corBranco), 0px 0px 2px var(--corBranco), 0px 0px 5px var(--corBranco);
        position: absolute;
    }
}

@media (max-width:700px) {
    .w-50 {
        width: calc(100%);
        margin-top: 4%;
    }
}

@media(max-width:600px) {
    section.servicos {
        width: 100%;
        position: relative;
        padding-top: 20%;
        padding-bottom: 12%;
        /* padding: 20% 0; */
    }
}
</style>