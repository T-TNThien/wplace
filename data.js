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
    }
    let next = document.getElementById(id);
    next.classList.add("pixel-active");
    chosenPosition = id;
}

function updateColor(colorId) {
    let color = COLOR_LIST[colorId];
    if(!color || !chosenPosition) {
        return;
    }
    pixelColorList[chosenPosition] = colorId;
    console.log(pixelColorList);
    localStorage.setItem("pixelColorList", JSON.stringify(pixelColorList));
    console.log(JSON.parse(localStorage.getItem("pixelColorList")))
    let pixel = document.getElementById(chosenPosition);
    pixel.style.backgroundColor = color;
}