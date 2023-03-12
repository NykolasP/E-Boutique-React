const { addUser } = require("../model/users")

class User {
    #id
    #surname
    #name
    #email
    #password

    constructor(surname,name,email,password,id = null) {
        this.#id = id
        this.#surname = surname
        this.#name = name
        this.#email = email
        this.#password = password
    }

    get email() {
        return this.#email
    }
    get surname() {
        return this.#surname
    }
    get name() {
        return this.#name
    }
    get id() {
        return this.#id
    }

    addUserBD() {
        addUser(this.#surname,this.#name,this.#email,this.#password)
    }
}

module.exports = User