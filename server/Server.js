"use strict";
const express = require("express");
const CoreRoute = require("./routes/CoreRoute");

let instance;
class Server {
	#app;
	#port;
	#swaggerspec;

	constructor(port) {
		if (instance) return instance;

		this.#port = port;
		this.#configure();
		this.#buildRoutes();

		instance = this;
	}

	#configure = () => {
		this.#app = express();
		this.#app.use(express.json());

		this.#app.use((req, res, next) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader(
				"Access-Control-Allow-Methods",
				"POST,GET,OPTIONS,PUT"
			);
			res.setHeader(
				"Access-Control-Allow-Headers",
				"Content-Type, Authorization, source, auth_mode"
			);
			res.setHeader("Access-Control-Allow-Credentials", "true");

			if (req.method === "OPTIONS") {
				return res.sendStatus(200);
			}
			next();
		});
	};

	#buildRoutes = () => {
		this.#app.get("/", (req, res) => {
			const message = {
				info: "You have reached walls and gates server",
				baseUrl: "/api",
				health: "/api/health",
			};
			res.json(message);
		});

		this.#app.use("/api", new CoreRoute().getRouter());

		this.#app.get("/api/health", async (req, res) => {
			const healthInfo = {
				appMemUsage: (
					process.memoryUsage().heapUsed /
					1024 ** 3
				).toFixed(2),
			};

			res.status(200).json(healthInfo);
		});
	};

	start = () => {
		this.#app.listen(this.#port, async () => {
			console.log(
				`walls and gates server is now listening on port ${this.#port}`
			);
		});
	};

	getServerApp = () => {
		return this.#app;
	};
}

module.exports = Server;
