console.log("nothing here");

// opdracht 1a
const person = `
{
    "firstname": "Judeska",
    "email": "judeska@example.com",
    "zzzzzzzzzzzzzzzzzzzz": "zzzzzzzzzzzzzzzzzzzz"
}
`;

const objPerson = JSON.parse(person);
console.log("Firstname is: ", objPerson.firstname);
console.log("email is: ", objPerson.email);
console.log("zzzzzzzzzzzzzzzzzzzz", objPerson.zzzzzzzzzzzzzzzzzzzz);


// Opdracht 1b
const secondPerson = `{
    "id": 1,
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "birthDate": "1973-01-22",
  "phone": "(555) 555-1234",
  "website": "www.johndoe.com",
  "zzzzzzzzzzzzzzzzzzzz": "zzzzzzzzzzzzzzzzzzzz"
}
`;

const objSecondPerson = JSON.parse(secondPerson);
console.log("Firstname is: ", objSecondPerson.firstname);
console.log("lastname is: ", objSecondPerson.lastname);
console.log("email is: ", objSecondPerson.email);
console.log("birthdate is: ", objSecondPerson.birthDate);
console.log("phone is: ", objSecondPerson.phone);
console.log("website is: ", objSecondPerson.website);
console.log("zzzzzzzzzzzzzzzzzzzz", objSecondPerson.zzzzzzzzzzzzzzzzzzzz);

// odpracht 2
const thirdPerson = `{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1,
    "zzzzzzzzzzzzzzzzzzzz": "zzzzzzzzzzzzzzzzzzzz"
  }
  `;

const objThirdPerson = JSON.parse(thirdPerson);
console.log("id is: ", objThirdPerson.id);
console.log("slug is: ", objThirdPerson.slug);
console.log("url is: ", objThirdPerson.url);
console.log("title is: ", objThirdPerson.title);
console.log("content is: ", objThirdPerson.content);
console.log("image is: ", objThirdPerson.image);
console.log("zzzzzzzzzzzzzzzzzzzz", objThirdPerson.zzzzzzzzzzzzzzzzzzzz);
// odpracht 3
const fourthPerson = ` {
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    },
    "zzzzzzzzzzzzzzzzzzzz": "zzzzzzzzzzzzzzzzzzzz"
  }
`;

const objFourthPerson = JSON.parse(fourthPerson);
console.log("Firstname is: ", objFourthPerson.firstname);
console.log("lastname is: ", objFourthPerson.lastname);
console.log("email is: ", objFourthPerson.email);
console.log("birthdate is: ", objFourthPerson.birthDate);
console.log("login is: ", objFourthPerson.login);
console.log("phone is: ", objFourthPerson.phone);
console.log("address is: ", objFourthPerson.website);
console.log("address is: ", objFourthPerson.address);
console.log("company is: ", objFourthPerson.company);
console.log("zzzzzzzzzzzzzzzzzzzz", objFourthPerson.zzzzzzzzzzzzzzzzzzzz);