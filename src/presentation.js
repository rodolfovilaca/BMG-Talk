// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";
// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Notes
} from "spectacle";

import TreeExample from "./components/three";
import graphUsageImage from "./images/graph-usage.png";
import reconciliationImage from "./images/reconciliation.png";
import jsxImage from "./images/jsx.png";
import logo from "./images/reactLogo.png";
import lifecyclesImage from "./images/lifecycles.jpeg";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import Game from "./components/tictactoe";
import OldSquare from "./components/tictactoe/oldSqaure";
import SquareNoUpdate from "./components/tictactoe/squareNoUpdate";

import "./style.css";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#000",
    secondary: "#9a86fd",
    tertiary: "#61DBFB",
    quaternary: "#F6AE2D",
    quintenary: "#F26419"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React
          </Heading>
          <Image
            className="app-logo"
            src={logo}
            style={{ transform: "scale(1.3)", objectFit: "contain" }}
          />
          <Notes>
            <h4>Notas</h4>
            <ol>
              <li>
                Meu nome é Rodolfo... Trabalhei já com Angular, vue, backbone,
                jQuery, React, Android, React Native, Node...
              </li>
              <li>
                React nasceu em 2011 por Jordan Walke, desenvolvida pelo
                Facebook incorporada no site e Instagram
              </li>
              <li>Virou uma ferramenta open source em 2013</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="#33658A" textColor="primary">
          <BlockQuote>
            <Quote textSize={40}>
              React é uma biblioteca JavaScript declarativa, eficiente e
              flexível para construir interfaces de usuário. Ele permite compor
              interfaces de usuário em complexos pequenos e isolados pedaços de
              código chamados “componentes”.
            </Quote>
            <Cite>React</Cite>
          </BlockQuote>
          <Appear>
            <BlockQuote>
              <Quote textSize={40}>Composition over inheritance.</Quote>
              <Cite>React</Cite>
            </BlockQuote>
          </Appear>
          <Notes>
            <h4>Notas</h4>
            <ol>
              <li>
                JavaScript como primeira classe language mas com suporte para
                TypeScript, Flow, Reason...
              </li>
              <li>proximo quote...</li>
              <li>componentes isolados como lego...</li>
              <li>No React o que basicamente existem são componentes</li>
              <li>Componentes vou falar mais tarde na palestra</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="tertiary" caps>
            Colocando em perspectiva...
          </Heading>
          <Image src={graphUsageImage} />
          <Notes>
            <h4>Notas</h4>
            <ol>
              <li>Número de downloads por cada lib.</li>
              <li>
                Não necessariamente representa que uma lib é melhor que outra.
              </li>
              <li>
                Representa o tamanho da comunidade e pessoas utilizando React.
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Building Blocks
          </Heading>
          <List>
            <ListItem>Componente</ListItem>
            <ListItem>JSX</ListItem>
            <ListItem>Component update e props</ListItem>
            <ListItem>Estado</ListItem>
            <ListItem>Lifting state up</ListItem>
            <ListItem>Ciclo de vida</ListItem>
            <ListItem>Reconciliação</ListItem>
          </List>
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>Esses são os principais pontos para se entender o React</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Class Component
          </Heading>
          <ClassCounter />
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                source={require("./assets/ClassCounter.example")}
                theme="dark"
                style={{ marginTop: "10px" }}
              />
            </div>
          </Appear>
        </Slide>
        <CodeSlide
          className="code-slide"
          transition={[]}
          lang="js"
          code={require("./assets/ClassCounter.example")}
          color="secondary"
          ranges={[
            { loc: [0, 26], title: "Vamos por partes" },
            { loc: [0, 1], title: "Declaração da classe" },
            { loc: [1, 7], title: "Construtor" },
            { loc: [8, 11], title: "Funções auxiliares" },
            { loc: [16, 25], title: "Render" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Functional Component
          </Heading>
          <FunctionalCounter />
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                source={require("./assets/FunctionalCounter.example")}
                theme="dark"
                style={{ marginTop: "10px" }}
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Dumb Component
          </Heading>
          <CodePane
            lang="javascript"
            source={require("./assets/DumbComponent.example")}
            theme="dark"
            style={{ marginTop: "10px" }}
          />
          <Notes>
            <h4>Dumb Component</h4>
            <ol>
              <li>componente puro</li>
              <li>apenas renderizador de coisas</li>
              <li>neste caso quero que ele apenas renderize uma lista que passo para ele por props</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Wrapper Component
          </Heading>
          <CodePane
            lang="javascript"
            source={require("./assets/WrapperComponent.example")}
            theme="dark"
            style={{ marginTop: "10px" }}
          />
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                source={require("./assets/ChildrenComponent.example")}
                theme="dark"
                style={{ marginTop: "10px" }}
              />
            </div>
          </Appear>
          <Notes>
            <h4>Wrapper Component</h4>
            <ol>
              <li>componente com lógica no pai</li>
              <li>filho recebe como props o que ele precisa atualizar</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            JSX
          </Heading>
          <Image
            src={jsxImage}
            height="80vh"
            style={{ transform: "scale(1.3)", objectFit: "contain" }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Jogo da velha
          </Heading>
          <div className="game-wrapper">
            <Game />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Estado e Update do Componente
          </Heading>
          <div className="square-wrapper">
            <OldSquare player="x" setPlayer={() => {}} />
            <SquareNoUpdate player="x" setPlayer={() => {}} />
          </div>
          <Appear>
            <div className="code-row">
              <CodePane
                lang="javascript"
                source={require("./assets/Square.example")}
                theme="dark"
                width="100px"
              />
              <CodePane
                lang="javascript"
                source={require("./assets/SquareNoUpdate.example")}
                theme="dark"
                width="100px"
              />
            </div>
          </Appear>
        </Slide>
        <CodeSlide
          className="code-slide"
          transition={[]}
          lang="js"
          code={require("./assets/Game.example")}
          color="secondary"
          ranges={[
            { loc: [0, 26], title: "Jogo da velha" },
            { loc: [4, 6], title: "Estados" },
            { loc: [15, 22], title: "Render" },
            { loc: [7, 14], title: "Jogada" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Ciclo de vida
          </Heading>
          <Image src={lifecyclesImage} />
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>constructor</li>
              <li>getDerivedStateFromProps</li>
              <li>shouldComponentUpdate</li>
              <li>render</li>
              <li>getSnapshotBeforeUpdate</li>
              <li>componentDidUpdate</li>
              <li>componentDidMount</li>
              <li>componentWillUnmount</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Reconciliação
          </Heading>
          <Image src={reconciliationImage} />
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>
                vamos falar agora como o react consegue toda sua eficiencia
              </li>
              <li>Virtual DOM</li>
              <li>algoritmo de diffing</li>
              <li>comparação dos nós</li>
              <li>SCU - should component update</li>
              <li>vDOMEq - virtual dom equivalent</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Mais que um framework, um renderer!!!
          </Heading>
          <List>
            <ListItem>react-three-fiber</ListItem>
            <ListItem>ink</ListItem>
            <ListItem>react-konva</ListItem>
            <ListItem>react-360</ListItem>
            <ListItem>react-tv</ListItem>
            <ListItem>react-song</ListItem>
            <ListItem>e muito mais...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            react-three-fiber
          </Heading>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }}
          >
            <TreeExample />
          </div>
          <Notes>
            <h4>Three.js</h4>
            <ol>
              <li>lib em javascript para renderizar objetos 2D e 3D utilizando WebGL/canvas</li>
              <li>utilizando GPU do compoutador</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>
            React Native
          </Heading>
          <Appear>
            <List>
              <ListItem>Yoga</ListItem>
              <ListItem>bundle.js</ListItem>
              <ListItem>codepush (AppCenter)</ListItem>
            </List>
          </Appear>
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>Yoga - flex-layout;</li>
              <li>
                subir aplicações para produção no mesmo instante, simplesmente
                substituir o bundle javascript
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>
            Case Banco do Brasil
          </Heading>
          <Appear>
            <List>
              <ListItem>GAM</ListItem>
              <ListItem>GAM-CLI</ListItem>
              <ListItem>micro-frontends</ListItem>
            </List>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
