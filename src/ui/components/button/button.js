`use client`

import React from 'react';
import styled from "styled-components";
import searchImage from "./search.svg";
import langImage from "./lang.svg";
import likeImage from "./like.svg";
import likeImageHover from "./like_hover.svg";
import burgerImage from "./burger.svg";

const ButtonStyle = styled.button`
  border: 0;
  width: 40px;
  height: 40px;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  
  background-image: ${props=>(props.$searchbutton? `url(${searchImage.src})`:"")};
  margin: ${props=> props.$searchbutton? `0 0 0 auto`:undefined};
  background-image: ${props=>(props.$likebutton? `url(${likeImage.src})`:"")};
  background-image: ${props=>(props.$langbutton? `url(${langImage.src})`:"")};
  background-image: ${props=>(props.$burgermenu? `url(${burgerImage.src})`:"")};
  display: ${props=>(props.$burgermenu? `none`:"")};
  
  @media (max-width: 1440px) {
    margin: ${props=> props.$searchbutton? `0 0 0 0`:""};
    order: ${props=> props.$searchbutton? `0`:""};
    order: ${props=> props.$likebutton? `3`:""};
    order: ${props=> props.$langbutton? `4`:""};
    margin: ${props=> props.$likebutton? `0 0 0 auto`:""};
    display: ${props=>(props.$burgermenu? `initial`:"")};
  };
  
  &:hover{
    background-image: ${props=>(props.$likebutton? `url(${likeImageHover.src})`:"")};
  }
  
`
const Button = (props) => {

    return (
        <ButtonStyle {...props}>{props.name}</ButtonStyle>
    );
};

export default Button;
