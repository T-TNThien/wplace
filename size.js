function size() {
    let openButton = document.getElementById("size-toggle-button");
    let display = document.getElementById("size-display");
    let outside = document.getElementById("size-display-outside");
    let closeButton = document.getElementById("size-close-button");
    let dimensions = document.getElementById("dimension");
    let changeSizeButton = document.getElementById("change-size-button");
    
    for(let i = 0; i < DIMENSION_LIST.length; i++) {
        let option = document.createElement("option");
        option.value = DIMENSION_LIST[i];
        option.textContent = DIMENSION_LIST[i];
        if(option.value == getDimension()) {
            option.selected = true;
        }
        dimensions.appendChild(option);
    }
    
    openButton.onclick = openSizeDisplay;
    closeButton.onclick = closeSizeDisplay;
    changeSizeButton.onclick = changeSize;
    
    function openSizeDisplay() {
        if(!display.classList.contains("active") && !openButton.classList.contains("hidden")) {
            display.classList.add("active");
            openButton.classList.add("hidden");
            outside.classList.remove("hidden");
            outside.addEventListener("click", closeSizeDisplay);
        }
    }
    
    function closeSizeDisplay() {
        if(display.classList.contains("active") && openButton.classList.contains("hidden")) {
            display.classList.remove("active");
            openButton.classList.remove("hidden");
            outside.classList.add("hidden");
            outside.removeEventListener("click", closeSizeDisplay);
        }
    }
}

function getCustomDimension() {
    return document.getElementById("dimension");
}

size();