const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const carsRouter = require('./routes/Cars.router')




const app = express()
app.use(express.json())
app.use(cors())


const PORT = 3000
const DB_URL = 'mongodb+srv://dedeshd:dedeshd@datebase.kzgfvbx.mongodb.net/CarsRent?retryWrites=true&w=majority'

app.listen(PORT, () => console.log('server was started on port ' + PORT))
app.use(carsRouter)
// app.get('/', (req, res) => res.status(200).send)

mongoose.connect(DB_URL)
.then(() => console.log('conected to db'))
.catch((e) => console.log('mongo error: '+e.message))