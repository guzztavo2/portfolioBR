<template>
    <section class="fade-in">
        <div class="parallax">

        </div>
        <div class="titleWrapper flexRow justify-content-center align-items-center">
            <div class="flexColumn w-100 h-100">
                <h1 class="textWriter"> </h1>
                <h1 class="textWriter"> <b></b></h1>
                <h1 class="title _1"></h1>
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
        },
        deletarTexto: {
            type: Function,
            required: true
        }
    },
    created() {
        this.escreverTextoHandle = this.escreverTexto;
        this.deletarTextoHandle = this.deletarTexto;
    },
    async mounted() {
        await this.writeMainTitle().then(() => {
            this.writeTitlesMain();
        });

    }
})
export default class sectionMain extends Vue {
    // eslint-disable-next-line 
    escreverTextoHandle: any;
    // eslint-disable-next-line 
    deletarTextoHandle: any;
    async writeMainTitle() {
        const objectAndValues: { object?: HTMLElement, value: string }[] = []
        const objects = document.querySelectorAll('div.titleWrapper h1.textWriter');
        objectAndValues.push({ object: (objects[0] as HTMLElement), value: 'Criação de soluções digitais' })
        objectAndValues.push({ object: (objects[1] as HTMLElement), value: 'que geram ' })
        var boldWriter_1 = objectAndValues[1].object?.querySelector('b');
        boldWriter_1?.remove();
        var cont = 0;

        return await new Promise<void>((sucess) => {
            const writeNext = async () => {
                if (cont >= objectAndValues.length) {
                    sucess();
                    return;
                }
                await this.escreverTextoHandle(objectAndValues[cont].object, objectAndValues[cont].value, true, false, 50).then(async () => {
                    if (cont == 1) {
                        if (objectAndValues[1].object !== undefined)
                            objectAndValues[1].object.innerHTML = objectAndValues[1].object.innerHTML + boldWriter_1?.outerHTML;
                        boldWriter_1 = (objectAndValues[1].object as HTMLElement).querySelector('b')
                        await this.escreverTextoHandle(boldWriter_1, 'resultados ', false, false, 100).then();
                    }
                    cont++;
                    writeNext();
                });
            }
            writeNext();
        })




    }
    writeTitlesMain() {
        const h1Wrapper = document.querySelector('h1.title');
        const classAndValues: { class: string, value: string }[] = [];
        classAndValues.push({ class: '_1', value: 'Desenvolvedor Back-End' },
            { class: '_2', value: 'Desenvolvedor Front-End' },
            { class: '_3', value: 'Desenvolvedor Web FullStack' },);

        var cont = 0;
        const writeAndDelete = () => {
            if (cont >= classAndValues.length)
                cont = 0;
            if (cont == 0)
                h1Wrapper?.classList.remove(classAndValues[classAndValues.length - 1].class);
            else if (cont == classAndValues.length - 1)
                h1Wrapper?.classList.remove(classAndValues[0].class);
            else
                h1Wrapper?.classList.remove(classAndValues[cont - 1].class);
            h1Wrapper?.classList.add(classAndValues[cont].class);
            this.escreverTextoHandle(h1Wrapper, classAndValues[cont].value, true, false, 100).then(() => {
                this.deletarTextoHandle(h1Wrapper, 100).then(() => {
                    cont++
                    writeAndDelete();
                });
            })
        }
        writeAndDelete();

    }
}
</script>
<style scoped>
section {
    width: 100%;
    height:35vw;
    min-height: 700px;
    position: relative;
    z-index: 0;
    background-color: var(--corVermelho);
    box-shadow: 0px 0px 1vw var(--corVermelho);
    padding: 0.2%;
    border-radius: 10px;

}

section .parallax {
    background-image: url("../assets/Imagens/backgroundImg.png");

    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 100%;
    z-index: 0;
    position: relative;
    transition: ease-in-out 0.2s;
}



h1 {
    font-size: 2.5vw;
    color: var(--corBranco);
    text-shadow: 0px 0px 4px var(--corBranco);
    font-weight: 900;
    text-align: left;
    padding: 1%;
}

div.titleWrapper>div {
    background-color: #000000cb;
    box-shadow: 0px 0px 2vw #000000a6;
    border-radius: 10px;
    padding: 1% 2%;
    cursor: pointer;
    user-select: none;

}

h1:nth-of-type(2) {
    text-align: center;
}

h1.title {
    color: var(--corVermelho);
    text-shadow: 0px 0px 4px var(--corVermelho);

}

h1.title {
    text-transform: uppercase;
    text-align: center;
    word-break: break-all;
}

h1.title._1 {
    color: var(--corVerde);
    text-shadow: 0px 0px 4px var(--corVerde), 0px 0px 4px var(--corVerde);
}

h1.title._2 {
    color: var(--corBranco);
    text-shadow: 0px 0px 4px var(--corBranco), 0px 0px 4px var(--corBranco);
}

h1.title._3 {
    color: var(--corVermelho);
    text-shadow: 0px 0px 4px var(--corVermelho), 0px 0px 4px var(--corVermelho);
}

h1.textWriter:nth-child(2)>b:nth-child(1) {
    color: var(--corAmarelo);
    text-shadow: 0px 0px 4px var(--corAmarelo);
}

section div.titleWrapper {
    position: absolute;
    width: 80%;
    height: 80%;
    bottom: 10%;
    left: 10%;
    border-radius: 10px;
    padding: 2%;

}

@media (max-width:1500px) {
    h1 {
        font-size: 40px;

    }

    h1.title {
        margin-top: 40px;
    }

    section {
        position: relative;
        z-index: 0;
        background-color: var(--corVermelho);
        box-shadow: 0px 0px 30px var(--corVermelho);
        padding: 0.2%;
        border-radius: 10px;

    }
}
</style>