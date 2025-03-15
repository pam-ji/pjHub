import "./App.css";
import { useState, useEffect, useMemo, useCallback, use, useRef, createElement } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { ZoomControls } from "./editor/utils";
import Sidebar from "./editor/sidebar";
const styles = {
  smallWidth: window.innerWidth * 0.1,
  mediumWidth: window.innerWidth * 0.025,
  bigWidth: window.innerWidth * 0.03,
  containerWidth: window.innerWidth * 0.2,
  sidebarWidth: window.innerWidth * 0.3,
  smallSidebarWidth: window.innerWidth * 0.07,
  AddElementsHeight: window.innerHeight * 0.2,
  contentWidth: 0,
  default_table_style: {
    tableStyle: {
      border: '1px solid black',
      borderCollapse: 'collapse',
      borderSpacing: '0'
    },
    headerStyle: {
      background: '#f0f0f0',
      color: '#333',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headerCellStyle: {
      borderRight: '1px solid black',
      padding: '10px',
    },
    cellStyle: {
      borderRight: '1px solid black',
      padding: '10px',
    },
    rowStyle: {
      borderRight: '1px solid black',
      padding: '10px',
    }
  }
}
styles.contentWidth = window.innerWidth - (styles.sidebarWidth)
const App = () => {
  // needs to get shifted to redux
  const [currentCanvas, setCurrentCanvas] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [menuSelection, setMenuSelection] = useState("add");
  const [draggingElement, setDraggingElement] = useState(null);
  const editorRef = useRef(null);
  return (
    <div class="w-full h-full bg-slate-200 flex flew-row items-center justify-center" style={{ width: window.innerWidth, height: window.innerHeight }}>
      {/* .......... Sidebar ....... */}
      <Sidebar
        menuSelection={menuSelection}
        setMenuSelection={setMenuSelection}
        styles={styles}
        selected={selected}
        currentCanvas={currentCanvas}
      />
      <div class=" w-full h-full flex flex-col items-center justify-center" style={{ width: styles.contentWidth }}>
        {/* .......... Editor ....... */}
        <div className="w-full h-full bg-slate-400  overflow-hidden">
          <TransformWrapper         >
            {/* .......... Zoom Controls ....... */}
            <div class="z-20 absolute top-1 right-1 border-black border-4 rounded-md p-1 bg-slate-200 flex  "
              style={{ width: window.innerWidth * 0.051, height: window.innerHeight * 0.051 }}>
              <ZoomControls />
            </div>
            <TransformComponent >
              {/* .......... User Elements ....... */}
              <div id="editor" style={{ width: window.innerWidth * 1, height: window.innerHeight * 1 }} class="scale-[35%]  ">
                {
                  <div ref={editorRef}></div>
                }
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
};
export default App;

