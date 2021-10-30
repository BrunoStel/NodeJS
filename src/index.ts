
//****Pacotes instalados: ts-node(para nao precisar rodar o arquivo js, rodando diretamente do ts), 
//nodemon(para mostrar no console automaticamente), validator(para validação de inputs)
// @types/validator(para facilitar o uso do validator no arquivos .ts), express(para criação do servidor)
//@types/express(mesma logica do validator), path(pra configurar caminhos), mustache-express(template engine)
//@types/mustache-express


//Modo antigo de importar
//const Matematica = require('./math')

import * as Matematica from './math' //importar tudo
import {somar, subtrair} from './math' //Importa somente as funções, variaveis desejadas, dispensando a necessidade
//de colocar Matematica., agora pode ser utilizado como o proprio nome da função/variavel importada


//Importando pelo método default
//import Matematica from './math' -Importanto todas as funções

import validator from 'validator' //Importando a lib instalada, aqui ele busca na pasta 'node_modules'


let n1: number = 10
let n2: number = 5

console.log(`SOMA: ${somar(n1,n2)}`) //Importanto pelo nome da função
console.log(`SOMA: ${Matematica.multiplicar(n1,n2)}`) //Importanto pelo * all
console.log(`SOMA: ${subtrair(n1,n2)}`)

console.log(validator.isEmail('brunostel@gmail'))
console.log(validator.isIP('127.0.0.1'))