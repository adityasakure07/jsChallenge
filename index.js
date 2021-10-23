console.log("Hello This is Aditya");


let student ={
    name: "Aditya",
    age:"25",
    dept:"Actimize PS"

}

let n = student.name;
console.log(student)

console.log(student.name)

let nameString= `My Name is ${n} and age is ${student.age}`;
console.log(nameString)


// console.log(student["n"]);

student.city = "Dhmn";

console.log(student)

let studentarr = [

    {
        name: "Aditya",
        age:"25",
        dept:"Actimize PS"
    
    },
    {
        name: "Aditya",
        age:"25",
        dept:"Actimize PS"
    
    },
    {
        name: "Aditya",
        age:"25",
        dept:"Actimize PS"
    
    }

]
console.log(studentarr)

let Student_new = {
    name: "kunal",
        age:"25",
        dept:"Actimize PS"
}

studentarr[studentarr.length] = Student_new;


studentarr.push({
    name: "bittu",
    age:"25",
    dept:"Actimize PS"

})
console.log(studentarr)
