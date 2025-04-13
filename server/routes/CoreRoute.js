let express = require("express");
let CoreController = require("../../controllers/CoreController");

let instance;
class CoreRouter {
	#router;
	#controller;

	constructor() {
		if (instance) return instance;

		this.#router = express.Router();
		this.#controller = new CoreController();
		this.#configure();

		instance = this;
	}

	#configure = () => {
		this.#router.get("/bookings", this.#controller.getBookings);

		this.#router.post("/bookings", this.#controller.createBooking);
	};

	getRouter = () => {
		return this.#router;
	};
}

module.exports = CoreRouter;
