import React from 'react';
import styled from "styled-components"
import Case from './Case';

const caseSize = "100px";

const BoardStyle = styled.div`
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(${props => props.size}, ${caseSize});
    grid-template-rows: repeat(${props => props.size}, ${caseSize});
    align-items: stretch;
    justify-items: stretch;
` 

function Board({board=[]}) {
  const cases = board.map((row, x) => {
    return row.map((token, y) => {
      return <Case key={x+""+y} token={token} x={x} y={y}/>
    })
  })

  return (
    <BoardStyle size={board.length} >
      {cases.flat()}
    </BoardStyle>
  );
}

export default Board;
