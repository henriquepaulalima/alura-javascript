console.log("===== Loops =====")

const destinations = new Array( 
    "Belo Horizonte",
    "Rio de Janeiro",
    "São Paulo"
)
console.log("\nPossible distinations: ")
console.log(destinations)

const ageComparator = 18
const accompanied = false
const destination = "São Paulo"
let paidPass = false

const canPurchase = ageComparator >= 18 || accompanied

let counter = 0
let destinationExists = false
while(counter < 3) {
    if (destinations[counter] == destination) {
        destinationExists = true
        break
    }
    counter += 1
}
console.log(`Destination exists:`, destinationExists);

if (canPurchase && destinationExists) {
    console.log("Have a good trip!");
} else {
    console.log("Something went wrong...");
}

for(let i; i<3; i++) {
    if (destinations[i] == destination) {
        destinationExists = true
    }
}
console.log(`Destination exists:`, destinationExists);


console.log("\nPossible distinations: ")
console.log(destinations)