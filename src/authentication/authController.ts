import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { LoginRequest, RegisterRequest } from "./authTypes";
import { User } from "../users/userModel.model";
import AppDataSource from "../db/initDB";
import { generateSnowflake, generateToken } from "./authService";

const userRepository = AppDataSource.getRepository(User);

export default function authController(
	app: FastifyInstance,
	opts: any,
	done: () => void
) {
	app.post(
		"/api/v9/auth/login",
		// { preHandler: authenticate },
		async (req: FastifyRequest, res: FastifyReply) => {
			try {
				const body = req.body as LoginRequest;
				if (!body.login || !body.password) {
					res.status(400).send();
				}
				await userRepository.findOneOrFail({ where: { email: body.login } });

				return body;
			} catch (error) {
				res.status(400).send({
					code: 50035,
					errors: {
						login: {
							_errors: [
								{
									code: "INVALID_LOGIN",
									message:
										"Login or password is invalid (or an error occured).",
								},
							],
						},
						password: {
							_errors: [
								{
									code: "INVALID_LOGIN",
									message:
										"Login or password is invalid (or an error occured).",
								},
							],
						},
					},
					message: "Invalid Form Body",
				});
			}
		}
	);
	app.post(
		"/api/v9/auth/register",
		async (req: FastifyRequest, res: FastifyReply) => {
			try {
				const body = req.body as RegisterRequest;
				if (!body.email || !body.username || !body.password) {
					res.status(400).send();
				}
				const id = generateSnowflake();
				const user = new User();
				user.id = id;
				user.username = body.username;
				user.email = body.email;
				user.password = body.password;
				user.global_name = body.username;
				user.avatar = "39bb9481b14ca0b95afad66272e22dc0";
				user.discriminator = "0";
				user.public_flags = 64;
				user.flags = 64;
				user.banner = "";
				user.banner_color = "#f0d892";
				user.accent_color = "#157840";
				user.bio = "";
				user.pronouns = "";
				user.avatar_decoration = "";
				user.badges = "";
				await userRepository.save(user);
				return { token: generateToken(id) };
			} catch (error) {
				res.status(500).send(error);
			}
		}
	);
	done();
}
