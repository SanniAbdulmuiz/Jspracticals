/*let country = "Nigeria";
const continent = "Africa";
let population = "36000000";

const language = "yoruba";
console.log(continent, country, population, language);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

population /= 2;
population /= 2;
population++;
console.log(population);

const finland = 6000;
const average = 33000000;
console.log(population > finland);
console.log(population > average);

// const markWeight1 = "78";
// const markHeight1 = "1.69";
// const johnWeight1 = "92";
// const johnHeight1 = "1.95";

const markWeight1 = "95";
const markHeight1 = "1.88";
const johnWeight1 = "85";
const johnHeight1 = "1.76";

const markBMI = markWeight1 / markHeight1 ** 2;
const johnBMI = johnWeight1 / johnHeight1 ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's (${markBMI}) BMI is higher than John's (${markBMI}) !`);
} else {
  console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI})!`);
}

const period = 33000000000;
if (period >= 33000000000) {
  console.log("Nigeria's population is above average");
} else {
  const periodLeft = 33000000000 - period;
  console.log(`Nigeria's population is ${periodLeft} below average`);
}

const numNeighbours = Number(
  prompt("How many neighbour country does tour country have?")
);
console.log(numNeighbours);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;
// if (dolphinsAverageScore > koalasAverageScore) {
//   console.log(
//     `Dolphins average score of (${dolphinsAverageScore}) is greater than koalas average score of (${koalasAverageScore}), so the winner is Dolphins 🏆`
//   );
// } else if (dolphinsAverageScore === koalasAverageScore) {
//   console.log("This match is a draw");
// } else if (koalasAverageScore > dolphinsAverageScore) {
//   console.log(
//     `Koalas average score of (${koalasAverageScore}) is greater than Dolphins average score of (${dolphinsAverageScore}), so the winner is Koalas 🏆`
//   );
// }

//Bonus 1
const dolphinsAverageScore = (97 + 112 + 81) / 3;
const koalasAverageScore = (109 + 95 + 86) / 3;
console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
  console.log(
    `Dolphins average score of (${dolphinsAverageScore}) is greater than koalas average score of (${koalasAverageScore}), so the winner is Dolphins 🏆`
  );
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore > 100
) {
  console.log(
    `Koalas average score of (${koalasAverageScore}) is greater than Dolphins average score of (${dolphinsAverageScore}), so the winner is Koalas 🏆`
  );
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore > 100 &&
  koalasAverageScore > 100
) {
  console.log("This match is a draw");
} else {
  console.log("No team wins");
}

const english = true;
const island = false;
const people = 40000000000;
if (english && !island && people < 50000000000) {
  console.log("You should live in Nigeria");
} else {
  console.log("Nigeria does not meet your criterials");
}

//Ternary
console.log(
  `${
    english && !island && people < 50000000000
      ? "You should live in Nigeria"
      : "Nigeria does not meet your criterials"
  }`
);

const language = "Mandarin";
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers");
    break;
  case "Spanish":
    console.log("'2nd place in number of native speakers");
    break;
  case "English":
    console.log("'3rd place");
    break;
  case "Hindi":
    console.log("'Number 4");
    break;
  case "Arabic":
    console.log("'5th most spoken language");
    break;
  default:
    console.log("Great language too🦾");
}
const country = 130;
console.log(
  `${
    country >= 33
      ? "Nigeria's population is above average"
      : "Nigeria's population is below average"
  }`
);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population}million people and its capital city is ${capitalCity}`;
  return description;
}
const finland = describeCountry("finland", 6, "helsinki");
console.log(finland);

const nigeria = describeCountry("nigeria", 7, "abuja");
console.log(nigeria);

const ghana = describeCountry("ghana", 9, "accra");
console.log(ghana);

//Function declaration
function percentageofWorld1(country, population) {
  const description = `${country} has ${population}million people, so it's about ${
    (population / 7900) * 100
  }% of the world population`;
  return description;
}
const china = percentageofWorld1("china", 1441);
console.log(china);

const nigeria = percentageofWorld1("nigeria", 1570);
console.log(nigeria);

const ghana = percentageofWorld1("ghana", 1342);
console.log(ghana);

//Function expression
const percentageofWorld2 = function (country, population) {
  const description = `${country} has ${population}million people, so it's about ${
    (population / 7900) * 100
  }% of the world population`;
  return description;
};

const korea = percentageofWorld2("korea", 2000);
console.log(korea);

const kenya = percentageofWorld2("kenya", 3000);
console.log(kenya);

const japan = percentageofWorld2("japan", 4050);
console.log(japan);

//Function Arrow
const percentageofWorld3 = (country, population) => {
  return `${country} has ${population}million people, so it's about ${
    (population / 7900) * 100
  }% of the world population`;
};
console.log(percentageofWorld3("Tokyo", 2000));

//Functions Calling other Functions
const percentageofWorld1 = function (percentage) {
  return (percentage / 7900) * 100;
};

const describePopulation = function (country, population) {
  const percent = percentageofWorld1(population);
  return `${country} has ${population}million people, so it's about ${percent}% of the world population`;
};
console.log(describePopulation("china", 1441));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(2, 3, 4));

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log("Dolphins won!🏆");
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("Koalas won!🏆");
  } else {
    console.log("No winner");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(572, 250);

const population = [10, 1441, 332, 83];
console.log(population.length === 4);

const percentages = [
  (percentageOfWorld1 = population[0]),
  (percentageOfWorld2 = population[1]),
  (percentageOfWorld3 = population[2]),
  (percentageOfWorld4 = population[3]),
];
console.log(percentages);

const neighbours = ["Congo", "Kenya", "Mali"];
console.log(neighbours);

neighbours.push("Uganda");
console.log(neighbours);

neighbours.shift();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country");
}

neighbours[neighbours.indexOf("Mali")] = "Republic of Mali";
console.log(neighbours);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills.length - 1)];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

"use strict";
const myCountry = {
  country: "Nigeira",
  capital: "Abuja",
  language: "Yoruba",
  population: 36,
  naighbours: ["Congo", "Kenya", "Mali"],

  describe: function () {
    return `${this.country} has ${this.population}million ${this.language}-speaking people, ${this.naighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isisland = `${this.naighbours.length ? "true" : "false"}`;
    return this.isisland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isisland);

// console.log(
//   `${myCountry.country} has ${myCountry.population}million ${myCountry.language}-speaking people, ${myCountry.naighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

myCountry.population = 38;
myCountry["population"] = 40;
console.log(myCountry);

// const markWeight1 = "78";
// const markHeight1 = "1.69";
// const johnWeight1 = "92";
// const johnHeight1 = "1.95";

"use strict";

const mark = {
  fullName: "Mark miller",
  mass: 95,
  height: 1.88,

  calcBmi: function () {
    this.Bmi = this.mass / this.height ** 2;
    return this.Bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 85,
  height: 1.76,

  calcBmi: function () {
    this.Bmi = this.mass / this.height ** 2;
    return this.Bmi;
  },
};

mark.calcBmi();
john.calcBmi();
console.log(john.Bmi, john.Bmi);

if (mark.Bmi > john.Bmi) {
  console.log(`Mark's (${mark.Bmi}) BMI is higher than John's (${john.Bmi}) !`);
} else {
  console.log(`John's (${john.Bmi}) BMI is higher than Mark's (${mark.Bmi})!`);
}

const population = [10, 1441, 332, 83];
console.log(population.length === 4);

const percentages = [
  (percentageOfWorld1 = population[0]),
  (percentageOfWorld2 = population[1]),
  (percentageOfWorld3 = population[2]),
  (percentageOfWorld4 = population[3]),
];
console.log(percentages);

const percentages2 = [];
//population.length = 4, i <= 3 or i < 4, it is still the same.
for (let i = 0; i < population.length; i++) {
  percentages2.push(population[i]);
}
console.log(percentages2);

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

const population = [10, 1441, 332, 83];
console.log(population.length === 4);

const percentages = [
  (percentageOfWorld1 = population[0]),
  (percentageOfWorld2 = population[1]),
  (percentageOfWorld3 = population[2]),
  (percentageOfWorld4 = population[3]),
];
console.log(percentages);

// const percentages2 = [];
// //population.length = 4, i <= 3 or i < 4, it is still the same.
// for (let i = 0; i < population.length; i++) {
//   percentages2.push(population[i]);
// }
// console.log(percentages2);

const population = [10, 1441, 332, 83];
const percentages3 = [];
let i = 0;
while (i < population.length) {
  percentages3.push(population[i]);
  i++;
}
console.log(percentages3);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills.length - 1)];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
'use strict';
const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(bills[i] + tip);
}
console.log(bills, tips, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i]
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));*/
