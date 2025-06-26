import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";
import Image from "next/image";

export const Hero = () => (
	<div className="w-full py-6 md:py-8 lg:py-10">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 items-center gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-3 md:gap-4">
						<h1 className="font-regular text-3xl tracking-tighter sm:text-4xl md:max-w-lg md:text-5xl lg:text-6xl xl:text-7xl">
							<span className="font-semibold text-primary">
								Phone, Laptop & PC Repairs{" "}
							</span>
							You Can Trust
						</h1>

						<p className="text-base text-muted-foreground leading-relaxed tracking-tight sm:text-lg md:max-w-md md:text-xl">
							Don't let technical issues disrupt your life. Our skilled
							technicians provide fast, reliable repairs for all your devices -
							smartphones, laptops, and PCs. From cracked screens to software
							troubleshooting, hardware upgrades to virus removal, we'll get
							your technology working like new again.
						</p>
					</div>


					<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
						<Button size="lg" className="w-full gap-4 sm:w-auto" variant="outline">
							Book a repair <PhoneCall className="h-4 w-4" />
						</Button>

						<Button size="lg" className="w-full gap-4 sm:w-auto">
							Get a quote <MoveRight className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
					<Image
						alt="tech repair"
						src="/stock/phone-repair-2.jpg"
						width="500"
						height="350"

						className="aspect-square w-full max-w-[400px] rounded-md bg-muted shadow-lg shadow-primary/30 lg:max-w-[500px]"
					/>
				</div>
			</div>
		</div>
	</div>
);
