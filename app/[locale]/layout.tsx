import "@/styles/globals.css";

import * as React from "react";

import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { routing } from "@/i18n/routing";
import { getBaseUrl } from "@/lib/get-base-url";

export const viewport: Viewport = {
	themeColor: "#18181b",
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const baseUrl = getBaseUrl();

	// Dynamic OG image endpoint
	const ogImageUrl = `${baseUrl}/${locale}/og-image?title=G.R.I.M.O.I.R.E`;

	return {
		metadataBase: new URL(baseUrl),
		title: {
			default: "G.R.I.M.O.I.R.E",
			template: "%s | G.R.I.M.O.I.R.E",
		},
		description: "Dungeons & Dragons Game Master Web Project",
		openGraph: {
			title: "G.R.I.M.O.I.R.E",
			description: "Dungeons & Dragons Game Master Web Project",
			url: `${baseUrl}/${locale}`,
			siteName: "G.R.I.M.O.I.R.E",
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: "G.R.I.M.O.I.R.E",
				},
			],
			locale: locale,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: "G.R.I.M.O.I.R.E",
			description: "Dungeons & Dragons Game Master Web Project",
			images: [ogImageUrl],
		},
		alternates: {
			canonical: `${baseUrl}/${locale}`,
			languages: {
				en: `${baseUrl}/en`,
				es: `${baseUrl}/es`,
			},
		},
		icons: {
			icon: "/favicon.ico",
			shortcut: "/favicon.ico",
			apple: "/apple-touch-icon.png",
		},
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const ThemeSwitcher = dynamic(() =>
		import("@/components/settings/theme-switcher").then(
			(mod) => mod.ThemeSwitcher,
		),
	);
	const LocaleSwitcher = dynamic(() =>
		import("@/components/settings/locale-switcher").then(
			(mod) => mod.LocaleSwitcher,
		),
	);
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="antialiased">
				<NextIntlClientProvider locale={locale}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
						enableColorScheme
					>
						<div className="absolute top-4 right-4 z-50 flex flex-row items-center gap-2">
							<LocaleSwitcher />
							<ThemeSwitcher />
						</div>
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
