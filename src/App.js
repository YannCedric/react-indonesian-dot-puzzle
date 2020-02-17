import React, { useContext, useState, useEffect } from "react";
import { BoardContext } from "./AppContext";
import Board from "./components/Board";
import styled from "styled-components";
import {RangeSlider, Button, TextField, Stack} from '@shopify/polaris';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

function App() {
  const [size, setSize] = useState(3);
  const [boardString, setBoardString] = useState('');
  
  const {
    state: { board },
    dispatch,
  } = useContext(BoardContext);

  useEffect(() => {
    dispatch({type: 'INIT_SIZE', payload: {n: size}})
  },[size,dispatch]) 

  return (
    <Main>
      <Menu>
        <Stack vertical center>
          <RangeSlider
            label={`Size: ${size}`}
            value={size}
            min={2}
            max={10}
            onChange={setSize}
            output
          />
        <TextField 
          label="Board String"
          placeholder="10010010..."
          value={boardString}
          onChange={setBoardString}
          connectedRight={<Button primary>Generate</Button>}
        />
        </Stack>
      </Menu>
      <Board board={board} />
    </Main>
  );
}

export default App;
