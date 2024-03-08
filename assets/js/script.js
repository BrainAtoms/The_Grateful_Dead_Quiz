const questions = [
  {
    question: "The Grateful Dead formed where?",
    choices: ["Los Angeles", "Santa Cruz", "Palo Alto", "Sacramento"],
    userAnswer: "",
    correctAnswer: "Palo Alto",
  },
  {
    question: "Jerry Garcia's actual first name is what?",
    choices: ["Jerome", "Jerald", "Jeremiah", "Jeron"],
    userAnswer: "",
    correctAnswer: "Jerome",
  },
]
//   {
//     question:
//       "How did Jerry lose the top two joints of his middle finger on his right hand?",
//     choices: [
//       "It happened in a caravan fire.",
//       "It happened from a slammed door.",
//       "It happened while his brother was chopping wood.",
//       "It happened from a table saw accident.",
//     ],
//     userAnser: "",
//     correctAnswer: "It happened while his brother was chopping wood.",
//   },
//   {
//     question: "When did Bob Weir meet Jerry Garcia?",
//     choices: [
//       "December 31st, 1963",
//       "January 1st, 1964",
//       "October 31st, 1962",
//       "July 4th, 1961",
//     ],
//     userAnser: "",
//     correctAnswer: "December 31st, 1963",
//   },
//   {
//     question: "What was the previous name for The Grateful Dead?",
//     choices: [
//       "The Sparrows",
//       "Mother Goose's Downtown Jug Band",
//       "Kingfish",
//       "The Warlocks",
//     ],
//     userAnser: "",
//     correctAnswer: "The Warlocks",
//   },
//   {
//     question:
//       "Who was Bob Weir's primary songwriting partner for The Grateful Dead?",
//     choices: [
//       "Robert Hunter",
//       "Jerry Garcia",
//       "John Perry Barlow",
//       "Jack Straw",
//     ],
//     userAnser: "",
//     correctAnswer: "John Perry Barlow",
//   },
//   {
//     question: "What year did Keith and Donna Godchaux join The Grateful Dead?",
//     choices: ["1971", "1972", "1970", "1973"],
//     userAnser: "",
//     correctAnswer: "1971",
//   },
//   {
//     question: "Who was The Grateful Dead's original frontman?",
//     choices: [
//       "Robert Hunter",
//       "Bob Weir",
//       "Jerry Garcia",
//       "Ron 'Pigpen' McKernan",
//     ],
//     userAnser: "",
//     correctAnswer: "Ron 'Pigpen' McKernan",
//   },
//   {
//     question:
//       "Who hosted The Acid Tests where The Grateful Dead would frequently perform during the 60's?",
//     choices: ["Neal Cassady", "Ken Kesey", "Tom Wolfe", "Timothy Leary"],
//     userAnser: "",
//     correctAnswer: "Ken Kesey",
//   },
//   {
//     question:
//       "Police raided The Grateful Dead's residency at 710 Ashbury St. on marijuana charges when?",
//     choices: [
//       "Oct. 2nd, 1967",
//       "Oct. 6th, 1968",
//       "Oct. 3rd, 1966",
//       "Oct. 11th, 1969",
//     ],
//     userAnser: "",
//     correctAnswer: "Oct. 2nd, 1967",
//   },
//   {
//     question:
//       "Bill Kreutzmann and Mickey Hart together have been nicknamed _________________?",
//     choices: [
//       "Planet Drum",
//       "The Other Ones",
//       "Wolf Bros",
//       "The Rhythm Devils",
//     ],
//     userAnser: "",
//     correctAnswer: "The Rhythm Devils",
//   },
//   {
//     question:
//       "New Potato Caboose was composed by Phil Lesh and ______________?",
//     choices: ["Bob Weir", "Tom Constanten", "Bobby Peterson", "Robert Hunter"],
//     userAnser: "",
//     correctAnswer: "Bobby Peterson",
//   },
//   {
//     question: "Which guitar did Jerry Garcia play during Cornell 5/8/77?",
//     choices: ["Alligator", "Travis Bean", "Wolf", "Tiger"],
//     userAnser: "",
//     correctAnswer: "Travis Bean",
//   },
//   {
//     question:
//       "Which country's basketball team did The Grateful Dead help play in the 1988 Olympics",
//     choices: ["Latvia", "Romania", "Lithuania", "Estonia"],
//     userAnser: "",
//     correctAnswer: "Lithuania",
//   },
//   {
//     question:
//       "Where did The Grateful Dead perform during September 15th and 16th of 1978?",
//     choices: ["Pompeii", "Stonehenge", "Easter Island", "Giza Necropolis"],
//     userAnser: "",
//     correctAnswer: "Giza Necropolis",
//   },
//   {
//     question:
//       "On what date occured The Summer Jam at Watkins Glen in which The Grateful Dead performed along with The Allman Brothers Band and The Band?",
//     choices: [
//       "July 4th, 1972",
//       "July 12th, 1971",
//       "July 20th, 1974",
//       "July 28th, 1973",
//     ],
//     userAnser: "",
//     correctAnswer: "July 28th, 1973",
//   },
//   {
//     question:
//       "The parking lots for Grateful Dead concerts eventually became vending areas for fans and named ____________?",
//     choices: [
//       "Shakedown Street",
//       "The Golden Road",
//       "Promised Land",
//       "Terrapin Station",
//     ],
//     userAnser: "",
//     correctAnswer: "Shakedown Street",
//   },
//   {
//     question: "Who helped manage The Grateful Dead's infamous Europe 72 tour?",
//     choices: ["Ron Rakow", "Leon Gast", "Sam Cutler", "Bill Graham"],
//     userAnser: "",
//     correctAnswer: "Sam Cutler",
//   },
//   {
//     question:
//       "On what date did The Grateful Dead debut Lazy River Road on the live stage?",
//     choices: ["4/16/1994", "2/21/1993", "3/2/1992", "12/6/1991"],
//     userAnser: "",
//     correctAnswer: "2/21/1993",
//   },
//   {
//     question:
//       "Who was the last performing keyboard player for The Grateful Dead?",
//     choices: [
//       "Brent Mydland",
//       "Bruce Hornsby",
//       "Jeff Chimenti",
//       "Vince Welnick",
//     ],
//     userAnser: "",
//     correctAnswer: "Vince Welnick",
//   },
//   {
//     question: "Which song was never recorded for a Grateful Dead studio album?",
//     choices: [
//       "Here Comes Sunshine",
//       "U.S. Blues",
//       "Bertha",
//       "China Cat Sunflower",
//     ],
//     userAnser: "",
//     correctAnswer: "Bertha",
//   },
//   {
//     question:
//       "The section of the crowd at a Grateful Dead concert who were drug and alchohol-free were known as?",
//     choices: [
//       "Sugar Magnolias",
//       "Uncle John's Band",
//       "Scarlet Begonias",
//       "Wharf Rats",
//     ],
//     userAnser: "",
//     correctAnswer: "Wharf Rats",
//   },
//   {
//     question:
//       "Which audio engineer is responsible for the recording of Cornell 5/8/77?",
//     choices: [
//       "Betty Cantor-Jackson",
//       "Dan Healy",
//       "Owsley Stanley",
//       "Bob Heil",
//     ],
//     userAnser: "",
//     correctAnswer: "Betty Cantor-Jackson",
//   },
//   {
//     question:
//       "What television program did The Grateful Dead appear on 1/18/1969?",
//     choices: [
//       "The Beat Club",
//       "Playboy After Dark",
//       "The Hippie Temptation",
//       "Saturday Night Live",
//     ],
//     userAnser: "",
//     correctAnswer: "Playboy After Dark",
//   },
//   {
//     question:
//       "Which album was not released under Grateful Dead Records after they fulfilled their contract with Warner Bros.?",
//     choices: [
//       "Blues For Allah",
//       "Terrapin Station",
//       "From The Mars Hotel",
//       "Wake Of The Flood",
//     ],
//     userAnser: "",
//     correctAnswer: "Terrapin Station",
//   },
//   {
//     question:
//       "What was the first keyboard that Brent Mydland played with The Grateful Dead",
//     choices: ["Fender Rhodes", "Kurzweil PC-88", "Yamaha CP-70", "Yamaha GS-1"],
//     userAnser: "",
//     correctAnswer: "Fender Rhodes",
//   },
//   {
//     question:
//       "Robert Hunter wrote the lyrics to Brokedown Palace, Ripple and what other song on the same day in London, 1970?",
//     choices: [
//       "It Must Have Been The Roses",
//       "To Lay Me Down",
//       "The Wheel",
//       "Stella Blue",
//     ],
//     userAnser: "",
//     correctAnswer: "To Lay Me Down",
//   },
//   {
//     question:
//       "What charitable non-profit organization was created in 1983 by members of The Grateful Dead and friends to provide community support for creative endeavors?",
//     choices: [
//       "Garcia Foundation",
//       "Rex Foundation",
//       "Hart Foundation",
//       "Parish Foundation",
//     ],
//     userAnser: "",
//     correctAnswer: "Rex Foundation",
//   },
//   {
//     question:
//       "Which Rock n' Roll legend did The Grateful Dead back up in New York on 3/25/72?",
//     choices: ["Chuck Berry", "Gene Vincent", "Bo Diddley", "Wanda Jackson"],
//     userAnser: "",
//     correctAnswer: "Bo Diddley",
//   },
//   {
//     question:
//       "Complete this lyric: 'Like I told you, what I said, ___________________________________'",
//     choices: [
//       "Can't believe all the books that I've read",
//       "When you get back you better butter my bread",
//       "Don't you know my name is Fred",
//       "Steal your face right off of your head",
//     ],
//     userAnser: "",
//     correctAnswer: "Steal your face right off of your head",
//   }
// ];

