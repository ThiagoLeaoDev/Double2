import React from 'react'

import * as SC from "./ProductCardStyle"

import ProductImage from "../../assets/blusa_preta.png"

export default function index() {
  return (
    <SC.CardProduct href="#">
      <SC.ImageProduct src={ ProductImage }/>

    </SC.CardProduct>
  )
}
