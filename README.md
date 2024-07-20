# JS Blackjack 21 Game
[Demo Link](https://contracamilo.github.io/js-blackjack/)

## Introduction

Welcome to the Blackjack 21 Game! This project is a simple yet engaging implementation of the classic Blackjack card game, developed using JavaScript, HTML, and CSS. In this game, you can play against the computer (dealer) in a thrilling contest to see who can get closest to 21 without going over. With an intuitive interface and clear game mechanics, it's easy for anyone to pick up and start playing.

The game features a visual representation of the cards dealt to both the player and the dealer, and it keeps track of the number of wins for both sides. Whether you're a seasoned Blackjack player or new to the game, this project offers a fun and interactive way to enjoy this timeless casino classic.

Dive in, test your luck and strategy, and see if you can beat the dealer in this exciting game of Blackjack 21!

### Assets

- The `assets` folder contains images for each card in the deck. Each image is named using the pattern `[rank][suit].png`, e.g., `2D.png` for 2 of Diamonds, `4H.png` for 4 of Hearts, etc.

### HTML

- `index.html`: The main HTML file that sets up the structure of the game interface.

### CSS

- `style.css`: The stylesheet for styling the game interface.

### JavaScript

- `main.js`: The main script file that initializes the game and handles the interaction between the player and the game logic.
- `card.js`: Defines the `Card` class which represents a single card in the deck.
- `deck.js`: Defines the `Deck` class which represents a deck of cards.
- `player.js`: Defines the `Player` class which represents a player in the game.
- `blackjackGame.js`: Defines the `BlackjackGame` class which contains the main game logic and handles the gameplay.

## How to Run the Game

1. **Clone the repository**:

    ```bash
    git clone git@github.com:contracamilo/js-blackjack.git
    cd js-blackjack
    ```

2. **Open `index.html`** in a web browser:
    - You can simply open the file in your browser or use a local web server to serve the files.

## How to Play

- The game starts automatically when the page loads.
- The player can click on the "Hit" button to draw a card.
- The player can click on the "Stand" button to end their turn.
- The dealer will automatically draw cards until they reach a value of at least 17.
- The game will display a message indicating the winner of the round.
- The win counters for both the player and the dealer are updated after each round.
- The game automatically restarts after a short delay.

## Game Rules

- Each player is dealt two cards.
- The player can choose to "Hit" (draw a card) or "Stand" (end their turn).
- The goal is to have a hand value as close to 21 as possible without exceeding 21.
- Number cards are worth their face value.
- Face cards (J, Q, K) are worth 10.
- Aces can be worth 1 or 11, depending on which value benefits the hand more.
- The dealer must draw cards until they reach a hand value of at least 17.
- If the player's hand value exceeds 21, they bust and lose the round.
- If the dealer's hand value exceeds 21, they bust and the player wins the round.
- If both the player and the dealer have hand values of 21 or less, the hand with the highest value wins.

## Screenshot

![Screenshot 2024-07-20 at 17 02 49](https://github.com/user-attachments/assets/2299b43f-379e-4f3c-8b21-561df3d441c9)


## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
