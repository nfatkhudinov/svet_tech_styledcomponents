import React from 'react';
import styled from "styled-components";
import logoImage from "./logo.svg";
import logoImage_sm from "./logo_sm.svg";
import Link from "next/link";

const LogoContainer = styled(Link)`
  background-color: white;
  background-image: url(${logoImage.src});
  background-repeat: no-repeat;
  background-position: center center;
  width: 134px;
  height: 38px;
  
  
  
  @media (max-width: 1440px) {
    width: 116px;
    height: 32px;
    background-size: 116px 29px;
    margin: 0 0 0 auto;
    order: 2;
  };
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    background-image: url(${logoImage_sm.src});
    background-size: 116px 29px;
    order: 2;
  };
`

const Logo = (props) => {
    return (
        <LogoContainer {...props} href={'/'}></LogoContainer>
    );
};

export default Logo;