const express = require('express');
const carsController = require('../controllers/Cars.controller');

const CarsRouter = express.Router();

CarsRouter.get('/cars', (req, res) => carsController.getAll(req, res));
CarsRouter.get('/cars/:id', (req, res) => carsController.getById(req, res));
CarsRouter.get('/maxPrice', (req, res) => carsController.getMaxCarPrice(req, res));
CarsRouter.get('/test', (req, res) => res.status(200).send('passed'));

module.exports = CarsRouter;
