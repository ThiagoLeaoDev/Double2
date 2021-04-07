import styled from "styled-components";

export const ContainerContent = styled.div`
  padding-top: 160px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContainerImages = styled.div`
  width: 50vw;
  height: 100%;
`;

export const ContainerProdInfos  = styled.div`
  width: 50vw;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
`;

export const TitleProduct  = styled.p`
  font-weight: bold;
  font-size: 1.625rem;
  margin-bottom: 13px;
  width: 48%;
`;

export const TextCod  = styled.p`
  font-size: 1.125rem;
  color: var(--text-grey);
  margin-bottom: 15px;
`;

export const ContainerStars  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 26%;
  margin-left: -5px;
  margin-bottom: 30px;
`;

export const TextAvaliacoes  = styled.p`
  margin-top: 3px;
  color: var(--text-grey);
`;

export const ContainerPrice  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 18.5%;
  margin-bottom: 30px;
`;

export const TextDiscount  = styled.p`
  font-size: 1.125rem;
  color: var(--text-grey);
`;

export const TextPrice  = styled.p`
  font-size: 1.875rem;
  font-weight: bold;
`;

export const Divisor  = styled.div`
  width: 48%;
  border-top: 1px solid #C4C4C4;
`;

export const TitleSize  = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ContainerSizes  = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const CircleSize  = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--black);
  opacity: 0.45;
`;
export const TextSize  = styled.p`
  font-weight: bold;
  color: var(--white);
`;

export const ContainerQuantity  = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TextQuantity  = styled.div`

`;

export const SelectorQuantity  = styled.select`
  width: 100px;
  padding: 4px;
  border-radius: 4px; 
  border-color: var(--light-grey);
  font-family: 'Poppins', sans-serif;
`;

export const SelectorOption  = styled.option`
  font-family: 'Poppins', sans-serif;
  color: var(--black);
`;


export const ContainerButtons  = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ButtonBuy  = styled.button`
  width: 220px;
  border-radius: 10px;
  background-color: var(--pastel-yellow);
  border: none;
  padding: 10px 20px 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ButtonAddWallet  = styled(ButtonBuy)`
  font-weight: normal;
  background-color: var(--black);
`;

export const ContainerShipping  = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleCalc  = styled.p`
   
   
   
`;

export const InputCalc  = styled.input`
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  padding: 4px 8px;
  font-family: 'Poppins', sans-serif;
  color: var(--black);
  appearance: none;
`;

export const ButtonCalc  = styled.button`
  border-radius: 4px;
  background-color: var(--black);
  border: none;
  padding: 2px 15px 2px 15px;
  font-size: 1rem;
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ContainerShippingInfos  = styled.div`
   
   
   
`;

export const TextAddress  = styled.div`
   
   
   
`;

export const TitleShipping  = styled.div`
   
   
   
`;

export const TextShippingPrice  = styled.div`
   
   
   
`;