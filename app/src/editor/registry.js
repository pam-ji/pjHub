const class_definition = {
  "canvas": {
    style: {},
  },
  "container": {
    style: {},
  },
  "table": {
    "headers": [],
    "rows": [],
    style: {},
  },
  "text": {
    text: "",
    style: {},
  },
  "image": {
    src: "",
    alt: "",
    style: {},
  },
  "link": {
    href: "",
    alt: "",
    style: {},
  },
}
const registry = new Map()
const canvas_registry = new Map()
const parents = new Map()
const children = new Map()
// the function/ event callback we use to transform css styles
const grab = ((id, event) => {
  const rect = event.target.getBoundingClientRect();
  console.log(event.clientX, event.clientY)
  console.log(rect)
  var x = (event.pageX)
  var y = (event.pageY)
  if (x != 0 && y != 0) {
    document.getElementById(id).style.top = `${y}px`
    document.getElementById(id).style.left = `${x}px`
    //transform = `translate(${x}px, ${y}px)`  
  }
})
const createElement = ({ id, type, values, parent, styles, editorRef }) => {
  const element = {}
  Object.assign(element, class_definition[type])
  if (values != undefined) {
    Object.assign(element, values)
  }
  registry.set(id, element)
  if (type == "canvas") {
    const divElement = document.createElement('div');
    divElement.className = 'absolute z-10 w-full h-full bg-white ';
    divElement.style = { width: window.innerWidth, height: window.innerHeight }
    divElement.id = id
    canvas_registry.set(id, values)
    editorRef.current.appendChild(divElement);
  }
  else {
    parents.set(id, parent)
    children.set(parent, id)
    const parentElement = document.getElementById(parent);
    switch (type) {
      case "container":
        const divElement = document.createElement('div');
        divElement.className = `bg-red-500  border-black border-4`;
        divElement.draggable = true;
        divElement.onDrag = (event) => {
          grab(id, event)
        };
        Object.assign(divElement, values);
        Object.assign(divElement.style, values.style);
        parentElement.appendChild(divElement);
        break
      case "table":
        const tableElement = document.createElement('table');
        tableElement.className = 'w-full h-full';
        tableElement.className = 'w-full h-full';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        values.headers.map((h) => {
          const headerCell = document.createElement('th');
          headerCell.textContent = h;
          Object.assign(headerCell.style, values.table_style.headerCellStyle);
          headerRow.appendChild(headerCell);
        })
        thead.appendChild(headerRow);
        tableElement.appendChild(thead);
        values.rows.map((r) => {
          const rowElement = document.createElement('tr');
          Object.assign(rowElement.style, values.table_style.rowStyle);
          r.map((c) => {
            const cellElement = document.createElement('td');
            cellElement.textContent = c;
            Object.assign(cellElement.style, values.table_style.cellStyle);
            rowElement.appendChild(cellElement);
          });
          tableElement.appendChild(rowElement);
        });
        delete values.rows
        Object.assign(tableElement, values);
        Object.assign(tableElement.style, values.style);
        parentElement.appendChild(tableElement);
        break;
      case 'text':
        const textElement = document.createElement('a');
        textElement.id = id;
        textElement.innerHTML = element.text;
        Object.assign(textElement.style, values.style);
        parentElement.appendChild(textElement);
        break;
      case 'image':
        const imageElement = document.createElement('img');
        imageElement.id = id;
        imageElement.src = element.src;
        imageElement.width = styles.containerWidth
        imageElement.alt = element.alt;
        imageElement.onDrag = (event) => {
          grab(id, event)
        };
        Object.assign(imageElement, values);
        Object.assign(imageElement.style, values.style);
        parentElement.appendChild(imageElement);
        break;
      case 'link':
        const linkElement = document.createElement('a');
        linkElement.id = id;
        linkElement.href = element.href;
        linkElement.innerHTML = element.alt;
        Object.assign(linkElement.style, values.style);
        parentElement.appendChild(linkElement);
        break;
      default
        :
    }
  };
}
export default createElement
