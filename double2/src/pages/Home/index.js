import React from 'react';

import * as SC from "../../components/Header/HeaderStyle";
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
      <CardProduct linkProduct="/product"/>
    </div>
  );
}

export default Home;