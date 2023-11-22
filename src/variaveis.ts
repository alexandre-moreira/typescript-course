/**
 * Variaveis
 */

// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Alex";
let idade: number = 20;
let altura: number = 1.70;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retornoView:any = false;
let retorno:void;

//objeto - sem previsibilidade
let produto: object = {
    name: "Alex",
    cidade: "Sao Paulo",
    idade: 30
}

//objeto tipado - com previsibilidade

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;

}

let meuProduto: ProdutoLoja = {
    nome: "Sapato",
    preco: 89.99,
    unidades: 5
}
