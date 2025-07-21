import { NextResponse } from "next/server";

import type { AppConfig } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ locale: string }> },
) {
	const { locale } = await params;
	const t = await getTranslations({
		locale: locale as AppConfig["Locale"],
		namespace: "manifest",
	});

	return NextResponse.json({
		name: t("name"),
		short_name: t("short_name"),
		description: t("description"),
		start_url: "/",
		display: "standalone",
		background_color: "#435680",
		theme_color: "#435680",
		orientation: "landscape-primary",
		lang: locale,
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	});
}
