const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    return res.json({ message: 'Versionamento Git' });
});

app.listen(3333);