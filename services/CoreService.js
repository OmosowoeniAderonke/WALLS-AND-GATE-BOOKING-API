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
					{ fullName: { contains: query.term, mode: "insensitive" } },
					{ email: { contains: query.term, mode: "insensitive" } },
					{
						phoneNumber: {
							contains: query.term,
							mode: "insensitive",
						},
					},
				];
			}

			if (query.department) {
				whereClause.department = {
					contains: query.department,
					mode: "insensitive",
				};
			}

			if (query.startDate || query.endDate) {
				const start = query.startDate
					? new Date(query.startDate)
					: null;
				const end = query.endDate ? new Date(query.endDate) : null;

				if (start && !isNaN(start.getTime())) {
					start.setHours(0, 0, 0, 0);
				}

				if (end && !isNaN(end.getTime())) {
					end.setHours(23, 59, 59, 999);
				}

				whereClause.preferredDate = {
					...(start ? { gte: start } : {}),
					...(end ? { lte: end } : {}),
				};
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
					total: bookingsCount,
					page: page || 1,
					hasPrevious,
					hasNext,
					total_pages,
					per_page: size || bookingsCount,
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

	createBooking = async (payload, callback) => {
		try {
			payload.preferredDate = new Date(payload.preferredDate);
			const booking = await this.#prisma.booking.create({
				data: payload,
			});

			callback({
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
