var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var newDiceImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", newDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", newDiceImage2);

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var newDiceImage1 = "./images/dice" + randomNumber1 + ".png";
// document.getElementsByClassName("img1").setAttribute("src", newDiceImage1);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var newDiceImage2 = "./images/dice" + randomNumber2 + ".png";
// document.getElementsByClassName("img1").setAttribute("src", newDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Lose";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML ="Win";
} else {
    document.querySelector("h1").innerHTML = "Draw";
};

// Use the random number you created in the 
// last step to pick out a random dice image between 
// dice1.png to dice 6.png then place this image 
// inside the left <img> element.

// Hint: You will need to use what you
// 've learnt about the DOM and the
//  method setAttribute() to achieve this