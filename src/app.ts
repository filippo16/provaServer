import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 80;

app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Errore nella lettura del file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});