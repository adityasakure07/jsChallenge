//Challenge 1


function ageInDays() {
    var birthyear = prompt("What year you were born?")

    var ageInDays = (2021 - birthyear) * 365;
    var ageText = document.createTextNode("Your age in days " + ageInDays);

    var h1 = document.createElement('h1');
    h1.setAttribute('id','ageinDays');
  
    h1.appendChild(ageText);
    document.getElementById('flex-box-result').appendChild(h1);

    console.log(ageText)
;
}

function reset(){
    document.getElementById('ageinDays').remove();
}

function generateImage(){
    var img = document.createElement('img');
    // img.setAttribute("src","./static/image/pexels-photo.jpg")
    img.src= "./static/image/pexels-photo.jpg"
    document.getElementById('imgcontainer').appendChild(img);
}
