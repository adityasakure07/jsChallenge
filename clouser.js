console.log("Clouser Test");


function testFuction(){
    
    for (var i=1;i<=5;i++){
        function callcounter(i){
            setTimeout(()=>{
                console.log(i);
            },i* 1000)
        }

        callcounter(i);
    }
    

}

function testFunction2(){

    for (var i =0 ; i<=5;i++)
    setTimeout(()=>{
        console.log(i);
    },i*1000)

}

testFunction2();