import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
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
