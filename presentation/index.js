// Import React
import React from "react";

// Import Spectacle Core tags
import {
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
  Fit,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Link,
  Code,
  S
} from "spectacle";

import Playground from 'component-playground';
import ComponentPlayground from './ComponentPlayground';

import CodeSlide from 'spectacle-code-slide';
import CodeComparation from './CodeComparation';
import Interactive from './Interactive';
import EnqueteFirebase from './EnqueteFirebase';
import FirePad from './FirePad';

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
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.jsgif.replace("/", "")} width={600}/>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Programação Web
            </Heading>
            <Text textColor="quartenary" size={1} bold>
              Javascript e React
            </Text>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Link textColor="white" target="_blank" href="https://nodejs.org/en/download/">Instalar Nodejs (Clique aqui)</Link><br/>
            <Link textColor="white" target="_blank" href="https://git-for-windows.github.io">Instalar Git (Clique aqui)</Link><br/>
            <Link textColor="white" target="_blank" href="https://www.sublimetext.com/3">Instalar o Sublime Text (Clique aqui)</Link>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Text textColor="white">Abrir o programa Git Bash (terminal)</Text>
            <Text textColor="white">Executar os seguintes comandos:</Text>
            <List>
              <ListItem><Code textSize={20} textColor="white">git clone https://github.com/tibuurcio/desenvolvimento-web-react</Code><br/></ListItem>
              <ListItem><Code textColor="white">cd desenvolvimento-web-react</Code><br/></ListItem>
              <ListItem><Code textColor="white">npm install</Code><br/></ListItem>
              <ListItem><Code textColor="white">npm start</Code></ListItem>
            </List>
          </Slide>

          <Slide transition={["fade", "slide"]}>
            <Heading caps size={3} textColor="quartenary" margin={30}>Cronograma</Heading>
            <Layout>
              <Fill>
                <Text bold textSize={24} textColor="white">Dia 1</Text>
                <Text textSize={18} textColor="white">Um pouco sobre Javascript</Text>
                <Text textSize={18} textColor="white">Motivação</Text>
                <Text textSize={18} textColor="white">React</Text>
                <Text textSize={18} textColor="white">Componente Button</Text>
                <Text textSize={18} textColor="white">Fundamentos</Text>
                <Text textSize={18} textColor="white">create-react-app</Text>
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

          <Slide transition={["fade", "slide"]}>
            <CodePane
              textSize={30}
              lang="js"
              source={require("raw-loader!../assets/code/hello-i-am-gabriel.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <p>Client-Side</p>
            <p>Server-Side</p>
          </Slide>

          <Slide transition={["zoom", "fade", "spin"]} bgColor="black">
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

          <Slide bgColor="black" transition={["fade", "slide"]}>
            <Image src={'https://cdn-images-1.medium.com/max/1600/1*fUxhG3xtbuyAH-NCPYs4lQ.png'} width={600}/>
          </Slide>

          <Slide transition={["fade", "slide"]} bgColor="black" notes={"Apenas recentemente empresas como " + 
            "Netflix, Walmart e Paypal começaram a construir aplicações inteiras utilizando Javascript. " + 
            "<br/><br/>Várias empresas estão contratando programadores Javascript."}>
            <Heading caps size={4} textColor="white">
              Mercado
            </Heading>
            <Appear><Text textColor="white" textSize={30}>
              Segundo lugar nas linguagens mais procuradas para emprego</Text></Appear>
            <Appear><Image src={images.javascriptJobSearch.replace("/", "")} width={600}/></Appear>
          </Slide>

          <Slide transition={["fade", "slide"]} bgColor="black" 
            notes={"Relação com Java que ao contrário de incentivar melhorias da" + 
            "comunidade processa empresas que tentam fazer melhorias"}>
            <Heading caps size={4} textColor="white">
              Longo Prazo
            </Heading>
            <Appear><Text textColor="white" textSize={30}>
              Crescendo mais rápido que qualquer outra linguagem</Text></Appear>
            <Appear><Image src={images.javascriptGrowing.replace("/", "")} width={600}/></Appear>
          </Slide>

          <Slide transition={["fade", "slide"]} bgColor="black">
            <Heading caps size={4} textColor="white">
              Curva de aprendizado
            </Heading>
            <Appear><Text textColor="white" textSize={30}>
              Linguagens de script e de alto nível são mais fáceis de aprender. eg.: Javascript, Python, Ruby</Text></Appear>
          </Slide>

          <Slide transition={["fade", "slide"]} bgColor="black">
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

          <Slide transition={["fade", "slide"]} bgColor="black" textColor="primary">
            <BlockQuote>
              <Quote textColor="quartenary" textSize="40px">Qualquer aplicação que pode ser escrita em Javascript, eventualmente vai ser 
                escrita em Javascript.</Quote>
              <Cite>Jeff Attwood</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["spin", "fade", "zoom"]} bgColor="primary">
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

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={4} textColor="white">Tipagem fraca/dinâmica</Heading>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/dynamic-type-javascript.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
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

          <Slide transition={["slide", "fade"]} bgColor="primary">
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

          <Slide transition={["slide", "fade"]} bgColor="primary">
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

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={5} textColor="white">Programação Funcional (Declarativa)</Heading>
            <Text textColor="white">Filter</Text>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/filter-javascript.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={5} textColor="white">Programação Funcional (Declarativa)</Heading>
            <Text textColor="white">Map</Text>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/map-javascript.example")}
              margin="20px auto"
            />
          </Slide>

          <CodeSlide transition={[]}
              lang="jsx" textSize={30}
              code={require("raw-loader!../assets/code/javascript-tweet-object.example")}
              ranges={[
                { loc: [0, 0], title: "Objetos Javascript" },
                { loc: [0, 12], title: "Tweet", note: "Formato JSON" },
                { loc: [1, 2], title: "String" },
                { loc: [2, 7], title: "Objeto" },
                { loc: [8, 9], title: "Número" },
                { loc: [9, 10], title: "Array" },
                { loc: [0, 12] },
                { loc: [13, 14], note: "Acessando propriedades do objeto" },
                { loc: [15, 17], note: "Modificando propriedades" },
                { loc: [18, 19] },
                { loc: [20, 24], note: "Loop pela propriedade que é um array" },
                { loc: [25, 26], note: "Acessar propriedades dinamicamente" },
                { loc: [27, 33], note: "Loop pelas propriedades dinamicamente" },
                { loc: [0, 33] , title: "Objetos Javascript" }
              ]}/>

          <Slide transition={["fade"]} align="center flex-start" bgImage={images.reactLogo.replace("/", "")}>
          </Slide>

          {/*<Slide transition={["slide"]} bgColor="primary">
              <Heading size={1} caps fit textColor="quartenary">
                Apresentações interativas
              </Heading>
              <Interactive/>
            </Slide>*/}

          <Slide transition={["spin", "fade", "zoom"]} bgColor="secondary">
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

          <CodeSlide transition={[]}
              lang="jsx" textSize={30}
              code={require("raw-loader!../assets/code/react-component-button.example")}
              ranges={[
                { loc: [0, 0], title: "Componente React" },
                { loc: [0, 1], title: "Definição" },
                { loc: [11, 22], title: "Método render" },
                { loc: [1, 5], title: "Construtor", note: "Estado Inicial" },
                { loc: [6, 10], title: "Métodos", note: "Como qualquer outro objeto pode ter" },
                { loc: [6, 22] },
              ]}/>

          <Slide>
            <ComponentPlayground theme="dark" code={buttonCode}/>
          </Slide>

          <Slide transition={["spin", "zoom", "fade"]} bgColor="secondary" notes={"<ul>" + 
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

          <Slide transition={["slide", "fade"]} bgColor="black" notes={"<ul>" + 
              "<li>Ecossistema enorme devido a novas ferramentas sendo desenvolvidas a cada minuto</li>" + 
              "<li>Dificuldade na inicialização de um projeto, muitas configurações</li>" + 
              "<li>npm: gerenciador de bibliotecas javascript</li>" + 
              "<li>npm: gerenciador mais utilizado atualmente, muitos componentes react</li>" + 
              "<li>cra: Criar apps React sem necessidade de configuração</li>" +  
            "</ul>"}>
            <Heading size={3} textColor="white">Ecossistema</Heading>
            <Appear><Heading size={3} textColor="white">npm</Heading></Appear>
            <Appear><Heading size={3} textColor="white">create-react-app</Heading></Appear>
            <Appear><Code textColor="white">npm start</Code></Appear>
            <Appear><Code textColor="white">npm run build</Code></Appear>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="black">
            <Heading size={3} textColor="white">HTML + Javascript</Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} fit textColor="quartenary" textFont="lobster">
              Wait what?
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading fit textColor="white">https://tibuurcio.github.io/desenvolvimento-web-react</Heading>
            <br/>
            <Image src={images.jsgif.replace("/", "")} width={600}/>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Programação Web
            </Heading>
            <Text textColor="quartenary" size={1} bold>
              Javascript e React - Dia 2
            </Text>
          </Slide>

          <Slide transition={["slide"]}>
            <EnqueteFirebase pergunta="Você teve tempo de praticar em casa os conteúdos da aula de terça? :)"
              identificador="tempo-pratica"/>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Heading size={4} textColor="white">Dia 2</Heading>
            <List>
              <ListItem textColor="white" textSize={24}>Um pouco sobre o funcionamento do terminal</ListItem>
              <ListItem textColor="white" textSize={24}>Revisando create-react-app e npm</ListItem>
              <ListItem textColor="white" textSize={24}>Evolução da web, melhores práticas, história do react</ListItem>
              <ListItem textColor="white" textSize={24}>Por trás do create-react-app</ListItem>
              <ListItem textColor="white" textSize={24}>Apresentação do projeto final</ListItem>
              <ListItem textColor="white" textSize={24}>Implementando um componente Tweet</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <EnqueteFirebase pergunta="Você conhece o terminal e alguns dos seus comandos básicos como cd e ls?"
              identificador="conhecimento-terminal"/>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} textColor="quartenary">
              Terminal
            </Heading>
          </Slide>

          <Slide transition={["fade", "slide"]}>
            <Heading size={3} textColor="white">JSX</Heading>
            <CodePane
              textSize={30}
              lang="jsx"
              source={require("raw-loader!../assets/code/jsx1.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["spin", "fade", "zoom"]}>
            <CodeComparation
              languages={[
                {
                  name: 'JSX',
                  prismcode: 'jsx',
                  filename: 'jsx-vs-no-jsx-jsx.example'
                },
                {
                  name: 'No JSX',
                  prismcode: 'javascript',
                  filename: 'jsx-vs-no-jsx-javascript.example'
                }
              ]}/>
          </Slide>

          <Slide transition={["spin", "fade", "zoom"]}>
            <CodeComparation
              languages={[
                {
                  name: 'ES6',
                  prismcode: 'jsx',
                  filename: 'es6-vs-no-es6-es6.example'
                },
                {
                  name: 'No ES6',
                  prismcode: 'jsx',
                  filename: 'es6-vs-no-es6-no-es6.example'
                }
              ]}/>
          </Slide>

          <Slide>
            <FirePad/>
          </Slide>

          <Slide>
            <Heading textColor="white">Projeto</Heading>
          </Slide>

        </Deck>
    );
  }
}
