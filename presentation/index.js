// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Spectacle,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  CodePane,
  Layout,
  Fill,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from "spectacle";

import Playground from 'component-playground';
import ComponentPlayground from './ComponentPlayground';

import CodeSlide from 'spectacle-code-slide';
import CodeComparation from './CodeComparation';
import Interactive from './Interactive';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  jsgif: require("../assets/imgs/javascript.gif"),
  reactLogo: require("../assets/imgs/react-logo.png"),
  javascriptJobSearch: require("../assets/imgs/javascript-job-search.png"),
  javascriptGrowing: require("../assets/imgs/javascript-growing.png"),
  mostPopularProjects2016: require("../assets/imgs/most-popular-projects-2016.png")
};

preloader(images);

const theme = createTheme({
  primary: "#006284",
  secondary: "black",
  quartenary: "#f8d53d"
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
  lobster: "Lobster Two"
});

import { buttonCode } from "../assets/code/playground.button";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom", "slide"]}>
          <Image src={images.jsgif.replace("/", "")} width={600}/>
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Programação Web
          </Heading>
          <Text textColor="quartenary" size={1} bold>
            Javascript e React
          </Text>
        </Slide>

        <Slide>
          <ComponentPlayground theme="dark" code={buttonCode}/>
        </Slide>

        <Slide>
          <Heading caps size={3} textColor="quartenary" margin={30}>Cronograma</Heading>
          <Layout>
            <Fill>
              <Text bold textSize={24} textColor="white">Dia 1</Text>
              <Text textSize={18} textColor="white">Um pouco sobre Javascript</Text>
              <Text textSize={18} textColor="white">Motivação</Text>
              <Text textSize={18} textColor="white">Funcionalidades</Text>
              <Text textSize={18} textColor="white">React</Text>
              <Text textSize={18} textColor="white">create-react-app</Text>
              <Text textSize={18} textColor="white">Primeiro componente</Text>
            </Fill>
            <Fill>
              <Text bold textSize={24} textColor="white">Dia 2</Text>
              <Text textSize={18} textColor="white">O problema que o react quer resolver</Text>
              <Text textSize={18} textColor="white">Estado da arte da web</Text>
              <Text textSize={18} textColor="white">Ecossistema do React (cra)</Text>
              <Text textSize={18} textColor="white">Definição do projeto (mini-twitter)</Text>
              <Text textSize={18} textColor="white">Desenvolvimento dos componentes</Text>
            </Fill>
            <Fill>
              <Text bold textSize={24} textColor="white">Dia 3</Text>
              <Text textSize={18} textColor="white">Desenvolvendo nosso app</Text>
            </Fill>
          </Layout>
          <br/>
          <Text bold textSize={24} textColor="white">Dia 4</Text>
          <Text textSize={18} textColor="white">Deploy no github</Text>
        </Slide>

        <Slide><p>Me</p></Slide>

        <Slide><p>Client-Side</p><p>Server-Side</p></Slide>

         <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="quartenary">
              Apresentações interativas
            </Heading>
            <Interactive/>
          </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading caps lineHeight={1} textColor="white">
            Javascript
          </Heading>
          <List>
              <Appear><ListItem textSize={30} textColor="white">
                Criada em 1995 na Netscape</ListItem></Appear>
              <Appear><ListItem textSize={30} textColor="white">
                Orientada a Objetos, Imperativa e Funcional</ListItem></Appear>
              <Appear><ListItem textSize={30} textColor="white">
                Criada para client-side</ListItem></Appear>
            </List>
        </Slide>

        <Slide>
          <Image src={'https://cdn-images-1.medium.com/max/1600/1*fUxhG3xtbuyAH-NCPYs4lQ.png'} width={600}/>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" notes={"Apenas recentemente empresas como " + 
          "Netflix, Walmart e Paypal começaram a construir aplicações inteiras utilizando Javascript. " + 
          "<br/><br/>Várias empresas estão contratando programadores Javascript."}>
          <Heading caps size={4} textColor="white">
            Mercado
          </Heading>
          <Appear><Text textColor="white" textSize={30}>
            Segundo lugar nas linguagens mais procuradas para emprego</Text></Appear>
          <Appear><Image src={images.javascriptJobSearch.replace("/", "")} width={600}/></Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" 
          notes={"Relação com Java que ao contrário de incentivar melhorias da" + 
          "comunidade processa empresas que tentam fazer melhorias"}>
          <Heading caps size={4} textColor="white">
            Longo Prazo
          </Heading>
          <Appear><Text textColor="white" textSize={30}>
            Crescendo mais rápido que qualquer outra linguagem</Text></Appear>
          <Appear><Image src={images.javascriptGrowing.replace("/", "")} width={600}/></Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading caps size={4} textColor="white">
            Curva de aprendizado
          </Heading>
          <Appear><Text textColor="white" textSize={30}>
            Linguagens de script e de alto nível são mais fáceis de aprender. eg.: Javascript, Python, Ruby</Text></Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading caps size={5} textColor="white">
            Projetos que podemos construir
          </Heading>
          <Appear><Text textColor="white" textSize={30}>
            Roda em qualquer dispositivo que possua um browser.
          </Text></Appear>
          <Appear><Text textColor="white" textSize={30}>
            Pode-se construir basicamente qualquer coisa.
          </Text></Appear>
          <Appear><Text textColor="white" textSize={30}>
            E compartilhar em qualquer lugar.
          </Text></Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" textColor="primary">
          <BlockQuote>
            <Quote textColor="quartenary" textSize="40px">Qualquer aplicação que pode ser escrita em Javascript, eventualmente vai ser 
              escrita em Javascript.</Quote>
            <Cite>Jeff Attwood</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodeComparation title="Declarando uma variável"
            languages={[
              {
                name: 'C++',
                prismcode: 'clike',
                filename: 'variable-declaration-cpp.example'
              },
              {
                name: 'Javascript',
                prismcode: 'javascript',
                filename: 'variable-declaration-javascript.example'
              }
            ]}/>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor="white">Tipagem fraca/dinâmica</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/dynamic-type-javascript.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodeComparation title="Arrays"
            languages={[
              {
                name: 'C++',
                prismcode: 'clike',
                filename: 'array-declaration-cpp.example'
              },
              {
                name: 'Javascript',
                prismcode: 'javascript',
                filename: 'array-declaration-javascript.example'
              }
            ]}/>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodeComparation title="For loop"
            languages={[
              {
                name: 'C++',
                prismcode: 'clike',
                filename: 'for-loop-cpp.example'
              },
              {
                name: 'Javascript',
                prismcode: 'javascript',
                filename: 'for-loop-javascript.example'
              }
            ]}/>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodeComparation title="Funções"
            languages={[
              {
                name: 'C++',
                prismcode: 'clike',
                filename: 'functions-cpp.example'
              },
              {
                name: 'Javascript',
                prismcode: 'javascript',
                filename: 'functions-javascript.example'
              }
            ]}/>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={5} textColor="white">Programação Funcional (Declarativa)</Heading>
          <Text textColor="white">Filter</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/filter-javascript.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={5} textColor="white">Programação Funcional (Declarativa)</Heading>
          <Text textColor="white">Map</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/map-javascript.example")}
            margin="20px auto"
          />
        </Slide>

        <CodeSlide transition={[]}
            lang="jsx" textSize={20}
            code={require("raw-loader!../assets/code/javascript-tweet-object.example")}
            ranges={[
              { loc: [0, 0], title: "Objetos em Javascript" },
              { loc: [0, 12], title: "Tweet", note: "Formato JSON" },
              { loc: [1, 2], title: "String" },
              { loc: [2, 7], title: "Objeto" },
              { loc: [8, 9], title: "Número" },
              { loc: [9, 10], title: "Array" },
              { loc: [0, 12] },
              { loc: [13, 14], title: "Acessando propriedades do objeto" },
              { loc: [15, 17], title: "Modificando propriedades" },
              { loc: [18, 19] },
              { loc: [20, 24], title: "Loop pela propriedade que é um array" },
              { loc: [25, 26], title: "Acessar propriedades dinamicamente" },
              { loc: [27, 33], title: "Loop pelas propriedades dinamicamente" },
              { loc: [0, 33] , title: "Objetos em Javascript" }
            ]}/>

        <Slide transition={["fade"]} align="center flex-start" bgImage={images.reactLogo.replace("/", "")}>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} textColor="white">React</Heading>
          <Layout>
            <Fill>
              <List>
                <Appear><ListItem textSize={26} textColor="white">
                  Criar interfaces de usuário baseadas em Componentes</ListItem></Appear>
                <Appear><ListItem textSize={26} textColor="white">
                  Desenvolvido pelo Facebook</ListItem></Appear>
                <Appear><ListItem textSize={26} textColor="white">
                  Open-source</ListItem></Appear>
                <Appear><ListItem textSize={26} textColor="white">
                  Influência na forma de pensar</ListItem></Appear>
                <Appear><ListItem textSize={26} textColor="white">
                  64500 Stars no github</ListItem></Appear>
                <Appear><ListItem textSize={26} textColor="white">
                  Meio milhão de devs</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <Appear><Image src={images.mostPopularProjects2016.replace("/", "")} width={400}/></Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" notes={"<ul>" + 
            "<li>Como construir um app enorme?</li>" + 
            "<li>Composição: Encapsular funcionalidades eg.: Calendar, DatePicker</li>" + 
            "<li>Just JS: Melhor em JS, melhor em React, API Simples</li>" + 
            "<li>Imperative: jQuery</li>" + 
            "<li>Declarativo: Sabemos o estado apenas olhando pro componente</li>" + 
            "<li>Dataflow: Facebook possui muito estado para tomar conta</li>" + 
            "<li>Mutations: Sabe-se exatamente quando a ui vai mudar (explícito)</li>" + 
          "</ul>"}>
          <Heading size={3} textColor="white">Fundamentos</Heading>
          <List>
            <ListItem textSize={30} textColor="white">
              Composição</ListItem>
            <ListItem textSize={30} textColor="white">
              Programação Declarativa</ListItem>
            <ListItem textSize={30} textColor="white">
              Fluxo de dados unidirecional</ListItem>
            <ListItem textSize={30} textColor="white">
              Mutações Explícitas</ListItem>
            <ListItem textSize={30} textColor="white">
              Apenas Javascript</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} notes={"<ul>" + 
            "<li>Ecossistema enorme devido a novas ferramentas sendo desenvolvidas a cada minuto</li>" + 
            "<li>Dificuldade na inicialização de um projeto, muitas configurações</li>" + 
            "<li></li>" + 
            "<li></li>" + 
          "</ul>"}>
          <Heading size={3} textColor="quartenary">Ecossistema</Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3} textColor="white">HTML + Javascript</Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2} fit textColor="white" textFont="lobster">
            Wait what?
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
