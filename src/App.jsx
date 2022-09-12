import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import ImagenCrypto from "./img/crypto.svg";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }
`;

const Imagen = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 300px;
  @media (min-width: 1200px) {
    width: 100%;
    height: 500px;
  }
  margin: 100px auto 0 auto;
  display: block;
  animation: move 3s ease-in-out infinite;
  filter: drop-shadow(0px 0px 100px #7b13f380);

  @keyframes move {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(5%);
      filter: drop-shadow(0px 0px 100px #7b13f3);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        const { moneda, criptoMoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptoMoneda][moneda]);

        setCargando(false);
      };

      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCrypto} alt="Imagen Criptomoneda" className="crypto" />
      <div>
        <Heading>
          Quote cryptocurrencies <span className="line">in real time</span>
        </Heading>
        <Formulario setMonedas={setMonedas} />

        {cargando && <Spinner></Spinner>}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  );
}

export default App;
