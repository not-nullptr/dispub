export const flags = {
	STAFF: 1 << 0,
	PARTNER: 1 << 1,
	HYPESQUAD: 1 << 2,
	BUG_HUNTER_LEVEL_1: 1 << 3,
	HYPESQUAD_ONLINE_HOUSE_1: 1 << 6,
	HYPESQUAD_ONLINE_HOUSE_2: 1 << 7,
	HYPESQUAD_ONLINE_HOUSE_3: 1 << 8,
	PREMIUM_EARLY_SUPPORTER: 1 << 9,
	TEAM_PSEUDO_USER: 1 << 10,
	BUG_HUNTER_LEVEL_2: 1 << 14,
	VERIFIED_BOT: 1 << 16,
	VERIFIED_DEVELOPER: 1 << 17,
	CERTIFIED_MODERATOR: 1 << 18,
	BOT_HTTP_INTERACTIONS: 1 << 19,
	ACTIVE_DEVELOPER: 1 << 22,
} as { [flagName: string]: number };

export function fromFlagsNum(flag: number): string[] {
	const setFlags = [];
	for (const flagName in flags) {
		if (flag & flags[flagName]) {
			setFlags.push(flagName);
		}
	}

	return setFlags;
}

export function toFlagsArray(flagNames: string[]): number {
	let flag = 0;
	for (const flagName of flagNames) {
		if (flags[flagName]) {
			flag |= flags[flagName];
		}
	}
	return flag;
}

export function hasFlag(flag: number, flagName: string): boolean {
	return !!(flag & flags[flagName]);
}
