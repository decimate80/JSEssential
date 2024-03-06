const students = [
    {
        name: "John Doe",
        age: 20,
        gender: "male"
    },
    {
        name: "Jane Doe",
        age: 21,
        gender: "female"
    },
    {
        name: "John Doe",
        age: 22,
        gender: "male"
    }
];

students.push({ name: "David", age: 23, gender: "male" });

console.log(students);


// students.forEach(student => {
//     console.log(student.name);
// });



// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].age);
// }