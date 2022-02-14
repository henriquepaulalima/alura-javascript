"use strict"

class Student {
    get grade() {
        return 6
    }
}

let student = new Student()
student.grade = 10 // Uncaught TypeError returned because of strict mode
