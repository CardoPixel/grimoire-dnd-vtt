"use client";

import * as React from "react";

import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LANGUAGES = [
	{ locale: "en", alt: "US English", flagEmoji: "🇺🇸" },
	{ locale: "es", alt: "Español de España", flagEmoji: "🇪🇸" },
];

export function LocaleSwitcher() {
	const t = useTranslations("locale");
	const router = useRouter();
	const pathname = usePathname();
	const currentLocale = useLocale();

	// const supportedLocales = ["en", "es"] as const;
	// type SupportedLocale = (typeof supportedLocales)[number];
	/* const isSupportedLocale = (locale: string): locale is SupportedLocale =>
		supportedLocales.includes(locale as SupportedLocale); */

	const availableLanguages = LANGUAGES.filter((lang) =>
		routing.locales.includes(lang.locale as "en" | "es"),
	);

	const handleChange = (newLocale: (typeof routing.locales)[number]) => {
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" aria-label={t("change")}>
					{availableLanguages.find((l) => l.locale === currentLocale)
						?.flagEmoji || "🌐"}
					{/* {isSupportedLocale(currentLocale)
						? t(currentLocale)
						: currentLocale} */}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{availableLanguages.map((lang) => (
					<DropdownMenuItem
						key={lang.locale}
						onClick={() =>
							handleChange(
								lang.locale as (typeof routing.locales)[number],
							)
						}
						className={
							lang.locale === currentLocale
								? "font-bold text-primary"
								: ""
						}
						aria-current={
							lang.locale === currentLocale ? "true" : undefined
						}
					>
						<span
							role="img"
							aria-label={t(
								(lang.locale + "_alt") as
									| "en_alt"
									| "es_alt"
									| "pt_alt",
							)}
							className="text-xl mr-2"
						>
							{lang.flagEmoji}
						</span>
						{t(lang.locale as "en" | "es")}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
