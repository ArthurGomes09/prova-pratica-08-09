const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const PORT = 3333
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
//Middleware para arquivos estáticos


app.get('/livros',(req,res)=>{
    return res.render('livros')
})

app.post('/livros/inserirlivro',(req,res)=>{
  const {nome_livro,categoria,descricao,preco,quant_livros} = req.body
    const sql = `INSERT INTO biblioteca (
    "nome_livro", 
    "categoria",
    "descricao",
    "preco",
    "quant_livros") VALUES 
    (${nome_livro},${categoria},${descricao},${preco},${quant_livros});`
    conn.query(sql,(err)=>{
      if(err){
        console.log(err)
      }
      return res.redirect({'inserirlivro':inserirlivro})
  })
  console.log(sql)
})
    






app.get('/cadastrar', (req, res)=>{
  return res.render('cadastrar')
})

app.get('/', (req, res)=>{
  return res.render('home')
})
  
app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})
      





