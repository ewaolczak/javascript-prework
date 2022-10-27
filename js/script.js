{
	const getMoveName = function (argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
		}
	};

	const displayResults = function (argComputerMove, argPlayerMove) {
		console.log('moves:', argComputerMove, argPlayerMove);
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

		if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove === 'papier' && argPlayerMove == 'nożyce') {
			printMessage('Ty wygrywasz');
		} else if (argComputerMove === argPlayerMove) {
			printMessage('REMIS!');
		} else {
			printMessage('Przegrywasz :(');
		}
	};

	const playGame = function (playerInput) {
		clearMessages();

		const randomNumber = Math.floor(Math.random() * 3 + 1);
		console.log('Wylosowana liczba to: ' + randomNumber);
		const computerMove = getMoveName(randomNumber);

		console.log('Gracz wpisał: ' + playerInput);
		const playerMove = getMoveName(playerInput);

		displayResults(computerMove, playerMove); //wywołanie funkcji
	};

	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});
	document
		.getElementById('play-scissors')
		.addEventListener('click', function () {
			playGame(3);
		});
}
