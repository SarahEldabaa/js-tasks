// while (true) {
//   let age = Number(prompt("enter your age : "));

//   if (age === null) {
//     alert("try again!");
//     break;
//   }
//   if (isNaN(age) || age <= 0) {
//     alert("please enter a vaild number");
//     continue;
//   }

//   let status;
//   if (age >= 1 && age <= 10) {
//     status = alert("your are 'child'");
//   } else if (age >= 11 && age <= 18) {
//     status = alert("your are 'Teenager'");
//   } else if (age >= 19 && age <= 50) {
//     status = alert("your are 'Grown up'");
//   } else {
//     status = alert("your are 'Old'");
//   }
// }
// -----------------------------------------------------------------------------------------

// let user = prompt("enter a string");
// if (user === null) {
//   alert("try again!");
// } else {
//   let vowelCount = 0;
//   for (let i of user) {
//     if (i === "a" || i === "e" || i == "i" || i === "o" || i === "u") {
//       vowelCount++;
//     }
//   }
//   alert("number of vowels in the string :" + vowelCount);
// }

// -----------------------------------------------------------------------------------------

// let user = prompt("Enter a time :");
// // 10 : 30
// let clock = user.split(":");
// let hours = Number(clock[0]);
// let min = clock[1];

// if (hours == 0) {
//   alert(`time is 12 : ${min} AM`);
// } else if (hours < 12) {
//   alert(`${hours} : ${min} AM `);
// } else if (hours > 12) {
//   alert(`${hours - 12} : ${min}  PM`);
// }
