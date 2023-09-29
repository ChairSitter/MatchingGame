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

const userPts = document.getElementById('user-pts');
const compPts = document.getElementById('comp-pts');
const yourMatches = document.getElementById('your-matches');
const compMatches = document.getElementById('comp-matches');

const userChanger = document.getElementById('changer');
const compChanger = document.getElementById('changer2');

const winnerU = document.getElementById('winnerU');
const winnerC = document.getElementById('winnerC');

let userPerfectRound = false;
let compPerfectRound = false;
let userAllMatches = false;
let compAllMatches = false;
let userStrict = false;
let compStrict = false;
let userLoose = false;
let compLoose = false;
let detectMatch = false;

let userDiff = 0;
let compDigg = 0;

//sets original 0 number for score and win numbers, as they are otherwise not defined until assigned by functions
scoreHuman.innerHTML = 0;
scoreComputer.innerHTML = 0;
userPts.innerHTML = 0;
compPts.innerHTML = 0;

//sets count numbers beginning with 0
let countHuman = 0;
let countComputer = 0;
let userPtsCount = 0;
let compPtsCount = 0;

//chooses a random color from a list of possible colors
const chooseColor = () => {
    const array = ['red', 'orange', 'yellow', 'green', 'blue', 'white'];
    let randomColorNum = Math.floor(Math.random() * 6);
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

//checks if the user or computer achieved a perfect round in which all 8 colors are the same
const checkPerfectRound = () => {
    if(color1 === color2 && color2 === color3 && color3 === color4 && color4 === color5 && color5 === color6 && color6 === color7 && color7 === color8){
        userPerfectRound = true;
    }
    if(color9 === color10 && color10 === color11 && color11 === color12 && color12 === color13 && color13 === color14 && color14 === color15 && color15 === color16){
        compPerfectRound = true;
    }
};

//If no perfect round was scored, checks if the user or computer achieved an "all matches" where all 4 boxes contain a match
const checkAllMatches = () => {
    if(userPerfectRound === true || compPerfectRound === true) {
        userAllMatches = false;
        compAllMatches = false;
    } else {
        if(color1 === color2 && color3 === color4 && color5 === color6 && color7 === color8){
            userAllMatches = true;
        }
        if(color9 === color10 && color11 === color12 && color13 === color14 && color15 === color16){
            compAllMatches = true;
        }
    }
}; 

//If no perfect round or all-matches was scored, checks if the user or computer achieved a strict straight
const checkStrictStraight = () => {
    if (userPerfectRound === true || compPerfectRound === true || userAllMatches === true || compAllMatches === true){
        userStrict = false;
        compStrict = false;
    } else {
        if(color1 === color3 && color3 === color5 && color5 === color7){
            userStrict = true;
        }
        if(color2 === color4 && color4 === color6 && color6 === color8){
            userStrict = true;
        }
        if(color9 === color11 && color11 === color13 && color13 === color15){
            compStrict = true;
        }
        if(color10 === color12 && color12 === color14 && color14 === color16){
            compStrict = true;
        }
    }
};

//If no perfect round, all-matches, or strict straight was scored, checks if the user or computer achieved a loose straight
const checkLooseStraight = () => {
    if (userPerfectRound === true || compPerfectRound === true || userAllMatches === true || compAllMatches === true || userStrict === true || compStrict === true){
        userLoose === false;
        compLoose === false;
    } else {
        let array34 = [color3, color4];
        let array56 = [color5, color6];
        let array78 = [color7, color8];
        if (array34.includes(color1) && array56.includes(color1) && array78.includes(color1)){
            userLoose = true;
        } else if (array34.includes(color2) && array56.includes(color2) && array78.includes(color2)){
            userLoose = true;
        }

        let array1112 = [color11, color12];
        let array1314 = [color13, color14];
        let array1516 = [color15, color16];
        if (array1112.includes(color9) && array1314.includes(color9) && array1516.includes(color9)){
            compLoose = true;
        } else if (array1112.includes(color10) && array1314.includes(color10) && array1516.includes(color10)){
            compLoose = true;
        }
    }
};

/*If no perfect round, all-matches, strict straight, or loose straight was scored, checks if the two colors of each box match. 
Assigns special styling to boxes with matches and ups the countHuman or countComputer score by one.*/
const checkMatches = () => {
    if (userPerfectRound === true || compPerfectRound === true || userAllMatches === true || compAllMatches === true || userStrict === true || compStrict === true || userLoose === true || compLoose === true){
        detectMatch = false;
    } else {
        if(color1 === color2){
            boxOne.style.border = "5px black dashed";
            boxOne.style.boxShadow = "3px 3px white";
            countHuman++;
        }
        if(color3 === color4){
            boxTwo.style.border = "5px black dashed";
            boxTwo.style.boxShadow = "3px 3px white";
            countHuman++;
        }
        if(color5 === color6){
            boxThree.style.border = "5px black dashed";
            boxThree.style.boxShadow = "3px 3px white";
            countHuman++;
        }
        if(color7 === color8){
            boxFour.style.border = "5px black dashed";
            boxFour.style.boxShadow = "3px 3px white";
            countHuman++;
        }
        if(color9 === color10){
            boxFive.style.border = "5px black dashed";
            boxFive.style.boxShadow = "3px 3px white";
            countComputer++;
        }
        if(color11 === color12){
            boxSix.style.border = "5px black dashed";
            boxSix.style.boxShadow = "3px 3px white";
            countComputer++;
        }
        if(color13 === color14){
            boxSeven.style.border = "5px black dashed";
            boxSeven.style.boxShadow = "3px 3px white";
            countComputer++;
        }
        if(color15 === color16){
            boxEight.style.border = "5px black dashed";
            boxEight.style.boxShadow = "3px 3px white";
            countComputer++;
        };
        scoreHuman.innerHTML = countHuman;
        scoreComputer.innerHTML = countComputer;
        detectMatch = true;
    }
};

//Calculates and displays scores and announces winner by comparing scores
const determineWinner = () => {
    checkPerfectRound();
    checkAllMatches();
    checkStrictStraight();
    checkLooseStraight();
    checkMatches();

    if(userPerfectRound === true){
        if(compPerfectRound === true){
            winnerU.innerHTML = "Perfect<br/>round<br/>Tie!";
            winnerC.innerHTML = "Perfect<br/>round<br/>Tie!";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + 25;
            winnerU.innerHTML = "Perfect<br/>round<br/>+25";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }  
    } else if(compPerfectRound === true){
        compPtsCount = compPtsCount + 25;
        winnerC.innerHTML = "Perfect<br/>round<br/>+25";
        compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
    } else if(userAllMatches === true){
        if(compAllMatches === true){
            winnerU.innerHTML = "4 matches<br/>Tie!";
            winnerC.innerHTML = "4 matches<br/>Tie!";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + 10;
            winnerU.innerHTML = "4 matches<br/>+10";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(compAllMatches === true){
        compPtsCount = compPtsCount + 10;
        winnerC.innerHTML = "4 matches<br/>+10";
        compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
    } else if(userStrict === true){
        if(compStrict === true){
            winnerU.innerHTML = "Strict<br/>straight<br/>Tie!";
            winnerC.innerHTML = "Strict<br/>straight<br/>Tie!";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + 5;
            winnerU.innerHTML = "Strict<br/>straight<br/>+5";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(compStrict === true){
        compPtsCount = compPtsCount + 5;
        winnerC.innerHTML = "Strict<br/>straight<br/>+5";
        compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
    } else if(userLoose === true){
        if(compLoose === true){
            winnerU.innerHTML = "Loose<br/>straight<br/>Tie!";
            winnerC.innerHTML = "Loose<br/>straight<br/>Tie!";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + 3;
            winnerU.innerHTML = "Loose<br/>straight<br/>+3";
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(compLoose === true){
        compPtsCount = compPtsCount + 3;
        winnerC.innerHTML = "Loose<br/>straight<br/>+3";
        compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
    } else if(detectMatch === true){
        if (countHuman > countComputer){
            scoreHuman.style.textShadow = '1.5px 1.5px white';
            yourMatches.style.textShadow = '1px 1px white';
            if(countHuman === 1){
                winnerU.innerHTML = `${countHuman} match<br/>+1`;
                winnerC.innerHTML = `${countComputer} matches`;
            } else if(countComputer === 1){
                winnerU.innerHTML = `${countHuman} matches<br/>+1`;
                winnerC.innerHTML = `${countComputer} match`;
            } else {
                winnerU.innerHTML = `${countHuman} matches<br/>+1`;
                winnerC.innerHTML = `${countComputer} matches`;
            }  
            body.style.backgroundColor = 'rgb(0, 0, 165)';
            setTimeout(() => {
                body.style.backgroundColor = 'darkblue';
            }, 150);
            userPtsCount++;
        } else if (countHuman < countComputer){
            scoreComputer.style.textShadow = '1.5px 1.5px white';
            compMatches.style.textShadow = '1px 1px white';
            if(countComputer === 1){
                winnerU.innerHTML = `${countHuman} matches`;
                winnerC.innerHTML = `${countComputer} match<br/>+1`;
            } else if(countHuman === 1){
                winnerU.innerHTML = `${countHuman} match`;
                winnerC.innerHTML = `${countComputer} matches<br/>+1`;
            } else {
                winnerU.innerHTML = `${countHuman} matches`;
                winnerC.innerHTML = `${countComputer} matches<br/>+1`;
            };
            compPtsCount++;
        } else { 
            if(countHuman === 1){
                winnerU.innerHTML = `${countHuman} match<br/>Tie!`;
                winnerC.innerHTML = `${countComputer} match<br/>Tie!`;
            } else {
                winnerU.innerHTML = `${countHuman} matches<br/>Tie!`;
                winnerC.innerHTML = `${countComputer} matches<br/>Tie!`;
            };
            scoreComputer.style.textShadow = '1.5px 1.5px white';
            scoreHuman.style.textShadow = '1.5px 1.5px white';
        }  
    }
    compPts.innerHTML = compPtsCount;
    userPts.innerHTML = userPtsCount;
    //check who won, update win displays and style of match displays

}

//Resets special border for matches, resets score counters to 0 and displays this.
const resetter = () => {
    countComputer = 0;
    countHuman = 0;
    scoreHuman.innerHTML = countHuman;
    scoreComputer.innerHTML = countComputer;

    userPerfectRound = false;
    compPerfectRound = false;
    userAllMatches = false;
    compAllMatches = false;
    userStrict = false;
    compStrict = false;
    userLoose = false;
    compLoose = false;
    detectMatch = false;

    scoreHuman.style.textShadow = 'none';
    yourMatches.style.textShadow = 'none';
    scoreComputer.style.textShadow = 'none';
    compMatches.style.textShadow = 'none';

    winnerU.innerHTML = '';
    winnerC.innerHTML = '';

    userChanger.style.backgroundColor = '';
    compChanger.style.backgroundColor = '';

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
};

//test function that will call functions faster
/*const changeColors = () => {
    document.getElementById('input-button').disabled = true;
    resetter();
    boxOneChange();
    setTimeout(boxFiveChange, 100);
    setTimeout(boxTwoChange, 200);
    setTimeout(boxSixChange, 300);
    setTimeout(boxThreeChange, 400);
    setTimeout(boxSevenChange, 500);
    setTimeout(boxFourChange, 600);
    setTimeout(boxEightChange, 700);
    setTimeout(determineWinner, 800);
        setTimeout(() => {
        document.getElementById('input-button').disabled = false;
    }, 800);
}*/

//Sets the Play button to call the main function
inputButton.onclick = changeColors;
