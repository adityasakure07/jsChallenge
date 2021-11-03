function resolveAfter2Sec(x) {
    console.log("inside resolve with ", x);
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("calling resolve for ", x);
        resolve(x);

    }, 2000);
  });
}

async function add1(x){
    const a = await resolveAfter2Sec(20);
    const b = await resolveAfter2Sec(30);
    return x + a + b;
}


// add1(10).then(v => {
//     console.log(v);
// })


async function add2(x){
    const p_a = resolveAfter2Sec(20);
    const p_b = resolveAfter2Sec(30);

    return x +  await p_a +  await p_b;
 }


//  add2(10).then(x => console.log("second",x));


function hello(){
    
    return "Hello";

}

console.log(hello());


async function hello2(){
    return "hello2"

}

hello2().then((x)=>{
  console.log(x);  
});

function writeAfter2Sec(x){
    console.log("inside Write")

    //promise constructor takes callback
    return Promise = new Promise(function(resolve,reject)
    {
        let error = false;
        setTimeout(()=>{
            if(error){
            
                resolve("Promise Resolved");

            }
            else{
                reject("Error Occred");
            }
        },4000)
       

    }

    );
}

// writeAfter2Sec(10).then((x)=>{
//     console.log(x);
// }).catch((e)=>{
//     console.log(e)
// });

//other way of handling reject state per each then
writeAfter2Sec(10).then((x)=>{
    console.log(x);
},(e)=>{
    console.log(e);
});