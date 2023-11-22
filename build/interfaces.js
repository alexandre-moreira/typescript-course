"use strict";
/**
 * Interfaces
 */
const bot1 = {
    id: 1,
    name: "eva"
};
const bot2 = {
    id: 1,
    name: "eva",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1.id = 1);
console.log(bot2.name = "Phill");
class Pessoa {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    sayHello() {
        return `Hello, ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
