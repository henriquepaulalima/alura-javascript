import { Employee } from "./Employee.js";

export class Principal extends Employee{
    constructor(name, salary, cpf) {
        super(name, salary, cpf)
        this._bonus = 2
    }
}