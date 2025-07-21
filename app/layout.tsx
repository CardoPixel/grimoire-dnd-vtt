import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import * as React from "react";

export const metadata = {
	title: "G.R.I.M.O.I.R.E",
	description: "Dungeons & Dragons Game Master Web Project",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const ThemeSwitcher = dynamic(() =>
		import("@/components/ui/theme-switcher").then(
			(mod) => mod.ThemeSwitcher,
		),
	);
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					enableColorScheme
				>
					<div className="absolute top-4 right-4 z-50">
						<ThemeSwitcher />
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
