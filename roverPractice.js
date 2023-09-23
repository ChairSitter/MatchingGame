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
const userWins = document.getElementById('user-wins');
const compWins = document.getElementById('comp-wins');

scoreHuman.innerHTML = 0;
scoreComputer.innerHTML = 0;

//chooses a random color from a list of possible colors
const chooseColor = () => {
    const array = ['red', 'orange', 'yellow', 'green', 'blue', 'white', 'purple'];
    let randomColorNum = Math.floor(Math.random() * 7);
    let randomColor = array[randomColorNum];
    return randomColor;
}

//set color variables to random colors using chooseColor()
let color1;
let color2;
let color3;
let color4;
let color5;
let color6;
let color7;
let color8;
let color9;
let color10;
let color11;
let color12;
let color13;
let color14;
let color15;
let color16;

//sets count numbers beginning with 0
let countHuman = 0;
let countComputer = 0;
let userWinCount = 0;
let compWinCount = 0;

//functions that set background color and inner text of each box
const boxOneChange = () => {
    color1 = chooseColor();
    color2 = chooseColor();
    boxOne.style.backgroundColor = color1;
    boxOne.innerHTML = color2;

}
const boxTwoChange = () => {
    color3 = chooseColor();
    color4 = chooseColor();
    boxTwo.style.backgroundColor = color3;
    boxTwo.innerHTML = color4;

}
const boxThreeChange = () => {
    color5 = chooseColor();
    color6 = chooseColor();
    boxThree.style.backgroundColor = color5;
    boxThree.innerHTML = color6;
}
const boxFourChange = () => {
    color7 = chooseColor();
    color8 = chooseColor();
    boxFour.style.backgroundColor = color7;
    boxFour.innerHTML = color8;

}
const boxFiveChange = () => {
    color9 = chooseColor();
    color10 = chooseColor();
    boxFive.style.backgroundColor = color9;
    boxFive.innerHTML = color10;
}
const boxSixChange = () => {
    color11 = chooseColor();
    color12 = chooseColor();
    boxSix.style.backgroundColor = color11;
    boxSix.innerHTML = color12;
}
const boxSevenChange = () => {
    color13 = chooseColor();
    color14 = chooseColor();
    boxSeven.style.backgroundColor = color13;
    boxSeven.innerHTML = color14;
}
const boxEightChange = () => {
    color15 = chooseColor();
    color16 = chooseColor();
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
        userWinCount++;
        userWins.innerHTML = userWinCount;
    } else if (countHuman < countComputer){
        winner.innerHTML = 'Computer Wins!';
        compWinCount++;
        compWins.innerHTML =  compWinCount;
    } else {
        winner.innerHTML = 'It\'s a Tie!';
    }
}

//Resets special border for matches, resets score counters to 0 and displays this.
const resetter = () => {
    winner.innerHTML = '';

    boxOne.style.fontSize = '1.5rem';
    boxOne.style.border = '10px solid black';
    boxOne.style.textTransform = 'lowercase'; 
    boxOne.innerHTML = "";
    boxOne.style.backgroundColor = "";

    boxTwo.style.fontSize = '1.5rem';
    boxTwo.style.border = '10px solid black';
    boxTwo.style.textTransform = 'lowercase'; 
    boxTwo.innerHTML = "";
    boxTwo.style.backgroundColor = "";

    boxThree.style.fontSize = '1.5rem';
    boxThree.style.border = '10px solid black';
    boxThree.style.textTransform = 'lowercase'; 
    boxThree.innerHTML = "";
    boxThree.style.backgroundColor = "";

    boxFour.style.fontSize = '1.5rem';
    boxFour.style.border = '10px solid black';
    boxFour.style.textTransform = 'lowercase'; 
    boxFour.innerHTML = "";
    boxFour.style.backgroundColor = "";

    boxFive.style.fontSize = '1.5rem';
    boxFive.style.border = '10px solid black';
    boxFive.style.textTransform = 'lowercase'; 
    boxFive.innerHTML = "";
    boxFive.style.backgroundColor = "";

    boxSix.style.fontSize = '1.5rem';
    boxSix.style.border = '10px solid black';
    boxSix.style.textTransform = 'lowercase'; 
    boxSix.innerHTML = "";
    boxSix.style.backgroundColor = "";

    boxSeven.style.fontSize = '1.5rem';
    boxSeven.style.border = '10px solid black';
    boxSeven.style.textTransform = 'lowercase'; 
    boxSeven.innerHTML = "";
    boxSeven.style.backgroundColor = "";

    boxEight.style.fontSize = '1.5rem';
    boxEight.style.border = '10px solid black';
    boxEight.style.textTransform = 'lowercase'; 
    boxEight.innerHTML = "";
    boxEight.style.backgroundColor = "";
}
//Calls box1 function, then calls each box function at a 1 second interval. Calls determineWinner() function along with box8 function.
const changeColors = () => {
    resetter();

    countComputer = 0;
    countHuman = 0;
    scoreHuman.innerHTML = countHuman;
    scoreComputer.innerHTML = countComputer;

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
