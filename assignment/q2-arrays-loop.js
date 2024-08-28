/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = [
  "Johnson",
  "Christina",
  "Michael",
  "Lina",
  "Larry",
  "Michelle",
  "Bob",
  "Wilson",
];

function printStudentNames() {
  // Add code here
  for (name of studentList) {
    console.log(name);
  }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
  studentList,
  printStudentNames,
};
