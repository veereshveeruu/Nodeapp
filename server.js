const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js CI/CD Pipeline App!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

