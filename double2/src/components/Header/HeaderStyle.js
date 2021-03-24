import styled from "styled-components"

export const Tabbar = styled.header`
  background-color: var(--black);
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  margin-left: 40px;
`;

export const IconDouble = styled.img`
  width: 100px;
`;

export const ContainerOptions = styled.div`
  height: 40%;
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TabOption = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TextOption = styled.p`
  color: var(--white);
  font-weight: bold;

`;

export const ContainerIcons = styled.div`
  width: 11%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
`;


export const HoverIcon = styled.a`
`;


export const Linha = styled.img`
  width: 100%;
`;

