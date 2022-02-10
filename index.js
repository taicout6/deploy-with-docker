require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  res.send(`<h1>Escutando na porta ${PORT}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});
