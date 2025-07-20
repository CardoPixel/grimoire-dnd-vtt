import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./styles/**/*.{css,scss}",
	],
	darkMode: "class",
	theme: {
		extend: {
			// Add custom theme extensions here
		},
	},
	plugins: [],
};

export default config;
