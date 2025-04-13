const { PrismaClient } = require("@prisma/client");

let instance;
class DatabaseEngine {
	constructor() {
		if (instance) return instance;

		this.prisma = new PrismaClient();

		instance = this;
	}

	async connect() {
		try {
			await this.prisma.$connect();
			console.log("✅ Connected to the database");
		} catch (error) {
			console.error("❌ Database connection failed:", error);
			process.exit(1);
		}
	}

	get client() {
		return this.prisma;
	}
}

module.exports = DatabaseEngine;
