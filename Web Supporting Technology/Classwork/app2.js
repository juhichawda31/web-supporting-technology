const chalk = require('chalk');

console.log(chalk.blue("===== JavaScript Functions Output =====\n"));

// 1
function greet(name) {
    console.log("Hello " + name);
}

// 2
function add(a, b) {
    return a + b;
}

// 3
function isEven(num) {
    return num % 2 === 0;
}

// 4
function square(n) {
    return n * n;
}

// 5
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

// 6
function printNumbers() {
    console.log("Numbers 1 to 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// 7
function findMax(a, b) {
    return a > b ? a : b;
}

// 8 (Arrow Function)
const multiply = (a, b) => a * b;


// ---------- CALL FUNCTIONS (OUTPUT) ----------

greet("Moulik");

console.log("Add (5 + 3):", add(5, 3));
console.log("Is 4 even?:", isEven(4));
console.log("Square of 6:", square(6));
console.log("Average of (10, 20, 30):", calculateAverage(10, 20, 30));

printNumbers();

console.log("Max of 15 and 25:", findMax(15, 25));
console.log("Multiply (4 * 5):", multiply(4, 5));


// ---------- CHALK OUTPUT ----------
console.log(chalk.green("\n✔ This is green text"));
console.log(chalk.red("✖ This is red text"));
console.log(chalk.yellow("⚠ This is yellow text"));


// ---------- INFO SECTION ----------
console.log(chalk.cyan("\nDependencies are stored in package.json"));
console.log(chalk.magenta("node_modules contains installed packages and their code"));