let thisPlayer,
    winnerPlayer = null;

let labelWinnerPlayer = document.getElementById('player-winner');
let labelSelectPlayer = document.getElementById('selected-player');
let cell = document.querySelectorAll('.cell');
playerSelect('X');

function handleClickCell(id) {
    if (winnerPlayer !== null) {
        return;
    }
    let cell = document.getElementById(id);

    if (cell.innerHTML !== '') {
        return;
    }
    cell.innerHTML = thisPlayer;
    cell.style.color = '#000';
    checkPlayer(thisPlayer);
    checkedWinner();
}

function playerSelect(player) {
    thisPlayer = player;
    labelSelectPlayer.innerHTML = thisPlayer;
}

function checkPlayer(player) {
    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }
    playerSelect(player);
}

function checkedWinner() {
    if (checaSequencia(cell[0], cell[1], cell[2])) return;
    if (checaSequencia(cell[3], cell[4], cell[5])) return;
    if (checaSequencia(cell[6], cell[7], cell[8])) return;
    if (checaSequencia(cell[0], cell[3], cell[6])) return;
    if (checaSequencia(cell[1], cell[4], cell[7])) return;
    if (checaSequencia(cell[2], cell[5], cell[8])) return;
    if (checaSequencia(cell[0], cell[4], cell[8])) return;
    if (checaSequencia(cell[2], cell[4], cell[6])) return;
}

function checaSequencia(square1, square2, square3) {
    let isEqual = false;

    if (
        square1.innerHTML !== '' &&
        square1.innerHTML === square2.innerHTML &&
        square2.innerHTML === square3.innerHTML
    ) {
        mudaCorsquare(square1, square2, square3);
        mudarVencedor(square1);
        isEqual = true;
    }

    return isEqual;
}

function mudarVencedor(square) {
    winnerPlayer = square.innerHTML;
    labelWinnerPlayer.innerHTML = winnerPlayer;
}

function mudaCorsquare(square1, square2, square3) {
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';
}
function reiniciar() {
    winnerPlayer = null;
    labelWinnerPlayer.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let square = document.getElementById(`cell${i}`);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '';
    }

    playerSelect('X');
}
