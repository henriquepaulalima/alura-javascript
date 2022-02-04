import { Client } from "./Client.js"
import { Principal } from "./employees/Principal.js"
import { Manager } from "./employees/Manager.js"
import { AuthenticationSystem } from "./AuthenticationSystem.js"

const client1 = new Client('Julia', 78912345603, 'pass789654')
const principal = new Principal('Vitor', 7000, 12098745601)
principal.RegisterPassword('pass123987')
const manager = new Manager('Luana', 5000, 45612378902)
manager.RegisterPassword('pass456321')

const loginPrincipal = AuthenticationSystem.login(principal, 'pass123987')
const loginManager = AuthenticationSystem.login(manager, 'pass456321')
const loginClient = AuthenticationSystem.login(client1, 'pass789654')

console.log(loginPrincipal, loginManager, loginClient)