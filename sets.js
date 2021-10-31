console.log("Sets")

//Set stores unique values
//init empty Set
const set = new Set();

console.log(set);
set.add(1);
set.add("this");

//does not allow you to repeat value
// set.add("this");


console.log(set);


let mySet = new Set(["a","b",1,3,{a:"abc",b:"dj",c:function(){}}]);

console.log(mySet);

console.log(mySet.has(1)); //true
console.log(mySet.has(2)); //false

console.log(mySet.size)
//iterating set

for (let item of mySet){
    console.log(item);   
}

console.log("for each");
mySet.forEach(element => {
    console.log(element)
});


console.log(Array.from(mySet));