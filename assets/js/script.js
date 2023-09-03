const questions = [
  {
    question: "The Grateful Dead formed where?:",
    choices: ["Los Angeles", "Santa Cruz", "Palo Alto", "Sacramento"],
    correctAnswer: "Palo Alto",
  },
  {
    question:
      "Jerry Garcia's actual first name is what?",
    choices: ["Jerome", "Jerald", "Jeremiah", "Jeron"],
    correctAnswer: "Jerome",
  },
  {
    question: "How did Jerry lose the top two joints of his middle finger on his right hand?",
    choices: [
      "It happened in a caravan fire.",
      "It happened from a slammed door.",
      `It happened while his brother "Tiff" was chopping wood in the Redwoods.`,
      "It happened from a table saw accident.",
    ],
    correctAnswer: `It happened while his brother "Tiff" was chopping wood in the Redwoods.`,
  },
  {
    question:
      "When did Bob Weir meet Jerry Garcia?",
    choices: ["December 31st, 1963", "January 1st, 1964", "October 31st, 1962", "July 4th, 1961"],
    correctAnswer: "December 31st, 1963",
  },
  {
    question:
      "What was the previous name for The Grateful Dead?",
    choices: ["The Sparrows", "Mother Goose's Downtown Jug Band", "Kingfish", "The Warlocks"],
    correctAnswer: "The Warlocks",
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
const refresh = document.getElementById("refresh");

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
  myInterval = setInterval(updateCountdown, 1000);
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
    goToScore();
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
  const scoresHTML = `<section><h1 id="final-score">Final Score: ${score}/${questions.length} </h1>
<h1 id="init" class="scorepage">Add your initials to submit your score.</h1>
<input class="scorepage" id="initials"/>
<button id="submit" class="scorepage" onclick="onSubmitScore()";>Submit Score</button>
<div class="scorepage" id="high-scores"></div>
<button class="scorepage" id="hide">Hide Scores</button>
<button id="return" class="scorepage" onclick="restartQuiz()">Return to Coding Quiz</button>
<h2 id="refresh">Refresh to go back to Main Page.</h2></section>`;
  var optionsEl = document.getElementById("options");
  optionsEl.innerHTML = scoresHTML;
  text.style.display = "none";
  stats.style.display = "none";
  title.style.display = "none";
  clearInterval(myInterval);
  const initialsInput = document.getElementById("initials");
  const hideBtn = document.getElementById("hide");
  const submitBtn = document.getElementById("submit");
  const highScore = document.getElementById("high-scores");
  submitBtn.addEventListener("click", () => {
    submitBtn.style.display = "none";
    initialsInput.style.display = "none";
  });
  hideBtn.addEventListener("click", () => {
    highScore.innerHTML = "";
    hideBtn.style.display = "none";
  });
}

// submits user initials obtained from input and respective score onto score page.
function onSubmitScore() {
  var initialsInput = document.getElementById("initials");
  var initials = initialsInput.value;
  if (initials === "") {
    window.alert("You shall remain anonymous!");
    initials = "ANON";
  }
  const newScore = { initials: initials, value: score };
  const highScore = document.getElementById("high-scores");
  submittedScores.push(newScore);
  var submittedScoresHTML = submittedScores.map(function (score) {
    return `<div>${score.initials}:</div><div>${score.value} out of 5</div>`;
  });
  highScore.innerHTML = submittedScoresHTML;
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
  gameOver.textContent = "";
  myInterval = setInterval(updateCountdown, 1000);
  quesh();
}
