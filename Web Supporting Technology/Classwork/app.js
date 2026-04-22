const fs = require('fs');

// Load JSON file
const students = require('./students.json');

console.log("------ Student Names ------");
students.forEach(s => console.log(s.name));


// ---------- Task 3 Functions ----------

// 1
function getAllStudents() {
    console.log("\n------ All Students ------");
    console.log(students);
}

// 2
function getStudentByName(name) {
    console.log("\n------ Search Student ------");
    const student = students.find(s => s.name === name);

    if (student) {
        console.log("Found:", student);
    } else {
        console.log("Student not found");
    }
}

// 3
function getAverageMarks() {
    let total = 0;

    students.forEach(s => total += s.marks);

    let avg = total / students.length;

    console.log("\n------ Average Marks ------");
    console.log(avg);
}


// ---------- Call Functions ----------
getAllStudents();
getStudentByName("Rahul");
getAverageMarks();


// ---------- Task 4: Object → JSON ----------
const newStudent = {
    name: "Amit",
    age: 22,
    course: "BCom",
    marks: 80
};

const jsonData = JSON.stringify(newStudent, null, 2);

console.log("\n------ Object to JSON ------");
console.log(jsonData);


// ---------- Task 5: Write JSON File ----------
const newStudents = [
    { name: "Riya", age: 20, course: "BA", marks: 70 },
    { name: "Karan", age: 23, course: "MBA", marks: 88 }
];

fs.writeFileSync('newStudents.json', JSON.stringify(newStudents, null, 2));

console.log("\n✅ newStudents.json file created successfully!");


// ---------- Bonus Task ----------
fs.readFile('students.json', 'utf8', (err, data) => {
    console.log("\n------ Async Read JSON ------");

    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const parsedData = JSON.parse(data);

    console.log("Total Students:", parsedData.length);
});