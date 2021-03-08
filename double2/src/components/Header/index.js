import React from 'react';

import * as SC from "./HeaderStyle"

import Logo from "../../assets/logo.svg"
import Shop from "../../assets/shop.svg"
import Heart from "../../assets/heart.svg"
import User from "../../assets/user.svg"
import Search from "../../assets/search.svg"

// import { Container } from './styles';

function Header() {
  return(
    <SC.Tabbar>
      <SC.ContainerLogo>
        <SC.IconDouble src={Logo}/>
      </SC.ContainerLogo>

      <SC.ContainerOptions>
        <SC.TabOption href="#">
          <SC.TextOption>ÍNICIO</SC.TextOption>
        </SC.TabOption>
        <SC.TabOption href="#">
          <SC.TextOption>LANÇAMENTOS</SC.TextOption>
        </SC.TabOption>
        <SC.TabOption href="#">
          <SC.TextOption>LINHAS</SC.TextOption>
        </SC.TabOption>
        <SC.TabOption href="#">
          <SC.TextOption>PRODUTOS</SC.TextOption>
        </SC.TabOption>
      </SC.ContainerOptions>

      <SC.ContainerIcons>
        <SC.HoverIcon href="#">
          <SC.MenuIcon src={Search}/>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <SC.MenuIcon src={User}/>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <SC.MenuIcon src={Heart}/>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <SC.MenuIcon src={Shop}/>
        </SC.HoverIcon>
      </SC.ContainerIcons>
    </SC.Tabbar>
  );
}

export default Header;