"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = exports.subtrair = exports.somar = void 0;
const somar = (num1, num2) => {
    return num1 + num2;
};
exports.somar = somar;
const subtrair = (num1, num2) => {
    return num1 - num2;
};
exports.subtrair = subtrair;
const multiplicar = (num1, num2) => {
    return num1 * num2;
};
exports.multiplicar = multiplicar;
//Forma antiga de exportar
// module.exports.somar = somar
// module.exports.subtrair = subtrair
// module.exports.multiplicar = multiplicar
//Forma de exportar de uma unica vez -Neste caso só posso importar tudo, nao posso escolher o que quero importar
// export default{
//     somar,
//     subtrair,
//     multiplicar
// }
