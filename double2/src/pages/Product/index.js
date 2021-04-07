import React from 'react'
import { FaRegStar } from "react-icons/fa";

import * as SC from "./ProductStyle"
import GlobalStyles from "../../global"
import "../../main.css"

import Header from '../../components/Header'

function App() {
  return (
    <div id="app">
      <GlobalStyles/>
      <Header/>

      <SC.ContainerContent>
        <SC.ContainerImages>

        </SC.ContainerImages>
        <SC.ContainerProdInfos>
          <SC.TitleProduct>CAMISETA REGULAR DOUBLE² ALTERNATIVE AMARELA</SC.TitleProduct>
          <SC.TextCod>Cód. Ref. C 8843</SC.TextCod>
          <SC.ContainerStars>
            <FaRegStar color={"var(--pastel-yellow)"} size="2rem"/>
            <FaRegStar color={"var(--pastel-yellow)"} size="2rem"/>
            <FaRegStar color={"var(--pastel-yellow)"} size="2rem"/>
            <FaRegStar color={"var(--pastel-yellow)"} size="2rem"/>
            <FaRegStar color={"var(--pastel-yellow)"} size="2rem"/>
            <SC.TextAvaliacoes>(13 Avaliações)</SC.TextAvaliacoes>
          </SC.ContainerStars>
          <SC.ContainerPrice>
            <SC.TextDiscount>R$ 59,99</SC.TextDiscount>
            <SC.TextPrice>R$ 49,99</SC.TextPrice>
          </SC.ContainerPrice>
          <SC.Divisor/>
          <SC.TitleSize>Tamanho</SC.TitleSize>
          <SC.ContainerSizes>
            <SC.CircleSize>
              <SC.TextSize>PP</SC.TextSize>
            </SC.CircleSize>
            <SC.CircleSize>
              <SC.TextSize>P</SC.TextSize>
            </SC.CircleSize>
            <SC.CircleSize>
              <SC.TextSize>M</SC.TextSize>
            </SC.CircleSize>
            <SC.CircleSize>
              <SC.TextSize>G</SC.TextSize>
            </SC.CircleSize>
            <SC.CircleSize>
              <SC.TextSize>GG</SC.TextSize>
            </SC.CircleSize>
            <SC.CircleSize>
              <SC.TextSize>XG</SC.TextSize>
            </SC.CircleSize>
          </SC.ContainerSizes>
          <SC.ContainerQuantity>
            <SC.TextQuantity>Quantidade</SC.TextQuantity>
            <SC.SelectorQuantity>
              <SC.SelectorOption>1</SC.SelectorOption>
            </SC.SelectorQuantity>
          </SC.ContainerQuantity>
          <SC.ContainerButtons>
            <SC.ButtonBuy>Comprar agora</SC.ButtonBuy>
            <SC.ButtonAddWallet>Adicionar ao carrinho</SC.ButtonAddWallet>
          </SC.ContainerButtons>
          <SC.ContainerShipping>
            <SC.TitleCalc>Calcule o frete</SC.TitleCalc>
            <SC.InputCalc placeholder="CEP"></SC.InputCalc>
            <SC.ButtonCalc>OK</SC.ButtonCalc>
          </SC.ContainerShipping>
          <SC.ContainerShippingInfos>
            <SC.TextAddress>Rua Monte Plano, Vila Margarida - Sao Vicente, SP</SC.TextAddress>
            <SC.TitleShipping>Jadlog - Normal - de 1 a 5 dias úteis</SC.TitleShipping>
            <SC.TextShippingPrice>R$47,32</SC.TextShippingPrice>
          </SC.ContainerShippingInfos>
        </SC.ContainerProdInfos>
      </SC.ContainerContent>
    </div>
  );
}

export default App;
