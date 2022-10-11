function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2) {
        return 'papier';
    } else if(argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

function displayResults(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove === 'kamień' && argPlayerMove === 'papier'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove === 'nożyce' && argPlayerMove === 'kamień'){
        printMessage('Ty wygrywasz!')
    } else if(argComputerMove === 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz');
    } else if (argComputerMove === argPlayerMove){
        printMessage('REMIS!')
    } else {
        printMessage('Przegrywasz :(')
    }
}

displayResults(computerMove, argPlayerMove);