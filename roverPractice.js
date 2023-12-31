//Declare constants for input button, boxes, and containers for scores and winner declaration
const inputButton = document.getElementById('input-button');
document.getElementById('input-button').disabled = true;

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

const button1p = document.getElementById('button1p');
const button2p = document.getElementById('button2p');
const userPtsLabel = document.getElementById('user-pts-label');
const compPtsLabel = document.getElementById('comp-pts-label');
const humanLabel = document.getElementById('human-label');
const computerLabel = document.getElementById('computer-label');
const userSmallLabel = document.getElementById('user-small-label');
const compSmallLabel = document.getElementById('comp-small-label');


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
let topDown = 1;
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
            userPtsCount = userPtsCount + (30 * multiplier); 
            if(multiplier != 1){
                multipliedScore = (30 * multiplier);
                winnerU.innerHTML = `Perfect<br/>round<br/><br/>30 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "Perfect<br/>round<br/>+30";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            };
        }  
    } else if(compPerfectRound === true){
        compPtsCount = compPtsCount + (30 * multiplier); 
        if(multiplier != 1){
            multipliedScore = (30 * multiplier);
            winnerC.innerHTML = `Perfect<br/>round<br/>30 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "Perfect<br/>round<br/>+30";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(userAllMatches === true){
        if(compAllMatches === true){
            tieBreak();
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + (20 * multiplier); 
            if(multiplier != 1){
                multipliedScore = (20 * multiplier);
                winnerU.innerHTML = `4 Matches<br/>20 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "4 Matches<br/>+20";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            }
        }
    } else if(compAllMatches === true){
        compPtsCount = compPtsCount + (20 * multiplier);
        if(multiplier != 1){
            multipliedScore = (20 * multiplier);
            winnerC.innerHTML = `4 Matches<br/>20 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "4 Matches<br/>+20";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(userStrict === true){
        if(compStrict === true){
            tieBreak();
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + (10 * multiplier);
            if(multiplier != 1){
                multipliedScore = (10 * multiplier);
                winnerU.innerHTML = `Strict<br/>Straight<br/>10 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "Strict<br/>Straight<br/>+10";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            }
        }
    } else if(compStrict === true){
        compPtsCount = compPtsCount + (10 * multiplier);
        if(multiplier != 1){
            multipliedScore = (10 * multiplier);
            winnerC.innerHTML = `Strict<br/>Straight<br/>10 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "Strict<br/>Straight<br/>+10";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(userLoose === true){
        if(compLoose === true){
            tieBreak();
            userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            userPtsCount = userPtsCount + (5 * multiplier);
            if(multiplier != 1){
                multipliedScore = (5 * multiplier);
                winnerU.innerHTML = `Loose<br/>straight<br/>5 x ${multiplier} = ${multipliedScore}`;
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            } else {
                winnerU.innerHTML = "Loose<br/>straight<br/>+5";
                userChanger.style.backgroundColor = 'rgb(197, 179, 20)';
            }
        }
    } else if(compLoose === true){
        compPtsCount = compPtsCount + (5 * multiplier);
        if(multiplier != 1){
            multipliedScore = (5 * multiplier);
            winnerC.innerHTML = `Loose<br/>Straight<br/>5 x ${multiplier} = ${multipliedScore}`;
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        } else {
            winnerC.innerHTML = "Loose<br/>straight<br/>+5";
            compChanger.style.backgroundColor = 'rgb(197, 179, 20)';
        }
    } else if(detectMatch === true){
        if (countHuman > countComputer){
            if(multiplier != 1){
                if(countHuman === 1){
                    multipliedScore = multiplier * countHuman;
                    winnerU.innerHTML = `${countHuman} match<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} matches`;
                } else if(countComputer === 1){
                    multipliedScore = multiplier * countHuman;
                    winnerU.innerHTML = `${countHuman} matches<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} match`;
                } else {
                    multipliedScore = multiplier * countHuman;
                    winnerU.innerHTML = `${countHuman} matches<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} matches`;
                }  
            } else {
                if(countHuman === 1){
                    winnerU.innerHTML = `${countHuman} match <br/>+1`;
                    winnerC.innerHTML = `${countComputer} matches`;
                } else if(countComputer === 1){
                    winnerU.innerHTML = `${countHuman} matches<br/>+${countHuman}`;
                    winnerC.innerHTML = `${countComputer} match`;
                } else {
                    winnerU.innerHTML = `${countHuman} matches<br/>+${countHuman}`;
                    winnerC.innerHTML = `${countComputer} matches`;
                }  
            }
            userPtsCount = userPtsCount + (countHuman*multiplier);
        } else if (countHuman < countComputer){
            if(multiplier != 1){
                if(countComputer === 1){
                    multipliedScore = multiplier * countComputer;
                    winnerU.innerHTML = `${countHuman} matches`;
                    winnerC.innerHTML = `${countComputer} match<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                } else if(countHuman === 1){
                    multipliedScore = multiplier * countComputer;
                    winnerU.innerHTML = `${countHuman} match`;
                    winnerC.innerHTML = `${countComputer} matches<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                } else {
                    multipliedScore = multiplier * countComputer;
                    winnerU.innerHTML = `${countHuman} matches`;
                    winnerC.innerHTML = `${countComputer} matches<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                };
            } else {
                    if(countComputer === 1){
                    winnerU.innerHTML = `${countHuman} matches`;
                    winnerC.innerHTML = `${countComputer} match<br/>+1`;
                } else if(countHuman === 1){
                    winnerU.innerHTML = `${countHuman} match`;
                    winnerC.innerHTML = `${countComputer} matches<br/>+${countComputer}`;
                } else {
                    winnerU.innerHTML = `${countHuman} matches`;
                    winnerC.innerHTML = `${countComputer} matches<br/>+${countComputer}`;
                };
            }
            compPtsCount = compPtsCount + (countComputer*multiplier);
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
    limit100();
}

const limit100 = () => {
    if (userPtsCount >= 100){
        if(userPtsCount > 100){
            userPtsCount = 100;
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
    } else if (compPtsCount >= 100){
        if(compPtsCount > 100){
            compPtsCount = 100;
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

//.9 second timing
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

//experimental function for .5 level multiplication
/*const multiplierCountdown = () => {
    multButton.style.color = 'white';
    multButton.style.opacity = '100';
    setTimeout(() => {
        countdown = 4.5;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 900);
    setTimeout(() => {
        countdown = 4;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 1800);
    setTimeout(() => {
        countdown = 3.5;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 2700);
    setTimeout(() => {
        countdown = 3;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 3600);
    setTimeout(() => {
        countdown = 2.5;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 4500);
    setTimeout(() => {
        countdown = 2;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 5400);
    setTimeout(() => {
        countdown = 1.5;
        multButton.innerHTML = `MULTIPLY x${countdown}`;
    }, 6300);
};*/

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
    let userColorCodes = [];
    for(let j = 0; j < userColorsArray.length; j++){
        if(userColorsArray[j] === 'red'){
            userColorCodes.push(6);
        } else if(userColorsArray[j] === 'orange'){
            userColorCodes.push(5);
        } else if(userColorsArray[j] === 'yellow'){
            userColorCodes.push(4);
        } else if(userColorsArray[j] === 'green'){
            userColorCodes.push(3);
        } else if(userColorsArray[j] === 'blue'){
            userColorCodes.push(2);
        } else if(userColorsArray[j] === 'purple'){
            userColorCodes.push(1);
        };
    };
    let userWarms = 0;
    userWarms = userWarms + userColorCodes[6] * 10000000;
    userWarms = userWarms + userColorCodes[7] * 1000000;
    userWarms = userWarms + userColorCodes[4] * 100000;
    userWarms = userWarms + userColorCodes[5] * 10000;
    userWarms = userWarms + userColorCodes[2] * 1000;
    userWarms = userWarms + userColorCodes[3] * 100;
    userWarms = userWarms + userColorCodes[0] * 10;
    userWarms = userWarms + userColorCodes[1];

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

    let compColorCodes = [];
    for(let j = 0; j < compColorsArray.length; j++){
        if(compColorsArray[j] === 'red'){
            compColorCodes.push(6);
        } else if(compColorsArray[j] === 'orange'){
            compColorCodes.push(5);
        } else if(compColorsArray[j] === 'yellow'){
            compColorCodes.push(4);
        } else if(compColorsArray[j] === 'green'){
            compColorCodes.push(3);
        } else if(compColorsArray[j] === 'blue'){
            compColorCodes.push(2);
        } else if(compColorsArray[j] === 'purple'){
            compColorCodes.push(1);
        };
    };
    let compWarms = 0;
    compWarms = compWarms + compColorCodes[6] * 10000000;
    compWarms = compWarms + compColorCodes[7] * 1000000;
    compWarms = compWarms + compColorCodes[4] * 100000;
    compWarms = compWarms + compColorCodes[5] * 10000;
    compWarms = compWarms + compColorCodes[2] * 1000;
    compWarms = compWarms + compColorCodes[3] * 100;
    compWarms = compWarms + compColorCodes[0] * 10;
    compWarms = compWarms + compColorCodes[1];

    let compColorNumbers = [compReds, compOranges, compYellows, compGreens, compBlues, compPurples];
    compColorNumbers.sort(function(a, b){return b-a});

    if(userColorNumbers[0] > compColorNumbers[0]){
        if(userPerfectRound === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 30;
                winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                winnerC.innerHTML = 'Perfect<br/>Round';
                userPtsCount = userPtsCount + multipliedScore; 
            } else if(multiplier === 1){
                winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                winnerC.innerHTML = `Perfect<br/>Round`;
                userPtsCount = userPtsCount + 30;
            }
        } else if(userAllMatches === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 20;
                winnerU.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                winnerC.innerHTML = '4 Matches';
                userPtsCount = userPtsCount + multipliedScore;
            } else if(multiplier === 1){
                winnerU.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                winnerC.innerHTML = '4 Matches';
                userPtsCount = userPtsCount + 20;
            }
        } else if(userStrict === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 10;
                winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                winnerC.innerHTML = 'Strict<br/>Straight';
                userPtsCount = userPtsCount + multipliedScore;
            } else if(multiplier === 1){
                winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                winnerC.innerHTML = 'Strict<br/>Straight';
                userPtsCount = userPtsCount + 10;
            }
        } else if(userLoose === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 5;
                winnerU.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                winnerC.innerHTML = 'Loose<br/>Straight';
                userPtsCount = userPtsCount + multipliedScore;
            } else if(multiplier === 1){
                winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                winnerC.innerHTML = 'Loose<br/>Straight';
                userPtsCount = userPtsCount + 5;
            }
        } else if(detectMatch === true){
            if(multiplier != 1){
                if(countHuman === 1){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} match`;
                } else if(countHuman === 0){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = '0 matches';
                } else {
                    multipliedScore = multiplier * countHuman;
                    winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = `${countComputer} matches`;
                };
                userPtsCount = userPtsCount + multipliedScore;
            } else if(multiplier === 1){
                if(countHuman === 1){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>+1`;
                    winnerC.innerHTML = `${countComputer} match`;
                    userPtsCount++;
                } else if(countHuman === 0){
                    multipliedScore = multiplier;
                    winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>+1`;
                    winnerC.innerHTML = '0 matches';
                    userPtsCount++;
                } else {
                    multipliedScore = countHuman;
                    winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>+${countHuman}`;
                    winnerC.innerHTML = `${countComputer} matches`;
                    userPtsCount = userPtsCount + countHuman;
                };
            };
        };
    } else if(compColorNumbers[0] > userColorNumbers[0]){
        if(userPerfectRound === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 30;
                winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                winnerU.innerHTML = 'Perfect<br/>Round';
                compPtsCount = compPtsCount + multipliedScore; 
            } else if(multiplier === 1){
                winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                winnerU.innerHTML = `Perfect<br/>Round`;
                compPtsCount = compPtsCount + 30;
            }
        } else if(userAllMatches === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 20;
                winnerC.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                winnerU.innerHTML = '4 Matches';
                compPtsCount = compPtsCount + multipliedScore;
            } else if(multiplier === 1){
                winnerC.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                winnerU.innerHTML = '4 Matches';
                compPtsCount = compPtsCount + 20;
            }
        } else if(userStrict === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 10;
                winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                winnerU.innerHTML = 'Strict<br/>Straight';
                compPtsCount = compPtsCount + multipliedScore;
            } else if(multiplier === 1){
                winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                winnerU.innerHTML = 'Strict<br/>Straight';
                compPtsCount = compPtsCount + 10;
            }
        } else if(userLoose === true){
            if(multiplier != 1){
                multipliedScore = multiplier * 5;
                winnerC.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                winnerU.innerHTML = 'Loose<br/>Straight';
                compPtsCount = compPtsCount + multipliedScore;
            } else if(multiplier === 1){
                winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                winnerU.innerHTML = 'Loose<br/>Straight';
                compPtsCount = compPtsCount + 5;
            }
        } else if(detectMatch === true){
            if(multiplier != 1){
                if(countHuman === 1){
                    multipliedScore = multiplier;
                    winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                    winnerU.innerHTML = `${countHuman} match`;
                } else if(countHuman === 0){
                    multipliedScore = multiplier;
                    winnerC.innerHTML = `0 matches<br/>tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                    winnerU.innerHTML = '0 matches';
                } else {
                    multipliedScore = multiplier * countHuman;
                    winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                    winnerU.innerHTML = `${countHuman} matches`;
                };
                compPtsCount = compPtsCount + multipliedScore;
            } else if(multiplier === 1){
                if(countHuman === 1){
                    multipliedScore = multiplier;
                    winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>+1`;
                    winnerU.innerHTML = `${countHuman} match`;
                    compPtsCount++;
                } else if(countHuman === 0){
                    multipliedScore = multiplier;
                    winnerC.innerHTML = '0 matches<br/>Tiebreak<br/>+1';
                    winnerU.innerHTML = '0 matches';
                    compPtsCount++;
                } else {
                    multipliedScore = countComputer;
                    winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>+${countComputer}`;
                    winnerU.innerHTML = `${countHuman} matches`;
                    compPtsCount = compPtsCount + countComputer;
                };
            };
        };
    } else if (userColorNumbers[0] === compColorNumbers[0]){ //then go to second number
        if(userColorNumbers[1] > compColorNumbers[1]){
            if(userPerfectRound === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 30;
                    winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = 'Perfect<br/>Round';
                    userPtsCount = userPtsCount + multipliedScore; 
                } else if(multiplier === 1){
                    winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                    winnerC.innerHTML = `Perfect<br/>Round`;
                    userPtsCount = userPtsCount + 30;
                }
            } else if(userAllMatches === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 20;
                    winnerU.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = '4 Matches';
                    userPtsCount = userPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    winnerU.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                    winnerC.innerHTML = '4 Matches';
                    userPtsCount = userPtsCount + 20;
                }
            } else if(userStrict === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 10;
                    winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = 'Strict<br/>Straight';
                    userPtsCount = userPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                    winnerC.innerHTML = 'Strict<br/>Straight';
                    userPtsCount = userPtsCount + 10;
                }
            } else if(userLoose === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 5;
                    winnerU.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                    winnerC.innerHTML = 'Loose<br/>Straight';
                    userPtsCount = userPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                    winnerC.innerHTML = 'Loose<br/>Straight';
                    userPtsCount = userPtsCount + 5;
                }
            } else if(detectMatch === true){
                if(multiplier != 1){
                    if(countHuman === 1){
                        multipliedScore = multiplier;
                        winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                        winnerC.innerHTML = `${countComputer} match`;
                    } else if(countHuman === 0){
                        multipliedScore = multiplier;
                        winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                        winnerC.innerHTML = '0 matches';
                    } else {
                        multipliedScore = multiplier * countHuman;
                        winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                        winnerC.innerHTML = `${countComputer} matches`;
                    };
                    userPtsCount = userPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    if(countHuman === 1){
                        multipliedScore = multiplier;
                        winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>+1`;
                        winnerC.innerHTML = `${countComputer} match`;
                        userPtsCount++;
                    } else if(countHuman === 0){
                        multipliedScore = multiplier;
                        winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>+1`;
                        winnerC.innerHTML = '0 matches';
                        userPtsCount++;
                    } else {
                        multipliedScore = countHuman;
                        winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>+${countHuman}`;
                        winnerC.innerHTML = `${countComputer} matches`;
                        userPtsCount = userPtsCount + countHuman;
                    };
                };
            };
        } else if(compColorNumbers[1] > userColorNumbers[1]){
            if(userPerfectRound === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 30;
                    winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                    winnerU.innerHTML = 'Perfect<br/>Round';
                    compPtsCount = compPtsCount + multipliedScore; 
                } else if(multiplier === 1){
                    winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                    winnerU.innerHTML = `Perfect<br/>Round`;
                    compPtsCount = compPtsCount + 30;
                }
            } else if(userAllMatches === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 20;
                    winnerC.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                    winnerU.innerHTML = '4 Matches';
                    compPtsCount = compPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    winnerC.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                    winnerU.innerHTML = '4 Matches';
                    compPtsCount = compPtsCount + 20;
                }
            } else if(userStrict === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 10;
                    winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                    winnerU.innerHTML = 'Strict<br/>Straight';
                    compPtsCount = compPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                    winnerU.innerHTML = 'Strict<br/>Straight';
                    compPtsCount = compPtsCount + 10;
                }
            } else if(userLoose === true){
                if(multiplier != 1){
                    multipliedScore = multiplier * 5;
                    winnerC.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                    winnerU.innerHTML = 'Loose<br/>Straight';
                    compPtsCount = compPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                    winnerU.innerHTML = 'Loose<br/>Straight';
                    compPtsCount = compPtsCount + 5;
                }
            } else if(detectMatch === true){
                if(multiplier != 1){
                    if(countHuman === 1){
                        multipliedScore = multiplier;
                        winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                        winnerU.innerHTML = `${countHuman} match`;
                    } else if(countHuman === 0){
                        multipliedScore = multiplier;
                        winnerC.innerHTML = `0 matches<br/>tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                        winnerU.innerHTML = '0 matches';
                    } else {
                        multipliedScore = multiplier * countHuman;
                        winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                        winnerU.innerHTML = `${countHuman} matches`;
                    };
                    compPtsCount = compPtsCount + multipliedScore;
                } else if(multiplier === 1){
                    if(countHuman === 1){
                        multipliedScore = multiplier;
                        winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>+1`;
                        winnerU.innerHTML = `${countHuman} match`;
                        compPtsCount++;
                    } else if(countHuman === 0){
                        multipliedScore = multiplier;
                        winnerC.innerHTML = '0 matches<br/>Tiebreak<br/>+1';
                        winnerU.innerHTML = '0 matches';
                        compPtsCount++;
                    } else {
                        multipliedScore = countComputer;
                        winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>+${countComputer}`;
                        winnerU.innerHTML = `${countHuman} matches`;
                        compPtsCount = compPtsCount + countComputer;
                    };
                };
            };
        } else if (userColorNumbers[1] === compColorNumbers[1]){ //then go to third number
            if(userColorNumbers[2] > compColorNumbers[2]){
                if(userPerfectRound === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 30;
                        winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                        winnerC.innerHTML = 'Perfect<br/>Round';
                        userPtsCount = userPtsCount + multipliedScore; 
                    } else if(multiplier === 1){
                        winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                        winnerC.innerHTML = `Perfect<br/>Round`;
                        userPtsCount = userPtsCount + 30;
                    }
                } else if(userAllMatches === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 20;
                        winnerU.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                        winnerC.innerHTML = '4 Matches';
                        userPtsCount = userPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        winnerU.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                        winnerC.innerHTML = '4 Matches';
                        userPtsCount = userPtsCount + 20;
                    }
                } else if(userStrict === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 10;
                        winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                        winnerC.innerHTML = 'Strict<br/>Straight';
                        userPtsCount = userPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                        winnerC.innerHTML = 'Strict<br/>Straight';
                        userPtsCount = userPtsCount + 10;
                    }
                } else if(userLoose === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 5;
                        winnerU.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                        winnerC.innerHTML = 'Loose<br/>Straight';
                        userPtsCount = userPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                        winnerC.innerHTML = 'Loose<br/>Straight';
                        userPtsCount = userPtsCount + 5;
                    }
                } else if(detectMatch === true){
                    if(multiplier != 1){
                        if(countHuman === 1){
                            multipliedScore = multiplier;
                            winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                            winnerC.innerHTML = `${countComputer} match`;
                        } else if(countHuman === 0){
                            multipliedScore = multiplier;
                            winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                            winnerC.innerHTML = '0 matches';
                        } else {
                            multipliedScore = multiplier * countHuman;
                            winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                            winnerC.innerHTML = `${countComputer} matches`;
                        };
                        userPtsCount = userPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        if(countHuman === 1){
                            multipliedScore = multiplier;
                            winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>+1`;
                            winnerC.innerHTML = `${countComputer} match`;
                            userPtsCount++;
                        } else if(countHuman === 0){
                            multipliedScore = multiplier;
                            winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>+1`;
                            winnerC.innerHTML = '0 matches';
                            userPtsCount++;
                        } else {
                            multipliedScore = countHuman;
                            winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>+${countHuman}`;
                            winnerC.innerHTML = `${countComputer} matches`;
                            userPtsCount = userPtsCount + countHuman;
                        };
                    };
                };
            } else if(compColorNumbers[2] > userColorNumbers[2]){
                if(userPerfectRound === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 30;
                        winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                        winnerU.innerHTML = 'Perfect<br/>Round';
                        compPtsCount = compPtsCount + multipliedScore; 
                    } else if(multiplier === 1){
                        winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                        winnerU.innerHTML = `Perfect<br/>Round`;
                        compPtsCount = compPtsCount + 30;
                    }
                } else if(userAllMatches === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 20;
                        winnerC.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                        winnerU.innerHTML = '4 Matches';
                        compPtsCount = compPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        winnerC.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                        winnerU.innerHTML = '4 Matches';
                        compPtsCount = compPtsCount + 20;
                    }
                } else if(userStrict === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 10;
                        winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                        winnerU.innerHTML = 'Strict<br/>Straight';
                        compPtsCount = compPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                        winnerU.innerHTML = 'Strict<br/>Straight';
                        compPtsCount = compPtsCount + 10;
                    }
                } else if(userLoose === true){
                    if(multiplier != 1){
                        multipliedScore = multiplier * 5;
                        winnerC.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                        winnerU.innerHTML = 'Loose<br/>Straight';
                        compPtsCount = compPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                        winnerU.innerHTML = 'Loose<br/>Straight';
                        compPtsCount = compPtsCount + 5;
                    }
                } else if(detectMatch === true){
                    if(multiplier != 1){
                        if(countHuman === 1){
                            multipliedScore = multiplier;
                            winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                            winnerU.innerHTML = `${countHuman} match`;
                        } else if(countHuman === 0){
                            multipliedScore = multiplier;
                            winnerC.innerHTML = `0 matches<br/>tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                            winnerU.innerHTML = '0 matches';
                        } else {
                            multipliedScore = multiplier * countHuman;
                            winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                            winnerU.innerHTML = `${countHuman} matches`;
                        };
                        compPtsCount = compPtsCount + multipliedScore;
                    } else if(multiplier === 1){
                        if(countHuman === 1){
                            multipliedScore = multiplier;
                            winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>+1`;
                            winnerU.innerHTML = `${countHuman} match`;
                            compPtsCount++;
                        } else if(countHuman === 0){
                            multipliedScore = multiplier;
                            winnerC.innerHTML = '0 matches<br/>Tiebreak<br/>+1';
                            winnerU.innerHTML = '0 matches';
                            compPtsCount++;
                        } else {
                            multipliedScore = countComputer;
                            winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>+${countComputer}`;
                            winnerU.innerHTML = `${countHuman} matches`;
                            compPtsCount = compPtsCount + countComputer;
                        };
                    };
                };
            } else if (userColorNumbers[2] === compColorNumbers[2]){ //then go to fourth number
                if(userColorNumbers[3] > compColorNumbers[3]){
                    if(userPerfectRound === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 30;
                            winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                            winnerC.innerHTML = 'Perfect<br/>Round';
                            userPtsCount = userPtsCount + multipliedScore; 
                        } else if(multiplier === 1){
                            winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                            winnerC.innerHTML = `Perfect<br/>Round`;
                            userPtsCount = userPtsCount + 30;
                        }
                    } else if(userAllMatches === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 20;
                            winnerU.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                            winnerC.innerHTML = '4 Matches';
                            userPtsCount = userPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            winnerU.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                            winnerC.innerHTML = '4 Matches';
                            userPtsCount = userPtsCount + 20;
                        }
                    } else if(userStrict === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 10;
                            winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                            winnerC.innerHTML = 'Strict<br/>Straight';
                            userPtsCount = userPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                            winnerC.innerHTML = 'Strict<br/>Straight';
                            userPtsCount = userPtsCount + 10;
                        }
                    } else if(userLoose === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 5;
                            winnerU.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                            winnerC.innerHTML = 'Loose<br/>Straight';
                            userPtsCount = userPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                            winnerC.innerHTML = 'Loose<br/>Straight';
                            userPtsCount = userPtsCount + 5;
                        }
                    } else if(detectMatch === true){
                        if(multiplier != 1){
                            if(countHuman === 1){
                                multipliedScore = multiplier;
                                winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                winnerC.innerHTML = `${countComputer} match`;
                            } else if(countHuman === 0){
                                multipliedScore = multiplier;
                                winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                winnerC.innerHTML = '0 matches';
                            } else {
                                multipliedScore = multiplier * countHuman;
                                winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                                winnerC.innerHTML = `${countComputer} matches`;
                            };
                            userPtsCount = userPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            if(countHuman === 1){
                                multipliedScore = multiplier;
                                winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>+1`;
                                winnerC.innerHTML = `${countComputer} match`;
                                userPtsCount++;
                            } else if(countHuman === 0){
                                multipliedScore = multiplier;
                                winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>+1`;
                                winnerC.innerHTML = '0 matches';
                                userPtsCount++;
                            } else {
                                multipliedScore = countHuman;
                                winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>+${countHuman}`;
                                winnerC.innerHTML = `${countComputer} matches`;
                                userPtsCount = userPtsCount + countHuman;
                            };
                        };
                    };
                } else if(compColorNumbers[3] > userColorNumbers[3]){
                    if(userPerfectRound === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 30;
                            winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                            winnerU.innerHTML = 'Perfect<br/>Round';
                            compPtsCount = compPtsCount + multipliedScore; 
                        } else if(multiplier === 1){
                            winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                            winnerU.innerHTML = `Perfect<br/>Round`;
                            compPtsCount = compPtsCount + 30;
                        }
                    } else if(userAllMatches === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 20;
                            winnerC.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                            winnerU.innerHTML = '4 Matches';
                            compPtsCount = compPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            winnerC.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                            winnerU.innerHTML = '4 Matches';
                            compPtsCount = compPtsCount + 20;
                        }
                    } else if(userStrict === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 10;
                            winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                            winnerU.innerHTML = 'Strict<br/>Straight';
                            compPtsCount = compPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                            winnerU.innerHTML = 'Strict<br/>Straight';
                            compPtsCount = compPtsCount + 10;
                        }
                    } else if(userLoose === true){
                        if(multiplier != 1){
                            multipliedScore = multiplier * 5;
                            winnerC.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                            winnerU.innerHTML = 'Loose<br/>Straight';
                            compPtsCount = compPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                            winnerU.innerHTML = 'Loose<br/>Straight';
                            compPtsCount = compPtsCount + 5;
                        }
                    } else if(detectMatch === true){
                        if(multiplier != 1){
                            if(countHuman === 1){
                                multipliedScore = multiplier;
                                winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                winnerU.innerHTML = `${countHuman} match`;
                            } else if(countHuman === 0){
                                multipliedScore = multiplier;
                                winnerC.innerHTML = `0 matches<br/>tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                winnerU.innerHTML = '0 matches';
                            } else {
                                multipliedScore = multiplier * countHuman;
                                winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                                winnerU.innerHTML = `${countHuman} matches`;
                            };
                            compPtsCount = compPtsCount + multipliedScore;
                        } else if(multiplier === 1){
                            if(countHuman === 1){
                                multipliedScore = multiplier;
                                winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>+1`;
                                winnerU.innerHTML = `${countHuman} match`;
                                compPtsCount++;
                            } else if(countHuman === 0){
                                multipliedScore = multiplier;
                                winnerC.innerHTML = '0 matches<br/>Tiebreak<br/>+1';
                                winnerU.innerHTML = '0 matches';
                                compPtsCount++;
                            } else {
                                multipliedScore = countComputer;
                                winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>+${countComputer}`;
                                winnerU.innerHTML = `${countHuman} matches`;
                                compPtsCount = compPtsCount + countComputer;
                            };
                        };
                    };
                } else if (userColorNumbers[3] === compColorNumbers[3]){ //then go to fifth number
                    if(userColorNumbers[4] > compColorNumbers[4]){
                        if(userPerfectRound === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 30;
                                winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                                winnerC.innerHTML = 'Perfect<br/>Round';
                                userPtsCount = userPtsCount + multipliedScore; 
                            } else if(multiplier === 1){
                                winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                                winnerC.innerHTML = `Perfect<br/>Round`;
                                userPtsCount = userPtsCount + 30;
                            }
                        } else if(userAllMatches === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 20;
                                winnerU.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                                winnerC.innerHTML = '4 Matches';
                                userPtsCount = userPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                winnerU.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                                winnerC.innerHTML = '4 Matches';
                                userPtsCount = userPtsCount + 20;
                            }
                        } else if(userStrict === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 10;
                                winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                                winnerC.innerHTML = 'Strict<br/>Straight';
                                userPtsCount = userPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                winnerU.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                                winnerC.innerHTML = 'Strict<br/>Straight';
                                userPtsCount = userPtsCount + 10;
                            }
                        } else if(userLoose === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 5;
                                winnerU.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                                winnerC.innerHTML = 'Loose<br/>Straight';
                                userPtsCount = userPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                winnerU.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                                winnerC.innerHTML = 'Loose<br/>Straight';
                                userPtsCount = userPtsCount + 5;
                            }
                        } else if(detectMatch === true){
                            if(multiplier != 1){
                                if(countHuman === 1){
                                    multipliedScore = multiplier;
                                    winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                    winnerC.innerHTML = `${countComputer} match`;
                                } else if(countHuman === 0){
                                    multipliedScore = multiplier;
                                    winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                    winnerC.innerHTML = '0 matches';
                                } else {
                                    multipliedScore = multiplier * countHuman;
                                    winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                                    winnerC.innerHTML = `${countComputer} matches`;
                                };
                                userPtsCount = userPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                if(countHuman === 1){
                                    multipliedScore = multiplier;
                                    winnerU.innerHTML = `${countHuman} match<br/>Tiebreak<br/>+1`;
                                    winnerC.innerHTML = `${countComputer} match`;
                                    userPtsCount++;
                                } else if(countHuman === 0){
                                    multipliedScore = multiplier;
                                    winnerU.innerHTML = `0 matches<br/>Tiebreak<br/>+1`;
                                    winnerC.innerHTML = '0 matches';
                                    userPtsCount++;
                                } else {
                                    multipliedScore = countHuman;
                                    winnerU.innerHTML = `${countHuman} matches<br/>Tiebreak<br/>+${countHuman}`;
                                    winnerC.innerHTML = `${countComputer} matches`;
                                    userPtsCount = userPtsCount + countHuman;
                                };
                            };
                        };
                    } else if(compColorNumbers[4] > userColorNumbers[4]){
                        if(userPerfectRound === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 30;
                                winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                                winnerU.innerHTML = 'Perfect<br/>Round';
                                compPtsCount = compPtsCount + multipliedScore; 
                            } else if(multiplier === 1){
                                winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                                winnerU.innerHTML = `Perfect<br/>Round`;
                                compPtsCount = compPtsCount + 30;
                            }
                        } else if(userAllMatches === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 20;
                                winnerC.innerHTML = `4 Matches<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                                winnerU.innerHTML = '4 Matches';
                                compPtsCount = compPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                winnerC.innerHTML = '4 Matches<br/>Tiebreak<br/>+20';
                                winnerU.innerHTML = '4 Matches';
                                compPtsCount = compPtsCount + 20;
                            }
                        } else if(userStrict === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 10;
                                winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                                winnerU.innerHTML = 'Strict<br/>Straight';
                                compPtsCount = compPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+10`;
                                winnerU.innerHTML = 'Strict<br/>Straight';
                                compPtsCount = compPtsCount + 10;
                            }
                        } else if(userLoose === true){
                            if(multiplier != 1){
                                multipliedScore = multiplier * 5;
                                winnerC.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                                winnerU.innerHTML = 'Loose<br/>Straight';
                                compPtsCount = compPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+5';
                                winnerU.innerHTML = 'Loose<br/>Straight';
                                compPtsCount = compPtsCount + 5;
                            }
                        } else if(detectMatch === true){
                            if(multiplier != 1){
                                if(countHuman === 1){
                                    multipliedScore = multiplier;
                                    winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                    winnerU.innerHTML = `${countHuman} match`;
                                } else if(countHuman === 0){
                                    multipliedScore = multiplier;
                                    winnerC.innerHTML = `0 matches<br/>tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                    winnerU.innerHTML = '0 matches';
                                } else {
                                    multipliedScore = multiplier * countHuman;
                                    winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                                    winnerU.innerHTML = `${countHuman} matches`;
                                };
                                compPtsCount = compPtsCount + multipliedScore;
                            } else if(multiplier === 1){
                                if(countHuman === 1){
                                    multipliedScore = multiplier;
                                    winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>+1`;
                                    winnerU.innerHTML = `${countHuman} match`;
                                    compPtsCount++;
                                } else if(countHuman === 0){
                                    multipliedScore = multiplier;
                                    winnerC.innerHTML = '0 matches<br/>Tiebreak<br/>+1';
                                    winnerU.innerHTML = '0 matches';
                                    compPtsCount++;
                                } else {
                                    multipliedScore = countComputer;
                                    winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>+${countComputer}`;
                                    winnerU.innerHTML = `${countHuman} matches`;
                                    compPtsCount = compPtsCount + countComputer;
                                };
                            };
                        };
                    } else if (userColorNumbers[4] === compColorNumbers[4]){ //further tiebreak
                        if(userWarms > compWarms){
                            if(userPerfectRound === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 30;
                                    winnerU.innerHTML = `Perfect<br/>Round<br/>Double<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                                    winnerC.innerHTML = 'Perfect<br/>Round';
                                    userPtsCount = userPtsCount + multipliedScore; 
                                } else if(multiplier === 1){
                                    winnerU.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+30`;
                                    winnerC.innerHTML = `Perfect<br/>Round`;
                                    userPtsCount = userPtsCount + 30;
                                }
                            } else if(userAllMatches === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 20;
                                    winnerU.innerHTML = `4 Matches<br/>Double<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                                    winnerC.innerHTML = '4 Matches';
                                    userPtsCount = userPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    winnerU.innerHTML = '4 Matches<br/>Double<br/>Tiebreak<br/>+20';
                                    winnerC.innerHTML = '4 Matches';
                                    userPtsCount = userPtsCount + 20;
                                }
                            } else if(userStrict === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 10;
                                    winnerU.innerHTML = `Strict<br/>Straight<br/>Double<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                                    winnerC.innerHTML = 'Strict<br/>Straight';
                                    userPtsCount = userPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    winnerU.innerHTML = `Strict<br/>Straight<br/>Double<br/>Tiebreak<br/>+10`;
                                    winnerC.innerHTML = 'Strict<br/>Straight';
                                    userPtsCount = userPtsCount + 10;
                                }
                            } else if(userLoose === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 5;
                                    winnerU.innerHTML = `Loose<br/>Straight<br/>Double<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                                    winnerC.innerHTML = 'Loose<br/>Straight';
                                    userPtsCount = userPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    winnerU.innerHTML = 'Loose<br/>Straight<br/>Double<br/>Tiebreak<br/>+5';
                                    winnerC.innerHTML = 'Loose<br/>Straight';
                                    userPtsCount = userPtsCount + 5;
                                }
                            } else if(detectMatch === true){
                                if(multiplier != 1){
                                    if(countHuman === 1){
                                        multipliedScore = multiplier;
                                        winnerU.innerHTML = `${countHuman} match<br/>Double<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                        winnerC.innerHTML = `${countComputer} match`;
                                    } else if(countHuman === 0){
                                        multipliedScore = multiplier;
                                        winnerU.innerHTML = `0 matches<br/>Double<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                        winnerC.innerHTML = '0 matches';
                                    } else {
                                        multipliedScore = multiplier * countHuman;
                                        winnerU.innerHTML = `${countHuman} matches<br/>Double<br/>Tiebreak<br/>${countHuman} x ${multiplier} = ${multipliedScore}`;
                                        winnerC.innerHTML = `${countComputer} matches`;
                                    };
                                    userPtsCount = userPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    if(countHuman === 1){
                                        multipliedScore = multiplier;
                                        winnerU.innerHTML = `${countHuman} match<br/>Double<br/>Tiebreak<br/>+1`;
                                        winnerC.innerHTML = `${countComputer} match`;
                                        userPtsCount++;
                                    } else if(countHuman === 0){
                                        multipliedScore = multiplier;
                                        winnerU.innerHTML = `0 matches<br/>Double<br/>Tiebreak<br/>+1`;
                                        winnerC.innerHTML = '0 matches';
                                        userPtsCount++;
                                    } else {
                                        multipliedScore = countHuman;
                                        winnerU.innerHTML = `${countHuman} matches<br/>Double<br/>Tiebreak<br/>+${countHuman}`;
                                        winnerC.innerHTML = `${countComputer} matches`;
                                        userPtsCount = userPtsCount + countHuman;
                                    };
                                };
                            };
                        } else if(compWarms > userWarms){
                            if(userPerfectRound === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 30;
                                    winnerC.innerHTML = `Perfect<br/>Round<br/>Double<br/>Tiebreak<br/>30 x ${multiplier} = ${multipliedScore}`;
                                    winnerU.innerHTML = 'Perfect<br/>Round';
                                    compPtsCount = compPtsCount + multipliedScore; 
                                } else if(multiplier === 1){
                                    winnerC.innerHTML = `Perfect<br/>Round<br/>Double<br/>Tiebreak<br/>+30`;
                                    winnerU.innerHTML = `Perfect<br/>Round`;
                                    compPtsCount = compPtsCount + 30;
                                }
                            } else if(userAllMatches === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 20;
                                    winnerC.innerHTML = `4 Matches<br/>Double<br/>Tiebreak<br/>20 x ${multiplier} = ${multipliedScore}`;
                                    winnerU.innerHTML = '4 Matches';
                                    compPtsCount = compPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    winnerC.innerHTML = '4 Matches<br/>Double<br/>Tiebreak<br/>+20';
                                    winnerU.innerHTML = '4 Matches';
                                    compPtsCount = compPtsCount + 20;
                                }
                            } else if(userStrict === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 10;
                                    winnerC.innerHTML = `Strict<br/>Straight<br/>Double<br/>Tiebreak<br/>10 x ${multiplier} = ${multipliedScore}`;
                                    winnerU.innerHTML = 'Strict<br/>Straight';
                                    compPtsCount = compPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    winnerC.innerHTML = `Strict<br/>Straight<br/>Double<br/>Tiebreak<br/>+10`;
                                    winnerU.innerHTML = 'Strict<br/>Straight';
                                    compPtsCount = compPtsCount + 10;
                                }
                            } else if(userLoose === true){
                                if(multiplier != 1){
                                    multipliedScore = multiplier * 5;
                                    winnerC.innerHTML = `Loose<br/>Straight<br/>Double<br/>Tiebreak<br/>5 x ${multiplier} = ${multipliedScore}`;
                                    winnerU.innerHTML = 'Loose<br/>Straight';
                                    compPtsCount = compPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    winnerC.innerHTML = 'Loose<br/>Straight<br/>Double<br/>Tiebreak<br/>+5';
                                    winnerU.innerHTML = 'Loose<br/>Straight';
                                    compPtsCount = compPtsCount + 5;
                                }
                            } else if(detectMatch === true){
                                if(multiplier != 1){
                                    if(countHuman === 1){
                                        multipliedScore = multiplier;
                                        winnerC.innerHTML = `${countComputer} match<br/>Double<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                        winnerU.innerHTML = `${countHuman} match`;
                                    } else if(countHuman === 0){
                                        multipliedScore = multiplier;
                                        winnerC.innerHTML = `0 matches<br/>Double<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
                                        winnerU.innerHTML = '0 matches';
                                    } else {
                                        multipliedScore = multiplier * countHuman;
                                        winnerC.innerHTML = `${countComputer} matches<br/>Double<br/>Tiebreak<br/>${countComputer} x ${multiplier} = ${multipliedScore}`;
                                        winnerU.innerHTML = `${countHuman} matches`;
                                    };
                                    compPtsCount = compPtsCount + multipliedScore;
                                } else if(multiplier === 1){
                                    if(countHuman === 1){
                                        multipliedScore = multiplier;
                                        winnerC.innerHTML = `${countComputer} match<br/>Double<br/>Tiebreak<br/>+1`;
                                        winnerU.innerHTML = `${countHuman} match`;
                                        compPtsCount++;
                                    } else if(countHuman === 0){
                                        multipliedScore = multiplier;
                                        winnerC.innerHTML = '0 matches<br/>Double<br/>Tiebreak<br/>+1';
                                        winnerU.innerHTML = '0 matches';
                                        compPtsCount++;
                                    } else {
                                        multipliedScore = countComputer;
                                        winnerC.innerHTML = `${countComputer} matches<br/>Double<br/>Tiebreak<br/>+${countComputer}`;
                                        winnerU.innerHTML = `${countHuman} matches`;
                                        compPtsCount = compPtsCount + countComputer;
                                    };
                                };
                            };
                        } else if(compWarms === userWarms){
                            if(userPerfectRound === true){
                                winnerC.innerHTML = 'Perfect<br/>Round<br/>Tie';
                                winnerU.innerHTML = 'Perfect<br/>Round<br/>Tie';
                            } else if(userAllMatches === true){
                                winnerC.innerHTML = '4 Matches<br/>Tie';
                                winnerU.innerHTML = '4 Matches<br/>Tie';
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
                        };
                    };
                };
            };
        };
    };
};

