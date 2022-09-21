import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #63b0c1;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
