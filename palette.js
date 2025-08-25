let palette = document.getElementById("color-palette");
let paletteContainer = document.getElementById("color-palette-container");

let LENGTH = COLOR_LIST.length;
for (let i = 0; i < LENGTH; i++) {
  let color = document.createElement("div");
  color.setAttribute("id", i);
  color.classList.add("color");
  color.style.backgroundColor = COLOR_LIST[i];
  color.onclick = function() {
    updateColor(this.id);
  }
  palette.appendChild(color);
}

function paletteDisplayOn() {
  paletteContainer.classList.add("visible");
}

function paletteDisplayOff() {
  paletteContainer.classList.remove("visible");
}