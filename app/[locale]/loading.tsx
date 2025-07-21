"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="inset-0 w-screen h-screen flex items-center justify-center bg-black z-50">
			<div className="absolute top-4 right-4 z-50 flex flex-row gap-2">
				<Skeleton className="w-10 h-10 rounded-full" />
				<Skeleton className="w-10 h-10 rounded-full" />
			</div>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<div className="rounded-xl px-8 py-12 w-full max-w-2xl mx-4 flex flex-col items-center justify-center">
					<div className="border-2 bg-background/90 p-8 rounded-xl flex flex-col items-center justify-center shadow-2xl w-full">
						<Skeleton className="h-16 w-2/3 mb-4" />
						<Skeleton className="h-8 w-1/2 mb-6" />
						<Skeleton className="h-6 w-3/4 mb-2" />
						<Skeleton className="h-6 w-2/3 mb-2" />
						<Skeleton className="h-6 w-1/2" />
					</div>
				</div>
			</div>
		</div>
	);
}
