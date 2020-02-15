import React from 'react';
import styled from "styled-components"
import Case from './Case';


const BoardStyle = styled.div`
    width: 500px;
    height: 500px;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(${props => props.size}, 1fr);
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
