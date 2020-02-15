import React, { useContext } from "react";
import { BoardContext } from "./AppContext";
import Board from "./components/Board";

function App() {
  const {
    state: { board }
  } = useContext(BoardContext);

  return <Board board={board} />;
}

export default App;
