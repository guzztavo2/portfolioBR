<template>
    <section class="servicos">
    <servicoComponent></servicoComponent>
        
    </section>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import servicoComponent from './ServicosPageComponents/servicoComponent.vue';
@Options({
    components:{
        servicoComponent
    },
})
export default class homeServicos extends Vue {

}
</script>
<style scoped>
section.servicos {
    width: 100%;
    position: relative;
    padding: 4% 0;
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
    top: 5%;
    right: 0;
}
h1.tag:nth-child(3) {
    bottom: 0;
    right: 0;
}
section.servicos div.container {
    width: 100%;
}
section.servicos div.wrapper__items {
    width: 100%;
    max-height: 25vw;
    padding: 1%;
    overflow-x: hidden;
    flex-wrap: wrap;
    position: relative;
}
section.servicos div.item {
    width: calc(100% / 3 - 5%);
    height: 30vw;
    margin-left: 3%;
    margin-right: 3%;
    background-color: #FDFFFC;
    padding: 2%;
    box-shadow: 0 0 10px var(--corBranco), 0 0 10px var(--corBranco);
    overflow: auto;

}
section.servicos div.ballWrapper {
    width: 100%;
    max-height: 5vw;
    padding: 1%;
    overflow: auto;
    flex-wrap: wrap;
}
section.servicos div.ballWrapper span {
    display: block;
    cursor: pointer;
    border-radius: 100%;
    width: calc(100% / 23);
    height: 2.3vw;
    background-color: var(--corAmarelo);
    box-shadow: 0 0 15px #FF9F1C, 0 0 10px #FF9F1C, 0 0 5px #FF9F1C, 0 0 1px #FF9F1C;
    z-index: 2;
}
section.servicos div.ballWrapper span.active {
    background-color: var(--corVermelho);
    box-shadow: 0 0 15px var(--corVermelho), 0 0 10px var(--corVermelho), 0 0 5px var(--corVermelho), 0 0 1px var(--corVermelho);
    transition: ease-in-out 0.5s;
}
section.servicos div.item div.wrapperText {
    margin-top: 4%;
}
section.servicos div.item div.wrapperText p,
div.item div.wrapperText a {
    font-size: 0.9vw;
}
section.servicos div.item div.wrapperText a {
    text-decoration: none;
    background-color: #FF9F1C;
    display: block;
    text-align: center;
    padding: 2%;
    color: black;
    margin-top: 2%;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid black;
}
section.servicos div.item div.wrapperIcon {
    padding: 1%;
    text-align: center;
}
section.servicos div.item div.wrapperIcon i {
    font-size: 8vw;
}
section.servicos div.item.css div.wrapperIcon i,
section.servicos div.item.vue div.wrapperIcon i,
section.servicos div.item.github div.wrapperIcon i {
    color: var(--corPreto);
    text-shadow: 0 0 5px var(--corPreto), 0px 0px 2px var(--corPreto), 0px 0px 2px var(--corPreto);
}
section.servicos div.item.js div.wrapperIcon i,
section.servicos div.item.laravel div.wrapperIcon i,
section.servicos div.item.bootstrap div.wrapperIcon i {
    color: var(--corVerde);

    text-shadow: 0 0 5px var(--corVerde), 0px 0px 2px var(--corVerde), 0px 0px 2px var(--corVerde);

}
section.servicos div.item.php div.wrapperIcon i,
section.servicos div.item.wordpress div.wrapperIcon i {
    color: var(--corVermelho);
    text-shadow: 0 0 5px var(--corVermelho), 0px 0px 2px var(--corVermelho), 0px 0px 2px var(--corVermelho);

}

section.servicos div.item div.wrapperIcon::after {
    content: "";
    margin-top: 10%;
    background-color: black;
    display: block;
    width: 100%;
    height: 2px;
}

@media (max-width:1500px) {

    section.servicos div.item div.wrapperText p,
    section.servicos div.item div.wrapperText a {
        font-size: 16px;
    }

    section.servicos div.wrapper__items {
        max-height: 500px;
    }

    section.servicos div.item div.wrapperIcon i {
        font-size: 80px;
    }

    section.servicos div.ballWrapper span {
        display: block;
        border-radius: 100%;
        width: 40px;
        height: 80px;
    }

    section.servicos h1.title {
        font-size: 70px;
        text-shadow: 0px 0px 5px var(--corAmarelo), 0px 0px 3px var(--corAmarelo), 0px 0px 3px var(--corAmarelo);

    }

    h1.tag {
        font-size: 50px;

    }
}

@media (max-width:900px) {


    section.servicos div.ballWrapper span {
        display: block;
        border-radius: 100%;
        width: 40px;
        height: 250px;
    }

    section.servicos div.ballWrapper {
        max-height: 55px;
    }

    section.servicos div.wrapper__items {
        max-height: 450px;

    }
}

@media(max-width:726px) {
    section.servicos div.wrapper__items {
        max-height: 400px;

    }
}

@media(max-width:646px) {
    section.servicos div.wrapper__items {
        max-height: 300px;

    }
}

@media(max-width:485px) {
    section.servicos div.wrapper__items {
        max-height: 100px;

    }

    section.servicos div.ballWrapper span {
        display: block;
        border-radius: 100%;
        width: 30px;
        height: 30px;
    }
}
</style>