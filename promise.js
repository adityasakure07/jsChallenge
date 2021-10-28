console.log("this is promise");

function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (!error) {
        console.log("We are good");
        resolve();
      } else {
        console.log("Somthing went wrong");
        reject("Issue Occured");
      }
    }, 2000);
  });
}

doSomething()
  .then(() => {
    console.log("All went Well");
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
