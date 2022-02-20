const body = document.querySelector("body");
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImg = images[Math.floor(Math.random()*images.length)];


document.body.style.backgroundImage = "url(img/"+chosenImg+")";
document.body.style.backgroundSize = "cover";
