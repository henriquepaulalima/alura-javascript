export class Account { // Abstract class, shouldn't be instantiate
    constructor(openingBalance, client, agency) {
        if(this.constructor == Account) {
            throw new Error('Account is a abstract class')
        }

        this._balance = openingBalance
        this._client = client
        this._agency = agency
    }
    
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
    
    Deposit(value) {
        if(value <= 0) {
            return
        }
        
        this._balance += value
    }
    
    Draw(value) { // Abstract method, shouldn't be instantiate
        throw new Error('Draw is a abstract method')
    }
    
    _Draw(value, tax) {
        const draweeValue = value * tax
        if(this._balance >= draweeValue) {
            this._balance -= draweeValue
            return draweeValue
        }

        return 0
    }
    
    Transfer(value, account) {
        const draweeValue = this.Draw(value)
        account.Deposit(draweeValue)
    }
}