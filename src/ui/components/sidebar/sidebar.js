import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import Arrow from "./arrow.svg"
import {useRouter} from "next/router";

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  
`

const LinkStyled = styled(Link)`
font-size: 20px;
text-decoration: none;
  color: ${(props)=>props.$active? "black":"#C4C4C4"};
  margin-left: ${(props)=>props.$active? "30px":""};
`

const ActiveMainMenuItem = styled(Link)`
background-image: url("${Arrow.src}");
  background-repeat: no-repeat;
  background-position: 0 center;
  padding-left: 30px;
  color: #C4C4C4;
  font-size: 20px;
  text-decoration: none;
`

const Sidebar = () => {

    return (
        <SidebarContainer>
            <ActiveMainMenuItem href={`/`}>Световые решения</ActiveMainMenuItem>
            <LinkStyled $active={true} href={'#'}>описание</LinkStyled>
            <LinkStyled href={'#'}>подробнее</LinkStyled>
            <LinkStyled href={'#'}>идеи</LinkStyled>
            <LinkStyled href={'#'}>задачи</LinkStyled>
            <LinkStyled href={'#'}>свет, который мотивирует</LinkStyled>
            <LinkStyled href={'#'}>рекомендуемые товары</LinkStyled>
            <LinkStyled href={'#'}>связаться с нами</LinkStyled>
            <LinkStyled href={'#'}>проекты</LinkStyled>
        </SidebarContainer>
    );
};

export default Sidebar;