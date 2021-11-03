console.log("Fetch JS");

let getDataBtn = document.getElementById('getData');

//fecth has syntax that needs to be followed
function getData(){
    console.log("Inside Getadata");
    url = 'ajax_data.txt'
    fetch(url).then((response)=>{
        // console.log("first Then");
        return response.text();
    }).then((data)=>{
        // console.log("Second Then");
        console.log(data);
    }).catch((e)=>{
       
        console.log("Error ")
    });
}

// console.log("Before Get Data");
// getDataBtn.addEventListener('click',getData)
// getData();
// console.log("After Get Data");

https://api.github.com/users

function getDataUser(){
    console.log("Inside Getadata");
    url = 'https://api.github.com/users'
    fetch(url).then((response)=>{
        // console.log("first Then");
        return response.json();
    }).then((data)=>{
        // console.log("Second Then");
        console.log(data);
    }).catch((e)=>{
       
        console.log("Error ")
    });
}


// getDataUser();

function postUser(){
  
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: data
    }
    fetch(url,params).then((response)=>{
        // console.log("first Then");
        return response.json();
    }).then((data)=>{
        // console.log("Second Then");
        console.log(data);
        if(data.status === 'success'){
            console.log("Time For PArty");
        }
    }).catch((e)=>{
       
        console.log("Error ", e)
    });
}
// postUser();