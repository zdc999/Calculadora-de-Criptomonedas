import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
  border: 2px solid #7b13f3;
  border-radius: 100%;
  padding: 5px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
    color: #7b13f3;
  }
`;
const Precio = styled.p`
  font-size: 28px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="crypto image"
      />
      <div>
        <Precio>
          The price is: <span className="line">{PRICE}</span>
        </Precio>
        <Texto>
          Highest price of the day: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Lowest price of the day: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Last update: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
