let body = document.querySelector("#body");
let header = document.querySelector("#header");
let winColorText = document.querySelector("#rgb_holder");
let newColor = document.querySelector("#new_color");
let playAgain = document.querySelector("#play_again");
let winMsg = document.querySelector("#win_msg");
let lostMsg = document.querySelector("#lost_msg");
let colorBox = document.querySelectorAll(".color_box");
let squareNo = colorBox.length;
let winColor = "";
let colors = [];
let chance = 3;

setSquareColor(squareNo, chance);


function rgbGenerator() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + r + ", " + g + ", " + b + ")"
    return color;
}

function setSquareColor(squareNo, chance) {
    lostMsg.innerHTML = chance + " Attempt Left ";
    colors.length = squareNo;
    for (var i = 0; i < squareNo; i++) {
        colors[i] = rgbGenerator();
    }

    for (var i = 0; i < squareNo; i++) {
        colorBox[i].style.backgroundColor = colors[i];
    }
    setWinColor(squareNo);
}

function setWinColor(squareNo) {
    let winColorIndex = Math.floor(Math.random() * squareNo);
    winColorText.innerHTML = colors[winColorIndex].toUpperCase();
    winColor = colors[winColorIndex];
}

for (var i = 0; i < colorBox.length; i++) {
    colorBox[i].addEventListener("click", function() {

        if (this.style.backgroundColor == winColor) {
            convertAll();
            displayWinMsg();
        } else {
            chance--;
            this.style.animation = "woosh 0.5s";
            setTimeout(() => {
                this.style.backgroundColor = "transparent";
                // this.style.display = "none";
            }, 300);
            displayWrongMsg(chance);
            this.style.border = "none";
            if (chance == 0) {
                disappearAll();
                displayLostMsg(chance);
            }
        }
    })
}

newColor.addEventListener("click", function() {
    setSquareColor(squareNo, chance);
});
playAgain.addEventListener("click", function() {
    chance = 3;
    setSquareColor(squareNo);
    for (var i = 0; i < squareNo; i++) {

        colorBox[i].style.display = "inline-block";
    }
    newColor.style.display = "inline-block";
    winMsg.style.display = "none";
    lostMsg.innerHTML = chance + " Attempt Left ";
    lostMsg.style.display = "inline-block";
    playAgain.style.display = "none";
    header.style.backgroundColor = "steelblue";
});

function disappearAll() {
    for (var i = 0; i < squareNo; i++) {
        colorBox[i].style.animation = "woosh 0.5s";
        colorBox[i].style.backgroundColor = "transparent";
        colorBox[i].style.border = "none";
        colorBox[i].style.display = "none";
    }
    header.style.backgroundColor = "transparent";
    header.style.animation = "fade 0.5s";
}

function convertAll() {
    for (var i = 0; i < squareNo; i++) {
        colorBox[i].style.backgroundColor = winColor;
        colorBox[i].style.display = "block";
        colorBox[i].style.animation = "fade 0.5s"
        colorBox[i].style.border = "1px solid white";
    }
    header.style.backgroundColor = winColor;
    header.style.animation = "fade 0.5s";
    body.style.backgroundColor = winColor;
    body.style.animation = "fade 0.5s";
}

function displayWinMsg() {
    winMsg.style.display = "inline-block";
    newColor.style.display = "none";
    playAgain.style.display = "inline-block";
    lostMsg.style.display = "none";
}

function displayWrongMsg(chance) {
    newColor.style.display = "none";
    lostMsg.style.display = "inline-block";
    lostMsg.innerHTML = "Oops! Wrong Choice - " + chance + " Attempt Left";
}

function displayLostMsg(chance) {
    newColor.style.display = "none";
    lostMsg.style.display = "inline-block";
    lostMsg.innerHTML = "Damn! You Lost ";
    playAgain.style.display = "inline-block";
}