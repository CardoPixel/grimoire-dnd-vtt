import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "G.R.I.M.O.I.R.E",
		short_name: "GRIMOIRE",
		description: "Dungeons & Dragons Game Master Web Project",
		start_url: "/",
		display: "standalone",
		background_color: "#435680",
		theme_color: "#435680",
		orientation: "landscape-primary",
		lang: "en-US",
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
	};
}
