<template>
    <section class="fade-in flexRow align-items-center">
        <h1>LOGO</h1>
        <div id="mobileIcon" @click="mobileListEvent">
            <i class="fa-solid fa-bars"></i>
        </div>
        <ul class="flexRow align-items-center">
            <li>&lt;home/&gt;</li>
            <li>&lt;serviços/&gt;</li>
            <li>&lt;sobre/&gt;</li>
            <li>&lt;contato/&gt;</li>
        </ul>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({

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
        window.addEventListener('resize', () => {
            this.showMobileList();
        })

    },

})
export default class HeaderApp extends Vue {
    mobileVisible = false;
    mobileHiddenAfterTime = (listElement: HTMLElement, disabledTimeOut: boolean) => {

        var timeOut = setTimeout(() => {
            this.hiddenMobileList((listElement as HTMLElement));
            this.mobileVisible = false;
        }, 6000);
        if (disabledTimeOut)
            clearTimeout(timeOut);
        return;

    }
    mobileListEvent() {
        const listElement = document.querySelector('ul');
        if (this.mobileVisible) {
            this.mobileVisible = false;
            this.hiddenMobileList((listElement as HTMLElement));

        }
        else {
            this.showMobileList();
            this.mobileVisible = true;
        }
    }
    showMobileList() {
        const listElement = document.querySelector('ul');

        listElement?.setAttribute('style', 'display:flex');
        listElement?.classList.remove('fade-out');
        listElement?.classList.add('fade-in');

        this.mobileHiddenAfterTime((listElement as HTMLElement), true);
    }
    hiddenMobileList(listElement: HTMLElement) {
        listElement?.classList.remove('fade-in');
        listElement?.classList.add('fade-out');
        setTimeout(() => {
            listElement?.removeAttribute('style');
        }, 500);
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
    opacity: 80%;
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

@media (max-width:1500px) {
    ul li {
        font-size: 20px;
    }

    ul[data-v-61dd7a3d] {
        min-width: 55%;
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
    }

    #mobileIcon i {
        font-size: 40px;
        background-color: var(--corAmarelo);
        border-radius: 2px;
        padding: 2% 5%;
    }
}
</style>