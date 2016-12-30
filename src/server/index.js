const path = require('path');
const express = require('express');
const app = express();

app.use('/build', express.static(path.resolve(__dirname, '../../build')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(6121, () => {console.log('App started on localhost:6121.')});
