//Declare constants for input button, boxes, and containers for scores and winner declaration
const inputButton = document.getElementById('input-button');
const multButton = document.getElementById('mult-button');
const multMessage = document.getElementById('mult-message');
multMessage.style.display = 'none';
document.getElementById('mult-message').disabled = true;
document.getElementById('mult-button').disabled = true;

const boxOne = document.getElementById('div1');
const boxTwo = document.getElementById('div2');
const boxThree = document.getElementById('div3');
const boxFour = document.getElementById('div4');
const boxFive = document.getElementById('div5');
const boxSix = document.getElementById('div6');
const boxSeven = document.getElementById('div7');
const boxEight = document.getElementById('div8');

const userPts = document.getElementById('user-pts');
const compPts = document.getElementById('comp-pts');

const userChanger = document.getElementById('changer');
const compChanger = document.getElementById('changer2');

const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');

const winnerU = document.getElementById('winnerU');
const winnerC = document.getElementById('winnerC');

let difference = 0;
let restart = false;

let userReds = 0;
let userOranges = 0;
let userYellows = 0;
let userGreens = 0;
let userBlues = 0;
let userPurples = 0;
let compReds = 0;
let compOranges = 0;
let compYellows = 0;
let compGreens = 0;
let compBlues = 0;
let compPurples = 0;

let userPerfectRound = false;
let compPerfectRound = false;
let userAllMatches = false;
let compAllMatches = false;
let userStrict = false;
let compStrict = false;
let userLoose = false;
let compLoose = false;
let detectMatch = false;

let countdown = 5;
let multiplier = 1;
multButton.innerHTML = "MULTIPLY";
multButton.style.color = 'lightgray';
multButton.style.opacity = '.60';
let multipliedScore;

//sets original 0 number for score and win numbers, as they are otherwise not defined until assigned by functions
userPts.innerHTML = 0;
compPts.innerHTML = 0;

let countHuman = 0;
let countComputer = 0;
let userPtsCount = 0;
let compPtsCount = 0;

//for alternate reveals
let topDown = 1
//let topDown = Math.ceil(Math.random()*9);

