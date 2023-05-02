<template>
    <section id="loadingPage" class="flexColumn justify-content-center align-items-center">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
        <p class="paragraph_1"></p>
        <p class="paragraph_2">

        </p>
        <p class="paragraph_3" style="text-align: center;">
        </p>
        <h3 class="apresentation_1"></h3>
        <h3 class="apresentation_2"></h3>
        <h3 class="apresentation_3"></h3>
        <button v-if="loadEnd" @click="removeLoadingPage">Pular Introdução <i class="fa-brands fa-github"></i></button>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
    methods: {
        loadingWriteEffect(): Promise<void> {
            return new Promise<void>((success) => {
                const objects = [document.querySelectorAll('p'), document.querySelectorAll('h3')];
                const elementsValues: { element?: HTMLElement, value: string }[] = [];
                elementsValues.push({ element: undefined, value: 'Inicializando portfólio.exe' },
                    {
                        element: undefined, value:
                            '....................................................'
                    },
                    {
                        element: undefined, value:
                            'Bem-vindo(a) ao meu portfólio e ao meu site pessoal!'
                    },
                    {
                        element: undefined, value:
                            'Meu nome é Gustavo e sou programador especializado em soluções tecnológicas.'
                    },
                    {
                        element: undefined, value:
                            'Neste espaço, você encontrará informações úteis e detalhadas sobre meus projetos e serviços prestados.'
                    },
                    {
                        element: undefined, value:
                            'Meu objetivo é ajudar empresas a se transformarem por meio do desenvolvimento de soluções tecnológicas. Sinta-se à vontade para explorar e conhecer mais sobre meu trabalho.'
                    });

                var cont = 0;
                objects.forEach(object => {
                    object.forEach(obj => {
                        elementsValues[cont] = { 'element': obj, value: elementsValues[cont].value };
                        cont++;
                    });
                });
                cont = 0;

                const writeNext = () => {
                    if (cont === elementsValues.length - 1) {
                        this.$props.escreverTextoHandle(elementsValues[cont].element, elementsValues[cont].value, false, true).then(() => {
                            cont++;
                            success();
                        });
                    } else {
                        this.$props.escreverTextoHandle(elementsValues[cont].element, elementsValues[cont].value, true, true).then(() => {
                            cont++;
                            writeNext();
                        });
                    }
                };
                writeNext();
            });
        },

    },
    mounted() {
        this.removeLoadingPage;
    },
    created() {
        window.addEventListener("load", () => {
            this.loadEnd = true;
            this.loadingWriteEffect().then(() => {
                setTimeout(() => {
                    this.removeLoadingPage();
                }, 5000);
            })
        });
    },
    props: {
        escreverTextoHandle: {
            type: Function,
            required: true
        }
    },
    emits: ['finish-loading'],

})

export default class LoadingVue extends Vue {
    loadEnd = false;
    finishAnimation = false;

    removeLoadingPage() {
        this.finishAnimation = true;
        const section = document.querySelector('section#loadingPage');
        section?.classList.add('fade-out');
        setTimeout(() => {
            this.$emit('finish-loading');
        }, 250);
    }

}
</script>
<style scoped>
section {
    overflow: auto;
    width: 100%;
    min-height: 100%;

    background-color: var(--corPreto);
    color: var(--corBranco)
}



h3 {
    font-weight: 600;
    max-width: 50%;
    padding: 1% 1% 0.2% 1%;
    word-wrap: normal;
    font-size: 1.30vw;
    text-align: center;
}

h3.apresentation_1 {
    color: var(--corVermelho);
    text-transform: uppercase;
}

h3.apresentation_3 {
    word-break: keep-all;
    color: var(--corAmarelo);
}

p {

    font-size: 1vw;
    display: block;
    text-align: center;
}

p.paragraph_1 {
    color: var(--corAmarelo);
}

p.paragraph_2 {
    color: var(--corAmarelo);
}

section {
    user-select: none;
}

.lds-ripple {
    display: inline-block;
    position: absolute;
    top: 10%;
    width: 80px;
    height: 80px;
}

button {
    padding: 1%;
    border: 0;
    border-radius: 10px;
    font-weight: 900;
    font-size: 1vw;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--corVermelho);
    color: var(--corBranco);
    opacity: 40%;
    transition: ease-in-out 0.2s;
    position: fixed;
    right: 5%;
    bottom: 5%;
}

button:hover {
    opacity: 100%;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid var(--corAmarelo);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}

@media (max-width: 1500px) {
    h3 {
        font-size: 22px;
    }

    p {
        font-size: 18px;

    }

    button {
        font-size: 20px;
        padding: 2%;
    }
}


@media (max-width: 1000px) {
    h3 {
        max-width: 80%;
    }
}</style>