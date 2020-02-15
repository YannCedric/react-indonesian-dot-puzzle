import React, { useReducer, useEffect } from "react";
import Board from "./components/Board";
import { reducer, DEFAULT_STATE } from "./redux/reducer";

let lines = ["4 9 50 1010010111001010", "3 100 2000 111001011"];

function App() {
  let [size, , , boardString] = lines[0].split(" ");

  let [{ board }, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    dispatch({
      type: "INIT_STATE",
      payload: { n: size, boardString: boardString }
    });
  }, [size, boardString]);

  return <Board board={board}/>;
}

export default App;
