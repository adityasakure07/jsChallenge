// const { concatSeries } = require("async");

console.log("Ajax");

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("btn clicked");
  //initiate XHR objec (XMLHttpRequest)
  const xhr = new XMLHttpRequest();
  //Open the Objec
  xhr.open("GET", "ajax_data2.txt", true);

  //what to do when fetchin is on progress
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
    else{
        console.error("Some Error Ocured", this.status)
    }
  };

  xhr.send();
}
