console.log("===== Javascript Tagged Template =====")

const word = 'interpolated'
//console.log("My string " + word)
//console.log(`My Literal Template ${word}`)

myFunction = (stringArray, word2, pariod) => {
  console.log(`${stringArray[0]}${word2}${stringArray[1]}${period}`)
}
const word2 = 'alura'
const period = 'week'
//myFunction`I study at ${word2} every ${period}`


function bold(stringArray2, ...values) {
  return stringArray2.reduce((accumulator, string, i) => {
    return `${accumulator}${string}${values[i] ? `<strong>${values[i]}</strong>` : ''}`
  }, '')
}
const name = 'Henrique Lima'
const social = '@HenriqueSolids'

console.log(bold`My name is ${name} I'm a Web Developer, if you want to find me searth for ${social}`)