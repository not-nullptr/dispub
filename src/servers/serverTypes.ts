/**
 * Represents a guild.
 *
 * @interface
 */
interface IGuild {
	/**
	 * The guild ID.
	 *
	 * @type {string}
	 */
	id: string;

	/**
	 * The guild name (2-100 characters, excluding trailing and leading whitespace).
	 *
	 * @type {string}
	 */
	name: string;

	/**
	 * The icon hash of the guild.
	 *
	 * @type {?string}
	 */
	icon?: string;

	/**
	 * The icon hash of the guild (returned when in the template object).
	 *
	 * @type {?string}
	 */
	icon_hash?: string;

	/**
	 * The splash hash of the guild.
	 *
	 * @type {?string}
	 */
	splash?: string;

	/**
	 * The discovery splash hash of the guild (only present for guilds with the "DISCOVERABLE" feature).
	 *
	 * @type {?string}
	 */
	discovery_splash?: string;

	/**
	 * Indicates if the user is the owner of the guild.
	 *
	 * @type {?boolean}
	 */
	owner?: boolean;

	/**
	 * The ID of the guild owner.
	 *
	 * @type {string}
	 */
	owner_id: string;

	/**
	 * The total permissions for the user in the guild (excludes overwrites).
	 *
	 * @type {?string}
	 */
	permissions?: string;

	/**
	 * The voice region ID for the guild (deprecated).
	 *
	 * @type {?string}
	 */
	region?: string;

	/**
	 * The ID of the AFK channel.
	 *
	 * @type {?string}
	 */
	afk_channel_id?: string;

	/**
	 * The AFK timeout in seconds.
	 *
	 * @type {number}
	 */
	afk_timeout: number;

	/**
	 * Indicates if the server widget is enabled.
	 *
	 * @type {?boolean}
	 */
	widget_enabled?: boolean;

	/**
	 * The channel ID that the widget will generate an invite to, or null if set to no invite.
	 *
	 * @type {?string}
	 */
	widget_channel_id?: string;

	/**
	 * The verification level required for the guild.
	 *
	 * @type {number}
	 */
	verification_level: number;

	/**
	 * The default message notifications level.
	 *
	 * @type {number}
	 */
	default_message_notifications: number;

	/**
	 * The explicit content filter level.
	 *
	 * @type {number}
	 */
	explicit_content_filter: number;

	/**
	 * The roles in the guild (array of role objects).
	 *
	 * @type {Array<any>}
	 */
	roles: Array<any>;

	/**
	 * The custom guild emojis (array of emoji objects).
	 *
	 * @type {Array<any>}
	 */
	emojis: Array<any>;

	/**
	 * The enabled guild features (array of guild feature strings).
	 *
	 * @type {Array<string>}
	 */
	features: Array<string>;

	/**
	 * The required MFA level for the guild.
	 *
	 * @type {number}
	 */
	mfa_level: number;

	/**
	 * The application ID of the guild creator if it is bot-created.
	 *
	 * @type {?string}
	 */
	application_id?: string;

	/**
	 * The ID of the channel where guild notices such as welcome messages and boost events are posted.
	 *
	 * @type {?string}
	 */
	system_channel_id?: string;

	/**
	 * The system channel flags.
	 *
	 * @type {number}
	 */
	system_channel_flags: number;

	/**
	 * The ID of the channel where Community guilds can display rules and/or guidelines.
	 *
	 * @type {?string}
	 */
	rules_channel_id?: string;

	/**
	 * The maximum number of presences for the guild (null is always returned, apart from the largest of guilds).
	 *
	 * @type {?number}
	 */
	max_presences?: number;

	/**
	 * The maximum number of members for the guild.
	 *
	 * @type {number}
	 */
	max_members?: number;

	/**
	 * The vanity URL code for the guild.
	 *
	 * @type {?string}
	 */
	vanity_url_code?: string;

	/**
	 * The description of the guild.
	 *
	 * @type {?string}
	 */
	description?: string;

	/**
	 * The banner hash of the guild.
	 *
	 * @type {?string}
	 */
	banner?: string;

	/**
	 * The premium tier (Server Boost level).
	 *
	 * @type {number}
	 */
	premium_tier: number;

	/**
	 * The number of boosts this guild currently has.
	 *
	 * @type {?number}
	 */
	premium_subscription_count?: number;

	/**
	 * The preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US".
	 *
	 * @type {string}
	 */
	preferred_locale: string;

	/**
	 * The ID of the channel where admins and moderators of Community guilds receive notices from Discord.
	 *
	 * @type {?string}
	 */
	public_updates_channel_id?: string;

	/**
	 * The maximum amount of users in a video channel.
	 *
	 * @type {?number}
	 */
	max_video_channel_users?: number;

	/**
	 * The maximum amount of users in a stage video channel.
	 *
	 * @type {?number}
	 */
	max_stage_video_channel_users?: number;

	/**
	 * Approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true.
	 *
	 * @type {?number}
	 */
	approximate_member_count?: number;

	/**
	 * Approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true.
	 *
	 * @type {?number}
	 */
	approximate_presence_count?: number;

	/**
	 * The welcome screen of a Community guild, shown to new members, returned in an Invite's guild object.
	 *
	 * @type {?any}
	 */
	welcome_screen?: any;

	/**
	 * The guild NSFW level.
	 *
	 * @type {number}
	 */
	nsfw_level: number;

	/**
	 * The custom guild stickers (array of sticker objects).
	 *
	 * @type {Array<any>}
	 */
	stickers?: Array<any>;

	/**
	 * Whether the guild has the boost progress bar enabled.
	 *
	 * @type {boolean}
	 */
	premium_progress_bar_enabled: boolean;

	/**
	 * The ID of the channel where admins and moderators of Community guilds receive safety alerts from Discord.
	 *
	 * @type {?string}
	 */
	safety_alerts_channel_id?: string;
}
