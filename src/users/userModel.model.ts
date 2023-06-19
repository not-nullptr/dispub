import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id!: string;
	@Column()
	username!: string;
	@Column({ select: false })
	password!: string;
	@Column({ select: false })
	email!: string;
	@Column()
	global_name!: string;
	@Column()
	avatar!: string;
	@Column()
	discriminator!: string;
	@Column()
	public_flags!: number;
	@Column()
	flags!: number;
	@Column()
	banner!: string;
	@Column()
	banner_color!: string;
	@Column()
	accent_color!: string;
	@Column()
	bio!: string;
	@Column()
	pronouns!: string;
	@Column()
	avatar_decoration!: string;
	@Column()
	// badges!: {
	// 	id: string;
	// 	description: string;
	// 	icon: string;
	// 	link?: string;
	// }[];
	badges!: string;
}

// const a = {
// 	user: {
// 		id: "437590329101910016",
// 		username: "sylver546",
// 		global_name: "Sylver",
// 		avatar: "39bb9481b14ca0b95afad66272e22dc0",
// 		discriminator: "0",
// 		public_flags: 64,
// 		flags: 64,
// 		banner: null,
// 		banner_color: "#f0d892",
// 		accent_color: 15784082,
// 		bio: "Sometimes I\u2019m kinda vigilant but if you\u2019re nice, I\u2019ll be nice\nhttps://en.pronouns.page/@Sylver\nCan help you with computers\n",
// 		pronouns: "",
// 		avatar_decoration: null,
// 	},
// 	connected_accounts: [
// 		{
// 			type: "steam",
// 			id: "76561198853927285",
// 			name: "Sylver",
// 			verified: true,
// 			metadata: {
// 				game_count: "142",
// 				item_count_dota2: "0",
// 				item_count_tf2: "6",
// 				created_at: "2018-08-16T17:32:49",
// 			},
// 		},
// 		{ type: "twitch", id: "183280039", name: "funnymiipfp", verified: true },
// 	],
// 	premium_since: "2022-06-13T08:33:26.193699+00:00",
// 	premium_type: 1,
// 	premium_guild_since: null,
// 	profile_themes_experiment_bucket: 4,
// 	mutual_guilds: [{ id: "403698615446536203", nick: "Becka" }],
// 	guild_member: {
// 		avatar: null,
// 		communication_disabled_until: null,
// 		flags: 2,
// 		joined_at: "2022-01-29T18:18:34.623000+00:00",
// 		nick: "Becka",
// 		pending: false,
// 		premium_since: null,
// 		roles: [
// 			"559418497571225606",
// 			"739155293732077608",
// 			"454917884637085706",
// 			"921611439863648307",
// 			"739155363223306261",
// 			"921615236669255701",
// 			"1054889110982098974",
// 		],
// 		unusual_dm_activity_until: null,
// 		user: {
// 			id: "437590329101910016",
// 			username: "sylver546",
// 			global_name: "Sylver",
// 			avatar: "39bb9481b14ca0b95afad66272e22dc0",
// 			discriminator: "0",
// 			public_flags: 64,
// 			avatar_decoration: null,
// 		},
// 		bio: "",
// 		pronouns: "",
// 		banner: null,
// 		mute: false,
// 		deaf: false,
// 	},
// 	user_profile: {
// 		bio: "Sometimes I\u2019m kinda vigilant but if you\u2019re nice, I\u2019ll be nice\nhttps://en.pronouns.page/@Sylver\nCan help you with computers\n",
// 		accent_color: 15784082,
// 		pronouns: "",
// 	},
// 	guild_member_profile: { guild_id: "403698615446536203", pronouns: "" },
// 	badges: [
// 		{
// 			id: "hypesquad_house_1",
// 			description: "HypeSquad Bravery",
// 			icon: "8a88d63823d8a71cd5e390baa45efa02",
// 			link: "https://discord.com/settings/hypesquad-online",
// 		},
// 		{
// 			id: "premium",
// 			description: "Subscriber since 13 Jun 2022",
// 			icon: "2ba85e8026a8614b640c2837bcdfe21b",
// 			link: "https://discord.com/settings/premium",
// 		},
// 		{
// 			id: "legacy_username",
// 			description: "Originally known as Sylver#1220",
// 			icon: "6de6d34650760ba5551a79732e98ed60",
// 		},
// 	],
// 	guild_badges: [],
// 	legacy_username: "Sylver#1220",
// };
