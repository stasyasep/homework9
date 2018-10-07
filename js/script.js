// Створіть циклом строку з не менше 17 букв, що повторюються: "сода" (содасодасода...). Виведіть в консоль.
// Виведіть в консоль строку, в якій всі букви "с" будуть замінені на букву "в".

(function task1(){

	let str = "содасодасодасодасодасодасодасодасода";

	console.log(str);

	let res = "";

	for(let i = 0; i<str.length; i++){

		let strsplit = str.split("");

		if(strsplit[i]==="с"){

			strsplit[i]="в";
		}

		res+=strsplit[i];
	}

	console.log(res);
	
})();

// Порахуйте циклом кількість букв "о" у наступному виразі:
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

(function task2(){

	let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.";
	let counter = 0;
	let k = 0;
	let ind;

	for (let i = 0; i<str.length; i++){

		ind = str.indexOf("o",k);

		if(ind>-1){

			k=ind+1;
			counter++;
		}
	}

	console.log(counter);

})();

// Створіть функцію, що видає випадкове число від 50 до 100.
// Виведіть в консоль 20 випадкових чисел за допомогою цієї функції.
// Використайте групування в консолі.

(function task3(){

	console.group("20 випадкових чисел від 50 до 100:");

	for(let i = 0; i<20; i++){

		console.log(getRandom());

	}

	console.groupEnd();

	function getRandom(){
		return Math.floor(Math.random() * (51)) + 50;
	}

})();

// Створіть функцію, яка повертатиме дану їй строку задом наперед. За допомогою неї виведіть в консоль ваше ім'я:
// рднаскелО

(function task4(){

	let name = "Наталія";

	console.log(nameReverse(name));

	function nameReverse(str){
		return str.split("").reverse().join("");
	}

})();

// Дано функцію, яка "з сервера" присилає дані про випадкового користувача:
// let name, age;
// function getUser(){
//   let users = ['Коля','Іра','Льоша','Маша','Грыша','Пєтя','Гоша','Аня','Свєта','Іван'];
//   let ages = ['19','21','14','18','27','22','18','21','24','31'];
//   let n = Math.floor(Math.random()*10);
//   name = users[n];
//   age = ages[n];
// }
// Виведіть в консоль вік Маші, наприклад:
// Маша: 17 років.

(function task5(){

	let name, age;

	while(true){

		getUser();
		if(name === "Маша"){

			console.log(name+": "+age+" років.");
			break;
		}
	}

	function getUser(){

		let users = ['Коля','Іра','Льоша','Маша','Грыша','Пєтя','Гоша','Аня','Свєта','Іван'];
		let ages = ['19','21','14','18','27','22','18','21','24','31'];
		let n = Math.floor(Math.random()*10);

		name = users[n];
		age = ages[n];
	}

})();


