import React from 'react';
import { createGlobalStyle } from "styled-components";
import MainContainer from './containers/MainContainer/MainContainer';

const GlobalStyle = createGlobalStyle({
  "*": {
    margin: 0,
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    outline: "none"
  },
  "body::-webkit-scrollbar": {
    width: "6px"
  },
  "body::-webkit-scrollbar-track": {
    background: "#383e49"
  },
  "body::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    background: "#fff"
  },
  "p": {
    width: "auto",
    fontSize: "18px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  ".Modal": {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    zIndex: 1000
  }
});

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <MainContainer />
    </div>
  );
}

export default App;
