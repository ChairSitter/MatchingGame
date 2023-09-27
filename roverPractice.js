//Declare constants for input button, boxes, and containers for scores and winner declaration
const inputButton = document.getElementById('input-button');
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

const yourMatches = document.getElementById('your-matches');
const compMatches = document.getElementById('comp-matches');
scoreHuman.innerHTML = 0;
scoreComputer.innerHTML = 0;
userWins.innerHTML = 0;
compWins.innerHTML = 0;

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
        boxOne.style.border = "5px black dashed";
        boxOne.style.boxShadow = "5px 5px white";
        countHuman++;
    }
    if(color3 === color4){
        boxTwo.style.border = "5px black dashed";
        boxTwo.style.boxShadow = "5px 5px white";
        countHuman++;
    }
    if(color5 === color6){
        boxThree.style.border = "5px black dashed";
        boxThree.style.boxShadow = "5px 5px white";
        countHuman++;
    }
    if(color7 === color8){
        boxFour.style.border = "5px black dashed";
        boxFour.style.boxShadow = "5px 5px white";
        countHuman++;
    }
    if(color9 === color10){
        boxFive.style.border = "5px black dashed";
        boxFive.style.boxShadow = "5px 5px white";
        countComputer++;
    }
    if(color11 === color12){
        boxSix.style.border = "5px black dashed";
        boxSix.style.boxShadow = "5px 5px white";
        countComputer++;
    }
    if(color13 === color14){
        boxSeven.style.border = "5px black dashed";
        boxSeven.style.boxShadow = "5px 5px white";
        countComputer++;
    }
    if(color15 === color16){
        boxEight.style.border = "5px black dashed";
        boxEight.style.boxShadow = "5px 5px white";
        countComputer++;
    }

    scoreHuman.innerHTML = countHuman;
    scoreComputer.innerHTML = countComputer;

    if (countHuman > countComputer){
        if(countHuman === 4){
            scoreHuman.style.textShadow = '1.5px 1.5px white';
            yourMatches.style.textShadow = '1px 1px white';
            winner.innerHTML = 'You got a perfect score!';
            body.style.backgroundColor = 'gold';
        } else {
            scoreHuman.style.textShadow = '1.5px 1.5px white';
            yourMatches.style.textShadow = '1px 1px white';
            winner.innerHTML = 'You Win!';
            body.style.backgroundColor = 'rgb(0, 0, 165)';
            setTimeout(() => {
                body.style.backgroundColor = 'darkblue';
            }, 150);
        }
        userWinCount++;
        userWins.innerHTML = userWinCount;
    } else if (countHuman < countComputer){
        scoreComputer.style.textShadow = '1.5px 1.5px white';
        compMatches.style.textShadow = '1px 1px white';
        winner.innerHTML = 'Computer Wins!';
        compWinCount++;
        compWins.innerHTML =  compWinCount;
    } else {
        winner.innerHTML = `It\'s a ${countHuman} - ${countComputer} Tie!`;
        scoreComputer.style.textShadow = '1.5px 1.5px white';
        scoreHuman.style.textShadow = '1.5px 1.5px white';
    }
}

//Resets special border for matches, resets score counters to 0 and displays this.
const resetter = () => {
    countComputer = 0;
    countHuman = 0;
    scoreHuman.innerHTML = countHuman;
    scoreComputer.innerHTML = countComputer;

    scoreHuman.style.textShadow = 'none';
    yourMatches.style.textShadow = 'none';
    scoreComputer.style.textShadow = 'none';
    compMatches.style.textShadow = 'none';

    winner.innerHTML = '';

    boxOne.style.fontSize = '1.5rem';
    boxOne.style.border = '5px solid black';
    boxOne.style.textTransform = 'lowercase'; 
    boxOne.innerHTML = "";
    boxOne.style.backgroundColor = "";
    boxOne.style.boxShadow = 'none';

    boxTwo.style.fontSize = '1.5rem';
    boxTwo.style.border = '5px solid black';
    boxTwo.style.textTransform = 'lowercase'; 
    boxTwo.innerHTML = "";
    boxTwo.style.backgroundColor = "";
    boxTwo.style.boxShadow = 'none';

    boxThree.style.fontSize = '1.5rem';
    boxThree.style.border = '5px solid black';
    boxThree.style.textTransform = 'lowercase'; 
    boxThree.innerHTML = "";
    boxThree.style.backgroundColor = "";
    boxThree.style.boxShadow = 'none';

    boxFour.style.fontSize = '1.5rem';
    boxFour.style.border = '5px solid black';
    boxFour.style.textTransform = 'lowercase'; 
    boxFour.innerHTML = "";
    boxFour.style.backgroundColor = "";
    boxFour.style.boxShadow = 'none';

    boxFive.style.fontSize = '1.5rem';
    boxFive.style.border = '5px solid black';
    boxFive.style.textTransform = 'lowercase'; 
    boxFive.innerHTML = "";
    boxFive.style.backgroundColor = "";
    boxFive.style.boxShadow = 'none';

    boxSix.style.fontSize = '1.5rem';
    boxSix.style.border = '5px solid black';
    boxSix.style.textTransform = 'lowercase'; 
    boxSix.innerHTML = "";
    boxSix.style.backgroundColor = "";
    boxSix.style.boxShadow = 'none';

    boxSeven.style.fontSize = '1.5rem';
    boxSeven.style.border = '5px solid black';
    boxSeven.style.textTransform = 'lowercase'; 
    boxSeven.innerHTML = "";
    boxSeven.style.backgroundColor = "";
    boxSeven.style.boxShadow = 'none';

    boxEight.style.fontSize = '1.5rem';
    boxEight.style.border = '5px solid black';
    boxEight.style.textTransform = 'lowercase'; 
    boxEight.innerHTML = "";
    boxEight.style.backgroundColor = "";
    boxEight.style.boxShadow = 'none';
}

//Calls resetter function which resets values following the initial and subsequent rounds. Calls each box changer function, then the determine winner function, on time delays.
const changeColors = () => {
    document.getElementById('input-button').disabled = true;
    resetter();
    boxOneChange();
    setTimeout(boxFiveChange, 1000);
    setTimeout(boxTwoChange, 2000);
    setTimeout(boxSixChange, 3000);
    setTimeout(boxThreeChange, 4000);
    setTimeout(boxSevenChange, 5000);
    setTimeout(boxFourChange, 6000);
    setTimeout(boxEightChange, 7000);
    setTimeout(determineWinner, 8000);
    setTimeout(() => {
        document.getElementById('input-button').disabled = false;
    }, 8000);
}

//test function that will call functions faster
/*
const changeColors = () => {
    resetter();
    boxOneChange();
    setTimeout(boxFiveChange, 100);
    setTimeout(boxTwoChange, 200);
    setTimeout(boxSixChange, 300);
    setTimeout(boxThreeChange, 400);
    setTimeout(boxSevenChange, 500);
    setTimeout(boxFourChange, 600);
    setTimeout(boxEightChange, 700);
    setTimeout(determineWinner, 800)
}*/

//Sets the Play button to call the main function
inputButton.onclick = changeColors;
