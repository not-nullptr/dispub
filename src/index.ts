import fastify from "fastify";
import authController from "./authentication/authController";
import "reflect-metadata";
import { initializeDataSource } from "./db/initDB";
import * as dotenv from "dotenv";
import path from "path";
import fs from "fs";
import cors from "@fastify/cors";
import ws from "@fastify/websocket";
import { gatewayController } from "./gateway/gatewayController";

dotenv.config();

const app = fastify({
	https: {
		key: fs.readFileSync(path.join(__dirname, "../src/certs/testCA.key")),
		cert: fs.readFileSync(path.join(__dirname, "../src/certs/testCA.pem")),
	},
});

initializeDataSource().then(() => {
	app.register(cors);
	app.register(ws);
	app.register(gatewayController);
	app.register(authController);

	app.listen({ port: 1443 }, (err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		console.log(`Server listening at ${address}`);
	});
	// initializeGateway(() => {
	// 	console.log("Gateway initialized!");
	// });
});
