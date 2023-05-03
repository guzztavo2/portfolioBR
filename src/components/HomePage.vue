<template>
    <section class="homePage">
        <div class="container">
            <!-- <homeMain :deletarTexto="deletarTextoHandle" :escreverTexto="escreverTextoHandle"></homeMain> -->
            <!-- <sobreSection :escreverTexto="escreverTextoHandle"></sobreSection> -->
            <homeServicos></homeServicos>
        </div>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import homeMain from '@/HomePage/homeMainSection.vue';
import sobreSection from '@/HomePage/homeSobreSection.vue';
import homeServicos from '@/HomePage/homeServicosSection.vue';
@Options({
    components: {
        homeMain, sobreSection, homeServicos
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
    // mounted(){
    //     console.log(document.querySelector('section.servicos'));
    //     document.querySelector('section.servicos')?.scrollIntoView({behavior:"smooth", block:"end", inline:"end"});
    //     setTimeout(() => {
    //         document.querySelector('section.servicos')?.scrollIntoView({behavior:"auto", block:"end", inline:"end"});
    //         document.querySelector('section.servicos')?.scrollIntoView({behavior:"auto", block:"end", inline:"end"});

    //     }, 500);

    // }
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