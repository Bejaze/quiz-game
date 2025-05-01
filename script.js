/*----- Constants -----*/
const countries = [
  { name: "Albania", flag: "https://flagpedia.net/data/flags/w1160/al.webp" },
  { name: "France", flag: "https://flagpedia.net/data/flags/w1160/fr.webp" },
  { name: "Italy", flag: "https://flagpedia.net/data/flags/w1160/it.webp" },
  { name: "Jamaica", flag: "https://flagpedia.net/data/flags/w1160/jm.webp" },
  { name: "Colombia", flag: "https://flagpedia.net/data/flags/w1160/co.webp" },
  { name: "Brazil", flag: "https://flagpedia.net/data/flags/w1160/br.webp" },
  { name: "Japan", flag: "https://flagpedia.net/data/flags/w1160/jp.webp" }
];

/*----- State Variables -----*/
let remainingCountries;
let currentCountry;
let score;

/*----- Cached Elements -----*/
const flagImg = document.getElementById("flag");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
/*----- Event Listeners -----*/
restartBtn.addEventListener('click', init);

/*----- Functions -----*/
function init() {
  remainingCountries = [...countries];
  score = 0;
  scoreEl.textContent = "Score: 0";
  feedbackEl.textContent = '';
  flagImg.style.display = 'block';
  render();
}

function render() {
  feedbackEl.textContent = '';
  optionsContainer.innerHTML = '';

  if (remainingCountries.length === 0) {
    flagImg.style.display = 'none';
    feedbackEl.textContent = `Game Over! Final Score: ${score}`;
    return;
  }


  const index = Math.floor(Math.random() * remainingCountries.length);
  currentCountry = remainingCountries[index];
  flagImg.src = currentCountry.flag;
  flagImg.alt = currentCountry.name; 
  remainingCountries.splice(index, 1);

 
  const options = getRandomOptions(currentCountry);
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selectedOption) {
  if (selectedOption === currentCountry.name) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! It was ${currentCountry.name}`;
  }

  scoreEl.textContent = `Score: ${score}`;

  setTimeout(render, 500);
}

function getRandomOptions(correctCountry) {
  const options = [correctCountry.name];
  while (options.length < 4) {
    const random = countries[Math.floor(Math.random() * countries.length)];
    if (!options.includes(random.name)) {
      options.push(random.name);
    }
  }
  return shuffleArray(options);
}
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
// Start the game
init();
