# Curso TypeScript

## Aula 01 - Introducao
    [x] O que vem por aí
    [x] O que é e por que utilizar TypeScript
    [x] Vendo na prática a maior vantagem do TypeScript

## Aula 02 - Instalando TypeScript
    [x] Instalando o TypeScript  Localmente
        - npm install typescript -D
    [x] Como rodar código TypeScript
        - npx tsc src/index.ts
        - node src/index.js
    [x] Criando e configurando o arquivo TSConfig
        - npx tsc --init
        - Realizar as seguintes configuracoes no arquivo tsconfig.json, tirando comentario
            [x]  "rootDir": "./src",  
            [x]  "outDir": "./build", 
    [x] Criando um script de execução
        - Criar o seguinte codigo no arquivo packge.json em scripts:
            - "start": "npx tsc && node build/index.js"
        - Executar o comando no terminal
            - npm run start
## Aula 03 - Tipos no Typescript
    [x] Trabalhando com tipos de variáveis
    [x] Trabalhando com objects
    [x] Trabalhando com arrays
    [x] Trabalhando com arrays de multiplos tipos
    [x] Trabalhando com Tuplas
    [x] Reaproveitando conhecimentos de Javascript
    [x] Trabalhando com Datas

## Aula 04 - Funcoes
    [x] Funcoes
    [x] Funcoes com multiplos tipos
    [x] Funcoes Async