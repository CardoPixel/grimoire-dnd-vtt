/* @jsxRuntime automatic @jsxImportSource react */
import { ImageResponse } from "@vercel/og";

import * as React from "react";

import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const title = searchParams.get("title") || "G.R.I.M.O.I.R.E";
	const iconUrl = `${req.nextUrl.origin}/android-chrome-192x192.png`;

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					background:
						"linear-gradient(135deg, #18181b 60%, #27272a 100%)",
				}}
			>
				<img
					src={iconUrl}
					alt="icon"
					width={96}
					height={96}
					style={{ marginBottom: 32 }}
				/>
				<span
					style={{
						fontSize: 64,
						fontWeight: 700,
						color: "#fff",
						textShadow: "0 2px 16px #0008",
						fontFamily: "ui-sans-serif, system-ui, sans-serif",
						padding: "0 48px",
						textAlign: "center",
					}}
				>
					{title}
				</span>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
