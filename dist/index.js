"use strict";
//Modo antigo de importar
//const Matematica = require('./math')
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matematica = __importStar(require("./math")); //importar tudo
const math_1 = require("./math"); //Importa somente as funções, variaveis desejadas, dispensando a necessidade
//de colocar Matematica., agora pode ser utilizado como o proprio nome da função/variavel importada
//Importando pelo método default
//import Matematica from './math' -Importanto todas as funções
const validator_1 = __importDefault(require("validator")); //Importando a lib instalada, aqui ele busca na pasta 'node_modules'
let n1 = 10;
let n2 = 5;
console.log(`SOMA: ${(0, math_1.somar)(n1, n2)}`); //Importanto pelo nome da função
console.log(`SOMA: ${Matematica.multiplicar(n1, n2)}`); //Importanto pelo * all
console.log(`SOMA: ${(0, math_1.subtrair)(n1, n2)}`);
console.log(validator_1.default.isEmail('brunostel@gmail'));
console.log(validator_1.default.isIP('127.0.0.1'));
