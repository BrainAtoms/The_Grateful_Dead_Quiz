const questions = [
  {
    question: "Commonly used data types do NOT include?",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed with __________",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store __________",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "termina/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

const submittedScores = [];
console.log(submittedScores);

var score = 0;
var currentIndex = 0;
// const buttons = document.getElementsByClassName("button");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const gameOver = document.getElementById("game-over");
const stats = document.getElementById("stats");

var title = document.getElementById("title");
var text = document.getElementById("main-text");
var choices = document.getElementById("choices");

const startingMinutes = 2;
let time = startingMinutes * 60;

const btnStart = document.getElementById("start-button");
const countdownEl = document.getElementById("countdown");

btnStart.addEventListener("click", () => {
  setInterval(updateCountdown, 1000);
  btnStart.style.display = "none";
});
// buttonA = dcoument.getElementById('A')

function goToScore() {
  const scoresHTML = `<section><h1>Final Score: ${score}/${questions.length} </h1>
<h1 class="scorepage">Add your initials to submit your score.</h1>
<input class="scorepage" id="initials"/>
<button class="scorepage" id="submit" onclick="onSubmitScore()";>Submit Score</button>
<h2 class="scorepage" class="submitted">Submitted Scores:</h2>
<div class="scorepage" id="high-scores"></div>
<button class="scorepage" id="clear">Clear Scores</button>
<button class="scorepage" onclick="restartQuiz()">Return to Coding Quiz</button></section>`;
  var optionsEl = document.getElementById("options");
  optionsEl.innerHTML = scoresHTML;
  text.style.display = "none";
  stats.style.display = "none";
  title.style.display = "none";
  time = 0;
  const clearBtn = document.getElementById("clear");
  const highScore = document.getElementById("high-scores")
  clearBtn.addEventListener('click', () => {
  highScore.innerHTML = ""; 
  })
}
function restartQuiz() {
  currentIndex = 0;
  score = 0;
  scoreEl.innerHTML = "Score: " + score;
  time = startingMinutes * 60;
  text.style.display = "block";
  stats.style.display = "block";
  result.innerHTML = "You got this!";
  gameOver.textContent = '';
  quesh();
}

const onAnswerClick = (event) => {
  const clickedAnswer = event.target.innerHTML;
  // console.log(clickedAnswer);
  if (clickedAnswer === questions[currentIndex].correctAnswer) {
    result.innerHTML = "Correct!";
    score++;
    scoreEl.innerHTML = "Score: " + score;
  } else {
    result.innerHTML = "Incorrect!";
    score.innerHTML = "Score: " + score;
    if (time >= 10) {
      time = time - 10;
    } else {
      time = 0;
    }
  }
  currentIndex++;
  if (!questions[currentIndex]) {
    goToScore();
  } else {
    quesh();
  }
};

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = "Timer:" + ` ${minutes}:${seconds}`;

  if (time === 0) {
    gameOver.textContent = "GAME OVER! Refresh to start over.";
    buttonA.disabled = true;
    buttonB.disabled = true;
    buttonC.disabled = true;
    buttonD.disabled = true;
  } else {
    time--;
  }
}

function onSubmitScore() {
  const initialsInput = document.getElementById("initials");
  const initials = initialsInput.value;
  console.log(initials);
  const newScore = { initials: initials, value: score };
  const highScore = document.getElementById("high-scores");
  submittedScores.push(newScore);
  var submittedScoresHTML = submittedScores.map(function (score) {
    return `<div>${score.initials}:</div><div>${score.value}</div>`;
  });
  highScore.innerHTML = submittedScoresHTML;
}

var buttonA = document.createElement("button");
buttonA.setAttribute("id", "A");
var buttonB = document.createElement("button");
buttonB.setAttribute("id", "B");
var buttonC = document.createElement("button");
buttonC.setAttribute("id", "C");
var buttonD = document.createElement("button");
buttonD.setAttribute("id", "D");

function quesh() {
  if (text.style.display === "block") {
    text.innerHTML = questions[currentIndex].question + " ";
  }
  if (choices.style.display === "none") {
    choices.style.display = "block";
  }
  if (choices.style.display === "block") {
    if (currentIndex === 0) {
      const optionsEl = document.getElementById("options");
      optionsEl.replaceChildren(buttonA, buttonB, buttonC, buttonD);
    }
    buttonA.innerHTML = questions[currentIndex].choices[0];
    buttonA.addEventListener("click", onAnswerClick);
    buttonB.innerHTML = questions[currentIndex].choices[1];
    buttonB.addEventListener("click", onAnswerClick);
    buttonC.innerHTML = questions[currentIndex].choices[2];
    buttonC.addEventListener("click", onAnswerClick);
    buttonD.innerHTML = questions[currentIndex].choices[3];
    buttonD.addEventListener("click", onAnswerClick);
  } else {
    question.style.display = "none";
  }
  buttonA.disabled = false;
  buttonB.disabled = false;
  buttonC.disabled = false;
  buttonD.disabled = false;
 
}
