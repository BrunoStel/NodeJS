import express, {Request, Response} from 'express' //Importando types Request e Reponse
import path from 'path'

//Importando o template engine
import mustache from 'mustache-express'

//Importando as rotas
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'


//Nomeando o servidor
const server = express()

//Configurando o servidor para o template importado
server.set('view engine', 'mustache')
server.set('views',path.join(__dirname, 'views')) //Dizendo onde estão meus arquivos html
server.engine('mustache',mustache())


//Habilitando uma pasta publica
server.use(express.static(path.join(__dirname, '../public')))//Deixa a pasta acessivel - pública
//O path.join ele junta o diretorio onde está o dirname q é C:\Users\Bruno\Desktop\NodeJS\src + O SEGUNDO
//ARGUMENTO, q é voltando uma pastar ../, e indo pra public --Dessa forma deixa o caminho absoluto



//Iniciando as rotas importadas
server.use(mainRoutes) //Rotas do index.ts

server.use('/painel',painelRoutes) //Adicionando o prefixo /painel para usar as rotas criadas em painel.ts


//Criando a rota 404 - página não encontrada
server.use((req:Request, res:Response)=>{ //Configurando a pagina 404

    res.status(404).send('Página não encontrada!')
})




//Ligando o servidor na postar 3000
server.listen(3000)  //Acessar em http://localhost:3000
//server.listen(80) - Acessar em http://localhost
