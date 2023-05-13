import React from 'react';
import styled from "styled-components";
import Header from "@/ui/components/header/header";

const Container = styled.div`
  display: grid;
  grid-template-areas: 
                  "header header"
                  "sidebar content"
                  "footer footer";
  grid-template-columns: 257px 1fr;
  grid-template-rows: 80px 1fr 446px;
  
  background-color: aliceblue;
  width: 1440px;
  @media (max-width: 1440px) {
    width: 768px;
    grid-template-areas: 
                  "header"
                  "content"
                  "footer";
    grid-template-columns: 1fr;
    grid-template-rows: 56px 1fr 833px;
  };
  @media (max-width: 768px) {
    width: 375px;
    grid-template-areas: 
                  "header"
                  "content"
                  "footer";
    grid-template-columns: 1fr;
    grid-template-rows: 56px 1fr 1015px;
  };
`

const HeaderContainer = styled.div`
  grid-area: header;
`
const SidebarContainer = styled.div`
  grid-area: sidebar;
  @media (max-width: 1440px) {display: none;);
  @media (max-width: 768px) {display: none;);
`
const ContentContainer = styled.div`
  grid-area: content;
`
const FooterContainer = styled.div`
  grid-area: footer;
`


const Layout = (props) => {
    return (
        <Container>
            <HeaderContainer><Header/></HeaderContainer>
            <SidebarContainer>Sidebar</SidebarContainer>
            <ContentContainer>{props.children}</ContentContainer>
            <FooterContainer>Footer</FooterContainer>
        </Container>
    );
};

export default Layout;