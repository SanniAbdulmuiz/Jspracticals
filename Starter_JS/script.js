/*
let js = "amazing";
// console.log(48 + 8 + 23 - 9);

console.log(23);

let firstName = "Abdulmuiz";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let sanni_Abdulmuiz = "SA";
let $function = "27";

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2005;
console.log(typeof year);

let age = "31";
age = 31;
console.log(age);

const birthYear = 1991;
// birthYear = 1990;

var job = "programmer";
job = "teacher";

lastName = "Abdulmuiz";
console.log(lastName);

const now = 2023;
const dateOfBirth = now - 25;
const myAge = now - 2007;
console.log(dateOfBirth, myAge);
console.log(dateOfBirth / myAge, myAge * 2, 2 ** 3 / 3);
//2 ** 3, is equal to 2 raise to power 3 = 2 * 2 * 2
const firstName = "Abdulmuiz";
const lastName = "Ayomide";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

//Comparion operators
console.log(dateOfBirth < myAge); // >, <, >=, <=
console.log(myAge >= 18);

const isFullAge = myAge >= 18;
console.log(dateOfBirth > myAge);

const firstName = "Abdulmuiz";
const job = "student";
const birthYear = 2005;
const year = 2023;
const abdulmuiz =
  "I'm " + firstName + ", an " + (year - birthYear) + " year old " + job + "!";
console.log(abdulmuiz);
const abdulmuizNew = `I'm ${firstName}, an ${
  year - birthYear
} year old ${job}!`;
console.log(abdulmuizNew);

console.log(`strings
with multiple
lines`);

const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years.`);
}

const birthYear = 2000;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
//type conversion
const inputYear = "1991";
//we use (Number(inputYear) to change 1991 to a number before 18 can be added to it
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

//type coersion
console.log("I am" + " 23 " + "years old");
//"+" converts other values to strings

console.log("23" - " 10 " - 3);
//here strings are converted to numbers because of the minus sign (Javascript has an automatic built-in type coersion)

console.log("23" / "10");
console.log("23" > "10");

let n = "19" - "13" + "17";
n = n - 1;
console.log(n);

//We have 5 falsy values, "Null", "Undefined", " ", "NaN", "0"
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Abdulmuiz"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("Get a Job!");
}

let height;
if (height) {
  console.log("Yay! height is defined");
} else {
  console.log("Height is undefined");
}

const age = "18";
if (age === 18) console.log("You are already an adult (STRICT)");
if (age == 18) console.log("You are already an adult (LOOSE)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 23 === 23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("Cool! 7 is also an amazing number");
} else if (favourite === 9) {
  console.log("Cool! 9 is also an amazing number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

const hasDriversLisence = true;
const hasGoodVision = true;
console.log(hasDriversLisence && hasGoodVision);
console.log(hasDriversLisence || hasGoodVision);
console.log(!hasDriversLisence);

const isTired = false;
console.log(hasDriversLisence && hasGoodVision && isTired);
if (hasDriversLisence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive....");
}

const day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Write code examples");
    break;
  default:
    console.log("Not a valid day");
}
if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
} else if (day === "saturday" || day === "Sunday") {
  console.log("Not a valid day");
}

//The ternary operator is used for making quick decisions, like a simple code, it can't be used for complex decisions so, it cannot replace the if/else statement
const age = 18;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`${age >= 18 ? "wine" : "water"}`);
"use strict";

//Reserved words
//const interface = "Audio";
//const private = 234;

//INTRODUCTION TO FUNCTIONS
function logger() {
  console.log("My name is Abdulmuiz");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(3, 4);
console.log(appleJuice);

const orangeJuice = fruitProcessor(5, 6);
console.log(orangeJuice);

const num = Number("23"); 

//fuction declaration, allows for calling of the function before declaring it.
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(2005, "Abdulmuiz"));

//Functions Calling other Functions

const fruitPieces = function (fruit) {
  return fruit * 4;
};
function fruitProcessor(apples, oranges) {
  const applePieces = fruitPieces(apples);
  const orangePieces = fruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

"use strict";
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1905, "Abdulmuiz"));

const calcAge5 = function (birthYear, firstName) {
  const age = 2037 - birthYear;
  console.log(`${firstName} is ${age} years old`);
  return age;
};
console.log(calcAge5(1991, "Jonas"));x

//INTRODUCTION TO ARRAYS
"use strict";
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

//Literal syntax method of array
const friends = ["Micheal", "Steven", "peter"];
console.log(friends);

//Another way of writing an array
const years = new Array(1991, 1992, 1993, 1994);
console.log(years);

//The numbering of arrays start from "0"
console.log(friends[0]); //Micheal
console.log(friends[1]); //Steven
console.log(friends[2]); //peter

//To determine the amount of values in an array without having to count it
console.log(friends.length);

//To determine the last value in array without counting
console.log(friends[friends.length - 1]); //peter

//To change one of the value of an array
friends[2] = "Jay"; //Changes peter to jay
console.log(friends);

const firstName = "Jonas";

//An array can contain all kinds of values, it can also contain another array, e.g "friends"
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];
console.log(ages);

const bage = [age1, age2, age3];
console.log(bage);

//Methods of arrays
"use strict";
const friends = ["Micheal", "Steven", "Peter"];

//Adds Element
const newLength = friends.push("Jay"); //Adds a new value to the end of the array
console.log(friends);
//We stored the value friends.push returns in the variable "newLength"!
console.log(newLength); //Returns the new length of the array

friends.unshift("John"); //Adds a new value to the beginning of the array
console.log(friends);

//Removes Elements
friends.pop(); //Removes the last value of an array
const popped = friends.pop(); //Removes the last value of an array
console.log(popped); //Returns the removed value
console.log(friends);

friends.shift(); //Removes the first value of an array
console.log(friends);

console.log(friends.indexOf("Steven")); //To check the number of a value in an array
console.log(friends.indexOf("bob")); // If the value is not in the specified array, it returns "-1" automatically.
console.log(friends.includes("Steven")); //Returns true/false, true if the value is in the array, else, false.
console.log(friends.includes("bob")); // Returns false because "bob" is not in the array.
friends.push(23);
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called steven");
}

"use strict";

//TNTRODUCTION TO OBJECTS
//const jonasArray = [
//"Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Micheal", "Peter", "Steven"];

const jonas = {
  firstName: "Jonas",
  lastName: "schmedtmann",
  age: 2037 - 1991,
  friends: ["Micheal", "Peter", "Steven"],
};
console.log(jonas);

//Dots and Bracket notation
console.log(jonas.firstName);
console.log(jonas["firstName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const intrestedIn = prompt(
  "what do you want to know about Jonas? Choose between firstName, Lastname, Age, friends"
);
if (jonas[intrestedIn]) {
  console.log(jonas[intrestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, Lastname, Age, friends"
  );
}

jonas.location = "portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Challenge
//Jonas has 3 friends, and his best friend is micheal
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
);

"use strict";
const jonas = {
  firstName: "Jonas",
  lastName: "schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  //"this" represents the object "jonas", this.birthyear = 1991
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  //We added another value "age" to "jonas"
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } teacher, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);

//jonas is a 46-year old teacher, and he as a/no drivers license
console.log(jonas.getSummary());

//INTRODUCTION TO LOOPS
"use strict";
// console.log("Lifting weights repitition 1 🏋️‍♂️");
// console.log("Lifting weights repitition 2 🏋️‍♂️");
// console.log("Lifting weights repitition 3 🏋️‍♂️");
// console.log("Lifting weights repitition 4 🏋️‍♂️");
// console.log("Lifting weights repitition 5 🏋️‍♂️");
// console.log("Lifting weights repitition 6 🏋️‍♂️");
// console.log("Lifting weights repitition 7 🏋️‍♂️");
// console.log("Lifting weights repitition 8 🏋️‍♂️");
// console.log("Lifting weights repitition 9 🏋️‍♂️");
// console.log("Lifting weights repitition 10 🏋️‍♂️");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
// }

const jonas = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //Reading from Jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  //types[0] = "string";
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- Break With Number ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

//LOOPING BACKWARDS AND LOOPS IN LOOPS
("use strict");
const jonas = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];
//0 , 1, 2..., 4
//4, 3, 2..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repitition ${rep} 🏋️‍♂️`);
  }
}

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

//While Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`While lifting weights repitition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//HOW TO THINK AND SOLVE PROBLEMS LIKE A DEVELOPER, USING GOOGLE STACK OVERFLOW AND MDN WEB DOCS
'use strict';
//PROBLEM 1
//We work for a company building a smart home thermoneter. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude?
//Answer: difference between highest and lowest temperature
// - How to compute max and min temperatures?
// - What is a sensor error? and what to do?

// 2) Breaking the problems into sub-problems
// - How to ignore errors
// - find max value in temperature array
// - find min value in temperature array
// - Subtract min from max (Amplitude) and return it

//Solutions

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

//Problem 2
//Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 arrays, should we implement functionality twice? No! Just merge two arrays

//Solution
const calcTempAmplitudeNew = function (t1, t2) {
  const tempsNew = t1.concat(t2);
  console.log(tempsNew);
  let max = tempsNew[0];
  let min = tempsNew[0];

  for (let i = 0; i < tempsNew.length; i++) {
    const curTemp = tempsNew[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
console.log();

//How to debug with the console and breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    //FIXING THE BUG
    //The prompt always returns a string no matter the value in it.
    //value: Number(prompt('Degree celcius:')),
    value: 10,
  };

  //FINDING THE BUG
  //console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//IDENTIFYING THE BUG
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const tempsBug = t1.concat(t2);
  console.log(tempsBug);
  let max = 0;
  let min = 0;

  for (let i = 0; i < tempsBug.length; i++) {
    const curTemp = tempsBug[i];
    if (typeof curTemp !== 'number') continue;

    //debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);
console.log();*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}*C ... ${data2[1]}*C ... ${data1[2]}*C...`);

const printForcast = function (arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    //+= is equivalen to saying string = string + `${arr[i]}*c in ${i + 1} days...`
    string = string + `${arr[i]}*c in ${i + 1} days...`;
  }
  console.log('...' + string);
};
printForcast(data1);
