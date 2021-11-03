//when you add async it will return promise

async function getString(){
    console.log("inside");
    const response = await fetch("https://api.github.com/users");
    console.log("Before Response");

    //response.json() also returns promise
    const users = await response.json();
    
    console.log("users resolved");
    return users;
    // return "Great"
}

console.log("Before")
let a = getString();
console.log(a);
a.then(data => console.log(data));



// console.log("After Caling")

// console.log("Last line of this File");