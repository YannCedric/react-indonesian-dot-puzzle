import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../AppContext";

const colorA = "#5C6AC4";
const colorB = "lightgrey";
const getMyColor = props => (props.isOn ? colorA : colorB);

const CaseStyle = styled.div`
  background-color: ${getMyColor};
  transition-duration: 0.2s;
  cursor: pointer;
  border-radius: .5rem;
  :hover {
    opacity: 0.9;
  }
  :active {
    transition-duration: 0.1s;
    box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.4);
  }
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(${props => props.isOn ? 180:0}deg);
`;

function Case({ token, x, y }) {
  const { dispatch } = useContext(BoardContext);

  return (
    <CaseStyle
      onClick={() => {
        dispatch({ type: "PLAY", payload: { x, y } });
      }}
      isOn={token === 1}
    />
  );
}

export default Case;
