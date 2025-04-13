const swaggerJSDoc = require("swagger-jsdoc");

let instance;

class Swagger {
	#swaggerDefinition;
	#options;

	constructor() {
		if (instance) return instance;

		this.#swaggerDefinition = {
			info: {
				title: "Walls and Gate Booking API",
				version: "1.0.0",
				description: "Api for booking",
			},
			basePath: "/",
		};

		this.#options = {
			swaggerDefinition: this.#swaggerDefinition,
			apis: ["./server/routes/*.js"],
		};

		instance = this;
	}

	getSwaggerSpec = () => swaggerJSDoc(this.#options);
}

module.exports = Swagger;
