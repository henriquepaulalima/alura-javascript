import { Client } from "./Client.js";

export class CheckingAccount {
    static accountNumber = 0
    agency;

    _client;
    _balance = 0; // #balance = 0

    set client(newValue) {
        if (newValue instanceof Client) {
            this._client = newValue        
        }
    }

    get client() {
        return this._client
    }

    get balance() {
        return this._balance
    }

    constructor(client, agency) {
        this.client = client
        this.agency = agency
        CheckingAccount.accountNumber += 1
    }

    Deposit(value) {
        if(value <= 0) {
            return
        }

        this._balance += value
    }

    Draw(value) {
        if(this._balance >= value) {
            this._balance -= value
            return value
        }
    }

    Transfer(value, account) {
        const draweeValue = this.Draw(value)
        account.Deposit(draweeValue)
    }
}