import "@/styles/globals.css";

import * as React from "react";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { routing } from "@/i18n/routing";

export const metadata = {
	title: "G.R.I.M.O.I.R.E",
	description: "Dungeons & Dragons Game Master Web Project",
};

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
