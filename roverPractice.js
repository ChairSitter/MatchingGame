//Declare constants for input button, boxes, and containers for scores and winner declaration
const inputButton = document.getElementById('input');
const body = document.body;

const boxOne = document.getElementById('div1');
const boxTwo = document.getElementById('div2');
const boxThree = document.getElementById('div3');
const boxFour = document.getElementById('div4');

const boxFive = document.getElementById('div5');
const boxSix = document.getElementById('div6');
const boxSeven = document.getElementById('div7');
const boxEight = document.getElementById('div8');

const scoreHuman = document.getElementById('your-score');
const scoreComputer = document.getElementById('computer-score');
const winner = document.getElementById('winner');

//chooses a random color from a list of possible colors
const chooseColor = () => {
    const array = ['red', 'orange', 'yellow', 'green', 'blue', 'white', 'purple'];
    let randomColorNum = Math.floor(Math.random() * 7);
    let randomColor = array[randomColorNum];
    return randomColor;
}

//set color variables to random colors using chooseColor()
let color1 = chooseColor();
let color2 = chooseColor();
let color3 = chooseColor();
let color4 = chooseColor();
let color5 = chooseColor();
let color6 = chooseColor();
let color7 = chooseColor();
let color8 = chooseColor();
let color9 = chooseColor();
let color10 = chooseColor();
let color11 = chooseColor();
let color12 = chooseColor();
let color13 = chooseColor();
let color14 = chooseColor();
let color15 = chooseColor();
let color16 = chooseColor();

//sets count numbers beginning with 0
let countHuman = 0;
let countComputer = 0;

//functions that set background color and inner text of each box
const boxOneChange = () => {
    boxOne.style.backgroundColor = color1;
    boxOne.innerHTML = color2;
}
const boxTwoChange = () => {
    boxTwo.style.backgroundColor = color3;
    boxTwo.innerHTML = color4;
}
const boxThreeChange = () => {
    boxThree.style.backgroundColor = color5;
    boxThree.innerHTML = color6;
}
const boxFourChange = () => {
    boxFour.style.backgroundColor = color7;
    boxFour.innerHTML = color8;
}
const boxFiveChange = () => {
    boxFive.style.backgroundColor = color9;
    boxFive.innerHTML = color10;
}
const boxSixChange = () => {
    boxSix.style.backgroundColor = color11;
    boxSix.innerHTML = color12;
}
const boxSevenChange = () => {
    boxSeven.style.backgroundColor = color13;
    boxSeven.innerHTML = color14;
}
const boxEightChange = () => {
    boxEight.style.backgroundColor = color15;
    boxEight.innerHTML = color16;
}

/*Called on a delay. Sets special style and ups user and computer match count for any box where background color and text match.
Calculates and displays scores and announces winner by comparing scores*/
const determineWinner = () => {
    if(color1 === color2){
        boxOne.style.fontSize = '2rem';
        boxOne.style.textTransform = 'uppercase';
        boxOne.style.border = "10px black dotted";
        countHuman++;
    }
    if(color3 === color4){
        boxTwo.style.fontSize = '2rem';
        boxTwo.style.textTransform = 'uppercase';
        boxTwo.style.border = "10px black dotted";
        countHuman++;
    }
    if(color5 === color6){
        boxThree.style.fontSize = '2rem';
        boxThree.style.textTransform = 'uppercase';
        boxThree.style.border = "10px black dotted";
        countHuman++;
    }
    if(color7 === color8){
        boxFour.style.fontSize = '2rem';
        boxFour.style.textTransform = 'uppercase';
        boxFour.style.border = "10px black dotted";
        countHuman++;
    }
    if(color9 === color10){
        boxFive.style.fontSize = '2rem';
        boxFive.style.textTransform = 'uppercase';
        boxFive.style.border = "10px black dotted";
        countComputer++;
    }
    if(color11 === color12){
        boxSix.style.fontSize = '2rem';
        boxSix.style.textTransform = 'uppercase';
        boxSix.style.border = "10px black dotted";
        countComputer++;
    }
    if(color13 === color14){
        boxSeven.style.fontSize = '2rem';
        boxSeven.style.textTransform = 'uppercase';
        boxSeven.style.border = "10px black dotted";
        countComputer++;
    }
    if(color15 === color16){
        boxEight.style.fontSize = '2rem';
        boxEight.style.textTransform = 'uppercase';
        boxEight.style.border = "10px black dotted";
        countComputer++;
    }

    scoreHuman.innerHTML = countHuman;
    scoreComputer.innerHTML = countComputer;

    if (countHuman > countComputer){
        if(countHuman === 4){
            winner.innerHTML = 'You got a perfect score!';
            body.style.backgroundColor = 'gold';
        } else {
            winner.innerHTML = 'You Win!';
            body.style.backgroundColor = 'blue';
            setTimeout(() => {
                body.style.backgroundColor = 'darkblue';
            }, 150);
        }
    } else if (countHuman < countComputer){
        winner.innerHTML = 'Computer Wins!';
    } else {
        winner.innerHTML = 'It\'s a Tie!';
    }
}

//Calls box1 function, then calls each box function at a 1 second interval. Calls determineWinner() function along with box8 function.
const changeColors = () => {
    boxOneChange();
    setTimeout(boxFiveChange, 1000);
    setTimeout(boxTwoChange, 2000);
    setTimeout(boxSixChange, 3000);
    setTimeout(boxThreeChange, 4000);
    setTimeout(boxSevenChange, 5000);
    setTimeout(boxFourChange, 6000);
    setTimeout(boxEightChange, 7000);
    setTimeout(determineWinner, 8000)
}

inputButton.onclick = changeColors;
