import { Card } from './Card.js';

export class Deck {
    constructor() {
      this.cards = [];
      this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
      this.ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
      ];
      this.initializeDeck();
    }
  
    initializeDeck() {
      this.suits.forEach((suit) => {
        this.ranks.forEach((rank) => {
          this.cards.push(new Card(suit, rank));
        });
      });
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    draw() {
      return this.cards.pop();
    }
  }
