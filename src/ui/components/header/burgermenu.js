import React from 'react';
import styled from "styled-components";

const Burgermenucontainer = styled.div`
  display: ${props => props.$display? `block` : `none`};
  position: fixed;
  width: 768px;
  height: 100%;
  top: 56px;
  background-color: forestgreen;
`
const Burgermenu = (props) => {
    return (
        <Burgermenucontainer {...props}/>
    );
};

export default Burgermenu;