import React from 'react';
import styled from "styled-components"

const TopmenuContainer = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: auto;
  @media (max-width: 1440px) {
    display: none;
  };
  @media (max-width: 768px) {
    display: none;
  };
`

const MenuItem = styled.a`
  font-family: 'DIN Next W1G';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;    
  text-decoration: ${props=>props.$active?"underline":"none"};
`
const Topmenu = () => {

    return (
        <TopmenuContainer>
            <MenuItem $active={true}>каталог</MenuItem>
            <MenuItem>решения</MenuItem>
            <MenuItem>учебный центр</MenuItem>
            <MenuItem>услуги</MenuItem>
            <MenuItem>о компании</MenuItem>
            <MenuItem>портфолио</MenuItem>
            <MenuItem>дистрибьюторы</MenuItem>
        </TopmenuContainer>
    );
};

export default Topmenu;