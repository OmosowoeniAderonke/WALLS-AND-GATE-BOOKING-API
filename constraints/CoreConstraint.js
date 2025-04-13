let instance;

class CoreConstraint {
	constructor() {
		if (instance) return instance;
		instance = this;
	}

	getBookings = () => ({
		term: {
			presence: true,
			length: {
				minimum: 2,
			},
		},
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
			presence: true,
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
