import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

//Middleware para habilitar o cors

app.use(cors())

//Middleware para parsear JSON

app.use(express.json())

//Rota do exemplo

app.get('/api/message',(req,res)=>{
    res.json({message:"Hello from the Server!"});

});

//Iniciar o servidor

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})