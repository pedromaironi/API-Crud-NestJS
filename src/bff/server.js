const express = require('express');
const axios = require('axios');

const app = express();

app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.listen(4000, () => {
  console.log('BFF escuchando en el puerto 4000');
});