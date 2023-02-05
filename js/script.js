function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    }else if(argMoveId == 3){
        return 'nożyce'
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'Kamień';
} else if(randomNumber == 2) {
    computerMove = 'Papier';
} else{(randomNumber == 3)
    computerMove = 'Nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'Kamień';
} else if(playerInput == '2'){
    playerMove = 'Papier';
} else if(playerInput == '3'){
    playerMove = 'Nożyce';
} else{(3 < playerInput < 1) 
    playerMove = 'nieznany ruch';
}*/

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove)

     if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('remis');
     } else if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz');
     } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Ja wygrywam');
     } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Ja wygrywam');
     } else if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('remis');
     } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz');
     } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz');
     } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Ja wygrywam');
     } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('remis');
     }
    console.log('test: ', argComputerMove, argPlayerMove);  
}

displayResult(computerMove, playerMove);

/*if(playerMove == 'nieznany ruch'){
    printMessage('Podaj poprawną liczbę');
} else if(computerMove == 'Kamień' && playerMove == 'Kamień'){
    printMessage('Remis');
} else if(computerMove == 'Kamień' && playerMove == 'Papier'){
    printMessage('Ty wygrywasz');
} else if(computerMove == 'Kamień' && playerMove == 'Nożyce'){
    printMessage('Wygrywa komputer');
} else if(computerMove == 'Papier' && playerMove == 'Kamień'){
    printMessage('Wygrywa komputer');
} else if(computerMove == 'Papier' && playerMove == 'Papier'){
    printMessage('Remis');
} else if(computerMove == 'Papier' && playerMove == 'Nożyce'){
    printMessage('Ty wygrywasz');
} else if(computerMove == 'Nożyce' && playerMove == 'Kamień'){
    printMessage('Ty wygrywasz');
} else if(computerMove == 'Nożyce' && playerMove == 'Papier'){
    printMessage('Wygrywa komputer');
} else if(computerMove == 'Nożyce' && playerMove == 'Nożyce'){
    printMessage('Remis');
}*/
