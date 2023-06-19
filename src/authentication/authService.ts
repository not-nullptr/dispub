import base64url from "base64url";
import { getDiscordDate } from "../util/id";
import * as crypto from "crypto";

/**
 * @description Generates a random snowflake ID, consisting of 41 bits of time, 10 bits of unsigned randomness, and 12 bits of sequence
 * @param {string=} [epoch=1420070400000] The epoch to use for the snowflake. Twitter's epoch is `1288834974657`, Discord's is `1420070400000`. Defaults to Discord's epoch.
 * @returns {string} A random snowflake ID
 * @example const id = generateSnowflake(); // 1119762871952658432
 * @see https://discord.com/developers/docs/reference#snowflakes & https://developer.twitter.com/en/docs/twitter-ids
 */
export function generateSnowflake(epoch?: bigint): string {
	const time = BigInt(getDiscordDate(epoch));
	const random = BigInt(Math.floor(Math.random() * 1024));
	const sequence = BigInt(0);
	return (time << BigInt(22)) + (random << BigInt(12)) + sequence + "";
}

/**
 * @description Generates a random token, consisting of a base64url-encoded user ID, a base64url-encoded timestamp, and a base64url-encoded HMAC-SHA256
 * @param {string} id The user ID
 * @param {bigint=} epoch The epoch to use for the snowflake. Twitter's epoch is `1288834974657`, Discord's is `1420070400000`. Defaults to Discord's epoch.
 * @returns {string} A random token
 */

export function generateToken(id: string, epoch?: bigint) {
	const base64 = base64url.encode(id);
	const time = base64url.encode(getDiscordDate(epoch));
	const crypt = base64url.encode(
		crypto
			.createHmac("sha256", process.env.TOKEN_SECRET || "secret")
			.digest("binary")
			.toString()
	);
	return `${base64}.${time}.${crypt}`;
}
