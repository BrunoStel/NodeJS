import {Router, Request, Response } from 'express'

import * as HomeController from '../controllers/homeController'

const router = Router()

//Ex de rota estática
// router.get('/', (req:Request, res:Response)=>{ //1 parametro = rota, 2 parametro = função callback
//     res.send('Olá Mundo')
// })


//Ex de rota dinâmina
router.get('/voo/:origem-:destino', (req:Request, res:Response)=>{  //:algumacoisa indica um valor dinamico pra rota
    // let origem:string = req.params.origem
    // let destino:string = req.params.destino
    let {origem, destino } = req.params //Definindo que as variaveis origem e destino irão receber os valores dos
    //parametros dinamicos, como possuem mesmo nome, posso utilizar a construção com objeto
    
    res.send(`Procurando voos de origem ${origem} até ${destino}`)
})

//Outro exemplo
router.get('/pessoa/:nome', (req:Request, res:Response)=>{
   let {nome} = req.params //O método req.params sempre retorna uma string, por isso o typescript aceitou sem definir o tipo de variavel
    res.send(`Olá ${nome}`)
})


//Utilizando engine template - Explicaçoes no arquivo homeController (Conceito MVC)
router.get('/', HomeController.products)


router.get('/contato', (req:Request, res:Response)=>{
    res.render('pages/contato')
 })

 router.get('/sobre', (req:Request, res:Response)=>{
    res.render('pages/sobre')
 })
 router.get('/starbucks', (req:Request, res:Response)=>{
    res.render('pages/starbucks')
 })

export default router