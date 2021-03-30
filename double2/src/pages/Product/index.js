import React from 'react'

import * as SC from "../../components/Header/HeaderStyle"
import GlobalStyles from "../../global"
import "../../main.css"

import Header from '../../components/Header'

function App() {
  return (
    <div id="app">
      <GlobalStyles/>
      <Header/>
      <h1>olá mundo</h1>
    </div>
  );
}

export default App;
