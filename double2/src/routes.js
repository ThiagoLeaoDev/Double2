import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

export default function Routes() {
  return (
    <BrowserRouter>
      {/*exact faz com que o react-router-dom verique o
      caminho por completo e não apenas o início do path */}
      <Route component={Home} path="/" exact/>
      <Route component={Product} path="/product" />
    </BrowserRouter>
  )
}
