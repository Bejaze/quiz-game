/*----- Constants -----*/
const countries = [
  { name: "Albania", flag: "https://flagpedia.net/data/flags/w1160/al.webp" },
  { name: "France", flag: "https://flagpedia.net/data/flags/w1160/fr.webp" },
  { name: "Italy", flag: "https://flagpedia.net/data/flags/w1160/it.webp" },
  { name: "Jamaica", flag: "https://flagpedia.net/data/flags/w1160/jm.webp" },
  { name: "Colombia", flag: "https://flagpedia.net/data/flags/w1160/co.webp" },
  { name: "Brazil", flag: "https://flagpedia.net/data/flags/w1160/br.webp" },
  { name: "Japan", flag: "https://flagpedia.net/data/flags/w1160/jp.webp" },
  { name: "United States", flag: "https://flagpedia.net/data/flags/w1160/us.webp"},
  { name: "Afghanistan", flag: "https://flagpedia.net/data/flags/w1160/af.png?v=un"},
  { name: "Iraq", flag: "https://flagpedia.net/data/flags/w1160/iq.webp"},
  { name: "Jordan", flag: "https://flagpedia.net/data/flags/w1160/jo.webp"},
  { name: "Hong Kong", flag: "https://flagpedia.net/data/flags/w1160/hk.webp"},
  { name: "Mali", flag: "https://flagpedia.net/data/flags/w1160/ml.webp"},
  { name: "Azerbaijan", flag: "https://flagpedia.net/data/flags/w1160/az.webp"},
  { name: "Mexico", flag: "https://flagpedia.net/data/flags/w1160/mx.webp"},
  { name: "Bosnia", flag: "https://flagpedia.net/data/flags/w1160/ba.webp"},
  { name: "Pakistan", flag: "https://flagpedia.net/data/flags/w1160/pk.webp"},
  { name: "Vietnam", flag: "https://flagpedia.net/data/flags/w1160/vn.webp"},
  { name: "Philippines", flag: "https://flagpedia.net/data/flags/w1160/ph.webp"},
  { name: "Romania", flag: "https://flagpedia.net/data/flags/w1160/ro.webp"},
  { name: "Syria", flag: "https://flagpedia.net/data/flags/w1160/sy.webp"},
  { name: "India", flag: "https://flagpedia.net/data/flags/w1160/in.webp"},
  { name: "Liberia", flag: "https://flagpedia.net/data/flags/w1160/lr.webp"},
  { name: "Haiti", flag: "https://flagpedia.net/data/flags/w1160/ht.webp"},
  { name: "Israel", flag: "https://flagpedia.net/data/flags/w1160/il.webp"},
  { name: "Nepal", flag: "https://flagpedia.net/data/flags/w1160/np.webp"},
  { name: "Chad", flag: "https://flagpedia.net/data/flags/w1160/td.webp"},
  { name: "England", flag: "https://flagpedia.net/data/flags/w1160/gb-eng.webp"},
  { name: "Bangladesh", flag: "https://flagpedia.net/data/flags/w1160/bd.webp"},
  { name: "Kyrgystan", flag: "https://flagpedia.net/data/flags/w1160/kg.webp"},
  { name: "Turkey", flag: "https://flagpedia.net/data/flags/w1160/tr.webp"},
  { name: "Sweden", flag: "https://flagpedia.net/data/flags/w1160/se.webp"},
  { name: "Nigeria", flag: "https://flagpedia.net/data/flags/w1160/ng.webp"},
  { name: "Ghana", flag: "https://flagpedia.net/data/flags/w1160/gh.webp"},
  { name: "Taiwan", flag: "https://flagpedia.net/data/flags/w1160/tw.webp"},
  { name: "China", flag: "https://flagpedia.net/data/flags/w1160/cn.webp"},
  { name: "Canada", flag: "https://flagpedia.net/data/flags/w1160/ca.webp"},
  { name: "Chile", flag: "https://flagpedia.net/data/flags/w1160/cl.webp"},
  { name: "Botswana", flag: "https://flagpedia.net/data/flags/w1160/bw.webp"},
  { name: "South Korea", flag: "https://flagpedia.net/data/flags/w1160/kr.webp"},
  { name: "Ethiopia", flag: "https://flagpedia.net/data/flags/w1160/et.webp"},
  { name: "Eritrea", flag: "https://flagpedia.net/data/flags/w1160/er.webp"},
  { name: "Bhutan", flag: "https://flagpedia.net/data/flags/w1160/bt.webp"},
  { name: "Peru", flag: "https://flagpedia.net/data/flags/w1160/pe.webp"},
  { name: "Serbia", flag: "https://flagpedia.net/data/flags/w1160/rs.webp"},
  { name: "Ecuador", flag: "https://flagpedia.net/data/flags/w1160/ec.webp"},
  { name: "Belize", flag: "https://flagpedia.net/data/flags/w1160/bz.webp"},
  { name: "United Arab Emirates", flag: "https://flagpedia.net/data/flags/w1160/ae.webp"},
  { name: "Cameroon", flag: "https://flagpedia.net/data/flags/w1160/cm.webp"},
  { name: "Puerto Rico", flag: "https://flagpedia.net/data/flags/w1160/pr.webp"},
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
  scoreEl.textContent = `Score: 0 (0/${countries.length})`;
  feedbackEl.textContent = '';
  flagImg.style.display = 'block';
  render();
}

function render() {
  feedbackEl.textContent = '';
  optionsContainer.innerHTML = '';

  if (remainingCountries.length === 0) {
    flagImg.style.display = 'none';
    feedbackEl.textContent = `Game Over! Final Score: ${score} (${score}/${countries.length})`;
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

  scoreEl.textContent = `Score: ${score} (${score}/${countries.length})`;

  setTimeout(render, 1000);
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
