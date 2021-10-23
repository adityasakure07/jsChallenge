function display_name(FirstName, LastName){
    let fullName = `${FirstName} ${LastName} `;
    console.log(fullName);
}

display_name("aditya", "sakure")


let greet = function(name) {
    console.log(`Hello ${name}`);
}

greet("Adaitya");

let ne_greet = (name)=>{
    console.log(`Wtih Fat arrow Hello ${name}`);
}

ne_greet("Adi")