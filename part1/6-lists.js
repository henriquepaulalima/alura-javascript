console.log("===== Lists =====")

// const bh = "Belo Horizonte"
// const rio = "Rio de Janeiro"
// const sp = "São Paulo"
const destinations = new Array( 
    "Belo Horizonte",
    "Rio de Janeiro",
    "São Paulo"
)
destinations.push('Curitiba') // .push add a item to a list
destinations.splice(2,1) // .splice remove a item to a list, the first element determinates the starting point of the list, the second elemente determinate the number of elements to be removed
    
// console.log(bh, rio, sp)
console.log("Possible distinations: ")
console.log(destinations)
console.log(destinations[1], destinations[2])