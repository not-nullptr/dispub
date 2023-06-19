import { FastifyInstance } from "fastify";
import { decodePacket } from "./gatewayService";
import { HelloPayload } from "./gatewayTypes";
import zlib from "zlib-sync";
import { readFileSync, writeFileSync } from "fs";

(async () => {
	const inflator = new zlib.Inflate({
		chunkSize: 128 * 1024,
	});
	const buf = Buffer.from(
		"eJw0yUEOwiAQBdC7/DUYMOpirlKaZiwTrcGWwFRjCHfXjbuXvAYFrXtKBvWPLYO8M4ighrtw0auwTsuqUl6cQCd/PP9+0sKzgAYMATdWefPH5hLtXq1wVW+jfaR8CTAt4LnMZasB5A6ujxh7/wIAAP//",
		"base64"
	);
	const buf2 = readFileSync("application.bin");
	const res = decodePacket<HelloPayload>(buf, inflator);
	console.log(res);
	const res2 = decodePacket(buf2, inflator);
	console.log(writeFileSync("application.json", JSON.stringify(res2)));
})();

export function gatewayController(
	app: FastifyInstance,
	opts: any,
	done: () => void
) {
	// app.get("/", { websocket: true }, async (connection, req) => {
	// 	const deflator = zlib.createDeflate();
	// 	const inflator = zlib.createInflate();
	// 	connection.socket.send(
	// 		await encodePacket<HelloPayload>(
	// 			{
	// 				op: 10,
	// 				d: {
	// 					heartbeat_interval: 41250,
	// 				},
	// 				s: 0,
	// 				t: "HELLO",
	// 			},
	// 			deflator
	// 		)
	// 	);
	// 	connection.socket.on("connection", async () => {});
	// });
	done();
}
