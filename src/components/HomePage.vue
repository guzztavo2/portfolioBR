<template>
    {{ }}
    <section class="homePage">
        <div class="container">
            <sectionMain @wheel="elementScroll('home')" id="home" :deletarTexto="deletarTextoHandle"
                :escreverTexto="escreverTextoHandle"></sectionMain>
            <sectionSobre @wheel="elementScroll('sobre')" id="sobre" :escreverTexto="escreverTextoHandle"></sectionSobre>
            <sectionServicos @wheel="elementScroll('servicos')" id="servicos"></sectionServicos>
            <sectionContact @wheel="elementScroll('contato')" id="contato"></sectionContact>
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
            document.querySelector('section#' + this.$props.headerTitle)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
        }
    },
    mounted() {
        if (this.headerTitle !== '')
            document.getElementById(this.$props.headerTitle)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })

    },
    created() {
        this.escreverTextoHandle = this.$props.escreverTexto;
        this.deletarTextoHandle = this.$props.deletarTexto;
    },
    emits: ['scroll-header']
})
export default class HomePage extends Vue {
    elementScroll(element: string) {
        this.$emit('scroll-header', element);
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