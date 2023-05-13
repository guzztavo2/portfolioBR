<template>
    <section id="contact">
        <div class="container">

            <h1 class="title">
                CONTATO
            </h1>
            <h1 class="tag">&lt;contact&gt;</h1>
            <h1 class="tag">&lt;/contact&gt;</h1>

            <div class="flexRow justify-content-center">
                <div class="w-100">
                    <h1 class="subtitle">Para entrar em contato ou contratar meus serviços, use o formulário ou minhas redes
                        sociais abaixo. Mais informações em meu perfil no GitHub.
                    </h1>
                </div>
                <div class="w-50 wrapperFormulario">
                    <FormComponent></FormComponent>
                </div>
                <div class="w-50 wrapperMediaSocial">
                    <mediaSocial></mediaSocial>
                </div>
            </div>




        </div>
    </section>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import FormComponent from './ContactComponents/formContact.vue';
import mediaSocial from './ContactComponents/mediaSocials.vue';
@Options({
    components: { FormComponent, mediaSocial }
})
export default class sectionContact extends Vue {

}
</script>
<style scoped>
section#contato {
    width: 100%;
    position: relative;
    padding: 10% 0;
}
section#contato h1.title {
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
h1 {
    font-size: 1.4vw;

}

h1.subtitle {
    text-align: center;
    font-weight: 900;
    color: white;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black;
    background-color: var(--corVermelho);
    padding: 2% 3%;
    border-start-start-radius: 20px;
    border-start-end-radius: 20px;
    box-shadow: 0 0 5px var(--corVermelho), 0 0 5px var(--corVermelho), 0 0px 10px var(--corVermelho);
    position: relative;
    z-index: 20;
}

div.w-50 {
    width: calc(100% / 2)
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
h1.tag:nth-child(3){
    right: 0;
    bottom: 0;
}

@media (max-width:1500px) {
    h1 {
    font-size: 23px;

}


h1.tag {
	font-weight: 300;
	position: absolute;
}
section#contact h1.title {
	font-size: 60px;
	text-shadow: 0px 0px 3px var(--corAmarelo), 0px 0px 5px var(--corAmarelo), 0px 0px 4px var(--corAmarelo);
}

h1.tag {
	font-size: 40px;
	text-shadow: 0px 0px 2px var(--corBranco), 0px 0px 2px var(--corBranco), 0px 0px 5px var(--corBranco);
}

}
@media (max-width: 650px) {
    div.w-50 {
    width: calc(100% / 1)
}
}
@media(max-width:600px) {
    section#contact {
        width: 100%;
        position: relative;
        padding-top: 25%;
        padding-bottom: 15%;
    }
}
</style>