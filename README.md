# Connect Four Game

A modern, interactive Connect Four game built with HTML, CSS, and JavaScript. Play against another player and try to connect four pieces in a row!

## Features

- ✨ Interactive game board with smooth animations
- 🎮 Two-player gameplay
- 🎨 Beautiful gradient UI with responsive design
- ⚡ Real-time game status updates
- 📱 Mobile-friendly interface
- 🎯 Win detection (horizontal, vertical, and diagonal)
- 🔄 Easy reset to play again

## How to Play

1. Open `index.html` in your web browser
2. Player 1 (Red) goes first
3. Click on any column to drop your piece
4. The piece will fall to the lowest available position
5. Connect 4 of your pieces in a row (horizontally, vertically, or diagonally) to win
6. Click "Reset Game" to start over

## Game Rules

- The board is 7 columns by 6 rows
- Players take turns dropping pieces
- Pieces fall to the lowest available position in the column
- A column cannot accept more pieces once it's full
- First player to connect 4 pieces wins
- If the board fills completely with no winner, the game is a draw

## File Structure

```
connect-four/
├── index.html      # HTML structure and layout
├── styles.css      # CSS styling and animations
├── game.js         # Game logic and state management
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Game logic, state management, and DOM manipulation

## Game Logic

### Core Functions

- `initializeGame()` - Sets up a fresh game board
- `renderBoard()` - Renders the visual game board from the state
- `handleColumnClick(col)` - Processes player moves
- `checkWinner()` - Determines if there's a winner
- `checkDirection()` - Checks for 4 in a row in a specific direction
- `updateStatus()` - Updates the UI with current game state

## Browser Support

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid
- CSS Animations
- CSS Gradients

## Features Breakdown

### Animations
- Smooth piece drop animation when placed
- Hover effects on cells
- Button animations on click

### Responsive Design
- Adapts to different screen sizes
- Mobile-friendly touch interactions
- Adjusts layout for smaller screens

### User Experience
- Clear turn indicators showing current player
- Color-coded pieces (Red for Player 1, Yellow for Player 2)
- Immediate feedback on invalid moves
- Clear win/draw notifications

## Future Enhancements

Potential features for expansion:
- AI opponent with difficulty levels
- Game statistics and score tracking
- Sound effects and background music
- Multiplayer online gameplay
- Dark mode theme
- Move history and undo functionality
- Timer for each player's turn

## License

This project is open source and available under the MIT License.

## Author

Created by kapuluriharipriya

Enjoy playing Connect Four! 🎮