console.log("Events")

document.getElementById('btn').addEventListener('click',(e)=>{
    console.log('Code with Adi');
    console.log(e.target.id)
})



document.getElementById('btm').addEventListener('mouseover',()=>{
    console.log("mouse agaya");

    let foor = document.getElementById('btm');
    foor.style.backgroundColor = 'red'

})

let button  = document.getElementById('btn1');

button.addEventListener('click',btnEvent);

// function btnClick(e){
//     console.log("clicked")
// }

function btnEvent(e) {
    console.log("Clickeds")
}

let submitButtonn  = document.getElementById('frmsb');
submitButtonn.addEventListener('click',(e)=>{
    console.log('submitcliek');
    e.preventDefault();
})