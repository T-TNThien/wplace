let colorDict = getDict();
let grid = document.createElement("div");
grid.id = "grid";
grid.style.gridTemplateColumns = "repeat(" + WIDTH + ", auto)";
document.body.appendChild(grid);

for (let i = 0; i < WIDTH; i++) {
  for (let j = 0; j < HEIGHT; j++) {
    let sq = document.createElement("div");
    let id = (i + 1) + "-" + (j + 1);
    sq.setAttribute("id", id);
    sq.style.backgroundColor = COLOR_LIST[colorDict[id]] || DEFAULT_COLOR;
    sq.style.setProperty("--color", COLOR_LIST[colorDict[id]] || DEFAULT_COLOR);
    sq.classList.add("pixel");
    // Set active pixel
    sq.onclick = function () {
        setChosenPosition(this.id);
    }
    grid.appendChild(sq);
  }
}

// Create grid
// for (let i = 0; i < WIDTH; i++) {
//   let row = document.createElement("div");
//   row.classList.add("row");
//   row.style.gridTemplateColumns = "repeat(" + WIDTH + ", auto)";
//   for (let j = 0; j < HEIGHT; j++) {
//     let sq = document.createElement("div");
//     let id = (i + 1) + "-" + (j + 1);
//     sq.setAttribute("id", id);
//     sq.style.backgroundColor = COLOR_LIST[colorDict[id]] || DEFAULT_COLOR;
//     sq.classList.add("pixel");
//     // Set active pixel
//     sq.onclick = function () {
//         setChosenPosition(this.id);
//     }
//     row.appendChild(sq);
//   }
//   container.appendChild(row);
// }

