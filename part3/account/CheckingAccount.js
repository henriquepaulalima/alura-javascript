import { Account } from "./Account.js";

export class CheckingAccount extends Account {
    static accountNumber = 0

    constructor(client, agency) {
        super(0, client, agency)
        CheckingAccount.accountNumber += 1
    }

    Draw(value) {
        let tax = 1.1
        return this._Draw(value, tax)
    }
 }