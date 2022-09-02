import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { LineChart } from "./lineChart";
import { DecData } from "../utils/decData";

export const Declarations = () => {
  const [graphData, setGraphData] = useState({
    labels: DecData.map((data) => data.month),
    datasets: [
      {
        label: "Completed",
        data: DecData.map((data) => data.completed),
        fill: false,
        borderColor: "#c96859",
        borderWidth: 2,
      },
      {
        label: "Outstanding",
        data: DecData.map((data) => data.outstanding),
        fill: false,
        borderColor: "#4bbfb4",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <Stats>
        <div>
          <div>Completed</div>
          <div>3</div>
        </div>
        <div>
          <div>Outstanding</div>
          <div>1</div>
        </div>
        <div>
          <div>Stat</div>
          <div>0</div>
        </div>
      </Stats>
      <LineChart chartData={graphData} />
    </div>
  );
};

const Stats = styled.div`
  display: flex;
  justify-content: space-evenly;
  div > div:first-child {
    border-bottom: 3px groove white;
    margin-bottom: 0.2rem;
    font-weight: 600;
  }
`;
