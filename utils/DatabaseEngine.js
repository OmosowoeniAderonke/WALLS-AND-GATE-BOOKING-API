const { PrismaClient } = require("@prisma/client");

class DatabaseEngine {
	static instance;

	constructor() {
		if (DatabaseEngine.instance) {
			return DatabaseEngine.instance;
		}

		this.prisma = new PrismaClient();
		DatabaseEngine.instance = this;
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
