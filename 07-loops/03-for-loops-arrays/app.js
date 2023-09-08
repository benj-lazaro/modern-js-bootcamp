// For Loops Arrays Demo

// Iterate through an array of numbers
console.log("Iterating through an array of numbers");

const examScores = [98, 77, 94, 91, 57, 66];

// Use template literal to access each array element
for (let index = 0; index < examScores.length; index++) {
    console.log(`Exam Score ${index}: ${examScores[index]}`);
}


// Iterate through an array of objects
console.log("Iterating through an array of objects");

const myStudents = [
    {
        firstName: "Zeus",
        grade: 86
    },
    {
        firstName: "Artemis",
        grade: 97
    },
    {
        firstName: "Hera",
        grade: 92
    },
    {
        firstName: "Apollo",
        grade: 90
    }
]

let totalGrade = 0;

for (let index = 0; index < myStudents.length; index++) {
    console.log(`${myStudents[index].firstName} scored ${myStudents[index].grade}.`);
    totalGrade += myStudents[index].grade;
}

// Calculate & print the average grade of students
averageGrade = totalGrade / myStudents.length;
console.log(`Students Average Grade: ${averageGrade}`);


// Iterate through a string backwards
const word = "stressed";
let reversedWord = ""

console.log(`Iterating through a string "${word}" backwards`);

for (let index = word.length - 1; index >= 0; index--) {
    console.log(`letter index [${index}] ${word[index]}`);
    reversedWord += word[index];
}

console.log(`"${word}" backwards is "${reversedWord}"`);
