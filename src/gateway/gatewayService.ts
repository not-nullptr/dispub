import ZlibSync from "zlib-sync";
import erlpack from "erlpack";
import { GatewayPacket } from "./gatewayTypes";

export function decodePacket<T>(
	packet: Buffer,
	inflator: ZlibSync.Inflate
): GatewayPacket<T> {
	try {
		packet = Buffer.from(packet);
		if (
			packet.length >= 4 &&
			packet.readUInt32BE(packet.length - 4) === 0xffff
		) {
			inflator.push(packet, ZlibSync.Z_SYNC_FLUSH);
			if (!inflator.result) throw new Error("No result");
			packet = Buffer.from(inflator.result);
			// console.log(erlpack.unpack(data));
			try {
				return erlpack.unpack(packet);
			} catch (e) {
				return JSON.parse(packet.toString());
			}
		} else {
			inflator.push(packet, false);
		}
	} catch (e) {
		return {} as GatewayPacket<T>; // very unsafe
	}
	return {} as GatewayPacket<T>; // very unsafe
}

// export function encodePacket<T>(
// 	packet: GatewayPacket<T>,
// 	deflator: zlib.Deflate,
// 	type?: "erl" | "json"
// ): Promise<Buffer> {
// 	return new Promise<Buffer>((resolve, reject) => {
// 		const packedData =
// 			type === "erl" ? erlpack.pack(packet) : JSON.stringify(packet);
// 		deflator.write(packedData);
// 		deflator.flush(() => {
// 			deflator.end(() => {
// 				resolve(Buffer.concat([deflator.read(), Buffer.alloc(4)]));
// 			});
// 		});
// 	});
// }
