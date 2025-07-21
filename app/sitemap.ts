import { type MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/get-base-url";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = getBaseUrl();
	const locales = ["en", "es"];

	const pages = [""]; // Add other pages here, e.g. 'about', 'contact'

	const sitemapEntries = pages.flatMap((page) =>
		locales.map((locale) => ({
			url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
			lastModified: new Date(),
			priority: 1.0,
		})),
	);

	return sitemapEntries;
}
