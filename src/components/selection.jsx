import React from "react";
import styled from "styled-components";

export const Selection = ({ panelArr, addPanel }) => {
  return (
    <Container>
      {panelArr.map((item) => (
        <div onClick={() => addPanel(item)}>{item}</div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  height: 200px;
  width: 200px;
  background: blue;
  z-index: 1000;

  div {
    color: white;
    padding: 1rem;
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`;
