// DOM RGB Color Game

//Variable
var NumSquare = 6;
var Colors = [];
var PickedColor;
var Squares = document.querySelectorAll(".square");
var ColorDisplay = document.getElementById("displayrgb");
var MessageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var ResetButton = document.querySelector("#reset");
var ModeButtons = document.querySelectorAll(".mode");

init();

function init() {
    SetupModeButtons();
    SetupSquares();
    Reset();

}

function SetupModeButtons() {
    for(var i = 0; i < ModeButtons.length; i++) {
        ModeButtons[i].addEventListener("click", function() {
            ModeButtons[0].classList.remove("selected");
            ModeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent ==="Easy" ? NumSquare = 3: NumSquare = 6;
            Reset();
    
        });
    }
}

function SetupSquares(){
    for(var i = 0; i < Squares.length; i++) {
        // add initial Colors to Squares
        Squares[i].style.backgroundColor = Colors[i];
    
        //add click listeners to Squares
        Squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var ClickedColor = this.style.backgroundColor;
            console.log(ClickedColor, PickedColor);
            //compare color to PickedColor
            if(ClickedColor === PickedColor){
                MessageDisplay.textContent = "Correct!";
                ResetButton.textContent = "Play Again?"
                ChangeColors(ClickedColor);
                h1.style.backgroundColor = ClickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                MessageDisplay.textContent = "Try Again";
            }
        })
    }
}


function Reset(){
     //generate all new Colors
     Colors = GenerateRandomColors(NumSquare);
     //pick a new random color from array
     PickedColor = PickColor();
     // change color Display to match picked color
     ColorDisplay.textContent = PickedColor;
     //Text will New colors after resetting
     ResetButton.textContent = "New colors"
     // Text make to Empty once click on play again
     MessageDisplay.textContent = "";
     // change Colors of Squares
     for(var i = 0; i < Squares.length; i++) {
         if (Colors[i]) {
             Squares[i].style.display = "block";
             Squares[i].style.backgroundColor = Colors[i];
         } else {
             Squares[i].style.display = "none";
         }
     }
     h1.style.backgroundColor = "steelblue"
}

/* EasyBtn.addEventListener("click", function() {
    EasyBtn.classList.add("selected");
    HardBtn.classList.remove("selected");
    NumSquare = 3
    Colors = GenerateRandomColors(NumSquare);
    PickedColor = PickColor();
    ColorDisplay.textContent = PickedColor;
    for(var i = 0; i < Squares.length; i++ ){
        if(Colors[i]){
            Squares[i].style.backgroundColor = Colors[i];
        }else{
            Squares[i].style.display = "none";
        }
    }
});

HardBtn.addEventListener("click", function() {
    EasyBtn.classList.remove("selected");
    HardBtn.classList.add("selected");
    NumSquare = 6;
    Colors = GenerateRandomColors(NumSquare);
    PickedColor = PickColor();
    ColorDisplay.textContent = PickedColor;
    for(var i = 0; i < Squares.length; i++ ){
            Squares[i].style.backgroundColor = Colors[i];
            Squares[i].style.display = "block";
    }
}) */

ResetButton.addEventListener("click", function() {
   Reset();

})



function ChangeColors(color) {
    // loop through all Squares
    for(var i = 0; i < Squares.length; i++) {
        // change each color to match given color
        Squares[i].style.backgroundColor = color;
    }
}

function PickColor() {
    var random = Math.floor(Math.random() * Colors.length) 
    return Colors[random];
}

function GenerateRandomColors (num) {
    // make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(RandomColor());
    }
    //return that array
    return arr;
}

function RandomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}