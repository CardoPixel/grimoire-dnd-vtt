"use client";

import { Laptop, Moon, Sun } from "lucide-react";

import * as React from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
	const t = useTranslations("theme");
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="default" size="icon" aria-label={t("toggle")}>
					{mounted ? (
						resolvedTheme === "dark" ? (
							<Moon className="w-5 h-5" />
						) : resolvedTheme === "light" ? (
							<Sun className="w-5 h-5" />
						) : (
							<Laptop className="w-5 h-5" />
						)
					) : (
						<span className="w-5 h-5" />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					{" "}
					<Sun className="mr-2 w-4 h-4" /> {t("light")}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					{" "}
					<Moon className="mr-2 w-4 h-4" /> {t("dark")}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					{" "}
					<Laptop className="mr-2 w-4 h-4" /> {t("system")}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
