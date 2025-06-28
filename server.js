const express = require('express');
const app = express();

// Use port 80 or environment variable (useful for Docker)
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js CI/CD Pipeline App! Hello Veeresh, you can log off now.');
});

app.listen(port, () => {
  console.log(`✅ App is running at: http://localhost:${port}`);
});

