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
  Fill
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import CodeComparation from './CodeComparation';

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
  javascriptGrowing: require("../assets/imgs/javascript-growing.png")
};

preloader(images);

const theme = createTheme({
  primary: "#006284",
  secondary: "white",
  quartenary: "#f8d53d"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

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

        <Slide transition={["slide"]} bgColor="black">
          <Heading caps lineHeight={1} textColor="white">
            Javascript
          </Heading>
          <List>
              <Appear><ListItem textSize={30}>Criada em 1995 na Netscape</ListItem></Appear>
              <Appear><ListItem textSize={30}>Orientada a Objetos, Imperativa e Funcional</ListItem></Appear>
              <Appear><ListItem textSize={30}>Criada para client-side</ListItem></Appear>
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
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/deck.example")}
            margin="20px auto"
          />
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

        <CodeSlide transition={[]}
            lang="jsx" textSize={20}
            code={require("raw-loader!../assets/code/javascript-tweet-object.example")}
            ranges={[
              { loc: [0, 0], title: "Objetos em Javascript" },
              { loc: [0, 12], title: "Tweet", note: "Formato JSON" },
              { loc: [1, 2], note: "String" },
              { loc: [2, 7], note: "Objeto" },
              { loc: [8, 9], note: "Número" },
              { loc: [9, 10], note: "Array" },
              { loc: [0, 12] },
              { loc: [13, 14], note: "Acessando propriedades do objeto" },
              { loc: [15, 17], note: "Modificando propriedades" },
              { loc: [18, 19] },
              { loc: [20, 24], note: "Loop pela propriedade que é um array" },
              { loc: [25, 26], note: "Acessar propriedades dinamicamente" },
              { loc: [27, 33], note: "Loop pelas propriedades dinamicamente" },
              { loc: [0, 33] , title: "Objetos em Javascript" }
            ]}/>

        <Slide transition={["fade"]} align="center flex-start"
          bgImage={images.reactLogo.replace("/", "")}>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2} caps fit textColor="secondary" textFont="secondary">
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
