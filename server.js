const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Porta do servidor backend

// Middleware para habilitar o CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rota de exemplo
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
