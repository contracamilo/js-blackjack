import { Player } from "./Player.js";
import { Deck } from "./Deck.js";

export class BlackjackGame {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.dealer = new Player("Dealer");
    this.player = new Player("Player");
    this.messageElement = document.getElementById("message");

    this.playerScoreElement = document.getElementById("playerScore");
    this.dealerScoreElement = document.getElementById("dealerScore");
    this.dealerWins = 0;
    this.playerWins = 0;
    this.dealerScore = 0;
    this.playerScore = 0;
    this.setScores(this.player.getHandValue(), this.dealer.getHandValue());
  }

  startGame() {
    this.dealer.clearHand();
    this.player.clearHand();
    this.deck = new Deck();
    this.deck.shuffle();

    this.player.receiveCard(this.deck.draw());
    this.player.receiveCard(this.deck.draw());
    this.dealer.receiveCard(this.deck.draw());
    this.dealer.receiveCard(this.deck.draw());

    this.player.showHand("player-hand");
    this.dealer.showHand("dealer-hand");
    this.messageElement.innerText = "";

    document.getElementById("hit-button").disabled = false;
    document.getElementById("stand-button").disabled = false;
    this.messageElement.style.display = "none";
    this.setScores(this.player.getHandValue(), this.dealer.getHandValue());
  }

  setScores(scorePlayer, ScoreDealer) {
    if (ScoreDealer) {
      this.dealerScore = ScoreDealer;
      this.dealerScoreElement.innerText = `Dealer Score: ${this.dealerScore}`;
    }
    if (scorePlayer) {
      this.playerScore = scorePlayer;
      this.playerScoreElement.innerText = `Player Score: ${this.playerScore}`;
    }
  }

  playerHit() {
    this.player.receiveCard(this.deck.draw());
    this.player.showHand("player-hand");
    this.setScores(this.player.getHandValue(), null);

    if (this.playerScore > 21) {
      this.messageElement.innerText = "Player busts! Dealer wins.";
      this.messageElement.style.display = "flex";
      this.dealerWins++;
      this.updateScores();
      this.endGame();
    }
  }

  dealerPlay() {
    while (this.dealerScore < 17) {
      this.dealer.receiveCard(this.deck.draw());
      this.dealerScore = this.dealer.getHandValue();
    }
    this.dealer.showHand("dealer-hand");

    if (this.dealerScore > 21) {
      this.messageElement.innerText = "Dealer busts! Player wins.";
      this.messageElement.style.display = "flex";
      this.playerWins++;
      this.updateScores();
      this.endGame();
    } else {
      this.determineWinner();
    }

    this.setScores(null, this.dealer.getHandValue());
  }

  determineWinner() {
    const playerValue = this.player.getHandValue();
    const dealerValue = this.dealer.getHandValue();
    this.setScores(this.player.getHandValue(), this.dealer.getHandValue());

    if (playerValue > dealerValue) {
      this.messageElement.innerText = "Player wins!";
      this.playerWins++;
    } else if (dealerValue > playerValue) {
      this.messageElement.innerText = "Dealer wins!";
      this.dealerWins++;
    } else {
      this.messageElement.innerText = "It's a tie!";
    }
    this.messageElement.style.display = "flex";
    this.updateScores();
    this.endGame();
  }

  updateScores() {
    document.getElementById(
      "player-wins"
    ).innerText = `Player Wins: ${this.playerWins}`;
    document.getElementById(
      "dealer-wins"
    ).innerText = `Dealer Wins: ${this.dealerWins}`;
  }

  endGame() {
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stand-button").disabled = true;

    setTimeout(() => {
      this.messageElement.style.display = "none";
      this.startGame();
      this.setScores(this.player.getHandValue(), this.dealer.getHandValue());
    }, 2000);
  }
}
