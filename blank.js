if(userPerfectRound === true){
    if(multiplier != 1){
        multipliedScore = multiplier;
        winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
        winnerU.innerHTML = 'Perfect<br/>Round';
        compPtsCount = compPtsCount + multiplier; 
    } else if(multiplier === 1){
        winnerC.innerHTML = `Perfect<br/>Round<br/>Tiebreak<br/>+1`;
        winnerU.innerHTML = `Perfect<br/>Round`;
        compPtsCount++;
    }
} else if(userAllMatches === true){
    if(multiplier != 1){
        multipliedScore = multiplier;
        winnerC.innerHTML = `4 Matches<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
        winnerU.innerHTML = '4 Matches';
        compPtsCount = compPtsCount + multiplier;
    } else if(multiplier === 1){
        winnerC.innerHTML = '4 Matches<br/>Tiebreak<br/>+1';
        winnerU.innerHTML = '4 Matches';
        compPtsCount++;
    }
} else if(userStrict === true){
    if(multiplier != 1){
        multipliedScore = multiplier;
        winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
        winnerU.innerHTML = 'Strict<br/>Straight';
        compPtsCount = compPtsCount + multiplier;
    } else if(multiplier === 1){
        winnerC.innerHTML = `Strict<br/>Straight<br/>Tiebreak<br/>+1`;
        winnerU.innerHTML = 'Strict<br/>Straight';
        compPtsCount++;
    }
} else if(userLoose === true){
    if(multiplier != 1){
        multipliedScore = multiplier;
        winnerC.innerHTML = `Loose<br/>Straight<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
        winnerU.innerHTML = 'Loose<br/>Straight';
        compPtsCount = compPtsCount + multiplier;
    } else if(multiplier === 1){
        winnerC.innerHTML = 'Loose<br/>Straight<br/>Tiebreak<br/>+1';
        winnerU.innerHTML = 'Loose<br/>Straight';
        compPtsCount++;
    }
} else if(detectMatch === true){
    if(multiplier != 1){
        if(countHuman === 1){
            multipliedScore = multiplier;
            winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
            winnerU.innerHTML = `${countHuman} match`;
        } else {
            multipliedScore = multiplier;
            winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>1 x ${multiplier} = ${multipliedScore}`;
            winnerU.innerHTML = `${countHuman} matches`;
        };
        userPtsCount = userPtsCount + multiplier;
    } else if(multiplier === 1){
        if(countHuman === 1){
            multipliedScore = multiplier;
            winnerC.innerHTML = `${countComputer} match<br/>Tiebreak<br/>+1`;
            winnerU.innerHTML = `${countHuman} match`;
        } else {
            multipliedScore = multiplier;
            winnerC.innerHTML = `${countComputer} matches<br/>Tiebreak<br/>+1`;
            winnerU.innerHTML = `${countHuman} matches`;
        }
        compPtsCount++;
    };
};