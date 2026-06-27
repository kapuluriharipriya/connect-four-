// Game Constants
const ROWS = 6;
const COLS = 7;
const PLAYER1 = 1;
const PLAYER2 = 2;
const EMPTY = 0;

// Game State
let board = [];
let currentPlayer = PLAYER1;
let gameOver = false;
let gameWinner = null;

// DOM Elements
const gameBoardDiv = document.getElementById('gameBoard');
const resetBtn = document.getElementById('resetBtn');
const gameStatusDiv = document.getElementById('gameStatus');
const playerIndicator = document.getElementById('playerIndicator');

// Initialize the game
function initializeGame() {
    board = [];
    for (let i = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j = 0; j < COLS; j++) {
            board[i][j] = EMPTY;
        }
    }
    currentPlayer = PLAYER1;
    gameOver = false;
    gameWinner = null;
    renderBoard();
    updateStatus();
}

// Render the game board
function renderBoard() {
    gameBoardDiv.innerHTML = '';
    
    // Render from top to bottom (visual perspective)
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.col = col;
            cell.dataset.row = row;
            
            const piece = board[row][col];
            
            if (piece !== EMPTY) {
                const pieceDiv = document.createElement('div');
                pieceDiv.className = `piece player${piece}`;
                cell.appendChild(pieceDiv);
            } else {
                cell.classList.add('empty');
            }
            
            cell.addEventListener('click', () => handleColumnClick(col));
            gameBoardDiv.appendChild(cell);
        }
    }
}

// Handle column click
function handleColumnClick(col) {
    if (gameOver) {
        return;
    }
    
    // Find the lowest empty row in the column
    let row = -1;
    for (let i = ROWS - 1; i >= 0; i--) {
        if (board[i][col] === EMPTY) {
            row = i;
            break;
        }
    }
    
    // Column is full
    if (row === -1) {
        alert('Column is full! Choose another column.');
        return;
    }
    
    // Place the piece
    board[row][col] = currentPlayer;
    
    // Check for winner
    if (checkWinner(row, col)) {
        gameOver = true;
        gameWinner = currentPlayer;
    } else if (isBoardFull()) {
        gameOver = true;
    }
    
    // Switch player
    currentPlayer = currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
    
    // Update UI
    renderBoard();
    updateStatus();
}

// Check for winner
function checkWinner(lastRow, lastCol) {
    const player = board[lastRow][lastCol];
    
    // Check horizontal
    if (checkDirection(lastRow, lastCol, 0, 1, player)) {
        return true;
    }
    
    // Check vertical
    if (checkDirection(lastRow, lastCol, 1, 0, player)) {
        return true;
    }
    
    // Check diagonal (top-left to bottom-right)
    if (checkDirection(lastRow, lastCol, 1, 1, player)) {
        return true;
    }
    
    // Check diagonal (top-right to bottom-left)
    if (checkDirection(lastRow, lastCol, 1, -1, player)) {
        return true;
    }
    
    return false;
}

// Check a specific direction for 4 in a row
function checkDirection(row, col, rowDelta, colDelta, player) {
    let count = 1; // Count the piece we just placed
    
    // Check in positive direction
    let r = row + rowDelta;
    let c = col + colDelta;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === player) {
        count++;
        r += rowDelta;
        c += colDelta;
    }
    
    // Check in negative direction
    r = row - rowDelta;
    c = col - colDelta;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === player) {
        count++;
        r -= rowDelta;
        c -= colDelta;
    }
    
    return count >= 4;
}

// Check if board is full
function isBoardFull() {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] === EMPTY) {
                return false;
            }
        }
    }
    return true;
}

// Update game status display
function updateStatus() {
    if (gameWinner) {
        const winnerName = gameWinner === PLAYER1 ? 'Player 1 (Red)' : 'Player 2 (Yellow)';
        gameStatusDiv.textContent = `🎉 ${winnerName} Wins! 🎉`;
        gameStatusDiv.classList.add('winner');
        gameStatusDiv.classList.remove('draw');
    } else if (isBoardFull()) {
        gameStatusDiv.textContent = 'It\'s a Draw! Board is full.';
        gameStatusDiv.classList.add('draw');
        gameStatusDiv.classList.remove('winner');
    } else {
        gameStatusDiv.textContent = 'Game in progress...';
        gameStatusDiv.classList.remove('winner', 'draw');
        
        const playerName = currentPlayer === PLAYER1 ? 'Player 1' : 'Player 2';
        playerIndicator.textContent = `${playerName}'s Turn`;
        
        // Update player indicator circle
        const playerCircles = document.querySelectorAll('.player-circle');
        playerCircles.forEach(circle => circle.classList.remove('player1', 'player2'));
        if (currentPlayer === PLAYER1) {
            playerCircles.forEach(circle => circle.classList.add('player1'));
        } else {
            playerCircles.forEach(circle => circle.classList.add('player2'));
        }
    }
}

// Reset game
function resetGame() {
    initializeGame();
}

// Event Listeners
resetBtn.addEventListener('click', resetGame);

// Start the game
initializeGame();