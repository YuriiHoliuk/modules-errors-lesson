const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/content', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'carrot',
    },
    {
      id: 2,
      title: 'banana',
    },
  ]);
});

app.get('/empty', (req, res) => {
  res.sendStatus(204);
});

app.get('/error', (req, res) => {
  res.status(400);
  res.json({ message: 'Bad request' });
});

app.listen(4000);
