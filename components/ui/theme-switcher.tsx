"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeSwitcher() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" aria-label="Toggle theme">
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
					<Sun className="mr-2 w-4 h-4" /> Light{" "}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					{" "}
					<Moon className="mr-2 w-4 h-4" /> Dark{" "}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					{" "}
					<Laptop className="mr-2 w-4 h-4" /> System{" "}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
