import React from "react";
// import { Line } from "react-chartjs-2";
import styled from "styled-components";
// import Chart from "chart.js/auto";

export const LineChart = ({ chartData }) => {
  return (
    <Container>
      {/* <Line
        data={chartData}
        height={170}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 2

                },
              },
            ],
          },
        }}
      /> */}
    </Container>
  );
};

const Container = styled.div`
  margin: 0.5rem 2rem 0 2rem;
  background: lightgrey;
  border-radius: 15px;
  border: 7px ridge white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
