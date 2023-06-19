import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	type: "better-sqlite3",
	database: "./data.db", // relative to project root,
	entities: ["../**/*.model.ts"],
	synchronize: true,
});

export async function initializeDataSource() {
	await AppDataSource.initialize();
	console.log("Initialized DB!");
}

export default AppDataSource;
