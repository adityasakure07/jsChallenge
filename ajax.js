// const { concatSeries } = require("async");

// const { parallelLimit } = require("async");

console.log("Ajax");

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("btn clicked");
  //initiate XHR objec (XMLHttpRequest)
  const xhr = new XMLHttpRequest();
  //Open the Objec
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   xhr.open()

  //what to do when fetchin is on progress
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  //OnreadyStateChange is also function, it gives status at each step
  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
    else{
        console.error("Some Error Ocured", this.status)
    }
  };

  //sending request
  xhr.send();
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', function(){
    console.log("Add Btn Clicked");
    //create Object
    const xhr_post = new XMLHttpRequest();
    //open
    xhr_post.open('POST',"http://dummy.restapiexample.com/api/v1/create",true);

    // xhr_post.onprogress = function () {
    //     console.log("On Progress");
    //   };

    xhr_post.getResponseHeader('Content-type','application/json');
    
    let param  = `{"name":"test","salary":"123","age":"23"}`
    xhr_post.send(param)

    xhr_post.onload = function () {
        if (this.status === 200) {
          console.log(this.responseText);
        }
        else{
            console.error("Some Error Ocured", this.status)
        }
      };
})


let getData = document.getElementById('getData');

getData.addEventListener('click',()=>{
    console.log("getData clicked");
    //initiate XHR objec (XMLHttpRequest)
    const xhr = new XMLHttpRequest();
    //Open the Objec
    xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
  //   xhr.open()
  
    //what to do when fetchin is on progress
    xhr.onprogress = function () {
      console.log("On Progress");
    };
  
    //OnreadyStateChange is also function, it gives status at each step
    // what to do when response is ready
    xhr.onload = function () {
      if (this.status === 200) {
       // console.log(JSON.parse(this.responseText));
       let obj = JSON.parse(this.responseText);
        console.log(typeof(obj))
       console.log(obj.data);
        let list = document.getElementById('list');
        let data =obj.data;
        console.log(typeof(data));
        str="";
        // for(key in data){
        //     str += `<li>${data}</li>`; 
        // }
        // list.innerHTML = str;

     

        Array.from(data).forEach(element => {
            console.log(element);
            str += `<li>${element.employee_name}</li>`; 
        });
        list.innerHTML = str;

      }
      else{
          console.error("Some Error Ocured", this.status)
      }
    };
  
    //sending request
    xhr.send();

}
)
//http://dummy.restapiexample.com/api/v1/create


