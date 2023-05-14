import React, {useState} from 'react';
import styled from "styled-components";
import {apiResponceMenu} from "@/api/api";
import {useRouter} from "next/router";
import Link from "next/link";

const Burgermenucontainer = styled.div`
  
  display: ${props => props.$display? `flex` : `none`};
  flex-direction: column;
  position: fixed;
  width: 768px;
  top: 56px;
  background-color: black;
  opacity: 1;
  padding: 20px;
`

const BurgerMenuItem = styled(Link)`
  color: white;
  text-decoration: ${props=>props.$active? 'underline':'none'};
  font-size: 15pt;
`
const Burgermenu = (props) => {
    const pathname  = useRouter();
    const renderMenuItems=apiResponceMenu.map(i=>
        <BurgerMenuItem $active={i.link===pathname.asPath} key={i.title.toString()} href={i.link}>{i.title}</BurgerMenuItem>
    )

    const [visibility, setVisibility] = useState(true);
    return (
        <Burgermenucontainer {...props} onClick={props.$handleClick}>{renderMenuItems}</Burgermenucontainer>
    );
};

export default Burgermenu;