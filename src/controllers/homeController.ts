import { Request, Response } from "express"

import {Product } from '../models/Product'

 

 export const products = (req:Request, res:Response)=>{
    let user: string = 'Bruno'
    let age: number = 15
    let showOld:boolean = false

    if(age>18){
        showOld = true
    }

    let products = Product.getAll() //Utilizando a função do model


    let frases = [
        'Frase 1',
        'Frase 2'
    ]

    res.render('pages/home',{
        user, //Enviando variaveis para o mustache
        showOld,
        products,
        frases
    }) //Rendezirando como resposta, o HTML q tem nome 'home', só isso já basta, pois ja foi configurado
    //a pasta q possui o html
}