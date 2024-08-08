let player = 'X' // Define the starting Character 'X'
// play function that will contain different
function play(evt) {
    const targetSquare = evt.target;
    if (targetSquare.innerText !== '') {
        return;
    }
    targetSquare.innerText = player;

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    const playerSpan = document.querySelector('#current-player');
    playerSpan.innerText = player;

    const winner = calcWinner();
    if (winner) {
        alert(`${winner} is the winner!`);
    } else if (isBoardFull()) {
        alert('Game is a tie!');
    }
}

const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('click', play)
}


function isBoardFull() {
    for (const square of squares) {
        if (square.innerText === '') {
            return false;
        }
    }
    return true;
}

function calcWinner() {
    const lines = [
        [0, 1, 2], // Horizontal lines
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],// Vertical lines
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],// Diagonal lines
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        const squareA = squares[a].innerText;
        const squareB = squares[b].innerText;
        const squareC = squares[c].innerText;

        if (squareA !== '' && squareA === squareB && squareB === squareC) {
            return squareA
        }
    }
    return undefined;
}
