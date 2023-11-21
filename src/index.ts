type heroi = {
    name: string;
    volgo: string;
}

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

printaObjeto({
    name: "Alex",
    volgo: "Mano"
})