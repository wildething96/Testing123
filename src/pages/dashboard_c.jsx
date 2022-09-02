import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import "./styles/styles.css";
const ResponsiveGridLayout = WidthProvider(Responsive);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const Header = () => {
  return (
    <div>
      <header className="window-header">
        <div className="logo-container">
          <div className="app-logo">
            <span className="app-name">Widget Name</span>
          </div>
        </div>
        <div className="actions-container">
          {/* <button className="settings-window window-button-style">
            <svg className="window-controls-icon">
              <use href="#window-settings"></use>
            </svg>
          </button> */}
          {/* <button className="close-window window-button-style">
            <svg className="window-controls-icon">
              <use href="#window-close"></use>
            </svg>
          </button> */}
        </div>
      </header>
    </div>
  );
};

export default class Dashboard_c extends Component {
  

  render() {
    const gridItems = [
      { id: 1, name: "Item One" },
      { id: 2, name: "Item Two" },
      { id: 3, name: "Item Three" },
      { id: 4, name: "Item Four" },
      { id: 5, name: "Item Five" },
      { id: 6, name: "Item Six" },
      { id: 7, name: "Item Seven" },
      { id: 8, name: "Item Eight" },
      { id: 9, name: "Item Nine" },
    ];

    const layout = [
      { i: "1", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 },
      { i: "2", x: 5, y: 0, w: 2, h: 1, minW: 2, minH: 1 },
      { i: "3", x: 8, y: 0, w: 3, h: 2, minW: 2, minH: 1 },
      { i: "4", x: 0, y: 3, w: 5, h: 2, minW: 2, minH: 1 },
      { i: "5", x: 5, y: 3, w: 3, h: 2, minW: 2, minH: 1 },
      { i: "6", x: 8, y: 3, w: 3, h: 2, minW: 2, minH: 1 },
      { i: "7", x: 0, y: 6, w: 5, h: 2, minW: 2, minH: 1 },
      { i: "8", x: 5, y: 6, w: 3, h: 2, minW: 2, minH: 1 },
      { i: "9", x: 8, y: 6, w: 3, h: 2, minW: 2, minH: 1 },
    ];

    return (
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount={true}
        className="layout"
        rowHeight={this.props.rowHeight}
        isDragable={true}
        isResizable={true}
        onDrag={this.onDragging}
        onDragStop={this.onMoveCard}
        margin={[30, 30]}
        // onResizeStop={function (e, layout) {
        //   this.chartRefs[layout.i - 1].chart.reflow();
        // }.bind(this)}
      >
        {gridItems.map((item, i) => {
          return (
            <div key={item.id}  className="grid-item">
              <Header />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    );
  }
}
