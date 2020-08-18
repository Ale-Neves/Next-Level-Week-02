//SERVIDOR
// pega dependencia de outro progero e usa neste
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')
const nunjucks = require('nunjucks') //importando o nunjucks

// Fazendo a configuração do nunjucks( template engine)
nunjucks.configure('src/views',
{
    express: server, //passando o obejto server
    noCache: true, //desativando o cache 
})

server
//rece os dados do req.body
.use(express.urlencoded({extended: true}))

// configurar aquivos estaticos (css, scripts, imagens)
.use(express.static("public")) /*todo .use é uma configuração do servidor*/
// rotas da aplicação
.get("/", pageLanding) /*colocando a rota para o servidor achar*/
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)