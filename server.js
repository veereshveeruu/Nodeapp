const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => 
  res.send('🚀 Hello from Node.js CI/CD Pipeline App! hello veeresh you can logoff now ');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

