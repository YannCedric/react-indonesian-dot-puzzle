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

function Board({size=4,boardString=""}) {
  const cards = [...boardString].map( (token,i) => <Case token={token} index={i}/>)

  return (
    <BoardStyle size={size} >
      {cards}
    </BoardStyle>
  );
}

export default Board;
