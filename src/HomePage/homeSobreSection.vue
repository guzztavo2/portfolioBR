<template>
    <section class="sobre flexColumn">
        <h1 class="title">Sobre-mim</h1>
        <h1 class="tag">&lt;About-me&gt;</h1>
        <h1 class="tag">&lt;/About-me&gt;</h1>
        <div class="textWrapper flexRow">
            <div class="w-50 flexColumn align-items-center fade-in-top">
                <img src="@/assets/Imagens/profissional.png" class="fade-in-top img__wrapperUser" alt="">
                <h1 class="boxVerde fade-in-top" style="margin-top:20px;">
                </h1>
                <h4 class="boxVermelho fade-in-top">
                </h4>
                <h4 class="boxVerde fade-in-top">
                </h4>
                <h4 class="boxVerde fade-in-top">

                </h4>
            </div>
            <div class="w-50 fade-in-top">
                <p class="boxVerde fade-in-top">
                </p>
                <div class="flexRow __formacoes boxVermelho fade-in-top">
                    <img src="@/assets/Imagens/educacao-1.png" class="fade-in-top" alt="">
                    <h4>Curso Técnico: Informática para Internet. <br>Escola Estadual: ETEC Laurindo Alves de Queiroz, 2016
                        - 2017</h4>
                    <p>
                    </p>
                </div>

                <div class="flexRow __formacoes boxVermelho fade-in-top">
                    <img src="@/assets/Imagens/educacao-2.png" class="fade-in-top" alt="">
                    <h4>Curso Superior: Tec. em Análise em Desenvolvimento de Sistemas. Instuto
                        Federal de Ciências e Tecnologia: Barretos - SP, 2018 - 2021</h4>
                    <p>
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        escreverTexto: {
            type: Function,
            required: true
        }
    },
    mounted() {
        this.escreverTextoHandle = this.escreverTexto;
        this.writeEvent();
    }
})
// this.$props.escreverTextoHandle(elementsValues[cont].element, elementsValues[cont].value, false, true).then(() => {
// element:HTMLElement, texto:string, removerCursor:boolean,
export default class sectionSobre extends Vue {
    // eslint-disable-next-line
    escreverTextoHandle: any;
    animateFinaly = false;

