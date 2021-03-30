import styled from "styled-components"

export const PrevImage = styled.img`
  margin-left: 50px;
  margin-bottom: 200px;
  opacity: 0.6;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
`;

export const NextImage = styled(PrevImage)`
  margin-right: 50px;
`;

export const ContainerSlideLink = styled.a`
  width: 10%;
  margin-left: 90vw;
  margin-bottom: 200px;
  opacity: 0.6;
  cursor: pointer;
`;

export const TextSlideLink = styled.p`
  margin-left: 50px;
  margin-bottom: 200px;
  opacity: 0.6;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
`;