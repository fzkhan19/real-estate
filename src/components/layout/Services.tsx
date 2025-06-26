"use client";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {Laptop, Settings, Smartphone, Wrench} from "lucide-react";
import Image from "next/image";

const mobileServices = [
	{ title: "Screen Repair", image: "/services/screen-repair.jpg" },
	{ title: "Water-Damage Repair", image: "/services/water-damage.png" },
	{ title: "Camera Repair", image: "/services/camera-repair.jpg" },
	{ title: "Battery Replacement", image: "/services/battery.png" },
	{ title: "Button Repair", image: "/services/button-repair.jpeg" },
	{ title: "Charge Port Repair", image: "/services/charge-port.jpg" },
	{ title: "Microphone/Speaker Repair", image: "/services/speaker.webp" },
];

const laptopServices = [
	{ title: "Hardware Upgrades", image: "/services/hardware-upgrade.jpg" },
	{ title: "Screen Replacement", image: "/services/laptop-screen.jpg" },
	{ title: "Keyboard Replacement", image: "/services/keyboard.webp" },
	{ title: "Battery Replacement", image: "/services/laptop-battery.webp" },
	{ title: "Hard Drive Services", image: "/services/hard-drive.webp" },
	{ title: "RAM Upgrade", image: "/services/ram.webp" },
	{ title: "Cooling System Repair", image: "/services/cooling.webp" },
];

const softwareServices = [
	{ title: "Virus Removal", image: "/services/virus-removal.jpg" },
	{ title: "Software Installation", image: "/services/software.webp" },
	{ title: "System Optimization", image: "/services/optimization.jpg" },
	{ title: "Data Recovery", image: "/services/data-recovery.webp" },
	{ title: "Operating System Install", image: "/services/os.png" },
	{ title: "Diagnostic Scan", image: "/services/diagnostic.webp" },
	{ title: "Driver Updates", image: "/services/drivers.webp" },
];

const ServiceCarousel = ({
	title,
	icon: Icon,
	services,
	delay = 0
}: {
	title: string;
	icon: React.ElementType;
	services: { title: string; image: string }[];
	delay?: number;
}) => (
	<div className="space-y-6">
		<h3 className="flex items-center gap-2 font-semibold text-lg text-primary tracking-tighter md:text-2xl">
			<Icon className="size-5 md:size-6" />
			{title}
		</h3>
		<Carousel opts={{ align: "start", loop: true }}  plugins={[
        Autoplay({
          delay: delay,
        }),
      ]} className="w-full">
			<CarouselContent>
				{services.map((service, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
						<div className="p-2">
							<Card className="h-full rounded-none bg-white shadow-primary/20 shadow-sm">
								<CardContent className="flex flex-col items-center justify-center gap-2 px-0 text-center">
									<div className="flex h-[250px] w-full items-end md:h-[400px]">
										<Image
											src={service.image}
											alt={service.title}
											width={400}
											height={400}
											className="max-h-[300px] w-full md:max-h-[400px]"
										/>
									</div>
									<p className="w-full text-muted-foreground text-sm">
										{service.title}
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
);

export const Services = () => (
	<div className="w-full bg-slate-50 py-20" id="services">
		<div className="container px-4">
			<div className="mb-16 text-center">
				<h2 className="mb-4 font-semibold text-2xl text-primary tracking-tighter md:text-4xl">
					Our Repair Services
				</h2>
				<p className="text-base text-muted-foreground md:text-lg">
					Professional repair services for all your devices
				</p>
			</div>

			<div className="space-y-16">
				<ServiceCarousel
					title="Mobile Phone Repairs"
					icon={Smartphone}
					services={mobileServices}
					delay={1000}
				/>
				<ServiceCarousel
					title="Laptop & PC Repairs"
					icon={Laptop}
					services={laptopServices}
					delay={1400}
				/>
				<ServiceCarousel
					title="Software Services"
					icon={Settings}
					services={softwareServices}
					delay={1800}
				/>
			</div>

			<div className="mt-12 text-center">
				<Button size="lg" className="gap-2">
					Book a Service <Wrench className="h-4 w-4" />
				</Button>
			</div>
		</div>
	</div>
);
