import React from "react";
import styled from "styled-components"

const colorA = 'grey';
const colorB = 'lightgrey';
const getMyColor = props => props.isOn ? colorA:colorB

const CaseStyle = styled.div`
    background-color: ${getMyColor} ;
    transition-duration: .2s;
    cursor: pointer;
    :hover {
        opacity: .9;
    }
    :active {
        transition-duration: .1s;
        box-shadow: inset 0px 0px 3px 1px rgba(0,0,0,.4);
    }
` 

function Case({ token, index }) {
  const isOn = Number(token) === 1;

  return <CaseStyle isOn={isOn}/>;
}

export default Case;
