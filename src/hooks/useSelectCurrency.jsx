import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  padding: 14px;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: #fff;
  border: 1px solid #7b13f3;

  &:focus {
    /* From https://css.glass */
    background: rgba(123, 19, 243, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border: 1px solid rgba(123, 19, 243, 1);
  }
`;

const Option = styled.option`
  color: black;
`;

const useSelectCurrency = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <Option>Select</Option>
        {opciones.map((opcion) => (
          <Option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </Option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectCurrency;
