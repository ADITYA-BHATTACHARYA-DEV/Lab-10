const express = require('express');
const app = express();

app.use(express.static('build'));

app.listen(3000, () => console.log('App running on http://localhost:3000'));
