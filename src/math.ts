

export const somar = (num1:number, num2:number) : number =>{
    return num1 + num2
}
export const subtrair = (num1:number, num2:number) : number =>{
    return num1 - num2
}
export const multiplicar = (num1:number, num2:number) : number =>{
    return num1 * num2
}

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