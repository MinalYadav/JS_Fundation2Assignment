/*
    3. Imagine you are given a list of student objects, each containing the student's name and their marks.
    Your task is to create a function that checks results by filtering out students 
    whose score is more than 90 and prints a message saying, "Congratulations [Student Name]! You have cleared the exam.
*/

const students = [
    {
        name : "Mithun",
        marks : 95,
    },

    {
        name : "Prabir",
        marks : 72,
    },

    {
        name : "Alka",
        marks : 92,
    },

    {
        name : "Shivam",
        marks : 70,
    },

    {
        name : "Farman",
        marks : 99,
    },
];//Array of object


let passStudent = students.filter((val)=>{
    return val.marks > 90
});

for (const iterator of passStudent) {
    
    console.log(`Congratulations ${iterator.name}! You have cleared the exam`);
}//work with array of object


//filter return a new array
// console.log(passStudent);

// for (const i in passStudent) {

//     console.log(`Congratulations ${i}! You have cleared the exam`);

// } // work with normal objects
