import React, { useState } from 'react'
import { IconContext } from "react-icons";
import {  BiHeart } from "react-icons/bi";
import { AnimatePresence } from "framer-motion"


import * as SC from "./ProductCardStyle"

import ProductImage from "../../assets/blusa_preta.png"
import NewFlag from "../../assets/new_flag.svg"

export default function Index(props) {
  const [Hover, setHover] = useState(false);
  
  return (
    <SC.CardProduct href="#"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>

      <SC.NewFlag>
        <SC.ImageFlag src={ NewFlag }/>
        <SC.TextFlag>new</SC.TextFlag>
      </SC.NewFlag>

      <SC.ContainerHeart href="#">
        <IconContext.Provider value={{ color: "var(--grey)", size: "2.5em"}}>
          <BiHeart/>
        </IconContext.Provider>
      </SC.ContainerHeart>

      <SC.SaleFlag>
        <SC.TextSale>40% off</SC.TextSale>
      </SC.SaleFlag>
      <AnimatePresence>
        {
          Hover && (
            //initial estado inicial, animate estado final da animação,
            //exit quando o componente for desmontado
            <SC.ContainerButtons
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}>
              <SC.ButtonView href="#">
                <SC.ButtonProductText>Visualizar produto</SC.ButtonProductText>
              </SC.ButtonView>
              <SC.ButtonBuy  to={props.linkProduct}>
                <SC.ButtonProductText>Comprar agora</SC.ButtonProductText>
              </SC.ButtonBuy>
            </SC.ContainerButtons>
          )
        }
      </AnimatePresence>

      <SC.ImageProduct src={ ProductImage }/>

      <SC.ContainerText>
        <SC.ProductTitle>CAMISETA REGULAR DOUBLE² BASIC PRETA</SC.ProductTitle>
        <SC.ProductDiscount>R$ 59,99</SC.ProductDiscount>
        <SC.ProductValue>R$ 49,99</SC.ProductValue>
      </SC.ContainerText>
      
    </SC.CardProduct>
  )
}
