import * as mockttp from "mockttp";

(async () => {
	const server = mockttp.getLocal({
		https: {
			keyPath: "src/certs/testCA.key",
			certPath: "src/certs/testCA.pem",
		},
	});
	server
		.forAnyRequest()
		.forHostname("ptb.discord.com")
		.matching((req) => {
			return req.path.startsWith("/api/");
		})
		.thenForwardTo("https://localhost", {
			ignoreHostHttpsErrors: true,
		});
	server.forUnmatchedRequest().thenPassThrough();
	server.start().then(() => {
		console.log(`Dispub proxy is listening on port ${server.port}.`);
	});
})();
