import React from 'react';
import Board from './components/Board';

let lines = [
  "4 9 50 1010010111001010",
  "3 100 2000 111001011",
]

function App() {
  let [size, , ,boardString] = lines[0].split(" ")

  return (
    <Board size={size} boardString={boardString}/>
  );
}

export default App;
