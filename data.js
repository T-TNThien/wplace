// List of set colors
let pixelColorList = JSON.parse(localStorage.getItem("pixelColorList") || "{}");
let chosenPosition = null;
let chosenColor = null;
let dimension = parseInt(localStorage.getItem("dimension"));
if(isNaN(dimension)) {
  dimension = 16;
}
getOutsideArea().onclick = function() {
  setChosenPosition(chosenPosition);
}

function getDict() {
    return pixelColorList;
}

function getChosenPosition() {
    return chosenPosition;
}

function getDimension() {
    return dimension;
}

function getOutsideArea() {
  return document.getElementById("display-outside");
}

// Set active pixel
function setChosenPosition(id) {
    if(chosenPosition) {
        let current = document.getElementById(chosenPosition);
        current.classList.remove("pixel-active");
        if(current == document.getElementById(id)) {
            chosenPosition = null;
            paintButtonOff();
            // closePalette();
            return;
        }
    }
    let next = document.getElementById(id);
    next.classList.add("pixel-active");
    chosenPosition = id;
    // openPalette();
    paintButtonOn();
}

// Set active palette color
function setChosenColor(id) {
    if(chosenColor) {
        let current = document.getElementById(chosenColor);
        current.classList.remove("color-active");
        if(current == document.getElementById(id)) {
            chosenColor = null;
            paintButtonOff();
            return;
        }
    }
    let next = document.getElementById(id);
    next.classList.add("color-active");
    chosenColor = id;
    paintButtonOn(id);
}

function setDimension(d) {
    if(!isNaN(d)) {
        localStorage.setItem("dimension", d);
        dimension = d;
    }
}

function unsetChosenPosition() {
    let current = document.getElementById(chosenPosition);
    current.classList.remove("pixel-active");
    setChosenColor(chosenColor);
}

// Change color of pixel and save to local storage
function updateColor() {
    let color = COLOR_LIST[chosenColor];
    if(!color || !chosenPosition) {
        return;
    }
    pixelColorList[chosenPosition] = chosenColor;
    localStorage.setItem("pixelColorList", JSON.stringify(pixelColorList));
    let pixel = document.getElementById(chosenPosition);
    pixel.style.backgroundColor = color;
    setChosenPosition(chosenPosition);
    // setChosenColor(chosenColor);
}
    
function changeSize() {
    let dimensions = getCustomDimension();
    if(dimensions.value != getDimension()) {
        setDimension(dimensions.value);
        grid.innerHTML = '';
        createGrid();
    } else { closeSizeDisplay(); }
}