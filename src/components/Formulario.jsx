// React
import { useEffect, useState } from "react";
// Styles
import styled from "@emotion/styled";
// Components
import Error from "./Error";
// Custom Hook
import useSelectCurrency from "../hooks/useSelectCurrency";
// Data
import { monedas } from "../data/Currency";

const InputSubmit = styled.input`
  background-color: #7b13f3;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 20px;
  transition: background-color 0.15s ease-in-out;
  margin-top: 30px;

  &:hover {
    background-color: #5c0ec2;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectCurrency(
    "Select a currency",
    monedas
  );

  const [criptoMoneda, SelectCriptoMoneda] = useSelectCurrency(
    "Choose a cryptocurrency",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });

      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptoMoneda].includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setMonedas({ moneda, criptoMoneda });
  };

  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />
        <InputSubmit type="submit" value="Calculate" />
      </form>
    </>
  );
};

export default Formulario;
