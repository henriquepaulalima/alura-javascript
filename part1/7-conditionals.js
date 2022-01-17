console.log("===== Conditionals =====")

const destinations = new Array( 
    "Belo Horizonte",
    "Rio de Janeiro",
    "São Paulo"
)
const ageComparator = 18
const accompanied = false
const paidPass = true

// if (ageComparator >= 18) {
//     console.log("Custumer of age.");
//     destinations.splice(2,1)
// } else if (accompanied) {
//     console.log("Custumer minor, Accompanied.");
//     destinations.splice(2,1)
// } else {
//     console.log("Custumer minor.");
// }


console.log("Possible distinations: ")
console.log(destinations)

// console.log("Types of conditionals");
// console.log(ageComparator > 15);
// console.log(ageComparator >= 15);
// console.log(ageComparator < 15);
// console.log(ageComparator <= 15);
// console.log(ageComparator == 15);
// console.log(ageComparator != 15);

if (ageComparator >= 18 || accompanied) {
    console.log("Custumer of age or Accompanied");
    destinations.splice(2,1)
    console.log(destinations)
} else {
    console.log("Custumer minor.");
    console.log(destinations)
}

console.log("Boarding\n\n");
if (ageComparator >= 18 && paidPass) {
    console.log("Have a good trip!");
} else {
    console.log("You cannnot board...");
}