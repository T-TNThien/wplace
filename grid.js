let colorDict = getDict();
let wrapper = document.createElement("div");
wrapper.setAttribute("id", "grid-wrapper");
let container = document.createElement("div");
container.style.width = WIDTH * 20 + "px";
document.body.appendChild(wrapper);
wrapper.appendChild(container);

for (let i = 0; i < WIDTH; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < HEIGHT; j++) {
    let sq = document.createElement("div");
    let id = (i + 1) + "-" + (j + 1);
    sq.setAttribute("id", id);
    sq.style.backgroundColor = COLOR_LIST[colorDict[id]] || DEFAULT_COLOR;
    sq.classList.add("pixel");
    sq.onclick = function () {
        setChosenPosition(this.id);
    }
    row.appendChild(sq);
  }
  container.appendChild(row);
}

