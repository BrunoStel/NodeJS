import {Router, Request, Response } from 'express'

const router = Router()

//Ex de rota estática
router.get('/', (req:Request, res:Response)=>{ //1 parametro = rota, 2 parametro = função callback
    res.send('Bem vindo à pagina do painel')
})

//Ex de rota estática
router.get('/contato', (req:Request, res:Response)=>{ //1 parametro = rota, 2 parametro = função callback
    res.send('Pagina contato do painel')
})

export default router