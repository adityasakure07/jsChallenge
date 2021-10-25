// const { compose } = require("async");

console.log("async")
console.log("start",performance.now())

setTimeout(()=>{
    console.log("In setTimeout",performance.now())
    for(let i=0;i<5000;i++){
        console.log("this is ", i);
    }
    console.log("EMDST",performance.now())
},100
)

console.log("Last",performance.now())
console.log("after loop");