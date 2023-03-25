const express = require('express');
const app = express();

const inventory = [
  { name: 'T-shirt', quantity: 10, price: 15 },
  { name: 'Jeans', quantity: 5, price: 50 },
  { name: 'Sneakers', quantity: 7, price: 80 }
];

app.get('/', (req, res) => {
  res.send('Bonjour');
});

app.get('/inventory', (req, res) => {
  res.json(inventory);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
