const Cars = require('../models/Cars.model');

class CarsController {
	async getAll(req, res) {
		try {
			const search = req.query;
			const cars = await Cars.find({})
				.where('basePrice')
				.gte(search.minPrice ? search.minPrice : 0)
				.lte(search.maxPrice ? search.maxPrice : Infinity)
				.sort({ basePrice: 1 });
			res.status(200).send(cars);
		} catch (error) {
			console.log(error.message);
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

	async getMaxCarPrice(req, res) {
		try {
			const maxCarPrice = await Cars.findOne().sort({ basePrice: -1 });
			console.log(maxCarPrice);
			res.status(200).json(maxCarPrice.basePrice);
		} catch (error) {
			console.log(error.message);
			res.status(404).send();
		}
	}
}

module.exports = new CarsController();
