import { Client } from "./Client.js"
import { CheckingAccount } from "./CheckingAccount.js"

const client1 = new Client('Lucas', 11122233344)
const checkingAccount1 = new CheckingAccount(client1, 1001)

const client2 = new Client('Alice', 55566677788)
const checkingAccount2 = new CheckingAccount(client2, 1001)

console.log(checkingAccount1, checkingAccount2)