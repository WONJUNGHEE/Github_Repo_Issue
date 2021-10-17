import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
	body {
		padding: 0;
    margin: 0;
    
    
  }
  #root {
    height: 100%;
  }
`;
const Container = styled.div`
  padding-top: 20px;
  height: 100%;
`;

ReactDOM.render(
  <Container>
    <GlobalStyle />
    <App />
  </Container>,
  document.getElementById("root")
);
