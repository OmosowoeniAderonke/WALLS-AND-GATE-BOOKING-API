let instance;

class CoreConstraint {
	constructor() {
		if (instance) return instance;
		instance = this;
	}

	getBookings = () => ({
		page: {
			presence: true,
			numericality: {
				onlyInteger: true,
			},
		},
		size: {
			presence: true,
			numericality: {
				onlyInteger: true,
				greaterThan: 0,
			},
		},
		term: {
			length: {
				minimum: 2,
			},
		},
		department: {
			inclusion: {
				within: [
					"INNOVATIVE_TECHNOLOGY_SOLUTIONS",
					"CREATIVE_AND_PRINTS_SOLUTION",
					"DIGITAL_MARKETING_SOLUTIONS",
					"WALLS_AND_GATES_ACADEMY",
				],
				message:
					"^Department must be one of 'INNOVATIVE_TECHNOLOGY_SOLUTIONS', 'CREATIVE_AND_PRINTS_SOLUTION', 'DIGITAL_MARKETING_SOLUTIONS', or 'WALLS_AND_GATES_ACADEMY'",
			},
		},
		startDate: {
			datetime: true,
		},
		endDate: {
			datetime: true,
		},
	});

	createBooking = () => ({
		fullName: {
			presence: true,
			length: {
				minimum: 5,
			},
		},
		email: {
			presence: true,
			email: true,
		},
		department: {
			presence: true,
			length: {
				minimum: 2,
			},
		},
		preferredDate: {
			presence: true,
			datetime: true,
		},
		message: {
			length: {
				minimum: 5,
			},
		},
		phoneNumber: {
			presence: true,
			length: {
				minimum: 10,
			},
		},
	});
}

module.exports = CoreConstraint;