var buttonA = document.createElement("button");
buttonA.setAttribute("id", "A");
buttonA.setAttribute("type", "button");
var buttonB = document.createElement("button");
buttonB.setAttribute("id", "B");
buttonB.setAttribute("type", "button");
var buttonC = document.createElement("button");
buttonC.setAttribute("id", "C");
buttonC.setAttribute("type", "button");
var buttonD = document.createElement("button");
buttonD.setAttribute("id", "D");
buttonD.setAttribute("type", "button");

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

const startingMinutes = 5;
let time = startingMinutes * 60;
const btnStart = document.getElementById("start-button");
const countdownEl = document.getElementById("countdown");

// begins timer when start button is pressed
document.addEventListener("DOMContentLoaded", function() {
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      myInterval = setInterval(updateCountdown, 1000);
      btnStart.style.display = "none";
    });
  }
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

const onAnswerClick = (event) => {
  console.log('onAnswerClick')
  console.log(questions)
  const clickedAnswer = event.target.innerHTML;
  if (clickedAnswer === questions[currentIndex].correctAnswer) {
    result.innerHTML = "Correct!";
    result.style.color = "royalblue";
    score++;
    scoreEl.innerHTML = "Score: " + score;
  } else {
    result.style.color = "brown";
    result.innerHTML = "Incorrect!";
    score.innerHTML = "Score: " + score;
    if (time >= 10) {
      time = time - 10;
    } else {
      time = 0;
    }
  }
  questions[currentIndex].userAnswer = clickedAnswer;
  currentIndex++;
  if (!questions[currentIndex]) {
    goToScore();
  } else {
    quesh();
  }
};

