import React from 'react'

import Banner from "./assets/banner.png"

import * as SC from "./components/Header/HeaderStyle"
import GlobalStyles from "./global"
import "./main.css"

import Header from './components/Header'
import CardProduct from './components/Product_Card'

function App() {
  return (
    <div id="app">
      <GlobalStyles/>
      <Header/>
      <SC.Linha src={Banner}/>
      <CardProduct/>
    </div>
  );
}

export default App;
