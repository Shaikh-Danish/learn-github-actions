const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(8912, () => {
  console.log('Server running on port 8912');
});
