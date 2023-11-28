let firstName = prompt("enter your first name");
// alert(`your first name is ${firstName}`);

lastName = prompt("enter your last name");
// alert(`your  last name is ${lastName}`);

fullName = confirm(`Your full name is ${firstName + " " + lastName} `);

birthYear = prompt("enter your birth year");

currentDate = new Date();
age = currentDate.getFullYear();
yourAge = age - birthYear;
console.log(yourAge);

fullName = confirm(
  `Welcome ${firstName + " " + lastName} you are ${yourAge} years old `
);

alert("It's the first realse of a calculator that only has summation feature ");

let firstNumber = Number(prompt("enter the first number"));
let secondNumber = Number(prompt("enter the  second number"));
let result = firstNumber + secondNumber;
console.log(result);

alert(`the summation result ${result}`);
