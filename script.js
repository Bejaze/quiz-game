/*-----constants -----*/
const countries = [
    { name: "Albania", flag: "https://flagpedia.net/data/flags/w1160/al.webp" },
    { name: "France", flag: "https://flagpedia.net/data/flags/w1160/fr.webp" },
    { name: "Italy", flag: "https://flagpedia.net/data/flags/w1160/it.webp" },
    { name: "Jamaica", flag: "https://flagpedia.net/data/flags/w1160/jm.webp" },
    { name: "Colombia", flag: "https://flagpedia.net/data/flags/w1160/co.webp" },
    { name: "Brazil", flag: "https://flagpedia.net/data/flags/w1160/br.webp" }
  ];
/*----- state variables -----*/
  let remainingCountries;
  let score;
  let currentCountry;

/*----- cached elements  -----*/
const flagImg = document.getElementById("flag");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const optionBtns = document.querySelectorAll(".option-btn");

/*----- event listeners -----*/
restartBtn.addEventListener('click', init);

optionBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const selectedOption = e.target.textContent;
    checkAnswer(selectedOption, currentCountry.name);
  });
});

/*----- functions -----*/
init();

// Initialize all state and then call render()
function init() {
  remainingCountries = [...countries];
  score = 0;
  scoreEl.textContent = 'Score : 0';
  feedbackEl.textContent = '';
  flagImg.style.display = 'block';
  render ();
}

function render() {
  feedbackEl.textContent = '';
  optionsContainer.innerHTML = '';

  if (remainingCountries.length === 0) {
    flagImg.style.display = 'none';
    feedbackEl.textContent = ` Game Over! Final Score: ${score}`;
    }
}
  
const index = Math.floor(Math.random() * remainingCountries.length);
currentCountry = remainingCountries [index];
flagImg.src = currentCountry.flag;

const options = getRandomOptions(currentCountry);
options.forEach(option => {
  const btn = document.createElement("button");
  btn.textContent = option;
  btn.className = "option-btn";
  btn.onclick = () => checkAnswer(option, currentCountry.name);
  optionsContainer.appendChild(btn);
});

remainingCountries.splice(index,1);

//TODO - add a check answer function

function checkAnswer(selected, correct) {
  if (selected === correct) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! It was ${correct}`;
  }
  scoreEl.textContent = "Score" + score;
  render();
}