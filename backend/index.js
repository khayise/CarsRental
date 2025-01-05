const express = require('express');

require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const carsRouter = require('./routes/Cars.router');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
const DB_URL = process.env.DATABASE_URL;

app.listen(PORT, () => console.log('server was started on port ' + PORT));
app.use(carsRouter);
// app.get('/', (req, res) => res.status(200).send)

mongoose
	.connect(DB_URL)
	.then(() => console.log('conected to db'))
	.catch((e) => console.log('mongo error: ' + e.message));

module.exports = app;
