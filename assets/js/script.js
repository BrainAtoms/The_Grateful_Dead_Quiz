const questions = [
  {
    question: "Commonly used data types do NOT include?",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with __________",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store __________",
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 'all of the above'
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    correctAnswer: 'quotes'
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ['Javascript', 'termina/bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log'
  },
];

var score = 0;
var currentQuestion = 0;
const buttons = document.getElementsByClassName("button");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");


var text = document.getElementById("main-text");
var choices = document.getElementById("choices");
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");

var incorrectAnswers1 = [buttonA, buttonB, buttonD];

const startingMinutes = 2;
let time = startingMinutes * 60;

const btnStart = document.getElementById("start-button");
const countdownEl = document.getElementById("countdown");

btnStart.addEventListener("click", () => {
  setInterval(updateCountdown, 1000);
  btnStart.style.display = "none";
});

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  time = time < 1 ? 1 : time;

  countdownEl.innerHTML = "Timer:" + ` ${minutes}:${seconds}`;
  time--;
}

const onBtnClick = (event) => {
  const clickedAnswer = event.target.innerHTML;
  console.log(clickedAnswer);
  if (clickedAnswer === questions[currentQuestion].correctAnswer) {
    result.innerHTML = "Correct!";
    score++;
    scoreEl.innerHTML = "Score: " + score;
  } else {
    result.innerHTML = "Incorrect!";
    score.innerHTML = "Score: " + score;
    time = time - 10; 
  }
  currentQuestion++
  quesh()
};

function quesh() { 
  if (text.style.display === "block") {
    text.innerHTML = questions[currentQuestion].question + " ";
  }
  if (choices.style.display === "none") {
    choices.style.display = "block";
  }
  if (choices.style.display === "block") {
    buttonA.innerHTML = questions[currentQuestion].choices[0];
    buttonA.addEventListener("click", onBtnClick);
    buttonB.innerHTML = questions[currentQuestion].choices[1];
    buttonB.addEventListener("click", onBtnClick);
    buttonC.innerHTML = questions[currentQuestion].choices[2];
    buttonC.addEventListener("click", onBtnClick);
    buttonD.innerHTML = questions[currentQuestion].choices[3];
    buttonD.addEventListener("click", onBtnClick);
  } else {
    text.style.display = "block";
  }
}








