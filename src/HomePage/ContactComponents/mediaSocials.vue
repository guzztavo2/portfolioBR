<template>
    <div class="wrapperSocial flexColumn">
        <h1 class="title">Caso você tenha a preferência, também poderá acessar as minhas redes sociais:</h1>
        <div class="flexRow align-items-center itemWrapper">
            <h1><a href="https://www.linkedin.com/in/guzztavo2/" target="_blank"
                    rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i>LinkedIn</a> </h1>

        </div>
        <div class="flexRow align-items-center itemWrapper">
            <h1><a href="https://github.com/guzztavo2" target="_blank" rel="noopener noreferrer"><i
                        class="fa-brands fa-square-github"></i>GitHub</a></h1>

        </div>
        <div class="flexRow align-items-center itemWrapper">
            <h1><a href="https://wa.me/5516994593260" target="_blank" rel="noopener noreferrer"><i
                        class="fa-brands fa-square-whatsapp"></i>WhatsApp</a></h1>

        </div>

    </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
Options({

})
export default class mediaSocial extends Vue {
}
</script>
<style scoped>
div.render div.page {
    background-color: var(--corPreto);
    border-radius: 10px;
    box-shadow: 0 0 15px var(--corPreto), 0 0 10px var(--corPreto), 0 0 5px var(--corPreto);
    width: 100%;
    min-width: 400px;
    height: 100%;
}

div.render {
    background-color: rgba(255, 255, 255, 0.603);
    border-radius: 30px;
    padding: 1%;
    width: 50%;
    height: 80%;
    position: fixed;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div.wrapperSocial {
    padding: 2%;
    background-color: var(--corBranco);
    box-shadow: 0 0 5px var(--corBranco), 0 0 5px var(--corBranco), 0 0px 10px var(--corBranco);

    height: 50%;
}

h1.title {
    font-size: 1.2vw;
    text-align: center;
    background-color: white;
}

div.wrapperSocial div.itemWrapper {
    height: 50%;
}

div.wrapperSocial div.itemWrapper h1 {
    /* padding: 2%; */
    font-size: 1.2vw;
    width: 100%;
    height: 100%;

}

div.wrapperSocial div.itemWrapper h1 i {
    font-size: 2.5vw;
}

h1>a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    height: calc(100% - 40%);
    margin-top: 5%;
    padding: 0 2%;
    width: 100%;
    color: var(--corPreto);
    position: relative;
    background-color: #0116273a;
    border-radius: 10px;
    transition: ease-in-out 0.2s;

}

h1>a::after {
    position: absolute;
    bottom: 0;
    left: 1.5%;
    content: "";
    display: block;
    background-color: #0000003b;
    width: 95%;
    height: 2px;

}

h1>a::before {

    position: absolute;
    bottom: 0;
    left: 1.5%;
    content: "";
    display: block;
    background-color: rgb(255, 0, 0);
    width: 0%;
    height: 2px;
    transition: ease-in-out 0.5s;
}

h1>a:hover::before {
    width: 95%;
}

h1>a:hover {
    color: var(--corBranco);

    background-color: var(--corPreto);

}

@media (max-width:1500px) {
    h1.title {
        font-size: 22px;
    }

    div.wrapperSocial div.itemWrapper h1 {
        font-size: 20px;
    }

    div.wrapperSocial div.itemWrapper h1 i {
        font-size: 40px;
    }
}

@media (max-width: 650px) {
    div.wrapperSocial {
        padding: 4%;
        height: unset;
    }

    div.wrapperSocial div.itemWrapper h1 {
        padding: 2%;
    }

    h1>a {
        height: calc(100% - 40%);
        margin-top: 5%;
        padding: 2%;
    }
}
</style>