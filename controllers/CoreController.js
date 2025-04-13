const validate = require("validate.js");
const CoreService = require("../services/CoreService");
const CoreConstraint = require("../constraints/CoreConstraint");

let instance;

class CoreController {
	#service;
	#constraint;

	constructor() {
		if (instance) return instance;

		this.#service = new CoreService();
		this.#constraint = new CoreConstraint();

		instance = this;
	}

	getBookings = async (req, res) => {
		try {
			const validation = validate(
				req.query,
				this.#constraint.getBookings()
			);

			if (validation) {
				return res.status(422).json({
					message: "validation error",
					data: validation,
				});
			}

			this.#service.getBookings(req.query, (resp) => {
				res.status(resp.status).json(resp);
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	};

	createBooking = async (req, res) => {
		try {
			const validation = validate(
				req.body,
				this.#constraint.createBooking()
			);

			if (validation) {
				return res.status(422).json({
					message: "validation error",
					data: validation,
				});
			}

			this.#service.createBooking(req.body, (resp) => {
				res.status(resp.status).json(resp);
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	};
}

module.exports = CoreController;
