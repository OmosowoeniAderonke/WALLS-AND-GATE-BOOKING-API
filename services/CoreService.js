const DatabaseEngine = require("../utils/DatabaseEngine");

let instance;

class CoreService {
	#dbEngine;
	#prisma;

	constructor() {
		if (instance) return instance;

		this.#dbEngine = new DatabaseEngine();
		this.#prisma = this.#dbEngine.client;

		instance = this;
	}

	getBookings = async (query, callback) => {
		try {
			const page = parseInt(query.page);
			const size = parseInt(query.size);

			let whereClause = {};

			if (query.term) {
				whereClause.OR = [
					{ name: { contains: query.term, mode: "insensitive" } },
					{ email: { contains: query.term, mode: "insensitive" } },
					{ phone: { contains: query.term, mode: "insensitive" } },
				];
			}

			const [bookingsCount, bookings] = await Promise.all([
				this.#prisma.booking.count({ where: whereClause }),
				this.#prisma.booking.findMany({
					where: whereClause,
					skip: (page - 1) * size,
					take: size,
					orderBy: { createdAt: "desc" },
				}),
			]);

			const total_pages = size
				? Math.ceil(bookingsCount / size)
				: undefined;
			const hasPrevious = page ? page > 1 : false;
			const hasNext =
				page && size && total_pages ? page < total_pages : false;

			callback({
				status: 200,
				data: {
					bookings,
					total: totalBillings,
					page: page || 1,
					hasPrevious,
					hasNext,
					total_pages,
					per_page: size || totalBillings,
				},
			});
		} catch (error) {
			console.log(error);
			callback({
				status: 500,
				error: error.message,
			});
		}
	};

	createBooking = async (payload) => {
		try {
			const booking = await this.#prisma.booking.create({
				data: payload,
			});

			res.status(201).json({
				status: 201,
				data: booking,
			});
		} catch (error) {
			console.log(error);
			callback({
				status: 500,
				error: error.message,
			});
		}
	};
}

module.exports = CoreService;
