"use strict"

// let finalScores = [0, 0]
// let score = 0
// let activePlayer = 0
// let playing = true


let leftPlayerSide = document.querySelector(".player--0")
let rightPlayerSide = document.querySelector(".player--1")


let newGameBtn = document.querySelector(".new-game")
let rollDiceBtn = document.querySelector(".roll-dice")
let holdBtn = document.querySelector(".hold")

let firstPlayerFinalScore = document.querySelector(".score--0")
let secondPlayerFinalScore = document.querySelector(".score--1")

let firstPlayerCurrentScore = document.querySelector(".current--0")
let secondPlayerCurrentScore = document.querySelector(".current--1")

let diceImg = document.querySelector(".dice")


let finalScores, score, activePlayer, playing;

// Starting conditions
const init = function () {
  finalScores = [0, 0];
  score = 0;
  activePlayer = 0;
  playing = true;

  firstPlayerFinalScore.textContent = 0;
  secondPlayerFinalScore.textContent = 0;
  firstPlayerCurrentScore.textContent = 0;
  secondPlayerCurrentScore.textContent = 0;

  diceImg.classList.add('removed-element');
  leftPlayerSide.classList.remove('winner');
  rightPlayerSide.classList.remove('winner');
  leftPlayerSide.classList.add('active-player');
  rightPlayerSide.classList.remove('active-player');
};
init();



const switchPlayer = function () {
  document.querySelector(`.current--${activePlayer}`).textContent = score
  score = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  leftPlayerSide.classList.toggle("active-player")
  rightPlayerSide.classList.toggle("active-player")
};


rollDiceBtn.addEventListener("click", function() {
  const randomDiceNumber = Math.floor(Math.random() * 6) + 1
  diceImg.classList.remove("removed-element")
  diceImg.src = `img/dice-${randomDiceNumber}.png`

  if (randomDiceNumber !== 1) {
    score += randomDiceNumber
    document.querySelector(`.current--${activePlayer}`).textContent = score
  } else {
    switchPlayer()
  }

})

holdBtn.addEventListener("click", function() {
  finalScores[activePlayer] += score
  document.querySelector(`.score--${activePlayer}`).textContent = finalScores[activePlayer]
  
  if (finalScores[activePlayer] >= 100) {
    playing = false;
    diceImg.classList.add('removed-element');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('active-player');
  } else {
    switchPlayer();
  }
})

newGameBtn.addEventListener("click", init)