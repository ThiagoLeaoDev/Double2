import React from 'react'

import * as SC from "./components/Header/HeaderStyle"

import "./main.css"

import GlobalStyles from "./global"
import Header from './components/Header'

import Banner from "./assets/banner.png"


function App() {
  return (
    <div id="app">
      <GlobalStyles/>
      <Header/>
      <SC.Linha src={Banner}/>
    </div>
  );
}

export default App;
