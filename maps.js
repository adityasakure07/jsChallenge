console.log('maps');

//key value 

const myMap = new Map();
console.log(myMap);

const key1 = 'myStr', key2={}, key3=function(){};

//set map values

myMap.set(key1,"this is string");
myMap.set(key2,"blank obj");
myMap.set(key3,"functiom");

console.log(myMap);

//getting value


let val  = myMap.get(key1);
console.log(val)


//using for of value to get values

for(let [key,value] of myMap){
        console.log(key,value)
}


console.log("*****")
for(let value of myMap.values()){
    console.log(value);
}

console.log("*****")
for(let key of myMap.keys()){
    console.log(key);
}

//for Each
console.log('ForEach')
myMap.forEach((value,key)=>{
    console.log(value,key)
})

//converting map to array

let myArray = Array.from(myMap);

console.log(myArray);

let myArrayVal = Array.from(myMap.values());

console.log(myArrayVal);

let myArrayKey = Array.from(myMap.keys());

console.log(myArrayKey);