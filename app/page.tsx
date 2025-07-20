import * as React from "react";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
			<div className="max-w-2xl p-8 rounded-xl shadow-lg bg-black/60">
				<h1 className="text-4xl font-bold mb-2 text-center">
					G.R.I.M.O.I.R.E
				</h1>
				<h2 className="text-xl font-medium mb-4 text-center">
					Game Reference Interactive Management Orchestrator for
					Immersive Roleplay Experiences
				</h2>
				<p className="text-center text-lg">
					Welcome to the ultimate D&D Game Master assistant. Start by
					uploading your campaign resources or exploring the
					dashboard!
				</p>
			</div>
		</main>
	);
}
