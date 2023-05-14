import styled from "styled-components"
import {apiResponceMenu} from "@/api/api";
import Link from "next/link";
import {useRouter} from "next/router";


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

const MenuItem = styled(Link)`
  font-family: 'DIN Next W1G';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: black;
  text-decoration: none;
  text-decoration: ${props=>(props.$active? `underline`:`none`)};
`


const Topmenu = () => {
    const pathname  = useRouter();
    const renderMenuItems=apiResponceMenu.map(i=>
        <MenuItem $active={i.link===pathname.asPath} key={i.title.toString()} href={i.link}>{i.title}</MenuItem>
    )


    return (
        <TopmenuContainer>
            {renderMenuItems}
        </TopmenuContainer>
    );
};

export default Topmenu;