import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface MarqueeProps extends ComponentProps<"div"> {
	className?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	children?: React.ReactNode;
	vertical?: boolean;
	repeat?: number;
}

export default function Marquee({
	className,
	reverse,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	...props
}: MarqueeProps) {
	return (
		<div
			{...props}
			className={cn(
				"group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
				{
					"flex-row": !vertical,
					"flex-col": vertical,
				},
				className,
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className={cn("flex shrink-0 justify-around gap-(--gap)", {
							"animate-marquee flex-row": !vertical,
							"animate-marquee-vertical flex-col": vertical,
							"group-hover:[animation-play-state:paused]": pauseOnHover,
							"[animation-direction:reverse]": reverse,
						})}
					>
						{children}
					</div>
				))}
		</div>
	);
}
