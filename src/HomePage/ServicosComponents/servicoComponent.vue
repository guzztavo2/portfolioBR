<template>
    <div class="container flexRow ">
        <div class="flexColumn wrapper__items">
            <div class="item css">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
                <div class="wrapperText">
                    <p>
                        Com anos de experiência no desenvolvimento web, adquiri habilidades sólidas em CSS,
                        incluindo a criação de designs responsivos utilizando media queries, CSS grid e flexbox.
                        Além disso, estou sempre atualizado com as melhores práticas e tendências de design,
                        buscando criar experiências de usuário únicas e atraentes.
                    </p>
                </div>
            </div>
            <div class="item js">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-js"> </i>

                </div>
                <div class="wrapperText">
                    <p> Com anos de experiência em desenvolvimento web, me tornei um profundo conhecedor de
                        JavaScript e suas diversas funcionalidades, incluindo eventos, Promises e muito mais. Estou
                        constantemente buscando aprimorar meus conhecimentos nessa tecnologia fascinante, que me
                        atrai pelas suas capacidades de modificar a DOM e por suas muitas outras características
                        poderosas.</p>

                </div>

            </div>
            <div class="item php">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-php"></i>
                </div>
                <div class="wrapperText">
                    <p>
                        Como programador PHP experiente, desenvolvi diversos projetos completos utilizando PHP puro, em
                        conjunto com o XAMPP para executar o servidor em localhost e também utilizei o banco de dados
                        integrado e gratuito, MySQL. Estou constantemente buscando maneiras de melhorar minhas
                        habilidades técnicas e criar projetos desafiadores e inovadores. Fique à vontade para dar uma
                        olhada em meu portfólio e conferir alguns dos projetos que desenvolvi.
                    </p>
                </div>
            </div>
            <div class="item vue">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-vuejs"></i>
                </div>
                <div class="wrapperText">
                    <p>
                        Além de minha experiência em PHP, também sou proficiente em tecnologias de front-end,
                        incluindo Vue.js, Angular e outras. Tenho vários projetos desenvolvidos nessa tecnologia,
                        inclusive este site que foi construído utilizando Vue.js. Sou especialmente apaixonado pelo
                        TypeScript e adquiri conhecimento inicial através do AngularJS. Sempre busco utilizar as
                        melhores práticas e tecnologias de ponta para criar interfaces de usuário atraentes e
                        responsivas. Dê uma olhada em meu portfólio para ver alguns dos projetos de front-end que
                        desenvolvi.
                    </p>
                </div>

            </div>
            <div class="item laravel">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-laravel"></i>
                </div>
                <div class="wrapperText">
                    <p>
                        Após dominar as principais funcionalidades do PHP, decidi aprimorar minhas habilidades em
                        desenvolvimento BackEnd através do framework Laravel. Com o Laravel, é possível agilizar o
                        desenvolvimento de servidores e APIs Rest, bem como implementar diversas funcionalidades úteis,
                        como autenticação, roteamento e gerenciamento de sessões. Através do estudo do Laravel, adquiri
                        uma compreensão mais profunda de padrões de projeto e boas práticas de desenvolvimento BackEnd,
                        e estou sempre buscando aprimorar minhas habilidades nesta área.
                    </p>
                </div>
            </div>
            <div class="item wordpress">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-wordpress"></i>
                </div>
                <div class="wrapperText">
                    <p>
                        Com a minha experiência em JavaScript e CSS, desenvolver sites usando WordPress tornou-se uma
                        tarefa simples e eficiente. Além disso, o WordPress oferece um painel CMS intuitivo em
                        português, o que facilita a gestão de conteúdo e garante um processo mais ágil para o cliente.
                        Com a combinação de habilidades em front-end e o uso do WordPress, é possível desenvolver sites
                        elegantes e responsivos com rapidez e eficiência.
                    </p>
                </div>

            </div>
            <div class="item github">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div class="wrapperText">
                    <p>Com a minha experiência em desenvolvimento web FullStack, gostaria de destacar a
                        importância do GitHub como uma plataforma essencial para versionar códigos. Tenho vários
                        projetos hospedados lá, o que demonstra minha familiaridade e habilidade com a plataforma.

                    </p>
                    <a href="https://github.com/guzztavo2" target="_blank">Clique aqui!</a>

                </div>

            </div>
            <div class="item bootstrap">
                <div class="wrapperIcon">
                    <i class="fa-brands fa-bootstrap"></i>
                </div>
                <div class="wrapperText">
                    <p>
                        Não posso falar sobre desenvolvimento Front-End sem mencionar um dos melhores frameworks
                        disponíveis no mercado: o Bootstrap! Como desenvolvedor, tenho experiência em utilizar essa
                        ferramenta em vários projetos, aproveitando a facilidade que ela oferece para construir
                        interfaces de usuário elegantes e responsivas. </p>
                </div>

            </div>
        </div>
        <div class="ballWrapper flexColumn align-items-center justify-content-center">
            <span class="ball"></span>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({
    mounted() {
        this.EventBall();
        this.RemoveClassBallsElements(0);
        this.intervalTimeSelector(false);


    }
})
export default class servicoComponent extends Vue {
    actualItemScroll = 0;
    IntervalTimer!: number | undefined;

