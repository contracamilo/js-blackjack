import {Player} from "./Player.js";
import {Deck} from "./Deck.js";

export class BlackjackGame {
    constructor() {
      this.deck = new Deck();
      this.deck.shuffle();
      this.dealer = new Player("Dealer");
      this.player = new Player("Player");
      this.messageElement = document.getElementById("message");
      this.dealerWins = 0;
      this.playerWins = 0;
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
    }
  
    playerHit() {
      this.player.receiveCard(this.deck.draw());
      this.player.showHand("player-hand");
  
      if (this.player.getHandValue() > 21) {
        this.messageElement.innerText = "Player busts! Dealer wins.";
        this.messageElement.style.display = "flex";
        this.dealerWins++;
        this.updateScores();
        this.endGame();
      }
    }
  
    dealerPlay() {
      while (this.dealer.getHandValue() < 17) {
        this.dealer.receiveCard(this.deck.draw());
      }
      this.dealer.showHand("dealer-hand");
  
      if (this.dealer.getHandValue() > 21) {
        this.messageElement.innerText = "Dealer busts! Player wins.";
        this.messageElement.style.display = "flex";
        this.playerWins++;
        this.updateScores();
        this.endGame();
      } else {
        this.determineWinner();
      }
    }
  
    determineWinner() {
      const playerValue = this.player.getHandValue();
      const dealerValue = this.dealer.getHandValue();
  
      if (playerValue > dealerValue) {
          this.messageElement.innerText = 'Player wins!';
          this.playerWins++;
      } else if (dealerValue > playerValue) {
          this.messageElement.innerText = 'Dealer wins!';
          this.dealerWins++;
      } else {
          this.messageElement.innerText = 'It\'s a tie!';
      }
      this.messageElement.style.display = "flex";
      this.updateScores();
      this.endGame();
    }

    updateScores() {
        document.getElementById('player-wins').innerText = `Player Wins: ${this.playerWins}`;
        document.getElementById('dealer-wins').innerText = `Dealer Wins: ${this.dealerWins}`;
    }
  
    endGame() {
      document.getElementById("hit-button").disabled = true;
      document.getElementById("stand-button").disabled = true;
  
      setTimeout(() => {
        this.messageElement.style.display = "none";
        this.startGame();
      }, 2000);
    }
  }
  