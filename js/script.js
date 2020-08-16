'use strict';

// "Загадывание случайного числа от 1 до 100 - усложненное"

const isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function setNumber() {
	const number = Math.round((Math.random() * 100)) + 1;
	let attempts = 10;
	function tryGuessing() {
		if (attempts > 0) {
			const input = prompt('Угадай число от 1 до 100');
			if (input === null) {
				return alert('Пока...');
			} else if (input > number) {
				attempts--;
				alert('Загаданное число меньше, осталось попыток ' + attempts);
				return tryGuessing();
			} else if (input < number) {
				attempts--;
				alert('Загаданное число больше, осталось попыток ' + attempts);
				return tryGuessing();
			} else if (!isNumber(input)) {
				alert('Введи число!');
				return tryGuessing();
			} else if (+input === number) {
				const congr = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
				if (congr === true) {
					return setNumber();
				}
			}
		} else {
			const lose = confirm('Попытки закончились, хотите сыграть еще?');
			if (lose === true) {
			return setNumber();
			}
		}
	}
	tryGuessing(); 
}
setNumber();


