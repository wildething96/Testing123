import React from "react";
import styled from "styled-components";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";

import { panelData } from "../utils/panelData";
import { currentPanels } from "../utils/currentPanels";
import { Toggle } from "../components/toggle";
import { Selection } from "../components/selection";
// import { CgCloseO } from "./"
import "./styles/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const layout = [
  { i: "Declarations", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 0, y: 0, w: 2, h: 1 },
  { i: "summoned-skull", x: 1, y: 0, w: 1, h: 1 },
];

const GridItemWrapper = styled.div`
  border-radius: 10px;
  border 2px solid darkgrey;
  cursor: pointer;
  background:#28282B;
  border: solid 2px #fff;
  box-shadow:
    inset 0 0 50px #fff,      /* inner white */
    inset 20px 0 80px #f0f,   /* inner left magenta short */
    inset -20px 0 80px #0ff,  /* inner right cyan short */
    inset 20px 0 300px #f0f,  /* inner left magenta broad */
    inset -20px 0 300px #0ff, /* inner right cyan broad */
    0 0 50px #fff,            /* outer white */
    -10px 0 80px #f0f,        /* outer left magenta */
    10px 0 80px #0ff;         /* outer right cyan */
}
`;

const GridItemContent = styled.div``;

const Root = styled.div`
  padding: 16px;
`;

export const Dashboard_b = () => {
  const [lock, setLock] = useState(true);
  const [panels, setPanels] = useState(currentPanels);
  const [panelSelection, setPanelSelection] = useState(false);

  let panelArr = Object.keys(panelData);

  const removePanel = (index) => {
    let tempArr = [...panels];
    tempArr.splice(index, 1);
    setPanels(tempArr);
    console.log(tempArr);
    let panelData = tempArr;
    console.log(panelData);
  };

  const addPanel = (panel) => {
    let tempArr = [...panels];
    tempArr.push(panel);
    setPanels(tempArr);
    setPanelSelection(false);
  };

  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };
  return (
    <SRoot locked={lock}>
      {" "}
      <button onClick={() => setPanelSelection(!panelSelection)}>
        Add Panel +
      </button>
      <Toggle
        locked={lock}
        setLocked={setLock}
        title="Edit Dashboard"
        onClick={() => setLock(!lock)}
      />
      {panelSelection && <Selection addPanel={addPanel} panelArr={panelArr} />}
      <ResponsiveGridLayout
        layouts={getLayouts()}
        measureBeforeMount={true}
        isResizable={lock}
        isDraggable={lock}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={320}
        width={300}
        margin={[30, 30]}
        onLayoutChange={handleLayoutChange}
        // onResizeStop={function (e, layout) {
        //   this.chartRefs[layout.i - 1].chart.reflow();
        // }.bind(this)}
      >
        {panels.map(
          (panel, index) =>
            panelData[panel] && (
              <GridItemWrapper key={index}>
                {lock && <Top onClick={() => removePanel(index)}>X</Top>}
                <GridItemContent>
                  <Headers>{panelData[panel]["title"]}</Headers>
                  {panelData[panel]["component"]}
                </GridItemContent>
              </GridItemWrapper>
            )
        )}
      </ResponsiveGridLayout>
    </SRoot>
  );
};

const Top = styled.div`
  text-align: end;  
  position: absolute;
  right 10px;
  top: 5px;
`;

const Headers = styled.h2`
  // text-decoration: underline;
`;

const SRoot = styled(Root)`
  react-grid-item > .react-resizable-handle {
    position: absolute;
    ${({ locked }) => !locked && "display: none"}
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-grid-item > .react-resizable-handle::after {
    ${({ locked }) => !locked && "display: none"}
    content: "";
    position: absolute;
    right: 7px;
    bottom: 7px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(255, 255, 255, 0.4);
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    cursor: se-resize;
  }
`;
