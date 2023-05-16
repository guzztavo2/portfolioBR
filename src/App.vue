<template >
  <LoadingVue :escreverTextoHandle="escreverTexto" v-if="isLoading" @finish-loading="FinishLoading"></LoadingVue>
  <HeaderApp @header-click="headerClick" :headerTitle="scrollHeader" v-if="!isLoading"></HeaderApp>
  <HomePage :deletarTexto="deletarTexto" @scroll-header="setScrollHeader" :headerTitle="headerTitle"
    :escreverTexto="escreverTexto" v-if="!isLoading"></HomePage>
    <Footer @atualizarHeaderTitle="setHeaderTitle" v-if="!isLoading"></Footer>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LoadingVue from './components/Loading.vue';
import HeaderApp from './components/Header.vue';
import HomePage from './components/HomePage.vue';
import Footer from './components/Footer.vue';

@Options({
  components: {
    LoadingVue,
    HeaderApp,
    HomePage,
    Footer
  },
  created() {
    const renovalURL = () => {
      const windowLocation = window.location;
      windowLocation.href = windowLocation.href.slice(0, windowLocation.href.search('#'));
    }
    if (window.location.href.search('#') !== -1) {
      const header = window.location.href.slice(window.location.href.search('#') + 1);
      localStorage.setItem('header', header);
      renovalURL();
    }
    else {
      const header = localStorage.getItem('header');
      if (header == null)
        return;
      this.setHeaderTitle(header);
      this.isLoading = false;
      localStorage.removeItem('header');
    }
  }
})
export default class App extends Vue {

  isLoading = false;
  headerTitle = '';
  scrollHeader = '';

  setScrollHeader(header:string){
    this.scrollHeader = header;
  }
  setHeaderTitle(header: string) {
    const headerExistsList = [
      'home', 'sobre', 'servicos', 'contato'
    ]
    headerExistsList.forEach(item => {
      if (item == header)
        this.headerTitle = header;
    })
    return;
  }
  FinishLoading() {
    this.isLoading = false;
  }
  headerClick(header: string) {
    this.headerTitle = header;
  }
  escreverTexto(element: Element, text: string, removerCursoNoUltimo: boolean, elementCarregador: boolean, tempoFuncionamento?: number) {
    const cursor = '<span class="cursor">▎</span>';
    if (tempoFuncionamento == undefined) {
      tempoFuncionamento = 35;
    }
    return new Promise<void>((result) => {
      var cont = 0;
      const escreverTexto = setInterval(() => {
        element.innerHTML = element.innerHTML.replace(cursor, '');
        element.innerHTML += text[cont];
        element.innerHTML += cursor;
        cont++;
        const clearInterval1 = () => {
          clearInterval(escreverTexto);
          if (elementCarregador == true) {
            setTimeout(() => {
              element.classList.add('fade-out');
              setTimeout(() => {
                element.remove();
              }, 500);
            }, 4000);
          }
        }
        if (elementCarregador == true && this.isLoading !== undefined && this.isLoading == false) {
          if (removerCursoNoUltimo == true)
            element.innerHTML = element.innerHTML.replace(cursor, '');
          clearInterval1();

        } else if (cont >= text.length) {
          if (removerCursoNoUltimo == true)
            element.innerHTML = element.innerHTML.replace(cursor, '');
          clearInterval1();
          result();
        }
      }, tempoFuncionamento);
    })
  }
  deletarTexto(element: Element, tempoFuncionamento?: number) {
    if (tempoFuncionamento == undefined)
      tempoFuncionamento = 35;
    const cursor = '<span class="cursor">▎</span>';
    var cont = element.textContent !== null ? element.textContent.length : 0;

    if (cont == 0)
      return;


    return new Promise<void>((result) => {
      const escreverTexto = setInterval(() => {
        element.innerHTML = element.innerHTML.replace(cursor, '');
        element.innerHTML = element.innerHTML.substring(0, cont);

        element.innerHTML += cursor;
        cont--;
        const clearInterval1 = () => {
          clearInterval(escreverTexto);
        }
        if (cont < 0) {
          clearInterval1();
          result();
        }

      }, tempoFuncionamento);
    });
  }
}
</script>

<style>
#app {
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
