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

var buttonA = document.createElement("button");
buttonA.setAttribute("id", "A");
var buttonB = document.createElement("button");
buttonB.setAttribute("id", "B");
var buttonC = document.createElement("button");
buttonC.setAttribute("id", "C");
var buttonD = document.createElement("button");
buttonD.setAttribute("id", "D");

const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const gameOver = document.getElementById("game-over");
const submittedScores = [];
const stats = document.getElementById("stats");
const refresh = document.getElementById("refresh")

var title = document.getElementById("title");
var text = document.getElementById("main-text");
var choices = document.getElementById("choices");
var score = 0;
var currentIndex = 0;

const startingMinutes = 2;
let time = startingMinutes * 60;
const btnStart = document.getElementById("start-button");
const countdownEl = document.getElementById("countdown");

// begins timer when start button is pressed
btnStart.addEventListener("click", () => {
  myInterval = setInterval(updateCountdown, 1000)
  btnStart.style.display = "none";
});

// updates timer every interval and disables buttons when time = 0
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

// sorts through each question and answer options each time button is clicked
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

// displays message and score whenever answer button is clicked and brings user to score page when last answer is clicked
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

// creates score page so that scores don't get lost when quiz is taken multiple times. Also stops timer when quiz ends and creates hide score button to hide scores.
function goToScore() {
  const scoresHTML = `<section><h1>Final Score: ${score}/${questions.length} </h1>
<h1 class="scorepage">Add your initials to submit your score.</h1>
<input class="scorepage" id="initials"/>
<button id="submit" class="scorepage" onclick="onSubmitScore()";>Submit Score</button>
<div class="scorepage" id="high-scores"></div>
<button class="scorepage" id="hide">Hide Scores</button>
<button class="scorepage" onclick="restartQuiz()">Return to Coding Quiz</button>
<h2 id="refresh">Refresh to go back to inital page.</h2></section>`;
  var optionsEl = document.getElementById("options");
  optionsEl.innerHTML = scoresHTML;
  text.style.display = "none";
  stats.style.display = "none";
  title.style.display = "none";
  clearInterval(myInterval);
  const hideBtn = document.getElementById("hide");
  const highScore = document.getElementById("high-scores")
  hideBtn.addEventListener('click', () => {
  highScore.innerHTML = "";
  })
}

// submits user initials obtained from input and respective score onto score page
function onSubmitScore() {
  const initialsInput = document.getElementById("initials");
  const initials = initialsInput.value;
  console.log(initials);
  const newScore = { initials: initials, value: score };
  const highScore = document.getElementById("high-scores");
  submittedScores.push(newScore);
  var submittedScoresHTML = submittedScores.map(function (score) {
    return `<div>${score.initials}:</div><div>${score.value} out of 5</div>`;
  });
  highScore.innerHTML = submittedScoresHTML;
  const submitBtn = document.getElementById("submit")
  submitBtn.disabled = true; 
}

// brings back initials quiz settings when quiz is retaken 
function restartQuiz() {
  currentIndex = 0;
  score = 0;
  scoreEl.innerHTML = "Score: " + score;
  time = startingMinutes * 60;
  text.style.display = "block";
  stats.style.display = "block";
  result.innerHTML = "You got this!";
  gameOver.textContent = '';
  myInterval = setInterval(updateCountdown, 1000)
  quesh();
}
