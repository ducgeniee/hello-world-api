// index.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.HELLOWORLD_ENV || 'localhost';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Application is running on ${ENV} environment`);
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing
