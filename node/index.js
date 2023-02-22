const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, resp) => {
  resp.send('<h1>Teste com Express!!!</h1>')
})

app.listen(porta, ()=> {
  console.log('Rodando na porta ' + porta)
})