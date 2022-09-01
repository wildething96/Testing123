import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { getRef } from "../pages/dashboard";

export const Panel = ({ item, index, draggable }) => {
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();
  const refBox = useRef();
  const refLeft = useRef();
  const refTop = useRef();
  const refRight = useRef();
  const refBottom = useRef();

  const handleDragStart = async (e) => {
    console.log("Dragging");
    getRef(index);
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => setDragging(true), 0);
  };

  const handleDragEnd = () => {
    // console.log(index);
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  return (
    <Panels
      dragging={dragging}
      draggable={draggable}
      resizable
      width={item.width}
      onDragStart={(e) => handleDragStart(e)}
      //   onDragEnd={handleDragEnd}
    >
      {item.name}
      <div ref={refBox}></div>
      <div ref={refLeft}></div>
      <div ref={refTop}></div>
      <div ref={refRight}></div>
      <div ref={refBottom}></div>
    </Panels>
  );
};

const Panels = styled.div`
  width: ${({ width }) => width}px;
  height: 200px;
  background-color: ${({ dragging }) => (dragging ? "black" : "white")};
  color: black;
  margin: 1rem;
  border-radius: 8px;
  cursor: pointer;
  resize: both;
  opacity: 1;
`;
