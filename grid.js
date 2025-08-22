let colorDict = getDict();
for (let i = 0; i < 10; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 10; j++) {
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
  document.body.appendChild(row);
}

