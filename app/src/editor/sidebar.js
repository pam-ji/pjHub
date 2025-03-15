import { createElement } from "react";
import { Button, setStyle, time } from "./utils";
function Sidebar({ menuSelection, setMenuSelection, styles, selected, currentCanvas }) {
  const AddElements = () => {
    return (
      <div className="w-full h-full bg-slate-300 flex flex-col gap-2 justify-start items-center">
        <div className="w-full h-[20%] border-4 border-black bg-slate-300 flex items-center justify-center border-1 flex-col gap-2">
          <div className="h-[20%] w-full  bg-slate-500  flex flex-wrap justify-content: space-around  text-white text-xl"> <h1>Basic</h1></div>
          <div className="w-[90%] h-full grid grid-cols-3 gap-4 ">
            <Button size={styles.mediumWidth} onClick={() => createElement({ id: "canvas_" + time(), type: "canvas" })} symbol={"https://www.svgrepo.com/show/523118/add-folder.svg"} ></Button>
            <Button size={styles.mediumWidth} onClick={() => createElement(
              {
                id: "container_" + time(),
                type: "container",
                values: { style: { width: styles.containerWidth + "px", height: styles.containerWidth + "px" } },
                parent: selected != -1 ? selected : currentCanvas
              })}
              symbol={"https://www.svgrepo.com/show/522736/add-square.svg"} >
            </Button>
            <Button size={styles.mediumWidth} onClick={() => createElement({
              id: "table_" + time(),
              type: "table",
              values: {
                style: { width: styles.containerWidth + "px", height: styles.containerWidth + "px" },
                table_style: styles.default_table_style,
                headers: ["Col1", "Col2"], rows: [["lorem", "ipsum"], ["lorem", "ipsum"]]
              },
              parent: selected != -1 ? selected : currentCanvas
            })}
              symbol={"https://www.svgrepo.com/show/501026/table.svg"} >
            </Button>
            <Button size={styles.mediumWidth} onClick={() => createElement({
              id: "image_" + time(),
              type: "image",
              values: { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80", alt: "image" },
              parent: selected != -1 ? selected : currentCanvas
            })}
              symbol={"https://www.svgrepo.com/show/335206/add-image.svg"} >
            </Button>
            <Button size={styles.mediumWidth} onClick={() => createElement({
              id: "text_" + time(),
              type: "text",
              values: { text: "lorem ipsum" },
              parent: selected != -1 ? selected : currentCanvas
            })}
              symbol={"https://www.svgrepo.com/show/529996/text-field.svg"} >
            </Button>
            <Button size={styles.mediumWidth} onClick={() => createElement({
              id: "link_" + time(),
              type: "link",
              values: { href: "https://www.google.com/", alt: "link" },
              parent: selected != -1 ? selected : currentCanvas
            })}
              symbol={"https://www.svgrepo.com/show/528358/link-round.svg"} >
            </Button>
          </div>
        </div>
      </div>
    )
  }
  function Css() {
    return (
      <div className="w-full h-full bg-slate-300 flex flex-col gap-2 justify-center items-start">
        <div className="w-full h-[20%] border-4 border-black bg-slate-300 flex items-center justify-center border-1 flex-col gap-2">
          <div className="h-[20%] w-full  bg-slate-500  flex flex-wrap justify-content: space-around  text-white text-xl"> <h1>Basic</h1></div>
        </div>
      </div>
    )
  }
  return (<div class="w-full h-full bg-slate-200 flex flew-row items-center justify-center" style={{ width: styles.sidebarWidth }}>
    <div className="w-full h-full bg-slate-700 gap-5 pt-5 flex flex-col items-center justify-start" style={{ width: styles.sidebarWidth }}>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("add") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "add" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "add" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/528832/add-circle.svg"} >
      </Button>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("edit") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "edit" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "edit" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/523734/settings.svg"} >
      </Button>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("ai") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "ai" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "ai" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/485493/ai.svg"} >
      </Button>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("presets") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "presets" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "presets" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/342577/equalizer.svg"} >
      </Button>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("css") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "css" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "css" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/478223/css.svg"} >
      </Button>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("buttons") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "buttons" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "buttons" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/140088/buttons.svg"} >
      </Button>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("code") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "code" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "code" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/529520/code-square.svg"} >
      </Button>
      <Button size={styles.bigWidth} onClick={(id) => { setStyle(id, "red"); setMenuSelection("export") }}
        background="black"
        onMouseOver={(id) => { menuSelection != "export" && setStyle(id, "red") }}
        onMouseExit={(id) => { menuSelection != "export" && setStyle(id, "black") }}
        symbol={"https://www.svgrepo.com/show/497075/export-2.svg"} >
      </Button>
    </div>
    <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-start" >
      <div className="w-full h-[10%] bg-slate-500 flex flex-col items-center justify-center text-2l text-white text-center">
        <h1>Edit</h1>
      </div>
      {menuSelection == "add" && <AddElements />}

    </div>
  </div>
  )
}
export default Sidebar