    intervalTimeSelector = (remove: boolean) => {

        if (!remove && this.IntervalTimer == undefined) {
            let cont = 0;
            this.IntervalTimer = setInterval(() => {
                if (cont > 2)
                    cont = 0;

                this.RemoveClassBallsElements(cont);
                cont++;
            }, 2500);
        } else if (remove) {
            clearInterval(this.IntervalTimer);
            this.IntervalTimer = undefined;
        }

        return;

    }
    private createBalls() {
        const elementItems = document.querySelectorAll('section.servicos div.item')
        const elementBall = document.querySelector('div.ballWrapper span.ball');
        const elementWrapper = elementBall?.parentElement;

        if (elementWrapper == undefined || elementBall == undefined)
            return;
        elementBall?.remove();
        let cont = Math.round(elementItems.length / 3);
        for (let n = 0; n < cont; n++) {
            elementWrapper.innerHTML += elementBall?.outerHTML;
        }
    }
    RemoveAddClass(element: HTMLElement | Element, classAdd: string | undefined, classRemoved: string | undefined) {
        if (classRemoved !== undefined)
            element.classList.remove(classRemoved);
        if (classAdd !== undefined)
            element.classList.add(classAdd);
    }
    EventBall() {
        this.createBalls();
        this.setElementScrollIntoView();
    }
    // eslint-disable-next-line
    private setElementScrollIntoView() {
        const ballsElements = document.querySelectorAll('div.ballWrapper span.ball');

        ballsElements.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.intervalTimeSelector(true);
                this.RemoveClassBallsElements(index);
                setTimeout(() => {
                    this.intervalTimeSelector(false);
                }, 6000);
            })
        })
    }
    RemoveClassBallsElements(item: number) {
        const ballsElements = document.querySelectorAll('div.ballWrapper span.ball');


        ballsElements.forEach((element) => {
            this.RemoveAddClass((element as HTMLElement), undefined, 'active');
        });
        switch (item) {
            case 0:
                this.RemoveAddClass(ballsElements[0], 'active', undefined);
                this.setScrollViewHandle({ itemToSelectIndex: 0 });
                break;
            case 1:
                this.RemoveAddClass(ballsElements[1], 'active', undefined);

                this.setScrollViewHandle({ itemToSelectIndex: 3 });
                break;
            case 2:
                this.RemoveAddClass(ballsElements[2], 'active', undefined);

                this.setScrollViewHandle({ itemToSelectIndex: 5 });
                break;
        }
    }
    setScrollViewHandle(Select: { itemToSelectIndex: number } | undefined) {
        if (Select === undefined)
            return;
        const elementItem = (document.querySelectorAll('section.servicos div.item')[Select?.itemToSelectIndex] as HTMLElement);
        const scrollOffset = window.innerWidth * 0.02;

        if (elementItem.parentElement !== null)
            elementItem.parentElement.scrollLeft = elementItem.offsetLeft - scrollOffset;

        //(elementItem as HTMLElement).scrollIntoView({ block: "nearest", inline: "center" ,behavior: "smooth"  })
    }
}
</script>
<style scoped>
div.container {
    width: 100%;
}

div.wrapper__items {
    width: 100%;
    max-height: 25vw;
    padding: 1%;
    flex-wrap: wrap;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-behavior: smooth;
}

div.item {
    width: calc(100% / 3 - 5%);
    height: 30vw;
    margin-left: 3%;
    margin-right: 3%;
    background-color: #FDFFFC;
    padding: 2%;
    box-shadow: 0 0 10px var(--corBranco), 0 0 10px var(--corBranco);
    overflow-y: auto;

}

div.ballWrapper {
    width: 100%;
    max-height: 5vw;
    padding: 2%;
    overflow: auto;
    flex-wrap: wrap;
}

