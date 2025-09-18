let paint = document.getElementById("paint-button");
paint.onclick = function () {
  var state = {"position": chosenPosition, "prevColor": pixelColorList[chosenPosition], "nextColor": chosenColor}
  if(!redo.isEmpty()) {
      redo.clearStack();
      redoButtonDisplayOff();
  }
  undo.push(state);
  window.onbeforeunload = onBeforeUnloadUndoRedo;
  undoButtonDisplayOn();
  updatePositionColor();
}

function createPalette() {
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

// Make chosen color and paint buttons visible
function paintButtonOn() {
  if(chosenColor && chosenPosition) {
    let outside = getOutsideArea();
    outside.classList.remove("hidden");
    outside.addEventListener("click", paintButtonOff);
    paint.classList.add("visible");
  }
}

// Make chosen color and paint buttons invisible
function paintButtonOff() {
  if(!chosenColor || !chosenPosition || (chosenColor && chosenPosition)) {
    let outside = getOutsideArea();
    outside.classList.add("hidden");
    outside.removeEventListener("click", paintButtonOff);
    paint.classList.remove("visible");
    return;
  }
}

createPalette();