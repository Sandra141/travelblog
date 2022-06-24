const express = require('express');
const app = express();
const data = require('./data.json');
var cors = require('cors');

app.use(cors(
));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(data)
})

app.listen(PORT, () => console.log('Server listening.'));