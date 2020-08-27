var changeColor = document.getElementById('button1');   
var body = document.querySelector('body');

// For Changing background color using arrays values
// var colors = ["red", "pink", "orange", "blue", "yellow", "navyblue", "cyan"];

// body.style.backgroundColor = 'red';

// changeColor.addEventListener('click', changeBackgroundColor);

// function changeBackgroundColor() {
//     const colorIndex = parseInt(Math.random()*colors.length)
//     body.style.backgroundColor = colors[colorIndex]
// }


// For changing background color using hex values

var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var values = document.querySelector('#values');

changeColor.addEventListener('click', changeHex);

function changeHex() {

    let hex = "#"
    
    for(let i = 0; i < 6; i++){
        const colorCode = Math.floor(Math.random()*hexValues.length);
    hex += hexValues[colorCode];

    }
    body.style.backgroundColor = hex;
    values.textContent = hex;
}