var inputNumber = document.querySelector(".number-input");
var checkButton = document.querySelector(".check-button");
var guess = document.querySelector(".number-input");
var displayText = document.querySelector(".div-guess");
var scoreValue = document.querySelector(".span-score");
var highscoreValue = document.querySelector(".span-highscore");
var display = document.querySelector(".display-div");
var againButton = document.querySelector(".again-button");
 


let  randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;

let checkno = () => {

    const guessNo = Number(guess.value);
    if(guessNo == randomNumber) {
        console.log("inside");
        document.querySelector('body').style.backgroundColor = 'green';
        displayText.textContent = 'Correct Answer';
        scoreValue.textContent = score;
        highscoreValue.textContent = score;
        display.textContent = randomNumber;

    }

    else if ( guessNo < randomNumber) {
        displayText.textContent = 'too low ';
        score = score - 1;
        scoreValue.textContent = score;
    }

    else if ( guessNo > randomNumber) {
        displayText.textContent = 'too high ';
        score = score - 1;
        scoreValue.textContent = score;
    }
};

checkButton.addEventListener('click', checkno);



let resetno = () => {
    displayText.textContent = 'Start Guessing ...';
    score = 20;
    scoreValue.textContent = score;
    highscoreValue.textContent = 0;
    display.textContent = '?';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
  
  };
  
  againButton.addEventListener('click', resetno);

