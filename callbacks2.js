console.log("This is callback2");

const students = [
  {
    name: "Aditya",
    subject: "JS",
  },
  {
    name: "karan",
    subject: "Java",
  },
];

function addStudent(student){
    setTimeout(
        ()=>{
            students.push(student);
    console.log('student Added');
            getStudents();
},5000

    )
    
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (ele) {
      str += `<li> ${ele.name}</li>`;
    });

    document.getElementById("web_body").innerHTML = str;
  },2000);
}

addStudent({name:'kunal',subject:'lol'});
getStudents();
