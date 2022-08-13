'use strict';

window.onload = start;

function start() {
	calculator.init();
}

let calculator = {
	buttons: undefined,
	input: undefined,
	mem: [],
	init: function () {
		this.buttons = document.querySelectorAll('.btn');
		this.input = document.querySelector('input');
		for (let i = 0; i < this.buttons.length; i++) {
			let el = this.buttons[i];
			el.addEventListener('click', this.buttonClick);
		}
	},

	buttonClick: function (e) {
		let btnTxt = e.target.textContent;
		calculator.addToInput(btnTxt);
	},

	addToInput: function (str) {
		if (str === 'clear') {
			this.input.value = '';
			this.previous.value = '';
			calculator.mem.length = [];
		} else if (str === 'back') {
			calculator.mem.pop(str);
			this.input.value = this.input.value.slice(0, -1);
		} else if (str === '=') {
			this.input.value = math.evaluate(this.input.value);
			this.previous.value = this.input.value;
		}
		// (str === '=') this.input.value = eval(this.input.value);
		else {
			this.input.value += str;
			calculator.mem.push(str);
		}
	},
};
