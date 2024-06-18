var randomNumber1= Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1; //1-6


var randomImage1="./images/dice" + randomNumber1 + ".png";  // ./images/dice1.png - ./images/dice6.png

var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImage1);


// same for dice 2
var randomNumber2= Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1; //1-6


var randomImage2="./images/dice" + randomNumber2 + ".png";  // ./images/dice1.png - ./images/dice6.png

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


// if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";

}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}