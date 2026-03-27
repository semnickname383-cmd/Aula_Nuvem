import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send("Servidor rodando na nuvem 🚀 ")
});

app.get('/Teste', (req, res)=>{
    res.send("Teste")
})

const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log("Servidor Rodando")
})