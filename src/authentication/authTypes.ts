export type LoginRequest = {
	login: string | undefined;
	password: string | undefined;
	captcha_key: string | undefined;
	gift_code_sku_id: string | undefined;
	login_source: string | undefined;
	undelete: boolean | undefined;
};

export type RegisterRequest = {
	fingerprint: string;
	email: string;
	username: string;
	password: string;
	invite: null;
	consent: boolean;
	date_of_birth: Date;
	gift_code_sku_id: null;
	captcha_key: null;
	promotional_email_opt_in: boolean;
};
