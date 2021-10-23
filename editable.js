console.log("Editable");


let divClick = document.getElementById('btn');

divClick.addEventListener('click',()=>{
    let content = document.getElementById('cnt');
    content.contentEditable=true;

    content.addEventListener('focusout',()=>{
        content.contentEditable=false;
    })
})

