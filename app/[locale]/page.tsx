"use client";

import * as React from "react";

import { useTranslations } from "next-intl";

import { FullScreenCarousel } from "@/components/custom/carousel/full-screen-carousel";
import { ThemeSwitcher } from "@/components/settings/theme-switcher";

import { useIsMobile } from "@/hooks/use-mobile";

export default function HomePage() {
	const t = useTranslations("home");
	const isMobile = useIsMobile();
	const orientation = isMobile ? "vertical" : "horizontal";
	const images = [
		"https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg",
		"https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg",
		"https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg",
	];

	return (
		<main className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
			<div className="absolute top-4 right-4 z-50">
				<ThemeSwitcher />
			</div>
			<FullScreenCarousel images={images} orientation={orientation}>
				{(idx) => (
					<div className="rounded-xl px-8 py-12 w-full max-w-2xl mx-4 flex flex-col items-center justify-center">
						<div className="border-2 bg-background/90 p-8 rounded-xl flex flex-col items-center justify-center shadow-2xl">
							<h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center tracking-tight drop-shadow-lg text-primary">
								{t("title")}
							</h1>
							<h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-foreground">
								{t("subtitle")}
							</h2>
							{idx === 0 && (
								<p className="text-center text-lg md:text-xl">
									{t("slide0")}
								</p>
							)}
							{idx === 1 && (
								<p className="text-center text-lg md:text-xl">
									{t("slide1")}
								</p>
							)}
							{idx === 2 && (
								<p className="text-center text-lg md:text-xl">
									{t("slide2")}
								</p>
							)}
						</div>
					</div>
				)}
			</FullScreenCarousel>
		</main>
	);
}
