<template>
    <section id="contact">
        <div class="container">

            <h1 class="title">
                CONTATO
            </h1>
            <h1 class="tag">&lt;contact&gt;</h1>
            <h1 class="tag">&lt;contact/&gt;</h1>

            <div class="flexRow align-items-center justify-content-center">
                <div class="w-100">
                    <h1 class="subtitle">Caso haja interesse em estabelecer contato comigo ou contratar meus serviços,
                        sinta-se à vontade para utilizar o formulário de contato disponibilizado abaixo. Alternativamente, é
                        possível entrar em contato comigo por meio de minhas redes sociais, cujas informações também são
                        apresentadas abaixo. Ademais, para obter informações adicionais acerca dos meus repositórios e
                        códigos/portfólio, é recomendado o acesso ao meu perfil no GitHub.
                    </h1>
                </div>
                <div class="w-50 wrapperFormulario">
                    <form method="post" @submit.prevent="onSubmitFormContact">
                        <h1 class="titleForm">Preencha o formulário, e envie-o, isso cairá diretamente a mim e me comunicarei o máximo possível.</h1>
                        <label for="nomeUsuario">
                            <input type="text" name="nomeUsuario" id="nomeUsuario">
                        </label>
                        <label for="emailUsuario">
                            <input type="email" name="" id="">
                        </label>
                        <label for="emailUsuario">
                            <input type="text" name="" id="">
                        </label>
                        <input type="submit" value="Olá">
                    </form>
                </div>
                <div class="w-50 wrapperFormulario">

                </div>
            </div>




        </div>
    </section>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({})
export default class sectionContact extends Vue {
    onSubmitFormContact(event:Event){
        
        alert('a');
    }
}
</script>
<style scoped>
section#contact {
    width: 100%;
    position: relative;
    padding: 4% 0;
}
h1{
    font-size: 1.4vw;

}
h1.subtitle {
    text-align: right;
    font-weight: 300;
    color:white;
    text-shadow: 0 0 1px black,0 0 1px black,0 0 1px black;
    background-color: var(--corVermelho);
    padding:2% 3%;
    border-start-start-radius: 20px;
    border-start-end-radius: 20px;

    position: relative;
    z-index: 20;
}
div.w-50{
    width:calc(100% / 2)
}
div.wrapperFormulario{
    background-color: white;


}

section#contact h1.title {
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
}</style>