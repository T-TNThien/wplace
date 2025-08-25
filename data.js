let pixelColorList = JSON.parse(localStorage.getItem("pixelColorList") || "{}");
let chosenPosition = null;

function getDict() {
    return pixelColorList;
}

function getChosenPosition() {
    return chosenPosition;
}

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

function updateColor(colorId) {
    let color = COLOR_LIST[colorId];
    if(!color || !chosenPosition) {
        return;
    }
    pixelColorList[chosenPosition] = colorId;
    localStorage.setItem("pixelColorList", JSON.stringify(pixelColorList));
    let pixel = document.getElementById(chosenPosition);
    pixel.style.backgroundColor = color;
}