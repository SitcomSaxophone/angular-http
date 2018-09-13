const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 5000;

let shells = [{type: 'Conch', color: 'pink'}, {type: 'Blue', color: 'blue'}];

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.get('/shells', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('listening on port: ', port);
});