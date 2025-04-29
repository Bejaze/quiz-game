// This array of objects includes the country's name and the path to the country's flag image.

const countries = [
    { name: "Albania", flag: "https://flagpedia.net/data/flags/w1160/al.webp" },
    { name: "France", flag: "https://flagpedia.net/data/flags/w1160/fr.webp" },
    { name: "Italy", flag: "https://flagpedia.net/data/flags/w1160/it.webp" },
    { name: "Jamaica", flag: "https://flagpedia.net/data/flags/w1160/jm.webp" },
    { name: "Colombia", flag: "https://flagpedia.net/data/flags/w1160/co.webp" },
    { name: "Brazil", flag: "https://flagpedia.net/data/flags/w1160/br.webp" }
  ];
  
//Created a remainingCountries variable that can be changed later. The ... spread syntax makes a 
//copy of the countries array and removes countries from the new list without changing the original.
//I want the countries already used removed from the list as the game progresses. 

let remainingCountries = [...countries];
let score = 0;


//Used getElementById to connect my JS code to HTML elements to read or change them.

const flagImg = document.getElementById("flag");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");


  



  //Will use the getRandomOptions funtion to create 4 answer choices, with the order being shuffled 
  // so the correct answer isn't in the same spot always.