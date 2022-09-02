import React, { useState, useRef } from "react";
import styled from "styled-components";

import { DashboardData } from "../utils/dashboardData";
import { Panel } from "../components/panel";

let dragItemIndex;

export const getRef = (index) => {
  dragItemIndex.current = index;
  console.log(index);
};

export const Dashboard = () => {
  const [items, setItems] = useState();
  const [locked, setLocked] = useState(false);

  dragItemIndex = useRef();

  const getIndex = (index) => {
    dragItemIndex.current = index;
    console.log(index);
  };

  return (
    <Board>
      {DashboardData.map((item, index) => (
        <Panel item={item} draggable={!locked} index={index} />
      ))}
    </Board>
  );
};

const Board = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
