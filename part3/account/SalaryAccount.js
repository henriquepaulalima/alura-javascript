import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor(client) {
        super(0, client, 1002)
    }

    Draw(value) {
        const tax = 1.01
        return this._Draw(value, tax)
    }
}