const Server = require("./server/Server");
const ValidateJSInit = require("./utils/ValidateJSInit");
const DatabaseEngine = require("./utils/DatabaseEngine");
require("dotenv").config();

const main = async () => {
	try {
		const validateJSInit = new ValidateJSInit();
		validateJSInit.setup();

		const db = new DatabaseEngine();
		await db.connect();

		const serverEngine = new Server(process.env.PORT);
		await serverEngine.start();
	} catch (err) {
		console.error("❌ Startup failed:", err);
		process.exit(1);
	}
};

main();
