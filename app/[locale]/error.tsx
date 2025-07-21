"use client";

import * as React from "react";

import { useTranslations } from "next-intl";

export default function Error({ reset }: { reset: () => void }) {
	const t = useTranslations("error");
	return (
		<div className="inset-0 flex flex-col items-center justify-center bg-background/80 z-50 p-4">
			<h1 className="text-2xl font-bold mb-2 text-destructive">
				{t("title")}
			</h1>
			<p className="mb-4 text-center">{t("description")}</p>
			<button
				onClick={reset}
				className="px-4 py-2 bg-primary text-primary-foreground rounded shadow hover:bg-primary/90 focus:outline-none focus:ring"
			>
				{t("retry")}
			</button>
		</div>
	);
}
