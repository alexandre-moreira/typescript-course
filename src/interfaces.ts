/**
 * Interfaces
 */

// Type x Interfaces
type robot = {
    id: number | string;
    name: string;
}

interface robot2{
    id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "eva"
}

const bot2: robot2 = {
    id: 1,
    name: "eva",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log(bot1.id = 1);
console.log(bot2.name = "Phill");

class Pessoa implements robot{
    id: string | number;
    name: string;
    
    constructor(id: string | number, name: string){
        this.id = id,
        this.name = name
    }

    sayHello(): string{
        return `Hello, ${this.name}`;
    }
}

const p = new Pessoa(1, "gutsman");

console.log(p.sayHello())