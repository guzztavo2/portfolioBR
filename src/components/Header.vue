<template>
    <section class="fade-in flexRow align-items-center header">
        <div class="logo">
            <img src="@/assets/Imagens/Logo.png" alt="" srcset="">
        </div>
        <div id="mobileIcon" @click="mobileListEvent">
            <i class="fa-solid fa-bars"></i>
        </div>
        <ul class="flexRow align-items-center">
            <li id="home" class="active" @click="headerClick('home')">&lt;home/&gt;</li>
            <li id="sobre" @click="headerClick('sobre')">&lt;sobre/&gt;</li>
            <li id="servicos" @click="headerClick('servicos')">&lt;serviços/&gt;</li>
            <li id="contato" @click="headerClick('contato')">&lt;contato/&gt;</li>
        </ul>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
    emits: [
        'header-click'
    ],
    props: {
        headerTitle:{
            type:String,
            require:true
        }
    },
    watch: {
        headerTitle: function () {
            const headerTitle = this.$props.headerTitle;

            const toggleClass = (currentElement: string) => {
                const listOfElements = document.querySelectorAll('ul li');
                listOfElements.forEach(element => {
                    if (element.id == currentElement) {
                        element.classList.add('active');
                    } else {
                        element.classList.remove('active');
                    }
                });
            }
            switch (headerTitle) {
                case 'home':
                    toggleClass('home');
                    break;
                case 'sobre':
                    toggleClass('sobre');

                    break;
                case 'servicos':
                    toggleClass('servicos');

                    break;
                case 'contato':
                    toggleClass('contato');

                    break;
            }
        }
    },
    mounted() {
        setTimeout(function () {
            document.querySelector('section')?.classList.remove('fade-in');
        }, 1200);

        window.addEventListener('scroll', () => {
            const scrollHeight = window.scrollY;
            const section = document.querySelector('section');

            if (scrollHeight >= 60) {
                if (!section?.classList.contains('scrollable'))
                    section?.classList.add('scrollable');


            } else {
                if (section?.classList.contains('scrollable'))
                    section?.classList.remove('scrollable');


            }
        })


    },

})
export default class HeaderApp extends Vue {
    mobileVisible = false;
    headerTitle1 = '';
    headerClick(headerTitle: string) {
        this.$emit('header-click', headerTitle);
        this.headerTitle1 = headerTitle;
    }
    mobileListEvent() {
        const elementUl = (document.querySelector('ul') as HTMLElement);
        if (this.mobileVisible) {
            this.mobileVisible = false;
            this.hiddenMobileList((elementUl as HTMLElement));

        }
        else {
            this.showMobileList();
            this.mobileVisible = true;
            window.addEventListener('click', (event: Event) => {
                const listChildren = elementUl?.querySelectorAll('li');
                if (listChildren == null || listChildren == undefined)
                    return;

                for (const item of listChildren) {
                    if (item == event.target || event.target == document.querySelector('.fa-solid.fa-bars')) {
                        return;
                    }

                }
                this.hiddenMobileList(elementUl);

            })
        }
    }
    showMobileList() {
        const listElement = document.querySelector('ul');

        listElement?.setAttribute('style', 'display:flex');
        listElement?.classList.remove('fade-out');
        listElement?.classList.add('fade-in');

    }
    hiddenMobileList(listElement: HTMLElement) {
        listElement?.classList.remove('fade-in');
        listElement?.classList.add('fade-out');
        setTimeout(() => {
            listElement?.removeAttribute('style');
        }, 300);
    }
}

</script>

<style scoped>
.scrollable {
    position: fixed;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
}

section {
    min-height: 10%;
    width: 80%;
    margin: 0 auto;
    margin-top: 1%;
    background-color: var(--corBranco);
    padding: 1%;
    border-radius: 5px;
    box-shadow: 0px 0px 0.5vw var(--corBranco);
    justify-content: space-between;
    color: var(--corPreto);
    opacity: 75%;
    position: relative;
    z-index: 99;
    transition: ease-in-out opacity 0.5s;
}

section:hover {
    opacity: 100%;

}

section.fade-in {
    opacity: 96%;

}

section h1 {
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    justify-content: space-between;
    min-width: 40%
}

#mobileIcon {
    display: none;
}

ul li {
    display: block;
    padding: 1%;
    cursor: pointer;
    font-size: 1.2vw;
    color: var(--corAmarelo);
    text-shadow: 0px 0px 0.2vw var(--corAmarelo);
    transition: ease-in-out 0.2s;
    font-weight: 200;
}

ul li:hover {
    color: var(--corPreto);
    text-shadow: 0px 0px 0.1vw var(--corPreto);

}

ul li.active {
    color: var(--corVermelho);
    text-shadow: 0px 0px 0.1vw var(--corVermelho), 0px 0px 0.1vw var(--corVermelho);
    transition: ease-in-out 0.2s;
}

div.logo {
    width: 30%;
    height: 9vw;
}

div.logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media (max-width:1500px) {
    ul li {
        font-size: 20px;
    }

    ul[data-v-61dd7a3d] {
        min-width: 55%;
    }
    div.logo[data-v-61dd7a3d]{
        height:150px;
    }
}

@media (max-width:990px) {
    ul {
        min-width: 70%;

    }

    section {
        box-shadow: 0px 0px 10px var(--corBranco);
        width: 98%;

    }

    section h1 {
        height: 100%;
        width: 30%;
    }
}

@media (max-width:755px) {
    ul {
        justify-content: center;
        width: 94% !important;
        background-color: var(--corPreto);
        top: 110%;
        left: 2%;
        position: fixed;
        box-shadow: 0px 0px 5px var(--corPreto);
        opacity: 98%;
        display: none;
        z-index: 99;

    }

    ul li:hover {
        color: var(--corBranco);
        text-shadow: 0px 0px 0.1vw var(--corBranco);

    }

    section {
        position: fixed;
        top: 1%;
        left: 50%;
        transform: translateX(-50%);
    }

    ul li {
        width: 100%;
        text-align: center;

    }

    section h1 {
        height: 100%;
        width: 50%;
    }

    #mobileIcon {
        display: flex;
        width: 50%;
        height: 100%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #mobileIcon i {
        font-size: 40px;
        background-color: var(--corAmarelo);
        border-radius: 2px;
        padding: 2% 5%;
    }
}
</style>