    writeEvent() {

        const itemsAndEvents: { 'domElement': HTMLElement, 'texto': string }[] = [
            { domElement: (document.querySelector('h1.boxVerde') as HTMLElement), texto: 'Olá, eu sou o Gustavo, programador e desenvolvedor FullStack.' },
            { domElement: (document.querySelector('div.w-50:nth-child(2) > p:nth-child(1)') as HTMLElement), texto: "Nasci em Miguelópolis, uma cidade do interior de São Paulo, e tenho 23 anos. Desde muito jovem, sempre me interessei por tecnologia. Para que você possa me conhecer um pouco melhor, gostaria de começar apresentando minhas formações: " },
            { domElement: (document.querySelector('div.__formacoes:nth-child(2) > p:nth-child(3)') as HTMLElement), texto: " Com um ano e meio de estudo, pude ter minha primeira experiência com tecnologia e meu TCC foi desenvolvido utilizando o Adobe Flash. Criei uma aplicação que servia como um mapa da escola, já que o campus era combinado com uma área de estudos agrícolas. Optei por utilizar o software da Adobe porque era capaz de funcionar em diversos dispositivos disponíveis na época." },
            { domElement: (document.querySelector('div.flexRow:nth-child(3) > p:nth-child(3)') as HTMLElement), texto: "Iniciei minha graduação em uma cidade vizinha chamada Barretos, também no estado de São Paulo, quando tinha 18 anos. Como morava em uma cidade do interior, precisava viajar diariamente para frequentar as aulas. Devido à pandemia, meu TCC foi uma experiência única, na qual utilizei duas inteligências artificiais da época que foram treinadas e testadas para uso como um possível teste de Covid-19, utilizando apenas uma foto do tórax em raio-X do paciente." },
            { domElement: (document.querySelector('div.w-50:nth-child(1) > h4:nth-child(3):not(b)') as HTMLElement), texto: '"O sucesso é a soma de pequenos esforços repetidos dia após dia" - Robert Collier' },
            { domElement: (document.querySelector('div.w-50:nth-child(1) > h4.boxVerde:nth-of-type(2)') as HTMLElement), texto: "Durante os meus 19 anos, enquanto concluía a minha graduação, trabalhei em uma empresa de açúcar e energia, embora esse trabalho não estivesse relacionado à área de Tecnologia. Permaneci na empresa até novembro de 2022, e graças a esse trabalho, tive a oportunidade de montar um setup para trabalhar em casa, com um novo computador e um notebook para trabalhar em mobilidade, caso seja necessário." },
            { domElement: (document.querySelector('div.w-50:nth-child(1) > h4.boxVerde:nth-of-type(3)') as HTMLElement), texto: "  Depois de me formar, fiz cursos de programação à distância, nos quais aprendi a trabalhar comtecnologias Front-End, incluindo HTML5, CSS3, JavaScript, VueJS, AngularJS e várias outras tecnologias. Depois de me aprofundar e estudar Front-End, comecei a estudar Back-End, e procurei me especializar emuma linguagem conhecida, optando por PHP, Laravel, Node, entre outras." },

        ];
        itemsAndEvents.forEach((element) => {
            element.domElement.classList.add('dNone');
        })
        var cont = 0;
        const escreverTexto = (element: HTMLElement, texto: string, tempoCarregamento: number) => {
            element.classList.remove('dNone');
            return this.escreverTextoHandle(element, texto, true, false, tempoCarregamento);

        }

        this.animateFinaly = true;
        while (cont < itemsAndEvents.length) {
            escreverTexto(itemsAndEvents[cont].domElement, itemsAndEvents[cont].texto, 15).then();
            cont++;
        }


    }
}




</script>

<style scoped>
.dNone {
    display: none;
}

section.sobre {
    width: 100%;
    position: relative;
    padding: 8% 0;
}

section.sobre h1.title {
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
    top: 5%;
    right: 0;
}

h1 {
    font-size: 1.5vw;
}

div.w-50:nth-child(2)>p:nth-child(1) {
    font-size: 1vw;

    line-height: 150%;

    padding: 2%;
    font-weight: 600;
}

.boxVerde {
    background-color: var(--corVerde);
    box-shadow: 0px 0px 0.2vw var(--corVerde), 0px 0px 0.2vw var(--corVerde), 0px 0px 0.4vw var(--corVerde);
    border: 2px solid var(--corBranco);
    color: var(--corBranco);
    text-shadow: 0px 0px 0.1vw black, 0px 0px 0.1vw black, 0px 0px 0.1vw black;
}

.boxVermelho {
    background-color: var(--corVermelho);
    box-shadow: 0px 0px 0.2vw var(--corVermelho), 0px 0px 0.2vw var(--corVermelho), 0px 0px 0.4vw var(--corVermelho);
    border: 2px solid var(--corBranco);
    text-shadow: 0px 0px 0.1vw black, 0px 0px 0.1vw black, 0px 0px 0.1vw black;
    color: white;
}

div.__formacoes {
    margin: 2% 0;
    padding: 1%;
    color: var(--corBranco);
}

div.__formacoes img {
    width: auto;
    max-height: 4vw;
    border-radius: 5px;
    object-fit: contain;
    margin-right: 1%;
    /* object-position:0 5%; */
    border: 0.2vw solid var(--corPreto);

}

div.__formacoes h4 {
    width: 80%;
    text-shadow: 0px 0px 0.1vw var(--corPreto), 0px 0px 0.1vw var(--corPreto), 0px 0px 0.4vw var(--corPreto);

}

div.__formacoes p,
h4 {
    font-size: 1vw;
}

div.__formacoes p {
    padding: 1% 4%;
    font-weight: 400;
    margin: 1% 2%;
    text-align: right;
}

