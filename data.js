// List of set colors
let pixelColorList = JSON.parse(localStorage.getItem("pixelColorList") || "{}");
let chosenPosition = null;
let chosenColor = null;
let dimension = parseInt(localStorage.getItem("dimension"));

let undo = sessionStorage.getItem("undo") ? Stack(JSON.parse(sessionStorage.getItem("undo"))) : new Stack;
let redo = sessionStorage.getItem("undo") ? Stack(JSON.parse(sessionStorage.getItem("redo"))) : new Stack;
if(undo.stack.length != 0) {
    undoButtonDisplayOn();
}
if(redo.stack.length != 0) {
    redoButtonDisplayOn();
}
getUndoButton().onclick = function() {
    if(!undo.isEmpty()) {
        var state = undo.pop();
        var pos = state["position"];        
        var prevColor = state["nextColor"];
        var nextColor = state["prevColor"];
        chosenColor = nextColor;
        chosenPosition = pos;
        updatePositionColor();
        state = {"position": pos, "prevColor": prevColor, "nextColor": nextColor};
        redo.push(state);
        redoButtonDisplayOn();
        if(undo.isEmpty()) {
            undoButtonDisplayOff();
        }
    }
}
getRedoButton().onclick = function() {
    if(!redo.isEmpty()) {
        var state = redo.pop();
        var pos = state["position"];        
        var prevColor = state["nextColor"];
        var nextColor = state["prevColor"];
        chosenColor = nextColor;
        chosenPosition = pos;
        updatePositionColor();
        state = {"position": pos, "prevColor": prevColor, "nextColor": nextColor};
        undo.push(state);
        undoButtonDisplayOn();
        if(redo.isEmpty()) {
            redoButtonDisplayOff();
        }
    }
}

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

function getUndoButton() {
    return document.getElementById("undo-button");
}

function getRedoButton() {
    return document.getElementById("redo-button");
}

// Set active pixel
function setChosenPosition(id) {
    if(chosenPosition) {
        let current = document.getElementById(chosenPosition);
        current.classList.remove("pixel-active");
        if(current == document.getElementById(id)) {
            document.removeEventListener("keypress", keyPressEvent);
            chosenPosition = null;
            paintButtonOff();
            return;
        }
    }
    let next = document.getElementById(id);
    next.classList.add("pixel-active");
    chosenPosition = id;
    paintButtonOn();
}

// Set active palette color
function setChosenColor(id) {
    if(chosenColor) {
        let current = document.getElementById(chosenColor);
        current.classList.remove("color-active");
        if(current == document.getElementById(id)) {
            document.removeEventListener("keypress", keyPressEvent);
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

// Set grid dimension
function setDimension(d) {
    if(!isNaN(d)) {
        localStorage.setItem("dimension", d);
        dimension = d;
    }
}

// Change color of pixel and save to local storage
function updatePositionColor() {
    let color = COLOR_LIST[chosenColor];
    if(!color || !chosenPosition) {
        return;
    }
    pixelColorList[chosenPosition] = chosenColor;
    localStorage.setItem("pixelColorList", JSON.stringify(pixelColorList));
    document.getElementById(chosenPosition).style.backgroundColor = color;
    setChosenPosition(chosenPosition);
}
    
// Change grid size
function changeSize() {
    let dimensions = getCustomDimension();
    if(dimensions.value != getDimension()) {
        setDimension(dimensions.value);
        grid.innerHTML = '';
        createGrid();
    } else { closeSizeDisplay(); }
}

// Make undo button clickable
function undoButtonDisplayOn() {
    var button = getUndoButton();
    if(button.classList.contains("unavailable")) {
        button.classList.remove("unavailable");
    }
}

// Make undo button unclickable
function undoButtonDisplayOff() {
    var button = getUndoButton();
    if(!button.classList.contains("unavailable")) {
        button.classList.add("unavailable");
    }
}

// Make redo button clickable
function redoButtonDisplayOn() {
    var button = getRedoButton();
    if(button.classList.contains("unavailable")) {
        button.classList.remove("unavailable");
    }
}

// Make redo button unclickable
function redoButtonDisplayOff() {
    var button = getRedoButton();
    if(!button.classList.contains("unavailable")) {
        button.classList.add("unavailable");
    }
}

// Add undo and redo list to session storage if not empty
function onBeforeUnloadUndoRedo() {
    if(!undo.isEmpty) {
        sessionStorage.setItem("undo", JSON.stringify(undo.getStack));
    }
    if(!redo.isEmpty) {
        sessionStorage.setItem("redo", JSON.stringify(redo.getStack));
    }
}