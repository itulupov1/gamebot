'use strict';

// "Загадывание случайного числа от 1 до 100"

const isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function setNumber() {
	const number = Math.round((Math.random() * 100)) + 1;

	function tryGuessing() {
		const input = prompt('Угадай число от 1 до 100');
		//setNumber();
		if (input === null) {
			return false;
		} else if (input > number) {
			alert('Загаданное число меньше');
			return tryGuessing();
		} else if (input < number) {
			alert('Загаданное число больше');
			return tryGuessing();
		} else if (!isNumber(input)) {
			alert('Введи число!');
			return tryGuessing();
		} else if (+input === number) {
			return alert('Ура, вы угадали число!');
		}
	}
	tryGuessing(); 
}
setNumber();

