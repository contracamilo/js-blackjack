/*
    hearts: '♥' H,
    diamonds: '♦' D,
    clubs: '♣' C,
    spades: '♠' S
*/

export class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  
    getValue() {
      if (["J", "Q", "K"].includes(this.rank)) {
        return 10;
      } else if (this.rank === "A") {
        return 11;
      } else {
        return parseInt(this.rank);
      }
    }
  
    toString() {
      return `${this.rank}${this.suit[0].toUpperCase()}`;
    }
  
    getImagePath() {
      return `assets/cards/${this.toString()}.png`;
    }
  }

