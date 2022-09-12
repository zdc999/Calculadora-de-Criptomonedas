import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 20px;
  transition: all 1s ease-in-out;
  animation: mensaje 1s ease-in-out;

  @keyframes mensaje {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    25% {
      opacity: 0.25;
    }

    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }

    100% {
      opacity: 1;
    }
  }
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
