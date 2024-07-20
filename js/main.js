import { BlackjackGame } from  "./BlackJackGame.js";


const game = new BlackjackGame();

document.getElementById("hit-button").addEventListener("click", () => {
  game.playerHit();
});

document.getElementById("stand-button").addEventListener("click", () => {
  game.dealerPlay();
});

document.getElementById("new-game").addEventListener("click", () => {
  game.startGame();
});

window.onload = () => {
  game.startGame();
};
