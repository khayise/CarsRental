const Cars = require('../models/Cars.model');

class CarsController {
	async getAll(req, res) {
		try {
			const cars = await Cars.find({}).sort({ basePrice: 1 });
			res.status(200).send(cars);
		} catch (error) {
			res.status(404).send();
		}
	}

	async getById(req, res) {
		try {
			const { id } = req.params;
			const car = await Cars.findById({ _id: id });
			res.status(200).json(car);
		} catch (error) {
			res.status(404).send();
		}
	}
}

module.exports = new CarsController();
