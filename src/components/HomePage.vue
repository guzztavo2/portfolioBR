<template>
    <section class="homePage">
        <div class="container">
            <homeMain :deletarTexto="deletarTextoHandle" :escreverTexto="escreverTextoHandle"></homeMain>
            <sobreSection :escreverTexto="escreverTextoHandle"></sobreSection>
        </div>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import homeMain from '@/HomePage/homeMainSection.vue';
import sobreSection from '@/HomePage/homeSobreSection.vue';
@Options({
    components: {
        homeMain, sobreSection
    },
    props: {
        escreverTexto: {
            type: Function,
            required: true
        },
        deletarTexto:{
            type:Function,
            required:true
        }
    },
    created() {
        this.escreverTextoHandle = this.$props.escreverTexto;
        this.deletarTextoHandle = this.$props.deletarTexto;
    },
})
export default class HomePage extends Vue {
    // eslint-disable-next-line
    escreverTextoHandle: any;
        // eslint-disable-next-line
    deletarTextoHandle:any;
    
}

</script>

<style scoped>
section.homePage {
    width: 100%;
    padding: 1%;
    height: 100%;
}

@media (max-width:755px) {
    section.homePage {
        width: 100%;
        padding: 1%;
        height: 100%;
        margin-top: 82px;
    }

}
</style>