//Functions that control the display of boxes
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
const runFunctions = () => {
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
};

//code to alternate between which side is displayed first
const runFunctions2p = () => {
    document.getElementById('input-button').disabled = true;
    document.getElementById('mult-button').disabled = false;
    multiplierCountdown();
    resetter();
    if(topDown === 1){
        userPtsLabel.style.backgroundColor = 'yellow';
        compPtsLabel.style.backgroundColor = 'transparent';
    }
    if(topDown === 2){
        userPtsLabel.style.backgroundColor = 'transparent';
        compPtsLabel.style.backgroundColor = 'yellow';
    }
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
};

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
/*const runFunctions = () => {
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
}*/

//Sets the Play button to call the main function
//inputButton.onclick = runFunctions;
multButton.onclick = multiply;

//code for 1-2 player update. Can comment out and comment in "input button onclick" for regular function
const button1 = () => {
    document.getElementById('input-button').disabled = false;
    document.getElementById('button1p').disabled = true;
    document.getElementById('button2p').disabled = true;
    button1p.style.display = 'none';
    button2p.style.display = 'none';
    inputButton.style.display = 'block';
    inputButton.onclick = runFunctions;
}

const button2 = () => {
    document.getElementById('input-button').disabled = false;
    button1p.style.display = 'none';
    button2p.style.display = 'none';
    inputButton.style.display = 'block';
    userPtsLabel.innerHTML = 'plr 1 pts:';
    compPtsLabel.innerHTML = 'plr 2 pts:';
    humanLabel.innerHTML = '1p<br/>boxes:';
    computerLabel.innerHTML = '2p<br/>boxes:';
    humanLabel.style.fontSize = '1.5em';
    computerLabel.style.fontSize = '1.5em';
    humanLabel.style.fontWeight = 'bold';
    computerLabel.style.fontWeight = 'bold';
    userSmallLabel.innerHTML = 'Player 1 boxes';
    compSmallLabel.innerHTML = 'Player 2 boxes';
    inputButton.onclick = runFunctions2p;
}
    
button1p.onclick = button1;
button2p.onclick = button2;