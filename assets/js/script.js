var score = 0; 
var question = `What's up, Doc?`
var answer = 'Nothing much.'
// const question = document.getElementById("question");
// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// const choiceD = document.getElementById("D");

// let questions = [
//     {
//         question: "What does Html stand for?",

//     }
// ]

// const lastQuestion = questions.length - 1;

// let runningQuestion = 0; 

// function renderQuestion() {
//     let q = questions[runningQuestion];

//     question.innerHTML = "<p>"+ q.question +"</p>";

//     choiceA.innerHTML = q.choiceA;

//     choiceB.innerHTML = q.choiceB;

//     choiceC.innerHTML= q.choiceC;
// }

// function renderProgress() {
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
//         progress.innerHTML += "<p class='prog' id="+ qIndex +"></p>";
//     }
// }

// start.addEventListener("click", startQuiz); 

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
        text.innerHTML = question + ' ' 
        + "<button class= 'choice'>Nothing much.</button>" 
        + "<button class= 'choice'>The Sky.</button>"
        + "<button class= 'choice'>Nunya.</button>"
    } else {
        text.style.display = "block";
    }
    }









