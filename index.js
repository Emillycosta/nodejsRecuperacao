// Não é mais tudo !!!!
const express = require('express')
const routers = require('./src/routes/pessoa')
const database = require('./src/config/database')


// Instanciar um express
const app = express()
app.use(express.json())
app.use(routers)
const PORT =3000
database.db
.sync({force:false})
.then((_) =>{
    console.info("BANCO CONECTADO COM SUCESSO")
    app.listen(PORT, () => {
        console.info(`Servidor rodando na porta 3000 ${PORT}`)
    })
    
})
// Middleware json - aceita json no body
app.use(express.json())
.catch((e)=>{console.error`conexão falhou: ${e}`})
