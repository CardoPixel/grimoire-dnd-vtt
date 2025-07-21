import withPWA from "@ducanh2912/next-pwa";

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
	// Other config options here
};

const withNextIntl = createNextIntlPlugin({
	experimental: {
		// Provide the path to the messages that you're using in `AppConfig`
		createMessagesDeclaration: ["./messages/en.json", "./messages/es.json"],
	},
});

// Aggressive Workbox caching strategies
const withPWACustom = withPWA({
	dest: "public",
	register: true,
	scope: "/",
	sw: "service-worker.js",
	extendDefaultRuntimeCaching: true,
	disable: false, // Enable PWA in development
	workboxOptions: {
		runtimeCaching: [
			{
				urlPattern:
					/^https?.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|js|css|woff2?|ttf|eot|otf)$/,
				handler: "CacheFirst",
				options: {
					cacheName: "static-assets",
					expiration: {
						maxEntries: 200,
						maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
					},
				},
			},
			{
				urlPattern: /\/api\//,
				handler: "NetworkFirst",
				options: {
					cacheName: "api-cache",
					expiration: {
						maxEntries: 100,
						maxAgeSeconds: 60 * 60 * 24, // 1 day
					},
				},
			},
			{
				urlPattern: /^https?.*\.(?:json|xml)$/,
				handler: "StaleWhileRevalidate",
				options: {
					cacheName: "data-cache",
					expiration: {
						maxEntries: 50,
						maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
					},
				},
			},
		],
	},
});

// Compose plugins: PWA first, then next-intl
export default withPWACustom(withNextIntl(nextConfig));
