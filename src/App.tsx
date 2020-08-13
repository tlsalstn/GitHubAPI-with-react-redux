import React from 'react';
import { createGlobalStyle } from "styled-components";
import MainContainer from './containers/MainContainer/MainContainer';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  outline: none;
}

html,
body,
img {
  margin: 0;
  width: 100%;
}

body::-webkit-scrollbar {
  width: 6px;
}

body::-webkit-scrollbar-track {
  background: #383e49;
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #fff;
}
`;

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <MainContainer />
    </div>
  );
}

export default App;
