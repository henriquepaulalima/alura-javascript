"use strict"

const code = () => {
    myName = 'henrique' // Uncaught ReferenceError returned because of strict mode
    return console.log('My name is ' + myName)
}

code()
