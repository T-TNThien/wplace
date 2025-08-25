// List of set colors
let pixelColorList = JSON.parse(localStorage.getItem("pixelColorList") || "{}");
let chosenPosition = null;
let chosenColor = null;

function getDict() {
    return pixelColorList;
}

function getChosenPosition() {
    return chosenPosition;
}

// Set active pixel
function setChosenPosition(id) {
    if(chosenPosition) {
        let current = document.getElementById(chosenPosition);
        current.classList.remove("pixel-active");
        if(current == document.getElementById(id)) {
            chosenPosition = null;
            paletteDisplayOff();
            return;
        }
    }
    let next = document.getElementById(id);
    next.classList.add("pixel-active");
    chosenPosition = id;
    paletteDisplayOn();
}

// Set active palette color
function setChosenColor(id) {
    if(chosenColor) {
        let current = document.getElementById(chosenColor);
        current.classList.remove("color-active");
        if(current == document.getElementById(id)) {
            chosenColor = null;
            colorDisplayOff(id);
            return;
        }
    }
    let next = document.getElementById(id);
    next.classList.add("color-active");
    chosenColor = id;
    colorDisplayOn(id);
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
    setChosenColor(chosenColor);
}