import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  on: {
    x: "46px",
    backgroundColor: "green",
  },
  off: {
    x: 0,
    backgroundColor: "red",
  },
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const Toggle = ({ locked, setLocked, title = "Toggle Switch" }) => {
  locked && console.log("Worked");

  return (
    <div>
      <h4>{title}</h4>
      <Switch onClick={() => setLocked(!locked)}>
        <Slider
          locked={locked}
          variants={variants}
          initial={false}
          animate={locked ? "on" : "off"}
          transition={spring}
        />
      </Switch>
    </div>
  );
};

const Switch = styled.label`
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 34px;
  background: lightgrey;
  border: 2px solid darkgrey;
  border-radius: 25px;
  align-items: center;
  padding: 0.1rem 0.3rem 0.3rem 0.3rem;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Slider = styled(motion.div)`
  width: 30px;
  height: 30px;
  background: grey;
  border-radius: 20px;
  border: 2px solid darkgrey;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
