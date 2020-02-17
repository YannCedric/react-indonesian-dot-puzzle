import React from "react";
import styled from "styled-components";
import Board from "./components/Board";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
`;

function MainMenu() {

  return (
    <Main>
        <Board/>
    </Main>
  );
}

export default MainMenu;
