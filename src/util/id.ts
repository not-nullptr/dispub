export function getDiscordDate(epoch?: bigint) {
	return (
		BigInt(new Date().getTime()) - (epoch || BigInt(1420070400000))
	).toString();
}
