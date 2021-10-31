console.log("Generator");

//on the fly value generator 
//syntax

function* numGen(){
    let i=0;

    // yield 1;
    // yield 2;

    while(i<10){
        yield i++;
    }
}

const gen = numGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

