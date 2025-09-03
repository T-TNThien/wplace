let palette = document.getElementById("color-palette");
let paletteContainer = document.getElementById("color-palette-container");
let paint = document.getElementById("paint-button");
paint.onclick = updateColor;

let LENGTH = COLOR_LIST.length;
// Create palette
for (let i = 0; i < LENGTH; i++) {
  let color = document.createElement("div");
  color.id = i;
  color.classList.add("color");
  color.style.backgroundColor = COLOR_LIST[i];
  color.onclick = function() {
    setChosenColor(this.id);
  }
  palette.appendChild(color);
}

// Make palette visible
function paletteDisplayOn() {
  paletteContainer.classList.add("visible");
}

// Make palette invisible
function paletteDisplayOff() {
  paletteContainer.classList.remove("visible");
}

// Make chosen color and paint buttons visible
function colorDisplayOn(id) {
  paint.classList.add("visible");
}

// Make chosen color and paint buttons invisible
function colorDisplayOff(id) {
  color = document.getElementById(id);
  color.classList.remove("color-active");
  paint.classList.remove("visible");
}