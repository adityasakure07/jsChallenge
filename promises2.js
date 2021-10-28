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

function addStudent(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students.push(student);
      console.log("student Added");
      let error = false;
      if(!error){
        resolve();
      }else{
        reject('Error!');
      }

    }, 5000);
  });
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (ele) {
      str += `<li> ${ele.name}</li>`;
    });

    document.getElementById("web_body").innerHTML = str;
  }, 2000);
}
//this is good Example of Async -> total time is (b and a goes async)
getStudents();

addStudent({ name: "kunal", subject: "lol" }).then(()=>{
    getStudents();
}).catch((e)=>{
    console.log(e);
})
// getStudents();
