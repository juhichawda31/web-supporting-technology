const fs = require('fs');
const chalk = require('chalk');

// ---------- Task 1: Read JSON ----------
const users = require('./user.json');

console.log(chalk.blue("\n------ Users Data ------"));
users.forEach(user => {
    console.log(`${user.name} | Age: ${user.age} | Skills: ${user.skills.join(", ")}`);
});

// Convert JS object → JSON
const obj = { name: "Amit", age: 21, skills: ["NodeJS"] };
console.log(chalk.green("\nJSON String:"));
console.log(JSON.stringify(obj, null, 2));


// ---------- Task 4: Custom Module ----------
const math = require('./math');

console.log(chalk.yellow("\n------ Math Module ------"));
console.log("Add:", math.add(5, 3));
console.log("Subtract:", math.subtract(5, 3));
console.log("Multiply:", math.multiply(5, 3));


// ---------- Task 5: Calculator ----------
const calc = require('./calculator');

console.log(chalk.magenta("\n------ Calculator ------"));
let a = 10, b = 5;
console.log("Add:", calc.add(a, b));
console.log("Sub:", calc.sub(a, b));
console.log("Mul:", calc.mul(a, b));
console.log("Div:", calc.div(a, b));


// ---------- Bonus Task ----------
fs.readFile('data.json', 'utf8', (err, data) => {
    console.log(chalk.cyan("\n------ Product List ------"));

    if (err) {
        console.log("Error:", err);
        return;
    }

    const products = JSON.parse(data);

    products.forEach(p => console.log(p.name));
});