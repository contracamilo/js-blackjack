export class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  
    receiveCard(card) {
      if (card) {
        this.hand.push(card);
      }
    }
  
    getHandValue() {
      let value = 0;
      let aceCount = 0;
  
      this.hand.forEach((card) => {
        value += card.getValue();
        if (card.rank === "A") {
          aceCount++;
        }
      });
  
      while (value > 21 && aceCount > 0) {
        value -= 10;
        aceCount--;
      }
  
      return value;
    }
  
    clearHand() {
      this.hand = [];
    }
  
    showHand(elementId) {
      const handElement =
        document.getElementById(elementId) || document.createElement("div");
      handElement.innerHTML = "";
  
      this.hand.forEach((card) => {
        const img = document.createElement("img");
        img.src = card.getImagePath();
        img.classList.add("card");
        handElement.appendChild(img);
      });
    }
  }