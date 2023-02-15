var score = 0; 
var question = "What's up, Doc?"

const startingMinutes = 2; 
let time = startingMinutes * 60; 

const btnStart = document.getElementById('start-button');
const countdownEl = document.getElementById('countdown');


btnStart.addEventListener('click', () => {
    setInterval(updateCountdown, 1000);
    btnStart.style.display = 'none'; 
})

function updateCountdown() {
    const minutes = Math.floor(time / 60); 
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; 

    time = time < 1 ? 1: time

    countdownEl.innerHTML = "Timer:" + ` ${minutes}:${seconds}`; 
    time--;
}

function toggleText() {
    var text = document.getElementById("main-text");
    if (text.style.display === "block") {
        text.innerHTML = question;
    } else {
        text.style.display = "block";
    }
    }








