console.log("main loaded");

const person = {
    firstName: "Yousef",
    lastName: "Jamal",
    age: 18,
    course: "Software Developer",
    score: 21,
};

console.log("Person Details:");
console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Course: ${person.course}`);
console.log(`Score: ${person.score}`);
console.log('\n');

const personContainer = document.getElementById('personContainer');

const personCard = document.createElement('div');
personCard.className = 'card';

personCard.innerHTML = `
    <h2>${person.firstName} ${person.lastName}</h2>
    <p>Age: ${person.age}</p>
    <p>Course: ${person.course}</p>
    <p>Score: ${person.score}</p>
`;

personContainer.appendChild(personCard);

const nosPost = {
    userName: "NOS",
    title: "Israëlische leger: 'Verschillende overheidsgebouwen in Gaza overgenomen",
    story: "Het Israëlische leger meldt dat het de afgelopen dagen verschillende overheidsgebouwen in Gaza-Stad heeft ingenomen. Volgens het leger gaat het onder meer om een gemeentehuis, het regeringsgebouw en het hoofdkwartier van de politie. Een woordvoerder van het Israëlische leger zegt dat de instellingen worden gebruikt door Hamas voor militaire doeleinden. Binnen zouden onder meer wapens en trainings- en studiemateriaal van Hamas zijn gevonden.",
    date: "14-11-2023, 12:27",
    views: "2,3m",
};

console.log("Post Details:");
console.log(`Username: ${nosPost.userName}`);
console.log(`Title: ${nosPost.title}`);
console.log(`Story: ${nosPost.story}`);
console.log(`Date: ${nosPost.date}`);
console.log(`Views: ${nosPost.views}`);
console.log('\n');

const nosPostContainer = document.getElementById('nosPostContainer');

const nosPostCard = document.createElement('div');
nosPostCard.className = 'card';

nosPostCard.innerHTML = `
    <h2>${nosPost.userName}</h2>
    <h3>${nosPost.title}</h3>
    <p>Story: ${nosPost.story}</p>
    <p>Date: ${nosPost.date}</p>
    <p>Views: ${nosPost.views}</p>
`;

nosPostContainer.appendChild(nosPostCard);

const recepten = [
    {
        title: "Wraps met gegrilde groenten",
        description: "Heerlijke groente wraps met hummus en belegd met gegrilde groenten en krokant geroosterde kikkererwten, een lekker vegetarisch gerecht.",
        healthy: "yes",
    },
    {
        title: "Pasta met kikkererwten en paprikasaus",
        description: "Pasta met kikkererwten en paprikasaus, een super lekker én super eenvoudig recept dat je in no-time maakt. Je hoeft alleen de saus te maken, tomaatjes te snijden en pasta te koken en je hebt een heerlijke maaltijd.",
        healthy: "yes",
    },
    {
        title: "Kip in zwarte pepersaus",
        description: "Heerlijke en makkelijke roerbak met (vega) kip en groenten in een zelfgemaakte zwarte pepersaus. Serveer met noedels of rijst voor een lekkere avondmaaltijd.",
        healthy: "yes",
    }
];

recepten.forEach((recept, index) => {
    console.log(`Recept ${index + 1}:`);
    console.log(`Title: ${recept.title}`);
    console.log(`Description: ${recept.description}`);
    console.log(`Healthy: ${recept.healthy}`);
    console.log('\n');
});

const receptContainer = document.getElementById('receptContainer');

recepten.forEach((recept, index) => {
    const receptCard = document.createElement('div');
    receptCard.className = 'card';

    receptCard.innerHTML = `
        <h2>${recept.title}</h2>
        <p>${recept.description}</p>
        <p>Healthy: ${recept.healthy}</p>
    `;

    receptContainer.appendChild(receptCard);
});

let autos = [
    {
        title: "Hyundai I10 1.0i i-Motion Comfort",
        description: "Technische informatie, Vermogen: 49 kW (67 PK), Aantal cilinders: 3, Transmissie: 5 versnellingen, Handgeschakeld, Aandrijving: Voorwielaandrijving, Bandenmaat: 155/70 R13, Acceleratie (0-100): 15,1 s, Topsnelheid: 155 km/u",
        price: "€ 6.490,-",
        kilometer: "92.940 km",
    },
    {
        title: "Ford C-MAX 1.5 Titanium 12 Mnd Garantie",
        description: "Ford C-Max 1.5 Titanium 150PK Bj. 09/2016 / 73.468KM / Groot Navi / Stoel/stuurverwarming / Parkeer Camera / Verwarmde voor en achterruit / Airco / Trekhaak / 5-dr",
        price: "€ 14.444,-",
        kilometer: "73.468 km",
    },
    {
        title: "Ferrari 812 GTS 6.5 V12|Pass Display|Camera|JBL|Carbon|PPF",
        description: "De 6.5 liter sterke V12 produceert maar liefst 800 pk, waardoor de 812 binnen 3.0 seconden naar de 100km per uur sprint. De Ferrari beschikt over tal van opties zoals: Passenger Display, Carbon interieur delen, Keramische remschijven, Carbon stuur, Vol lederen interieur met contrast stiksels, Parkeercamera, Stoelverwarming, JBL Audio, Parkeersensoren voor en achter,  20 inch licht metalen velgen, Elektrisch verstelbare voorstoelen met geheugen, Bluetooth audio, etc",
        price: "€ 564.740,-",
        kilometer: "4.579 km",
    },
    {
        title: "Lamborghini Urus 4.0 V8 Grigio Keres - Zwart/groen",
        description: "Tellerstand: 3.102 km. Carrosserievorm: SUV. Aantal deuren: 5. Brandstofsoort: Benzine. Bouwjaar: jun 2022. Nieuw: Nee. Transmissie: Automaat. Kleur: Grigio Keres metallic (grijs metallic). Interieurkleur: Zwart. Bekleding: Leder. Onderhoudsboekjes: Aanwezig (dealer onderhouden)",
        price: "€ 398.900,-",
        kilometer: "3.102 km",
    },
    {
        title: "Rolls-Royce Dawn BLACK BADGE BESPOKE AUDIO (bj 2019)",
        description: "Technische informatie. Vermogen: 442 kW (601 PK). Aantal cilinders: 12. Transmissie: Automaat. Ledig gewicht: 2.535 kg. Afmetingen (LxBxH): 529 x 195 x 150 cm",
        price: "€ 499.950,-",
        kilometer: "11.799 km",
    }
];

autos.forEach((auto, index) => {
    console.log(`Auto ${index + 1}:`);
    console.log(`Title: ${auto.title}`);
    console.log(`Description: ${auto.description}`);
    console.log(`Price: ${auto.price}`);
    console.log(`Kilometer: ${auto.kilometer}`);
    console.log('\n');
});

const autosContainer = document.getElementById('autosContainer');

autos.forEach((autos, index) => {
    const autosCard = document.createElement('div');
    autosCard.className = 'card';

    autosCard.innerHTML = `
        <h2>${autos.title}</h2>
        <p>${autos.description}</p>
        <p>price: ${autos.price}</p>
        <p>kilometer: ${autos.kilometer}</p>

    `;

    autosContainer.appendChild(autosCard);
});