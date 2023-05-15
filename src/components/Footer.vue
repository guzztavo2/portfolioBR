<template>
    <section id="footer">
        <div class="flexColumn w-100">
            <div class="flexRow justify-content-center align-items-center">
                <div class="w-100 textWrapper">
                    <h1 class="container">Links Úteis:</h1>
                </div>
                <div class="w-100 links__wrapper">
                    <ul>
                        <li><a class="container" @click="headerUpdate('contato')">Contato</a></li>
                        <li><a class="container" @click="headerUpdate('servicos')" >Servicos</a></li>
                        <li><a class="container" @click="headerUpdate('sobre')" >Sobre</a></li>
                    </ul>
                </div>
                <div class="w-100">
                    <div class="textWrapper">
                        <h1>Todos os direitos reservados.</h1>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({
emits:['atualizarHeaderTitle'],

})
export default class extends Vue {

    headerUpdate(headerLocation:string){
        this.$emit('atualizarHeaderTitle', headerLocation)
    }
}

</script>
<style scoped>
ul {
    list-style-type: none;
}
h1{
    font-size: 1.5vw;
    font-weight: 500;

}
div.textWrapper{
    padding:2%;
    background-color: var(--corVerde);
    border:2px solid white;
    margin: 1%;
    box-shadow: 0 0 15px var(--corVerde), 0 0 15px var(--corVerde), 0 0 15px var(--corVerde);

}

div.textWrapper h1:nth-of-type(1) {
    color: var(--corPreto);
    text-transform: uppercase;
    text-align: left;
    padding: 0 2%;

}
div.w-100 > div.textWrapper h1{
    text-align: center;
    color:var(--corBranco)
}
ul li a {
    text-decoration: none;
    width: 100%;
    background-color: var(--corVermelho);
    color: var(--corBranco);
    display: block;
    text-align: right;
    padding: 2%;
    border: 2px solid white;
    font-weight: 900;
    text-transform: lowercase;
    font-size: 1.2vw;
    margin-top:1%;
    cursor:pointer;
    box-shadow: 0 0 15px var(--corVermelho), 0 0 15px var(--corVermelho), 0 0 15px var(--corVermelho);
    
}
ul li a:hover{
    background-color: var(--corAmarelo);
    color:var(--corPreto);

}
section#footer {
    width: 100%;
}


@media(max-width:1500px){
    ul li a {
    font-size: 20px;    
    margin-top:2%;          
}  
h1{
    font-size: 28px;
}
}

</style>