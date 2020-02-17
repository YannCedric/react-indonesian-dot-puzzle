import React, { 
  // useEffect, 
  useReducer 
} from "react";
import { DEFAULT_STATE, reducer } from "./redux/reducer";
import { AppProvider } from "@shopify/polaris";

// let lines = ["4 9 50 1010010111001010", "3 100 2000 111001011"];

const BoardContext = React.createContext(null);

function BoardContextProvider({ children }) {
  // let [size, , , boardString] = lines[0].split(" ");

  let [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  // useEffect(() => {
  //   dispatch({
  //     type: "INIT_STATE",
  //     payload: { n: size, boardString: boardString }
  //   });
  // }, [size, boardString]);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      <AppProvider>
        {children}
      </AppProvider>
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardContextProvider };
