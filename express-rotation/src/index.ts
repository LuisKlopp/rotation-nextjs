import express = require('express');
import fs = require('fs');
import cors = require('cors');
import path = require('path');
import bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const port = 4001;

app.listen(port, () => {
  console.log('server listening on port', port);
});

app.use('/api/movie', require('./routes/movieRouter'));
