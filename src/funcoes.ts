/**
 * Funcoes
 */

function addNumber(x: number, y:number): number{
    return x + y;
}

function addToHello(name: string): string{
    return `Hello, ${name}`;
}

function callToPhone(phone: number | string): number | string{
    return phone;
}

async function getDataBase(id:number): Promise<string> {
    return await "Alex";
}

let phone = callToPhone("1234-3232");

console.log(phone);

let msn = addToHello("Alex");
console.log(msn);

let soma: number = addNumber(20, 30)
console.log("Resultado = " + soma )