import { Account } from "./Account.js"

export class SavingAccount extends Account {
    constructor(openingBalance, client, agency) {
        super(openingBalance, client, agency)
    }

    Draw(value) {
        const tax = 1.02
        return this._Draw(value, tax)
    }
}