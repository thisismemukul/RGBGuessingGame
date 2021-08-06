var colors = [
    "rgb(255, 0, 92)",
    "rgb(137, 44, 220)",
    "rgb(40, 255, 191)",
    "rgb(50, 224, 196)",
    "rgb(237, 12, 239)",
    "rgb(25, 211, 218)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickeColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add event listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor) {
            message.textContent = "Correct";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#1c1c1c";
            message.textContent = "Try Again";
        }
    });
}


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickeColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}