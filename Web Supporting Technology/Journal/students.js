let students = require('./students.json');

function getAllStudents(){
  console.log(students);
}

function getStudentByName(name){
  let s = students.find(x=>x.name===name);
  console.log(s);
}

function getAverageMarks(){
  let total=0;
  students.forEach(s=>total+=s.marks);
  console.log(total/students.length);
}

getAllStudents();
getStudentByName("A");
getAverageMarks();