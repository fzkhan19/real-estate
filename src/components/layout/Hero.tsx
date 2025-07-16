import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { MoveRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Navbar } from "./navbar";

export const Hero = () => {
	return (
		<>
			{/* Hero Section with Background Video */}
			<div className="relative max-h-screen w-full overflow-hidden">
				<Navbar />
				{/* Background Video */}
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					className="absolute inset-0 h-full w-full object-cover"
					poster="/hero-poster.jpg"
				>
					<source src="/hero.mp4" type="video/mp4" />
					{/* Fallback for browsers that don't support video */}
				</video>

				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black/60" />

				{/* Content */}
				<div className="relative z-10 flex min-h-screen justify-center md:items-center">
					<div className="container mx-auto px-4 py-8 md:py-20">
						<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
							<div className="flex flex-col gap-6 text-white">
								<div className="flex flex-col items-center justify-center gap-6 md:items-start">
									<div className="mb-20 flex flex-col items-center gap-2 md:hidden">
										<Image
											src={"/logo-min.svg"}
											alt="logo"
											width={50}
											height={100}
										/>
										<Image
											src={"/logo-text.svg"}
											alt="logo"
											className="invert"
											width={350}
											height={100}
										/>
									</div>
									<h1 className="text-center font-bold font-playfair text-4xl tracking-tighter sm:text-4xl md:text-left md:text-6xl md:tracking-tight lg:text-7xl xl:text-8xl">
										<span className="text-white">Your Dream Home </span>
										<span className="text-primary-foreground/90">Awaits</span>
									</h1>

									<p className="text-balance text-center text-lg text-white/90 leading-relaxed tracking-normal sm:text-xl md:max-w-lg md:text-left md:text-2xl">
										Kuhn & Partners - Your trusted real estate experts in
										finding the perfect property for you and your family.
									</p>
								</div>

								<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
									<Link href="tel:+17326148835">
										<Button size="lg" className="w-full gap-4 sm:w-auto">
											Call Now <PhoneCall className="h-5 w-5" />
										</Button>
									</Link>
									<Link href="#properties">
										<Button
											size="lg"
											variant="secondary"
											className="w-full gap-4 shadow-inner sm:w-auto"
										>
											View Properties <MoveRight className="h-5 w-5" />
										</Button>
									</Link>
								</div>
							</div>
							<div className="flex flex-col items-end">
								<div className="flex flex-col items-center gap-6">
									<div className="mb-8 hidden w-fit flex-col items-center gap-2 md:flex">
										<Image
											src={"/logo-min.svg"}
											alt="logo"
											width={60}
											height={100}
										/>
										<Image
											src={"/logo-text.svg"}
											alt="logo"
											className="invert"
											width={400}
											height={200}
										/>
									</div>

									{/* Stats section */}
									<div className="hidden justify-end lg:flex">
										<div className="max-w-md rounded-lg bg-white/10 p-8 backdrop-blur-xs">
											<div className="grid grid-cols-2 gap-6 text-center text-white">
												<div>
													<div className="font-bold text-3xl text-primary-foreground">
														1000+
													</div>
													<div className="text-sm text-white/80">
														Properties Sold
													</div>
												</div>
												<div>
													<div className="font-bold text-3xl text-primary-foreground">
														20+
													</div>
													<div className="text-sm text-white/80">
														Years Experience
													</div>
												</div>
												<div>
													<div className="font-bold text-3xl text-primary-foreground">
														99%
													</div>
													<div className="text-sm text-white/80">
														Client Satisfaction
													</div>
												</div>
												<div>
													<div className="font-bold text-3xl text-primary-foreground">
														24/7
													</div>
													<div className="text-sm text-white/80">Support</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="-translate-x-1/2 absolute bottom-8 left-1/2 transform animate-bounce text-white/70">
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</>
	);
};
