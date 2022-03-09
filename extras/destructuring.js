console.log('===== Javascript Destructuring =====\n')

console.log('Uniting arrays to a single array');
const numEven = [2, 4, 6];
const numOdd = [1, 3, 5];
const nums = [...numEven, ...numOdd]; //Uniting arrays to a single array
console.log(nums);

console.log('\nSpreading array values to multiple variables')
const [num1, num2, ...otherNums] = [1, 2, 3, 4, 5];  //Spreading array values to multiple variables
console.log(num1, num2, otherNums);

console.log('\nAdding a default value to a variable')
const [name1 = 'Julia'] = []; //Default value
console.log(name1)

console.log('\nAdding keys to objects')
const person = {
  name: 'Vitor',
  age: 23
}
const personWithPhone = {...person, phone: 5531933579082} //Adding keys to objects using destructuring
console.log(personWithPhone);

console.log('\nCreating a variable with the name of a object key')
const { name } = person; //Create a variable with the name of a object key
const { age } = person;
console.log(name, age);

console.log('\nSign a object of variables to functionso parameters')
function printData({name, age}) {
  console.log(name, age);
} //Sign a object of variables to functions parameters
printData(person);