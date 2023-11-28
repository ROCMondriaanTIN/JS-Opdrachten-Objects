// Opdracht 1
let targetWord = "skill issue";
let guessedWord = "";

while (guessedWord !== targetWord) {
  guessedWord = prompt("Raad het woord:");

  if (guessedWord === "quit") {
    break;
  }

  if (guessedWord === targetWord) {
    alert("Goed geraden!");
  } else {
    alert("Probeer opnieuw.");
  }
}

// Opdracht 3
const temperatures = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];

const maxTemperature = Math.max(...temperatures);
const minTemperature = Math.min(...temperatures);
const aboveTenDegrees = temperatures.filter(temp => temp > 10);

console.log("Warmste temperatuur: " + maxTemperature);
console.log("Koudste temperatuur: " + minTemperature);
console.log("Temperaturen boven de 10 graden: " + aboveTenDegrees);

// Opdracht 4
const months = [
  "Januari", "Februari", "Maart", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "Oktober", "November", "December"
];

const temperatureObjects = temperatures.map((temp, index) => {
  return {
    temperature: temp,
    month: months[index]
  };
});

temperatureObjects.forEach(obj => {
  console.log(obj.month + ": " + obj.temperature + " graden");
});

// Opdracht 5
document.write("<h2>Opdracht 5</h2>");
document.write("<table>");
document.write("<thead><tr><th>Maand</th><th>Temperatuur</th></tr></thead>");
document.write("<tbody>");
temperatureObjects.forEach(obj => {
  document.write("<tr>");
  document.write("<td>" + obj.month + "</td>");
  document.write("<td>" + obj.temperature + "</td>");
  document.write("</tr>");
});
document.write("</tbody></table>");

// Opdracht 6
document.write("<h2>Opdracht 6</h2>");
document.write('<div id="cardContainer"></div>');
function createCard(text) {
  const cardContainer = document.getElementById("cardContainer");
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = text;
  cardContainer.appendChild(card);
}
const userInput = prompt("Voer een tekst in voor de card:");
createCard(userInput);

// Opdracht 7
document.write("<h2>Opdracht 7</h2>");
const countries = [
  {
    hoofdstad: "Amsterdam",
    land: "Nederland",
    inwonersaantal: 17000000
  },
  {
    hoofdstad: "Berlijn",
    land: "Duitsland",
    inwonersaantal: 83000000
  },
  {
    hoofdstad: "Parijs",
    land: "Frankrijk",
    inwonersaantal: 67000000
  },
  {
    hoofdstad: "Londen",
    land: "Verenigd Koninkrijk",
    inwonersaantal: 66000000
  },
  {
    hoofdstad: "Rome",
    land: "Italië",
    inwonersaantal: 60000000
  },
  {
    hoofdstad: "Madrid",
    land: "Spanje",
    inwonersaantal: 47000000
  }
];

countries.forEach(country => {
  console.log(country);
});

const maxPopulationCountry = countries.reduce((max, country) => {
  return country.inwonersaantal > max.inwonersaantal ? country : max;
});

console.log("Land met de meeste inwoners:");
console.log(maxPopulationCountry);

// Opdracht 8
document.write("<h2>Opdracht 8</h2>");
document.write('<div id="countryCardContainer"></div>');
function createCountryCard(country) {
  const countryCardContainer = document.getElementById("countryCardContainer");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<strong>${country.land}</strong><br>Hoofdstad: ${country.hoofdstad}<br>Inwoners: ${country.inwonersaantal}`;
  countryCardContainer.appendChild(card);
}

countries.forEach(country => {
  createCountryCard(country);
});