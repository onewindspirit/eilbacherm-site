window.onload = selectRandomImg;

//List images here
let imgArray = [
  "../images/HL4.gif",
  "../images/hl2.gif",
 "../images/FBKOStill.png",
 "../images/gifTEST.gif",
 "../images/Sef1.jpg"
];

function selectRandomImg() {
     var randomNum = Math.floor(Math.random() * imgArray.length);
     document.getElementById("home-img").src = imgArray[randomNum];
}