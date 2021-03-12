import React from 'react'

import * as SC from "./ProductCardStyle"

import ProductImage from "../../assets/blusa_preta.png"
import NewFlag from "../../assets/new_flag.svg"
import HeartIcon from "../../assets/heart.svg"

export default function index() {
  return (
    <SC.CardProduct href="#">

      <SC.NewFlag>
        <SC.ImageFlag src={ NewFlag }/>
        <SC.TextFlag>new</SC.TextFlag>
      </SC.NewFlag>

      <SC.ContainerHeart href="#">
        <SC.Heart src={ HeartIcon }/>
      </SC.ContainerHeart>

      <SC.SaleFlag>
        <SC.TextSale>40% off</SC.TextSale>
      </SC.SaleFlag>

      <SC.ContainerButtons>
        <SC.ButtonView href="#">
          <SC.ButtonProductText>Visualizar produto</SC.ButtonProductText>
        </SC.ButtonView>
        <SC.ButtonBuy  href="#">
          <SC.ButtonProductText>Comprar agora</SC.ButtonProductText>
        </SC.ButtonBuy>
      </SC.ContainerButtons>

      <SC.ImageProduct src={ ProductImage }/>

      <SC.ContainerText>
        <SC.ProductTitle>CAMISETA REGULAR DOUBLE² BASIC PRETA</SC.ProductTitle>
        <SC.ProductDiscount>R$ 59,99</SC.ProductDiscount>
        <SC.ProductValue>R$ 49,99</SC.ProductValue>
      </SC.ContainerText>
      
    </SC.CardProduct>
  )
}