div.ballWrapper span {
    display: block;
    cursor: pointer;
    border-radius: 100%;
    width: calc(100% / 23);
    height: 2.3vw;
    background-color: var(--corAmarelo);
    box-shadow: 0 0 15px #FF9F1C, 0 0 10px #FF9F1C, 0 0 5px #FF9F1C, 0 0 1px #FF9F1C;
    z-index: 2;
}

div.ballWrapper span.active {
    background-color: var(--corVermelho);
    box-shadow: 0 0 15px var(--corVermelho), 0 0 10px var(--corVermelho), 0 0 5px var(--corVermelho), 0 0 1px var(--corVermelho);
    transition: ease-in-out 0.5s;
}

div.item div.wrapperText {
    margin-top: 4%;
}

div.item div.wrapperText p,
div.item div.wrapperText a {
    font-size: 0.9vw;
}

div.item div.wrapperText a {
    text-decoration: none;
    background-color: #FF9F1C;
    display: block;
    text-align: center;
    padding: 2%;
    color: black;
    margin-top: 2%;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid black;
}

div.item div.wrapperIcon {
    padding: 1%;
    text-align: center;
}

div.item div.wrapperIcon i {
    font-size: 8vw;
}

div.item.css div.wrapperIcon i,
div.item.vue div.wrapperIcon i,
div.item.github div.wrapperIcon i {
    color: var(--corPreto);
    text-shadow: 0 0 5px var(--corPreto), 0px 0px 2px var(--corPreto), 0px 0px 2px var(--corPreto);
}

div.item.js div.wrapperIcon i,
div.item.laravel div.wrapperIcon i,
div.item.bootstrap div.wrapperIcon i {
    color: var(--corVerde);

    text-shadow: 0 0 5px var(--corVerde), 0px 0px 2px var(--corVerde), 0px 0px 2px var(--corVerde);

}

div.item.php div.wrapperIcon i,
div.item.wordpress div.wrapperIcon i {
    color: var(--corVermelho);
    text-shadow: 0 0 5px var(--corVermelho), 0px 0px 2px var(--corVermelho), 0px 0px 2px var(--corVermelho);

}

div.item div.wrapperIcon::after {
    content: "";
    margin-top: 10%;
    background-color: black;
    display: block;
    width: 100%;
    height: 2px;
}

@media (max-width:1500px) {

    div.item div.item div.wrapperText a {
        font-size: 16px;
    }

   

    div.item div.wrapperText p[data-v-464817ec],
    div.item div.wrapperText a {
        font-size: 19px;
    }

    div.wrapper__items {
        max-height: 500px;
    }

    div.item div.wrapperIcon i {
        font-size: 100px;
    }

    div.ballWrapper span {
        display: block;
        border-radius: 100%;
        width: 40px;
        height: 80px;
    }

    h1.title {
        font-size: 70px;
        text-shadow: 0px 0px 5px var(--corAmarelo), 0px 0px 3px var(--corAmarelo), 0px 0px 3px var(--corAmarelo);

    }
    div.item div.wrapperIcon i {
        font-size: 60px;

    }
    h1.tag {
        font-size: 50px;

    }
    div.item.css div.wrapperIcon i,
    div.item.vue div.wrapperIcon i,
    div.item.github div.wrapperIcon i {
        color: var(--corPreto);
        text-shadow: 0 0 2px var(--corPreto), 0px 0px 2px var(--corPreto), 0px 0px 2px var(--corPreto);
    }
    div.item.js div.wrapperIcon i,
    div.item.laravel div.wrapperIcon i,
    div.item.bootstrap div.wrapperIcon i {
        color: var(--corVerde);

        text-shadow: 0 0 2px var(--corVerde), 0px 0px 2px var(--corVerde), 0px 0px 2px var(--corVerde);

    }
    div.item.php div.wrapperIcon i,
    div.item.wordpress div.wrapperIcon i {
        color: var(--corVermelho);
        text-shadow: 0 0 2px var(--corVermelho), 0px 0px 2px var(--corVermelho), 0px 0px 2px var(--corVermelho);

    }
}

@media (max-width:900px) {


    div.ballWrapper span {
        display: block;
        border-radius: 100%;
        width: 40px;
        height: 250px;
    }

    div.ballWrapper {
        max-height: 55px;
    }

    div.wrapper__items {
        max-height: 450px;

    }
}

@media(max-width:726px) {



    div.wrapper__items {
        max-height: 400px;

    }
}

@media(max-width:646px) {
    div.wrapper__items {
        max-height: 300px;

    }
}

@media(max-width:485px) {
    div.wrapper__items {
        max-height: 100px;

    }

    div.ballWrapper span {
        display: block;
        border-radius: 100%;
        width: 30px;
        height: 30px;
    }
}</style>