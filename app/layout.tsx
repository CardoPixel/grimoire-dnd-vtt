import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
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
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
