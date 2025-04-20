import fs from "fs";
import path from "path";

const localesPath = path.join(process.cwd(), "locales");
export const locales = fs
	.readdirSync(localesPath)
	.filter((file) => file.endsWith(".json"))
	.map((file) => path.basename(file, ".json"));

const content = `export const locales = ${JSON.stringify(locales)} as const;
export const defaultLocale = "zh" as const;
`;

// generate resources.js

fs.writeFileSync(path.join(process.cwd(), "config", "languages.ts"), content);
