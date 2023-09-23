const inputButton = document.getElementById('input');

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

const chooseColor = () => {
    const array = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColorNum = Math.floor(Math.random() * 7);
    let randomColor = array[randomColorNum];
    return randomColor;
}

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

let countHuman = 0;
let countComputer = 0;

let message = "You Win!";

const changeColors = () => {
//human boxes

    //BOX1
    boxOne.style.backgroundColor = color1;
    boxOne.innerHTML = color2;
    if(color1 === color2){
        boxOne.style.fontSize = '2rem';
        boxOne.style.textTransform = 'uppercase';
        boxOne.style.border = "5px black dotted";
        countHuman++;
    }

    //BOX2
    boxTwo.style.backgroundColor = color3;
    boxTwo.innerHTML = color4;
    if(color3 === color4){
        boxTwo.style.fontSize = '2rem';
        boxTwo.style.textTransform = 'uppercase';
        boxTwo.style.border = "5px black dotted";
        countHuman++;
    }

    //BOX3
    boxThree.style.backgroundColor = color5;
    boxThree.innerHTML = color6;
    if(color5 === color6){
        boxThree.style.fontSize = '2rem';
        boxThree.style.textTransform = 'uppercase';
        boxThree.style.border = "5px black dotted";
        countHuman++;
    }

    //BOX4
    boxFour.style.backgroundColor = color7;
    boxFour.innerHTML = color8;
    if(color7 === color8){
        boxFour.style.fontSize = '2rem';
        boxFour.style.textTransform = 'uppercase';
        boxFour.style.border = "5px black dotted";
        countHuman++;
    }
//computer boxes

    //BOX5
    boxFive.style.backgroundColor = color9;
    boxFive.innerHTML = color10;
    if(color9 === color10){
        boxFive.style.fontSize = '2rem';
        boxFive.style.textTransform = 'uppercase';
        boxFive.style.border = "5px black dotted";
        countComputer++;
    }

    //BOX6
    boxSix.style.backgroundColor = color11;
    boxSix.innerHTML = color12;
    if(color11 === color12){
        boxSix.style.fontSize = '2rem';
        boxSix.style.textTransform = 'uppercase';
        boxSix.style.border = "5px black dotted";
        countComputer++;
    }

    //BOX7
    boxSeven.style.backgroundColor = color13;
    boxSeven.innerHTML = color14;
    if(color13 === color14){
        boxSeven.style.fontSize = '2rem';
        boxSeven.style.textTransform = 'uppercase';
        boxSeven.style.border = "5px black dotted";
        countComputer++;
    }

    //BOX8
    boxEight.style.backgroundColor = color15;
    boxEight.innerHTML = color16;
    if(color15 === color16){
        boxEight.style.fontSize = '2rem';
        boxEight.style.textTransform = 'uppercase';
        boxEight.style.border = "5px black dotted";
        countComputer++;
    }

    scoreHuman.innerHTML = countHuman;
    scoreComputer.innerHTML = countComputer;

    if (countHuman > countComputer){
        winner.innerHTML = 'Winner: You!';
    } else if (countHuman < countComputer){
        winner.innerHTML = 'Winner: Computer!';
    } else {
        winner.innerHTML = 'It\'s a Tie!';
    }
}

inputButton.onclick = changeColors;
