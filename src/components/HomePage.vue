<template>
    <section class="homePage">
        <div class="container">
            <sectionMain name="home" id="homePage" :deletarTexto="deletarTextoHandle" :escreverTexto="escreverTextoHandle">
            </sectionMain>
            <sectionSobre name="sobre" id="sobrePage" :escreverTexto="escreverTextoHandle"></sectionSobre>
            <sectionServicos name="servicos" id="servicosPage"></sectionServicos>
            <sectionContact name="contato" id="contatoPage"></sectionContact>
        </div>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import sectionMain from '@/HomePage/homeMainSection.vue';
import sectionSobre from '@/HomePage/homeSobreSection.vue';
import sectionServicos from '@/HomePage/homeServicosSection.vue';
import sectionContact from '@/HomePage/homeContactSection.vue';
import { PropType } from 'vue';
@Options({
    components: {
        sectionMain, sectionSobre, sectionServicos, sectionContact
    },
    props: {
        escreverTexto: {
            type: Function,
            required: true
        },
        headerTitle: {
            type: String as PropType<string>,
            required: true
        },
        deletarTexto: {
            type: Function,
            required: true
        },
    },
    watch: {
        headerTitle: function () {
            document.querySelector('section#' + this.$props.headerTitle + 'Page')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
        }
    },
    mounted() {
        if (this.headerTitle !== '')
            document.getElementById(this.$props.headerTitle)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
        this.elementScroll();
    },
    created() {
        this.escreverTextoHandle = this.$props.escreverTexto;
        this.deletarTextoHandle = this.$props.deletarTexto;
    },
    emits: ['scroll-header']
})
export default class HomePage extends Vue {
    elementScroll() {
        const sectionList = [
            { element: document.querySelector('#homePage'), id: 'homePage' },
            { element: document.querySelector('#sobrePage'), id: 'sobrePage' },
            { element: document.querySelector('#servicosPage'), id: 'servicosPage' },
            { element: document.querySelector('#contatoPage'), id: 'contatoPage' },
        ];

        const callback = (entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry:IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    this.$emit('scroll-header', entry.target.getAttribute('name'));
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observer = new IntersectionObserver(callback, options);

        sectionList.forEach((section) => {
            if (section.element) {
                observer.observe(section.element);
            }
        });
    }

    // eslint-disable-next-line
    escreverTextoHandle: any;
    // eslint-disable-next-line
    deletarTextoHandle: any;
    lidarComEventoPersonalizado(headerTitle: string) {
        alert(headerTitle);
    }

}

</script>

<style scoped>
section.homePage {
    width: 100%;
    padding: 1%;
    min-height: 100%;
}






@media (max-width:755px) {
    section.homePage {
        width: 100%;
        padding: 1%;
        min-height: 100%;
        margin-top: 82px;
    }

}
</style>