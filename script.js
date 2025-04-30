/*----- Country Data -----*/
const countries = [
    { name: "Albania", flag: "https://flagpedia.net/data/flags/w1160/al.webp" },
    { name: "France", flag: "https://flagpedia.net/data/flags/w1160/fr.webp" },
    { name: "Italy", flag: "https://flagpedia.net/data/flags/w1160/it.webp" },
    { name: "Jamaica", flag: "https://flagpedia.net/data/flags/w1160/jm.webp" },
    { name: "Colombia", flag: "https://flagpedia.net/data/flags/w1160/co.webp" },
    { name: "Brazil", flag: "https://flagpedia.net/data/flags/w1160/br.webp" }
  ];
/*----- State Variables -----*/
  let remainingCountries;
  let score;
  let currentCountry;

/*----- cached elements  -----*/
const flagImg = document.getElementById("flag");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

/*----- event listeners -----*/
restartBtn.addEventListener('click', init);

/*----- functions -----*/
init();

// Initialize all state and then call render()
function init() {
  remainingCountries = [...countries];

  // TODO: Initialize other state variables
  render();
}
  

  


