let cells = document.getElementsByClassName("cell");
let player = "x";
let winCombination = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for (let cell of cells) {
    cell.addEventListener("click", movePlayer)
}

function movePlayer () {
    if (this.innerHTML != "") {
        return;
    }
    if (player == "x") {
        this.innerHTML = player;
        if (checkWin()){
            console.log(player);
            newCells(`Победил: ${player}`);
        };
        player = "o";
    }
    else {
        this.innerHTML = player;
        if (checkWin()){
            console.log(player);
            newCells(`Победил: ${player}`);
        };
        player = "x";
    }
    let draw = true;
    for (let cell of cells) {
        if (cell.innerHTML == "") {
            draw = false;
        }
    }
    if (draw) {
        newCells("Ничья");
    }
}

function checkWin () {
    let dataMoves = [];
    for (let move of cells) {
        if (move.innerHTML == player) {
            dataMoves.push(parseInt(move.id));
        }
    }
    console.log(dataMoves);
    for (let winMoves of winCombination) {
        let win = true;
        for (let winMove of winMoves) {
            if (dataMoves.indexOf(winMove) == -1 ) {
                win = false;
            }
        }
        if (win) {
            console.log(win);
            return win;
        }
    }
    return false;
}

function newCells (text) {
    for (let cell of cells) {
        cell.innerHTML = "";
    }
    alert(text);
}