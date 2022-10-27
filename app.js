const express = require('express')
require('dotenv').config()
const todosRouter = require('./router/todos.router').router

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8000



app.get('/', (req, res) => {
    res.send("<h1>Hoy trabajamos serios</h1>")
})

app.use('/todos', todosRouter)

/*

leer todos los todos
leer un todo en especifico
crear un todo
eliminar un todo
editar un todo

*/

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})