/**
 * Represents a user.
 *
 * @interface
 */
interface IUser {
	/**
	 * The user's ID (snowflake).
	 *
	 * @type {string}
	 */
	id: string;

	/**
	 * The user's username, not unique across the platform.
	 *
	 * @type {string}
	 */
	username: string;

	/**
	 * The user's Discord tag.
	 *
	 * @type {string}
	 */
	discriminator: string;

	/**
	 * The user's display name, if it is set. For bots, this is the application name.
	 *
	 * @type {?string}
	 */
	global_name?: string;

	/**
	 * The user's avatar hash.
	 *
	 * @type {?string}
	 */
	avatar?: string;

	/**
	 * Whether the user belongs to an OAuth2 application.
	 *
	 * @type {?boolean}
	 */
	bot?: boolean;

	/**
	 * Whether the user is an Official Discord System user (part of the urgent message system).
	 *
	 * @type {?boolean}
	 */
	system?: boolean;

	/**
	 * Whether the user has two-factor authentication enabled on their account.
	 *
	 * @type {?boolean}
	 */
	mfa_enabled?: boolean;

	/**
	 * The user's banner hash.
	 *
	 * @type {?string}
	 */
	banner?: string;

	/**
	 * The user's banner color encoded as an integer representation of a hexadecimal color code.
	 *
	 * @type {?number}
	 */
	accent_color?: number;

	/**
	 * The user's chosen language option.
	 *
	 * @type {?string}
	 */
	locale?: string;

	/**
	 * Whether the email on this account has been verified.
	 *
	 * @type {?boolean}
	 */
	verified?: boolean;

	/**
	 * The user's email.
	 *
	 * @type {?string}
	 */
	email?: string;

	/**
	 * The flags on a user's account.
	 *
	 * @type {?number}
	 */
	flags?: number;

	/**
	 * The type of Nitro subscription on a user's account.
	 *
	 * @type {?number}
	 */
	premium_type?: number;

	/**
	 * The public flags on a user's account.
	 *
	 * @type {?number}
	 */
	public_flags?: number;
}
