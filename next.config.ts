import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: `http://localhost:${process.env.PORT || 3000}`;

const nextConfig: NextConfig = {
	env: {
		BASE_URL: baseUrl,
	},
	images: {
		domains: ["pexels.com"],
	},
	/* config options here */
};

const withNextIntl = createNextIntlPlugin({
	experimental: {
		// Provide the path to the messages that you're using in `AppConfig`
		createMessagesDeclaration: ["./messages/en.json", "./messages/es.json"],
	},
});

export default withNextIntl(nextConfig);
