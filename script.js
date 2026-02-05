let heading = document.querySelector("h1");
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let img = document.querySelector("img");

yesBtn.addEventListener("click", function() {
    heading.textContent = "I love you too!";
    heading.style.color = "green";
    img.src = "love.gif"; // Change to a loving image
});
let counter = 0;

noBtn.addEventListener("click", function () {
    counter++;

    if (counter === 1) {
        heading.textContent = "Are mana bhi jaona?";
        heading.style.color = "black";
        img.src = "jashan-cutie-bum-se-kichu.gif";
    } 
    else if (counter === 2) {
        heading.textContent = "Nahi to fir main ro dung!";
        heading.style.color = "blue";
        img.src = "milk-me-sad.gif";
    } 
    else {
        heading.textContent = "Last bar bol raha hu, mana jao!";
        heading.style.color = "purple";
        img.src = "laugh-emoji.gif";
        moveBtn(); // 👈 correct function call
    }
});

function moveBtn() {
    let randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
