let colorDict = getDict();
let grid = document.createElement("div");
grid.id = "grid";
document.body.appendChild(grid);
const keyPressEvent = (e) => {
  if(e.code == "Space" && chosenPosition && chosenColor) {
    paint.click();
  }
}

function createGrid() {
  grid.style.gridTemplateColumns = "repeat(" + dimension + ", auto)";
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      let sq = document.createElement("div");
      let id = i + 1 + "-" + (j + 1);
      sq.setAttribute("id", id);
      sq.style.backgroundColor = COLOR_LIST[colorDict[id]] || DEFAULT_COLOR;
      sq.style.setProperty(
        "--color",
        COLOR_LIST[colorDict[id]] || DEFAULT_COLOR
      );
      sq.classList.add("pixel");
      // Set active pixel
      sq.onclick = function () {
        setChosenPosition(this.id);
        getOutsideArea().classList.remove("hidden");
      };
      grid.appendChild(sq);
    }
  }
  document.addEventListener("keypress", keyPressEvent);
}

createGrid();
