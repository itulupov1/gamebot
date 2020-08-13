'use strict';

// "Загадывание случайного числа от 1 до 100"

let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function setNumber() {
	let number = parseInt(Math.random() * 100);
	if (number === 0) {
		number = 1;
	}
	function tryGuessing() {
		let input = prompt('Угадай число от 1 до 100');
		//setNumber();
		if (input === null) {
			return;
		} else if (input > number) {
			alert('Загаданное число меньше');
			tryGuessing();
		} else if (input < number) {
			alert('Загаданное число больше');
			tryGuessing();
		} else if (!isNumber(input)) {
			alert('Введи число!');
			tryGuessing();
		} else if (+input === number) {
			alert('Ура, вы угадали число!');
		}
	}
	tryGuessing(); 
}
setNumber();

