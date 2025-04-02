import { useControls } from "react-zoom-pan-pinch";
function bg(val) { return `linear-gradient(to right, rgb(255,50,50), rgb(${val[0]}, ${val[1]}, ${val[2]})` }
function setStyle(id, val) {
    const doc = document.getElementById(id)
    doc.style.background = (val);
}

// the wireframe function to create buttons
const Button = ({ onClick, text, size, symbol, background = "white", onMouseOver, onMouseExit }) => {
    const id = "button_" + time()
    if (onMouseOver == undefined) {
        onMouseOver = () => { setStyle(id, "red") }
    }
    if (onMouseExit == undefined) {
        onMouseExit = () => { setStyle(id, "white") }
    }
    return (
        <div id={id} className=" h-full  bg-slate-300 rounded-md flex items-center justify-center"
            onMouseEnter={(() => onMouseOver(id))}
            onMouseLeave={(() => {
                onMouseExit(id)
            })}
            style={{ width: size, height: size, background: (background) }} >
            <button id={"child_" + id} className="bg-white w-[80%] h-[80%] border-slate-800 border-1 flex items-center justify-center rounded-md" onClick={onClick}>
                {text && text}
                {symbol && <img src={symbol} alt="" style={{ width: size, height: size }} />}
            </button>
        </div>
    );
}
const ZoomControls = (styles) => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
        <div class="">
            <div className="w-full h-full bg-slate-300 flex items-center justify-center flex-row gap-2">
                <Button onClick={() => zoomIn()} width={styles.smallWidth} symbol={"https://www.svgrepo.com/show/522719/zoom-plus.svg"} />
                <Button onClick={() => zoomOut()} width={styles.smallWidth} symbol={"https://www.svgrepo.com/show/522717/zoom-minus.svg"} />
                {/* <Button onClick={() => resetTransform()} width={ styles.smallWidth}text="reset"/> */}
            </div>
        </div>
    );
};
const time = () => performance.now();
export { ZoomControls, Button, time, setStyle }