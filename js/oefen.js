  //opdracht 1,2
  const teRadenWoord = "skill issue";

function raadWoord() {
    while (true) {
      const geradenWoord = prompt("Raad het woord (of typ 'quit' om te stoppen):");
  
      if (geradenWoord === null) {
        alert("Spel gestopt. Tot ziens!");
        break;
      }
  
      if (geradenWoord.toLowerCase() === 'quit') {
        alert("Bedankt voor het spelen. Tot ziens!");
        break;
      }
  
      if (geradenWoord === teRadenWoord) {
        alert("Goed geraden! Het woord is: " + teRadenWoord);
        break;
      } else {
        alert("Helaas, probeer opnieuw!");
      }
    }
  }
    raadWoord();
  

//opdracht 3
// Array van temperaturen
const temperaturen = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];

// Vind de warmste temperatuur
const warmsteTemperatuur = Math.max(...temperaturen);
console.log("De warmste temperatuur is:", warmsteTemperatuur);

// Vind de koudste temperatuur
const koudsteTemperatuur = Math.min(...temperaturen);
console.log("De koudste temperatuur is:", koudsteTemperatuur);

// Toon alle temperaturen boven de 10 graden
const temperaturenBovenTien = temperaturen.filter(temperatuur => temperatuur > 10);
console.log("Temperaturen boven de 10 graden:", temperaturenBovenTien);

//odpracht 4
// Array van temperaturen
const Temperaturen = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];

// Maak een array van objecten met temperaturen en maanden
const temperaturenObjecten = [
  { temperature: 3.6, month: "Januari" },
  { temperature: 3.9, month: "Februari" },
  { temperature: 6.5, month: "Maart" },
  { temperature: 9.9, month: "April" },
  { temperature: 13.4, month: "Mei" },
  { temperature: 16.2, month: "Juni" },
  { temperature: 18.3, month: "Juli" },
  { temperature: 17.9, month: "Augustus" },
  { temperature: 14.7, month: "September" },
  { temperature: 10.9, month: "Oktober" },
  { temperature: 7.0, month: "November" },
  { temperature: 4.2, month: "December" }
];

// Toon de objecten op de webpagina
temperaturenObjecten.forEach(item => {
  console.log(`${item.month}: ${item.temperature} graden`);
});

//opdracht 5
function toonTemperatuurTabel(temperaturen) {
    // Maak een tabel en voeg de kopregel toe
    const table = document.createElement("table");
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const maandHeader = document.createElement("th");
    maandHeader.textContent = "Maand";
    headerRow.appendChild(maandHeader);
    const temperatuurHeader = document.createElement("td");
    temperatuurHeader.textContent = "Temperatuur";
    headerRow.appendChild(temperatuurHeader);

    // Voeg de temperatuurdata toe aan de tabel
    const tbody = table.createTBody();
    temperaturen.forEach(item => {
      const row = tbody.insertRow();
      const maandCell = row.insertCell(0);
      maandCell.textContent = item.month;
      const temperatuurCell = row.insertCell(1);
      temperatuurCell.textContent = item.temperature;
    });

    // Voeg de tabel toe aan de body van het document
    document.body.appendChild(table);
  }

  // Roep de functie aan om de tabel weer te geven
  toonTemperatuurTabel(temperaturenObjecten);