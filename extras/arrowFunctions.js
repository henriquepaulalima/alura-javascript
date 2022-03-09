console.log('===== Arrow Functions =====\n')

class PrintModule {
  constructor() {
    this._code = 10
  }
  print(names) {
    // names.forEach(function(name) {
    //   console.log(`${this._code}: ${name}`)
    // }.bind(this))

    names.forEach((name) => {
      console.log(`${this._code}: ${name}`)
    })
  }
}

const teacher = ['Ana', 'Lucas', 'Mari', 'Gabi']
const printer = new PrintModule()
printer.print(teacher)


const sum = (num1, num2) => console.log(`\n${num1} + ${num2}: ${num1 + num2}`)
sum(3,7)


const arrow = () => {}
console.log(`\n${arrow.name}`)

const Constructor = () => {}
//new Constructor() // Constructor is not a constructor