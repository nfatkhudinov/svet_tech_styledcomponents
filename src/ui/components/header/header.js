import React from 'react';
import styled from "styled-components";
import Logo from "@/ui/components/header/logo";
import Topmenu from "@/ui/components/header/topmenu";
import Button from "@/ui/components/button/button";
import Burgermenu from "@/ui/components/header/burgermenu";
import {useState} from "react";
import {apiResponceMenu} from "@/api/api";

const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  gap: 28px;
`




const Header = (props) => {

    const [showBurger, setShowBurger] = useState(false);



    return (
        <>
        <HeaderContainer {...props}>
            <Button $burgermenu={true} onClick={()=>setShowBurger(!showBurger)}/>
            <Logo/>
            <Topmenu/>
            <Button $searchbutton={true}/>
            <Button $likebutton={true}/>
            <Button $langbutton={true}/>
        </HeaderContainer>
    <Burgermenu $display={showBurger}/>
        </>
    );
};

export default Header;