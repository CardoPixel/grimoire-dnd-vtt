"use client";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";

export interface FullScreenCarouselProps {
	images: string[];
	orientation?: "horizontal" | "vertical";
	children?: (idx: number) => React.ReactNode;
	className?: string;
}

export function FullScreenCarousel({
	images,
	orientation = "horizontal",
	children,
	className = "",
}: FullScreenCarouselProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [selected, setSelected] = React.useState(0);

	React.useEffect(() => {
		if (!api) return;
		const onSelect = () => setSelected(api.selectedScrollSnap());
		onSelect();
		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	const goTo = (idx: number) => {
		api?.scrollTo(idx);
	};

	return (
		<div
			className={`fixed inset-0 w-screen h-screen overflow-hidden bg-black ${className}`}
		>
			<Carousel
				setApi={setApi}
				className="w-screen h-screen flex items-center justify-center relative"
				orientation={orientation}
				opts={{ loop: true }}
			>
				<CarouselContent className="w-screen h-screen">
					{images.map((img, idx) => (
						<CarouselItem
							key={img}
							className="w-screen h-screen flex items-center justify-center relative"
						>
							<div
								className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
								style={{ backgroundImage: `url(${img})` }}
							/>
							<div className="absolute inset-0 z-20 pointer-events-none" />
							<div className="flex flex-col items-center justify-center w-full h-full relative z-30">
								{children ? children(idx) : null}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{/* Navigation Buttons */}
				{orientation === "horizontal" ? (
					<>
						<CarouselPrevious
							className="z-30 absolute left-0 top-1/2 -translate-y-1/2 md:size-12 size-10"
							style={{
								left: 0,
								right: "auto",
								top: "50%",
								bottom: "auto",
								transform: "translateY(-50%)",
							}}
						/>
						<CarouselNext
							className="z-30 absolute right-0 top-1/2 -translate-y-1/2 md:size-12 size-10"
							style={{
								right: 0,
								left: "auto",
								top: "50%",
								bottom: "auto",
								transform: "translateY(-50%)",
							}}
						/>
					</>
				) : (
					<>
						<CarouselPrevious
							className="z-30 absolute left-1/2 top-8 -translate-x-1/2 md:size-12 size-10 rotate-90"
							style={{
								left: "50%",
								top: "2rem",
								bottom: "auto",
								transform: "translateX(-50%)",
							}}
						/>
						<CarouselNext
							className="z-30 absolute left-1/2 bottom-0 -translate-x-1/2 md:size-12 size-10 rotate-90"
							style={{
								left: "50%",
								bottom: 0,
								top: "auto",
								transform: "translateX(-50%)",
							}}
						/>
					</>
				)}
				{/* Dot Navigation */}
				<div
					className="absolute z-50 w-full flex justify-center"
					style={{ bottom: 32 }}
				>
					<div className="bg-background/70 rounded-full px-4 py-2 flex flex-row gap-4 items-center">
						{images.map((_, idx) => (
							<Button
								key={idx}
								variant="ghost"
								size="icon"
								aria-label={`Go to slide ${idx + 1}`}
								onClick={() => goTo(idx)}
								className={`border-2 ${selected === idx ? "border-primary bg-primary" : "border-secondary bg-secondary"} rounded-full p-0 flex items-center justify-center transition-colors duration-200`}
								style={{
									width: 22,
									height: 22,
									minWidth: 22,
									minHeight: 22,
								}}
							>
								<span
									className={`block w-4 h-4 rounded-full ${selected === idx ? "bg-primary" : "bg-secondary"}`}
								/>
							</Button>
						))}
					</div>
				</div>
			</Carousel>
		</div>
	);
}
