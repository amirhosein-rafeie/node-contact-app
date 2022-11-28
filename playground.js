const fs = require("fs");

// const data = [
//   { id: 1, fullName: "Amirhosein Rafeie" },
//   { id: 2, fullName: "Jadi Mirmirani" },
//   { id: 3, fullName: "Mark Zuckerburg" },
// ];

// fs.writeFileSync("contacts.json", JSON.stringify(data));

// variable binding
const data = fs.readFileSync("contacts.json");
const p = data.toString();

console.log(p);
console.log(typeof p);

console.log(JSON.parse(p));
console.log(typeof JSON.parse(p));
