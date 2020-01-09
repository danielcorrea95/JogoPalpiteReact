import React, { useState } from "react";
import "./styles.css";
import { checkPropTypes } from "prop-types";

// const elemento = <h1>test de Var</h1>; //jsx
// const elemento2 = React.createElement(
//   "div",
//   null,
//   React.createElement("h2", null, "Ola elemento") //html
// );

// const MostrarI = (props) => {
//   return <p>{props.i}</p>;
// }

// export default function App(props) {
//   const [i, setI] = useState(1);
//   const increment = () => {
//     setI(i + 1);
//   };
//   return (
//     <div className="App">
//       <h1>
//         Olá {props.name} {i}{" "}
//       </h1>
//       <button onClick={increment}>Incrementar</button>
//       <MostrarI i={i} />
//     </div>
//  );
//}

export default function App() {
  //Entrada, Rodando e Fim
  const [estado, setEstado] = useState("Entrada");

  //palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("Rodando");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  if (estado === "Entrada") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("Fim");
  };

  if (estado === "Fim") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente</button>
      </div>
    );
  }
  //0 <> 300
  //oalpites que a maquina deu

  return (
    <div className="App">
      <p>O seu numero é {palpite}</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
