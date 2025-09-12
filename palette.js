let paint = document.getElementById("paint-button");
paint.onclick = updateColor;
getPaletteOutside().onclick = function() {
  setChosenPosition(chosenPosition);
}

function palette() {
  let palette = document.getElementById("color-palette");
  
  // The number of colors
  let LENGTH = COLOR_LIST.length;
  // Create palette
  for (let i = 0; i < LENGTH; i++) {
    let color = document.createElement("div");
    color.id = i;
    color.classList.add("color");
    color.style.backgroundColor = COLOR_LIST[i];
    color.onclick = function () {
      setChosenColor(this.id);
    };
    palette.appendChild(color);
  }
}

function getPaletteContainer() {
  return document.getElementById("color-button-palette");
}

function getPaletteOutside() {
  return document.getElementById("color-palette-display-outside");
}

// Open palette
function openPalette() {
  let palette = getPaletteContainer();
  let outside = getPaletteOutside();
  if(!palette.classList.contains("visible") && outside.classList.contains("hidden")) {
    palette.classList.add("visible");
    outside.classList.remove("hidden");
    outside.addEventListener("click", closePalette);
  }
}

// Close palette
function closePalette() {
  let palette = getPaletteContainer();
  let outside = getPaletteOutside();
  if(palette.classList.contains("visible") && !outside.classList.contains("hidden")) {
    palette.classList.remove("visible");
    outside.classList.add("hidden");
    outside.removeEventListener("click", closePalette);
  }
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

palette();