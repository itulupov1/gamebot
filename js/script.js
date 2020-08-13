'use strict';

// "Загадывание случайного числа от 1 до 100 - усложненное"

let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function setNumber() {
	let number = parseInt(Math.random() * 100);
	if (number === 0) {
		number = 1;
	}
	let attempts = 10;
	function tryGuessing() {
		let input = prompt('Угадай число от 1 до 100');
		if (attempts > 0) {
			if (input === null) {
				alert('Пока...');
				return;
			} else if (input > number) {
				attempts--;
				alert('Загаданное число меньше, осталось попыток ' + attempts);
				tryGuessing();
			} else if (input < number) {
				attempts--;
				alert('Загаданное число больше, осталось попыток ' + attempts);
				tryGuessing();
			} else if (!isNumber(input)) {
				alert('Введи число!');
				tryGuessing();
			} else if (+input === number) {
				let congr = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
				if (congr === true) {
					setNumber();
				}
			}
		} else {
			let lose = confirm('Попытки закончились, хотите сыграть еще?');
			if (lose === true) {
			setNumber();
			}
		}
	}
	tryGuessing(); 
}
setNumber();