//chooses a random color from a list of 6 possible colors
const chooseColor = () => {
    const array = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
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

    countdown = 5;
    multButton.innerHTML = `MULTIPLY x${countdown}`;

    if(userPerfectRound === true){
        if(compPerfectRound === true){
            tieBreak();
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + (25 * multiplier); 
            if(multiplier != 1){
                multipliedScore = (25 * multiplier);
                winnerU.innerHTML = `Perfect<br/>round<br/><br/>25 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "Perfect<br/>round<br/>+25";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            };
        }  
    } else if(compPerfectRound === true){
        compPtsCount = compPtsCount + (25 * multiplier); 
        if(multiplier != 1){
            multipliedScore = (25 * multiplier);
            winnerC.innerHTML = `Perfect<br/>round<br/>25 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "Perfect<br/>round<br/>+25";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(userAllMatches === true){
        if(compAllMatches === true){
            tieBreak();
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + (10 * multiplier); 
            if(multiplier != 1){
                multipliedScore = (10 * multiplier);
                winnerU.innerHTML = `4 Matches<br/>10 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "4 Matches<br/>+10";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            }
        }
    } else if(compAllMatches === true){
        compPtsCount = compPtsCount + (10 * multiplier);
        if(multiplier != 1){
            multipliedScore = (10 * multiplier);
            winnerC.innerHTML = `4 Matches<br/>10 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "4 Matches<br/>+10";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(userStrict === true){
        if(compStrict === true){
            tieBreak();
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + (5 * multiplier);
            if(multiplier != 1){
                multipliedScore = (5 * multiplier);
                winnerU.innerHTML = `Strict<br/>Straight<br/>5 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "Strict<br/>Straight<br/>+10";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            }
        }
    } else if(compStrict === true){
        compPtsCount = compPtsCount + (5 * multiplier);
        if(multiplier != 1){
            multipliedScore = (5 * multiplier);
            winnerC.innerHTML = `Strict<br/>Straight<br/>5 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "Strict<br/>Straight<br/>+5";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(userLoose === true){
        if(compLoose === true){
            tieBreak();
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + (3 * multiplier);
            if(multiplier != 1){
                multipliedScore = (3 * multiplier);
                winnerU.innerHTML = `Loose<br/>straight<br/>3 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "Loose<br/>straight<br/>+3";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            }
        }
    } else if(compLoose === true){
        compPtsCount = compPtsCount + (3 * multiplier);
        if(multiplier != 1){
            multipliedScore = (3 * multiplier);
            winnerC.innerHTML = `Loose<br/>Straight<br/>3 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "Loose<br/>straight<br/>+3";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(detectMatch === true){
        if (countHuman > countComputer){
            if(multiplier != 1){
                if(countHuman === 1){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} match<br/>1 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} matches`;
                } else if(countComputer === 1){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} matches<br/>1 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} match`;
                } else {
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} matches<br/>1 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} matches`;
                }  
            } else {
                if(countHuman === 1){
                    winnerU.innerHTML = `${countHuman} match <br/>+1`;
                    winnerC.innerHTML = `${countComputer} matches`;
                } else if(countComputer === 1){
                    winnerU.innerHTML = `${countHuman} matches<br/>+1`;
                    winnerC.innerHTML = `${countComputer} match`;
                } else {
                    winnerU.innerHTML = `${countHuman} matches<br/>+1`;
                    winnerC.innerHTML = `${countComputer} matches`;
                }  
            }
            userPtsCount = userPtsCount + multiplier;
        } else if (countHuman < countComputer){
            if(multiplier != 1){
                if(countComputer === 1){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} matches`;
                    winnerC.innerHTML = `${countComputer} match<br/>1 x ${multiplier} = ${multipliedScore}`;
                } else if(countHuman === 1){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} match`;
                    winnerC.innerHTML = `${countComputer} matches<br/>1 x ${multiplier} = ${multipliedScore}`;
                } else {
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} matches`;
                    winnerC.innerHTML = `${countComputer} matches<br/>1 x ${multiplier} = ${multipliedScore}`;
                };
            } else {
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
            }
            compPtsCount = compPtsCount + multiplier;
        } else { 
            tieBreak();
        }  
    }
    compPts.innerHTML = compPtsCount;
    userPts.innerHTML = userPtsCount;
    if(multiplier = 1){
        multButton.innerHTML = 'MULTIPLY';
        multButton.style.opacity = ".60";
        multButton.style.color = "light gray";
    }
    limit50();
}

const limit50 = () => {
    if (userPtsCount >= 50){
        if(userPtsCount > 50){
            userPtsCount = 50;
            userPts.innerHTML = userPtsCount;
        }
        difference = userPtsCount - compPtsCount;
        if(difference != 1){
            winnerU.innerHTML = `You won<br/>by ${difference} pts!`;
        } else {
            winnerU.innerHTML = `You won<br/>by ${difference} pt!`;
        }
        winnerC.innerHTML = '';
        bottomLeft.style.boxShadow = '5px 5px rgb(197 179 20)';
        restart = true;
    } else if (compPtsCount >= 50){
        if(compPtsCount > 50){
            compPtsCount = 50;
            compPts.innerHTML = compPtsCount;
        }
        difference = compPtsCount - userPtsCount;
        if(difference != 1){
            winnerC.innerHTML = `Comp won<br/>by ${difference} pts!`;
        } else {
            winnerC.innerHTML = `Comp won<br/>by ${difference} pt!`;
        }
        winnerU.innerHTML = '';
        bottomRight.style.boxShadow = '5px 5px rgb(197 179 20)';
        restart = true;
    };
};

//Resets special border for matches, resets score counters to 0 and displays this.
const resetter = () => {
    countComputer = 0;
    countHuman = 0;
    countdown = 5;
    multButton.style.display = 'block';
    multButton.innerHTML = `MULTIPLY x${countdown}`;
    multMessage.style.display = 'none';
    multiplier = 1;

    if(restart === true){
        userPtsCount = 0;
        userPts.innerHTML = userPtsCount;
        compPtsCount = 0;
        compPts.innerHTML = compPtsCount;
        restart = false;
    };

    userPerfectRound = false;
    compPerfectRound = false;
    userAllMatches = false;
    compAllMatches = false;
    userStrict = false;
    compStrict = false;
    userLoose = false;
    compLoose = false;
    detectMatch = false;

    bottomLeft.style.boxShadow = 'none';
    bottomRight.style.boxShadow = 'none';

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

//.9 second timin
const multiplierCountdown = () => {
    multButton.style.color = 'white';
    multButton.style.opacity = '100';
    setTimeout(() => {
        countdown = 4;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 1800);
    setTimeout(() => {
        countdown = 3;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 3600);
    setTimeout(() => {
        countdown = 2;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 5400);
};

//1 second timing multiplierCountdown
/*const multiplierCountdown = () => {
    setTimeout(() => {
        countdown = 4;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 2000);
    setTimeout(() => {
        countdown = 3;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 4000);
    setTimeout(() => {
        countdown = 2;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 6000);
};*/

const multiply = () => {
    document.getElementById('mult-button').disabled = true;
    multButton.style.display = 'none';
    multiplier = countdown;
    multMessage.style.display = 'block';
    multMessage.innerHTML = `MULTIPLIED x${multiplier}`;
    multMessage.style.fontFamily = 'Arial, Helvetica, sans-serif'
};

const tieBreak = () => {
    let userColorsArray = [color1, color2, color3, color4, color5, color6, color7, color8];
    userReds = 0;
    userOranges = 0;
    userYellows = 0;
    userGreens = 0;
    userBlues = 0;
    userPurples = 0;

    for(let i = 0; i < userColorsArray.length; i++){
        if(userColorsArray[i] === 'red'){
            userReds++;
        } else if(userColorsArray[i] === 'orange'){
            userOranges++;
        } else if(userColorsArray[i] === 'yellow'){
            userYellows++;
        } else if(userColorsArray[i] === 'green'){
            userGreens++;
        } else if(userColorsArray[i] === 'blue'){
            userBlues++;
        } else if(userColorsArray[i] === 'purple'){
            userPurples++;
        } 
    };    
    let userWarms = userReds + userOranges + userYellows;
    let userColorNumbers = [userReds, userOranges, userYellows, userGreens, userBlues, userPurples];
    userColorNumbers.sort(function(a, b){return b-a});

    let compColorsArray = [color9, color10, color11, color12, color13, color14, color15, color16];
    compReds = 0;
    compOranges = 0;
    compYellows = 0;
    compGreens = 0;
    compBlues = 0;
    compPurples = 0;
    for(let i = 0; i < compColorsArray.length; i++){
        if(compColorsArray[i] === 'red'){
            compReds++;
        } else if(compColorsArray[i] === 'orange'){
            compOranges++;
        } else if(compColorsArray[i] === 'yellow'){
            compYellows++;
        } else if(compColorsArray[i] === 'green'){
            compGreens++;
        } else if(compColorsArray[i] === 'blue'){
            compBlues++;
        } else if(compColorsArray[i] === 'purple'){
            compPurples++;
        } 
    };
    let compWarms = compReds + compOranges + compYellows;
    let compColorNumbers = [compReds, compOranges, compYellows, compGreens, compBlues, compPurples];
    compColorNumbers.sort(function(a, b){return b-a});
    if(userColorNumbers[0] > compColorNumbers[0]){
        if(userPerfectRound === true){
            winnerU.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
            winnerC.innerHTML = 'Perfect<br/>Round';
            userPtsCount++;
        } else if(userAllMatches === true){
            winnerU.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
            winnerC.innerHTML = '4 Matches';
            userPtsCount++;
        } else if(userStrict === true){
            winnerU.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
            winnerC.innerHTML = 'Strict<br/>Straight';
            userPtsCount++;
        } else if(userLoose === true){
            winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
            winnerC.innerHTML = 'Loose<br/>Straight';
            userPtsCount++;
        } else if(detectMatch === true){
            if(countHuman === 1){
                winnerU.innerHTML = `${countHuman} match<br/>Tiebreaker<br/>Won +1`;
                winnerC.innerHTML = `${countComputer} match<br/>Tie`;
            } else {
                winnerU.innerHTML = `${countHuman} matches<br/>Tiebreaker<br/>Won +1`;
                winnerC.innerHTML = `${countComputer} matches<br/>Tie`;
            };
            userPtsCount++;
        };
    } else if(compColorNumbers[0] > userColorNumbers[0]){
        if(userPerfectRound === true){
            winnerC.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
            winnerU.innerHTML = 'Perfect<br/>Round';
            compPtsCount++;
        } else if(userAllMatches === true){
            winnerC.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
            winnerU.innerHTML = '4 Matches';
            compPtsCount++;
        } else if(userStrict === true){
            winnerC.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
            winnerU.innerHTML = 'Strict<br/>Straight';
            compPtsCount++;
        } else if(userLoose === true){
            winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
            winnerU.innerHTML = 'Loose<br/>Straight';
            compPtsCount++;
        } else if(detectMatch === true){
            if(countHuman === 1){
                winnerC.innerHTML = `${countComputer} match<br/>Tiebreaker<br/>Won +1`;
                winnerU.innerHTML = `${countHuman} match<br/>Tie`;
            } else {
                winnerC.innerHTML = `${countComputer} matches<br/>Tiebreaker<br/>Won +1`;
                winnerU.innerHTML = `${countHuman} matches<br/>Tie`;
            };
            compPtsCount++;
        };
    } else if (userColorNumbers[0] === compColorNumbers[0]){ //then go to second number
        if(userColorNumbers[1] > compColorNumbers[1]){
            if(userPerfectRound === true){
                winnerU.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                winnerC.innerHTML = 'Perfect<br/>Round';
                userPtsCount++;
            } else if(userAllMatches === true){
                winnerU.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                winnerC.innerHTML = '4 Matches';
                userPtsCount++;
            } else if(userStrict === true){
                winnerU.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                winnerC.innerHTML = 'Strict<br/>Straight';
                userPtsCount++;
            } else if(userLoose === true){
                winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                winnerC.innerHTML = 'Loose<br/>Straight';
                userPtsCount++;
            } else if(detectMatch === true){
                if(countHuman === 1){
                    winnerU.innerHTML = `${countHuman} match<br/>Tiebreaker<br/>Won +1`;
                    winnerC.innerHTML = `${countComputer} match<br/>Tie`;
                } else {
                    winnerU.innerHTML = `${countHuman} matches<br/>Tiebreaker<br/>Won +1`;
                    winnerC.innerHTML = `${countComputer} matches<br/>Tie`;
                };
                userPtsCount++;
            };
        } else if(compColorNumbers[1] > userColorNumbers[1]){
            if(userPerfectRound === true){
                winnerC.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                winnerU.innerHTML = 'Perfect<br/>Round';
                compPtsCount++;
            } else if(userAllMatches === true){
                winnerC.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won! +1';
                winnerU.innerHTML = '4 Matches';
                compPtsCount++;
            } else if(userStrict === true){
                winnerC.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                winnerU.innerHTML = 'Strict<br/>Straight';
                compPtsCount++;
            } else if(userLoose === true){
                winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                winnerU.innerHTML = 'Loose<br/>Straight';
                compPtsCount++;
            } else if(detectMatch === true){
                if(countHuman === 1){
                    winnerC.innerHTML = `${countComputer} match<br/>Tiebreaker<br/>Won +1`;
                    winnerU.innerHTML = `${countHuman} match<br/>Tie`;
                } else {
                    winnerC.innerHTML = `${countComputer} matches<br/>Tiebreaker<br/>Won +1`;
                    winnerU.innerHTML = `${countHuman} matches<br/>Tie`;
                };
                compPtsCount++;
            };
        } else if (userColorNumbers[1] === compColorNumbers[1]){ //then go to third number
            if(userColorNumbers[2] > compColorNumbers[2]){
                if(userPerfectRound === true){
                    winnerU.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                    winnerC.innerHTML = 'Perfect<br/>Round';
                    userPtsCount++;
                } else if(userAllMatches === true){
                    winnerU.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                    winnerC.innerHTML = '4 Matches';
                    userPtsCount++;
                } else if(userStrict === true){
                    winnerU.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                    winnerC.innerHTML = 'Strict<br/>Straight';
                    userPtsCount++;
                } else if(userLoose === true){
                    winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                    winnerC.innerHTML = 'Loose<br/>Straight';
                    userPtsCount++;
                } else if(detectMatch === true){
                    if(countHuman === 1){
                        winnerU.innerHTML = `${countHuman} match<br/>Tiebreaker<br/>Won +1`;
                        winnerC.innerHTML = `${countComputer} match<br/>Tie`;
                    } else {
                        winnerU.innerHTML = `${countHuman} matches<br/>Tiebreaker<br/>Won +1`;
                        winnerC.innerHTML = `${countComputer} matches<br/>Tie`;
                    };
                    userPtsCount++;
                };
            } else if(compColorNumbers[2] > userColorNumbers[2]){
                if(userPerfectRound === true){
                    winnerC.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                    winnerU.innerHTML = 'Perfect<br/>Round';
                    compPtsCount++;
                } else if(userAllMatches === true){
                    winnerC.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                    winnerU.innerHTML = '4 Matches';
                    compPtsCount++;
                } else if(userStrict === true){
                    winnerC.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                    winnerU.innerHTML = 'Strict<br/>Straight';
                    compPtsCount++;
                } else if(userLoose === true){
                    winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                    winnerU.innerHTML = 'Loose<br/>Straight';
                    compPtsCount++;
                } else if(detectMatch === true){
                    if(countHuman === 1){
                        winnerC.innerHTML = `${countComputer} match<br/>Tiebreaker<br/>Won +1`;
                        winnerU.innerHTML = `${countHuman} match<br/>Tie`;
                    } else {
                        winnerC.innerHTML = `${countComputer} matches<br/>Tiebreaker<br/>Won +1`;
                        winnerU.innerHTML = `${countHuman} matches<br/>Tie`;
                    };
                    compPtsCount++;
                };
            } else if (userColorNumbers[2] === compColorNumbers[2]){ //then go to fourth number
                if(userColorNumbers[3] > compColorNumbers[3]){
                    if(userPerfectRound === true){
                        winnerU.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                        winnerC.innerHTML = 'Perfect<br/>Round';
                        userPtsCount++;
                    } else if(userAllMatches === true){
                        winnerU.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                        winnerC.innerHTML = '4 Matches';
                        userPtsCount++;
                    } else if(userStrict === true){
                        winnerU.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                        winnerC.innerHTML = 'Strict<br/>Straight';
                        userPtsCount++;
                    } else if(userLoose === true){
                        winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                        winnerC.innerHTML = 'Loose<br/>Straight';
                        userPtsCount++;
                    } else if(detectMatch === true){
                        if(countHuman === 1){
                            winnerU.innerHTML = `${countHuman} match<br/>Tiebreaker<br/>Won +1`;
                            winnerC.innerHTML = `${countComputer} match<br/>Tie`;
                        } else {
                            winnerU.innerHTML = `${countHuman} matches<br/>Tiebreaker<br/>Won +1`;
                            winnerC.innerHTML = `${countComputer} matches<br/>Tie`;
                        };
                        userPtsCount++;
                    };
                } else if(compColorNumbers[3] > userColorNumbers[3]){
                    if(userPerfectRound === true){
                        winnerC.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                        winnerU.innerHTML = 'Perfect<br/>Round';
                        compPtsCount++;
                    } else if(userAllMatches === true){
                        winnerC.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                        winnerU.innerHTML = '4 Matches';
                        compPtsCount++;
                    } else if(userStrict === true){
                        winnerC.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                        winnerU.innerHTML = 'Strict<br/>Straight';
                        compPtsCount++;
                    } else if(userLoose === true){
                        winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                        winnerU.innerHTML = 'Loose<br/>Straight';
                        compPtsCount++;
                    } else if(detectMatch === true){
                        if(countHuman === 1){
                            winnerC.innerHTML = `${countComputer} match<br/>Tiebreaker<br/>Won +1`;
                            winnerU.innerHTML = `${countHuman} match<br/>Tie`;
                        } else {
                            winnerC.innerHTML = `${countComputer} matches<br/>Tiebreaker<br/>Won +1`;
                            winnerU.innerHTML = `${countHuman} matches<br/>Tie`;
                        };
                        compPtsCount++;
                    };
                } else if (userColorNumbers[3] === compColorNumbers[3]){ //then go to fifth number
                    if(userColorNumbers[4] > compColorNumbers[4]){
                        if(userPerfectRound === true){
                            winnerU.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                            winnerC.innerHTML = 'Perfect<br/>Round';
                            userPtsCount++;
                        } else if(userAllMatches === true){
                            winnerU.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                            winnerC.innerHTML = '4 Matches';
                            userPtsCount++;
                        } else if(userStrict === true){
                            winnerU.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                            winnerC.innerHTML = 'Strict<br/>Straight';
                            userPtsCount++;
                        } else if(userLoose === true){
                            winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                            winnerC.innerHTML = 'Loose<br/>Straight';
                            userPtsCount++;
                        } else if(detectMatch === true){
                            if(countHuman === 1){
                                winnerU.innerHTML = `${countHuman} match<br/>Tiebreaker<br/>Won +1`;
                                winnerC.innerHTML = `${countComputer} match<br/>Tie`;
                            } else {
                                winnerU.innerHTML = `${countHuman} matches<br/>Tiebreaker<br/>Won +1`;
                                winnerC.innerHTML = `${countComputer} matches<br/>Tie`;
                            };
                            userPtsCount++;
                        };
                    } else if(compColorNumbers[4] > userColorNumbers[4]){
                        if(userPerfectRound === true){
                            winnerC.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                            winnerU.innerHTML = 'Perfect<br/>Round';
                            compPtsCount++;
                        } else if(userAllMatches === true){
                            winnerC.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                            winnerU.innerHTML = '4 Matches';
                            compPtsCount++;
                        } else if(userStrict === true){
                            winnerC.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                            winnerU.innerHTML = 'Strict<br/>Straight';
                            compPtsCount++;
                        } else if(userLoose === true){
                            winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                            winnerU.innerHTML = 'Loose<br/>Straight';
                            compPtsCount++;
                        } else if(detectMatch === true){
                            if(countHuman === 1){
                                winnerC.innerHTML = `${countComputer} match<br/>Tiebreaker<br/>Won +1`;
                                winnerU.innerHTML = `${countHuman} match<br/>Tie`;
                            } else {
                                winnerC.innerHTML = `${countComputer} matches<br/>Tiebreaker<br/>Won +1`;
                                winnerU.innerHTML = `${countHuman} matches<br/>Tie`;
                            };
                            compPtsCount++;
                        };
                    } else if (userColorNumbers[4] === compColorNumbers[4]){ //further tiebreaker
                        if(userWarms > compWarms){
                            if(userPerfectRound === true){
                                winnerU.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                                winnerC.innerHTML = 'Perfect<br/>Round';
                                userPtsCount++;
                            } else if(userAllMatches === true){
                                winnerU.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won +1';
                                winnerC.innerHTML = '4 Matches';
                                userPtsCount++;
                            } else if(userStrict === true){
                                winnerU.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                                winnerC.innerHTML = 'Strict<br/>Straight';
                                userPtsCount++;
                            } else if(userLoose === true){
                                winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                                winnerC.innerHTML = 'Loose<br/>Straight';
                                userPtsCount++;
                            } else if(detectMatch === true){
                                if(countHuman === 1){
                                    winnerU.innerHTML = `${countHuman} match<br/>Tiebreaker<br/>Won +1`;
                                    winnerC.innerHTML = `${countComputer} match<br/>Tie`;
                                } else {
                                    winnerU.innerHTML = `${countHuman} matches<br/>Tiebreaker<br/>Won +1`;
                                    winnerC.innerHTML = `${countComputer} matches<br/>Tie`;
                                };
                                userPtsCount++;
                            };
                        } else if(compWarms > userWarms){
                            if(userPerfectRound === true){
                                winnerC.innerHTML = 'Perfect<br/>Round<br/>Tiebreaker<br/>Won +1';
                                winnerU.innerHTML = 'Perfect<br/>Round';
                                compPtsCount++;
                            } else if(userAllMatches === true){
                                winnerC.innerHTML = '4 Matches<br/>Tiebreaker<br/>Won!';
                                winnerU.innerHTML = '4 Matches';
                                compPtsCount++;
                            } else if(userStrict === true){
                                winnerC.innerHTML = 'Strict<br/>Straight<br/>Tiebreaker<br/>Won +1';
                                winnerU.innerHTML = 'Strict<br/>Straight';
                                compPtsCount++;
                            } else if(userLoose === true){
                                winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreaker<br/>Won +1';
                                winnerU.innerHTML = 'Loose<br/>Straight';
                                compPtsCount++;
                            } else if(detectMatch === true){
                                if(countHuman === 1){
                                    winnerC.innerHTML = `${countComputer} match<br/>Tiebreaker<br/>Won +1`;
                                    winnerU.innerHTML = `${countHuman} match<br/>Tie`;
                                } else {
                                    winnerC.innerHTML = `${countComputer} matches<br/>Tiebreaker<br/>Won +1`;
                                    winnerU.innerHTML = `${countHuman} matches<br/>Tie`;
                                };
                                compPtsCount++;
                            };
                        } else if(compWarms === userWarms){
                            if(userPerfectRound === true){
                                winnerC.innerHTML = 'Perfect<br/>Round<br/>Tie';
                                winnerU.innerHTML = 'Perfect<br/>Round<br/>Tie';
                            } else if(userAllMatches === true){
                                winnerC.innerHTML = '4 Matches';
                                winnerU.innerHTML = '4 Matches';
                            } else if(userStrict === true){
                                winnerC.innerHTML = 'Strict<br/>Straight<br/>Tie';
                                winnerU.innerHTML = 'Strict<br/>Straight<br/>Tie';
                            } else if(userLoose === true){
                                winnerC.innerHTML = 'Loose<br/>Straight<br/>Tie';
                                winnerU.innerHTML = 'Loose<br/>Straight<br/>Tie';
                            } else if(detectMatch === true){
                                if(countHuman === 1){
                                    winnerU.innerHTML = `${countHuman} match<br/>Tie`;
                                    winnerC.innerHTML = `${countComputer} match<br/>Tie`;
                                } else {
                                    winnerC.innerHTML = `${countHuman} matches<br/>Tie`;
                                    winnerU.innerHTML = `${countComputer} matches<br/>Tie`;
                                };
                            };
                        }
                    }
                }
            }
        }
    }
}

//Calls resetter function which resets values following the initial and subsequent rounds. Calls each box changer function, then the determine winner function, on time delays.
/*const runFunctions = () => {
    document.getElementById('input-button').disabled = true;
    document.getElementById('mult-button').disabled = false;
    multiplierCountdown();
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
    setTimeout(() => {
        document.getElementById('mult-button').disabled = true;
    }, 8000);
};*/

//code for slightly faster boxes
/*const runFunctions = () => {
    document.getElementById('input-button').disabled = true;
    document.getElementById('mult-button').disabled = false;
    multiplierCountdown();
    resetter();
    boxOneChange();
    setTimeout(boxFiveChange, 900);
    setTimeout(boxTwoChange, 1800);
    setTimeout(boxSixChange, 2700);
    setTimeout(boxThreeChange, 3600);
    setTimeout(boxSevenChange, 4500);
    setTimeout(boxFourChange, 5400);
    setTimeout(boxEightChange, 6300);
    setTimeout(determineWinner, 7200);
    setTimeout(() => {
        document.getElementById('input-button').disabled = false;
    }, 7200);
    setTimeout(() => {
        document.getElementById('mult-button').disabled = true;
    }, 7200);
};*/

//code to alternate between which side is displayed first
/*const runFunctions = () => {
    document.getElementById('input-button').disabled = true;
    document.getElementById('mult-button').disabled = false;
    multiplierCountdown();
    resetter();
    if(topDown === 1){
        boxOneChange();
        setTimeout(boxFiveChange, 900);
        setTimeout(boxTwoChange, 1800);
        setTimeout(boxSixChange, 2700);
        setTimeout(boxThreeChange, 3600);
        setTimeout(boxSevenChange, 4500);
        setTimeout(boxFourChange, 5400);
        setTimeout(boxEightChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = 2;
    } else if(topDown === 2){
        boxFiveChange();
        setTimeout(boxOneChange, 900);
        setTimeout(boxSixChange, 1800);
        setTimeout(boxTwoChange, 2700);
        setTimeout(boxSevenChange, 3600);
        setTimeout(boxThreeChange, 4500);
        setTimeout(boxEightChange, 5400);
        setTimeout(boxFourChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = 1;
    };
    setTimeout(() => {
        document.getElementById('input-button').disabled = false;
    }, 7200);
    setTimeout(() => {
        document.getElementById('mult-button').disabled = true;
    }, 7200);
};*/

//code that will create 9 different styles of the order of box reveals
/*const runFunctions = () => {
    document.getElementById('input-button').disabled = true;
    document.getElementById('mult-button').disabled = false;
    multiplierCountdown();
    resetter();
    if(topDown === 1){ //You first, alternate from left
        boxOneChange();
        setTimeout(boxFiveChange, 900);
        setTimeout(boxTwoChange, 1800);
        setTimeout(boxSixChange, 2700);
        setTimeout(boxThreeChange, 3600);
        setTimeout(boxSevenChange, 4500);
        setTimeout(boxFourChange, 5400);
        setTimeout(boxEightChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 2){//Them first, alternate from left
        boxFiveChange();
        setTimeout(boxOneChange, 900);
        setTimeout(boxSixChange, 1800);
        setTimeout(boxTwoChange, 2700);
        setTimeout(boxSevenChange, 3600);
        setTimeout(boxThreeChange, 4500);
        setTimeout(boxEightChange, 5400);
        setTimeout(boxFourChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 3){ //Both at a time, from left
        boxFiveChange();
        boxOneChange();
        setTimeout(boxSixChange, 1800);
        setTimeout(boxTwoChange, 1800);
        setTimeout(boxSevenChange, 3600);
        setTimeout(boxThreeChange, 3600);
        setTimeout(boxEightChange, 5400);
        setTimeout(boxFourChange, 5400);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 4){ //You first, 2 at a time, from left
        boxOneChange();
        setTimeout(boxTwoChange, 900);
        setTimeout(boxFiveChange, 1800);
        setTimeout(boxSixChange, 2700);
        setTimeout(boxThreeChange, 3600);
        setTimeout(boxFourChange, 4500);
        setTimeout(boxSevenChange, 5400);
        setTimeout(boxEightChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 5){ //Them first, 2 at a time, from left
        boxFiveChange();
        setTimeout(boxSixChange, 900);
        setTimeout(boxOneChange, 1800);
        setTimeout(boxTwoChange, 2700);
        setTimeout(boxSevenChange, 3600);
        setTimeout(boxEightChange, 4500);
        setTimeout(boxThreeChange, 5400);
        setTimeout(boxFourChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 6){  //You first, 4 and 4, from left
        boxOneChange();
        setTimeout(boxTwoChange, 900);
        setTimeout(boxThreeChange, 1800);
        setTimeout(boxFourChange, 2700);
        setTimeout(boxFiveChange, 3600);
        setTimeout(boxSixChange, 4500);
        setTimeout(boxSevenChange, 5400);
        setTimeout(boxEightChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 7){  //Them first, 4 and 4, from left
        boxFiveChange();
        setTimeout(boxSixChange, 900);
        setTimeout(boxSevenChange, 1800);
        setTimeout(boxEightChange, 2700);
        setTimeout(boxOneChange, 3600);
        setTimeout(boxTwoChange, 4500);
        setTimeout(boxThreeChange, 5400);
        setTimeout(boxFourChange, 6300);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 8){ //Left half, right half
        boxOneChange();
        boxTwoChange();
        boxFiveChange();
        boxSixChange();
        setTimeout(boxThreeChange, 3600);
        setTimeout(boxFourChange, 3600);
        setTimeout(boxSevenChange, 3600);
        setTimeout(boxEightChange, 3600);
        setTimeout(determineWinner, 7200);
        topDown = Math.ceil(Math.random()*9);
    } else if(topDown === 9){ //All at once
        boxOneChange();
        boxTwoChange();
        boxThreeChange();
        boxFourChange();
        boxFiveChange();
        boxSixChange();
        boxSevenChange();
        boxEightChange();
        setTimeout(determineWinner, 7200);
        topDown = Math.ceiling(Math.random()*9);
    }
    setTimeout(() => {
        document.getElementById('input-button').disabled = false;
    }, 7200);
    setTimeout(() => {
        document.getElementById('mult-button').disabled = true;
    }, 7200);
};*/

//code for simultaneous boxes
/*const runFunctions = () => {
    document.getElementById('input-button').disabled = true;
    document.getElementById('mult-button').disabled = false;
    multiplierCountdown();
    resetter();
    boxOneChange();
    boxFiveChange();
    setTimeout(boxTwoChange, 1800);
    setTimeout(boxSixChange, 1800);
    setTimeout(boxThreeChange, 3600);
    setTimeout(boxSevenChange, 3600);
    setTimeout(boxFourChange, 5400);
    setTimeout(boxEightChange, 5400);
    setTimeout(determineWinner, 7200);
    setTimeout(() => {
        document.getElementById('input-button').disabled = false;
    }, 7200);
    setTimeout(() => {
        document.getElementById('mult-button').disabled = true;
    }, 7200);
};*/

//test function that will call functions much faster
const runFunctions = () => {
    document.getElementById('input-button').disabled = true;
    document.getElementById('mult-button').disabled = false;
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
        setTimeout(() => {
        document.getElementById('mult-button').disabled = true;
    }, 800);
}

//Sets the Play button to call the main function
inputButton.onclick = runFunctions;
multButton.onclick = multiply;