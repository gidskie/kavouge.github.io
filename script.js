const images = [
    "Images/bg1.jpg",
    "Images/bg2.jpg",
    "Images/bg3.jpg"
];

const container = document.getElementById("background-container");
let currentIndex = 0;

function changeBackground() {
    container.style.backgroundImage = 'url($images[currentIndex]})';
currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