div.w-50:nth-child(1)>h4 {
    z-index: 3;
    position: relative;
    padding: 2%;
    font-weight: 900;
    line-height: 150%;
    margin: 2% 0;
}

div.w-50:nth-child(1)>h1:nth-child(2) {
    font-weight: 300;
    text-align: center;
    max-width: 80%;
    padding: 1%;
    user-select: none;
    text-transform: uppercase;

}

div.w-50:nth-child(1)>h4:nth-child(3) {
    margin-top: 1vw;
    padding: 2%;
    font-size: 1.20vw;
    text-align: center;
}

div.w-50:nth-child(1)>h4:nth-child(3) b {
    font-weight: 300;
}



h1.tag:nth-child(3) {
    bottom: 0;
    right: 0;
}



div.textWrapper div {
    padding: 1% 1%;
}





section.sobre img.img__wrapperUser {
    background-color: var(--corBranco);
    box-shadow: 0px 0px 0.5vw var(--corBranco), 0px 0px 0.2vw var(--corBranco), 0px 0px 0.5vw var(--corBranco);
    width: 50%;
    height: 100%;
    max-height: 500px;
    object-fit: fill;
}


@media (max-width:1500px) {

    div.flexRow.__formacoes {
        margin: 20px 0;

    }

    div.w-50:nth-child(2)>p:nth-child(1) {
        font-size: 20px;
        line-height: 150%;
        padding: 2%;
        font-weight: 600;
    }

    section.sobre h1.title {
        font-size: 70px;
    }

    h1.tag {
        font-size: 40px;
    }

    div.w-50:nth-child(1)>h4:nth-child(3) {
        font-size: 20px;
    }

    h1 {
        font-size: 22px;
    }

    div.__formacoes img {
        width: 15%;
        max-height: unset;
        height: 100px;
        object-fit: contain;
        border: 0.2vw solid var(--corPreto);
        background-color: var(--corAmarelo);
        color: var(--corBranco);
    }

    div.__formacoes h4,
    p {
        font-size: 22px;
    }

    div.__formacoes p,
    h4 {
        font-size: 20px;
    }

    div.w-50:nth-child(2)>p:nth-child(1) {
        padding: 2%;
        text-align: center;
    }

    div.__formacoes h4 {
        max-width: 80%;
        text-align: right;
    }

    .boxVerde {
        background-color: var(--corVerde);
        box-shadow: 0px 0px 15px var(--corVerde), 0px 0px 10px var(--corVerde), 0px 0px 4px var(--corVerde);
        border: 2px solid var(--corBranco);
        color: var(--corBranco);
        text-shadow: 0px 0px 4px black, 0px 0px 2px black, 0px 0px 2px black;
    }

    .boxVermelho {
        background-color: var(--corVermelho);
        box-shadow: 0px 0px 15px var(--corVermelho), 0px 0px 10px var(--corVermelho), 0px 0px 4px var(--corVermelho);
        border: 2px solid var(--corBranco);
        text-shadow: 0px 0px 4px black, 0px 0px 2px black, 0px 0px 2px black;
        color: white;
    }

    section.sobre h1.title {
        padding: 1%;
        font-size: 70px;
        text-shadow: 0px 0px 3px var(--corAmarelo), 0px 0px 5px var(--corAmarelo), 0px 0px 4px var(--corAmarelo);
    }

    h1.tag {
        font-size: 40px;
        font-weight: 300;
        text-shadow: 0px 0px 2px var(--corBranco), 0px 0px 2px var(--corBranco), 0px 0px 5px var(--corBranco);
        position: absolute;
    }
}

@media(max-width:1350px) {
    section.sobre img.img__wrapperUser {
        width: 100%;
    }
}

@media(max-width:800px) {
    div.textWrapper div.w-50 {
        width: 100%;
    }

    section.sobre img.img__wrapperUser {
        object-fit: contain;
    }
}

@media(max-width:600px) {
    section.sobre {
        width: 100%;
        position: relative;
        padding-top: 20%;

        /* padding: 20% 0; */
    }
}
</style>