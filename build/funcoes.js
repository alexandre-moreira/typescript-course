"use strict";
/**
 * Funcoes
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello, ${name}`;
}
function callToPhone(phone) {
    return phone;
}
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield "Alex";
    });
}
let phone = callToPhone("1234-3232");
console.log(phone);
let msn = addToHello("Alex");
console.log(msn);
let soma = addNumber(20, 30);
console.log("Resultado = " + soma);
