// Inside index.js, create a new variable called randomNumber1 then set the value of this 
// variable to a random number 
// between 1 and 6. Test it out in the console to make sure it works as expected. 
randomNumber1=Math.floor(Math.random()*6)+1;
var diceImage1="images/dice".concat(randomNumber1).concat(".png");
image1 = document.querySelector('img').src=diceImage1;
randomNumber2=Math.floor(Math.random()*6)+1;
var diceImage2="images/dice".concat(randomNumber2).concat(".png");
image1 = document.querySelectorAll('img')[1].src=diceImage2;

if (randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player 1 Wins!!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML="Player 2 Wins!!";
}
else{
    document.querySelector('h1').innerHTML="DRAW!!";
}


