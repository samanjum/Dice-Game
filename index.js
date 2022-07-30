var randomNumber1=Math.floor(Math.random()*6)+1;


var randomimagesource =  "dice"+ randomNumber1 + ".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimagesources="dice"+ randomNumber2 + ".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src",randomimagesources);



if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩player 1 wins"
}

else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="player 2 wins🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
