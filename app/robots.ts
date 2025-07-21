import { type MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/get-base-url";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = getBaseUrl();

	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
