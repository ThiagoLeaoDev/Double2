import React from 'react';

import * as SC from "./HomeStyle";
import GlobalStyles from "../../global";
import "../../main.css"

import Header from '../../components/Header';
import Slide from '../../components/Slide';
import CardProduct from '../../components/Product_Card';

function Home() {
  return (
    <div id="app">
      <GlobalStyles/>
      <Header/>
      <Slide/>
      {/* <SC.Linha src={Banner}/> */}
      <SC.ContainerLine>
        <SC.ContainerLineLink>
          <SC.TextLineLink>Visualizar Linha Completa</SC.TextLineLink>
        </SC.ContainerLineLink>
        <CardProduct linkProduct="/product"/>
        <CardProduct linkProduct="/product"/>
        <CardProduct linkProduct="/product"/>
        <CardProduct linkProduct="/product"/>
        <CardProduct linkProduct="/product"/>
        <CardProduct linkProduct="/product"/>
        <CardProduct linkProduct="/product"/>
      </SC.ContainerLine>
      
    </div>
  );
}

export default Home;