// creates score page so that scores don't get lost when quiz is taken multiple times. Also stops timer when quiz ends and creates hide score button to hide scores.
function goToScore() {
  let scoresHTML;
  if (score >= 25) {
    scoresHTML = `<section class="container"><h1 id="final-score">Final Score: ${score}/${questions.length} <br> Well dang! You are definitely on the bus! <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"/></svg></h1>
<button id="return" class="scorepage" onclick="restartQuiz()">Retake The Grateful Dead Quiz</button>
<h1>Answer Key:</h1>
    <button id="showAnswers" onclick="answerKey()">Show Answers</button>
    <div id="answers">
    </div>
    <h3>Sources:</h3>
    <h4>McNally, Dennis. A Long Strange Trip. Crown, 18 Dec. 2007.</h4>
    <h4>Wikipedia. “Wikipedia.” Wikipedia.org, Wikimedia Foundation, 15 Jan. 2001, www.wikipedia.org/.</h4>
    <h4>The Setlist Wiki, www.setlist.fm/. Accessed 6 Mar. 2024. </h4>
    <h2 id="refresh"><a style="text-decoration:none" href="index.html">Return To Main Page.</a></h2>
 </section>`;
  } else if (score >= 15 && score < 20) {
    scoresHTML = `<section class="container"><h1 id="final-score">Final Score: ${score}/${questions.length} <br> You have stepped on the bus. Welcome! <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"/></svg></h1>
<button id="return" class="scorepage" onclick="restartQuiz()">Retake The Grateful Dead Quiz</button>
<h1>Answer Key:</h1>
    <button id="showAnswers" onclick="answerKey()">Show Answers</button>
    <div id="answers">
    </div>
    <h3>Sources:</h3>
    <h4>McNally, Dennis. A Long Strange Trip. Crown, 18 Dec. 2007.</h4>
    <h4>Wikipedia. “Wikipedia.” Wikipedia.org, Wikimedia Foundation, 15 Jan. 2001, www.wikipedia.org/.</h4>
    <h4>The Setlist Wiki, www.setlist.fm/. Accessed 6 Mar. 2024. </h4>
    <h2 id="refresh"><a style="text-decoration:none" href="index.html">Return To Main Page.</a></h2>
 </section>`;
  } else if (score < 10) {
    {
      scoresHTML = `<section class="container"><h1 id="final-score">Final Score: ${score}/${questions.length} <br> The bus is still waitin' for ya! <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"/></svg></h1>
  <button id="return" class="scorepage" onclick="restartQuiz()">Retake The Grateful Dead Quiz</button>
  <h1>Answer Key:</h1>
    <button id="showAnswers" onclick="answerKey()">Show Answers</button>
    <div id="answers">
    </div>
    <h3>Sources:</h3>
    <h4>McNally, Dennis. A Long Strange Trip. Crown, 18 Dec. 2007.</h4>
    <h4>Wikipedia. “Wikipedia.” Wikipedia.org, Wikimedia Foundation, 15 Jan. 2001, www.wikipedia.org/.</h4>
    <h4>The Setlist Wiki, www.setlist.fm/. Accessed 6 Mar. 2024. </h4>
    <h2 id="refresh"><a style="text-decoration:none" href="index.html">Return To Main Page</a></h2>
 </section>`;
    }
  }

  var optionsEl = document.getElementById("options");
  optionsEl.innerHTML = scoresHTML;
  text.style.display = "none";
  stats.style.display = "none";
  title.style.display = "none";
  clearInterval(myInterval);
  const initialsInput = document.getElementById("initials");
  const hideBtn = document.getElementById("hide");
  const submitBtn = document.getElementById("submit");
}

function answerKey() {
  const answers = questions.map(question => {
    return `<div>
    <p><h3>Question:</h3>${question.question}</p>
    <p><h3>Choices:</h3>${question.choices.join(' / ')}</p>
    <p><h3>Your Answer:</h3>${question.userAnswer}</p>
    <p><h3>Correct Answer:</h3>${question.correctAnswer}</p>
    </div>`;
  });

  const answerKeyContainer = document.getElementById("answers");
  answerKeyContainer.innerHTML = answers.join('');

  const button = document.getElementById("showAnswers");
  button.style.display = "none";
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
    result.style.color = "royalblue";
    gameOver.textContent = "";
    myInterval = setInterval(updateCountdown, 1000);
    quesh();
  }

