import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	const t = useTranslations("hero");
	return (
		<>
			<div className="mb-4 flex items-center justify-center gap-x-3 bg-red-800/90 p-4 text-white shadow-lg">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					className="h-8 w-8 flex-shrink-0"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
						clipRule="evenodd"
					/>
				</svg>
				<p className="font-semibold text-xl">{t("parkingNotice")}</p>
			</div>
			<div className="w-full py-6 md:py-8 lg:py-10">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 items-center gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8">
						<div className="flex flex-col gap-4">
							<div className="flex flex-col gap-3 md:gap-4">
								<h1 className="font-regular text-3xl tracking-tighter sm:text-4xl md:max-w-lg md:text-5xl lg:text-6xl xl:text-7xl">
									<span className="font-semibold text-primary">
										{t("title")}{" "}
									</span>
									{t("subtitle")}
								</h1>

								<p className="text-base text-muted-foreground leading-relaxed tracking-tight sm:text-lg md:max-w-md md:text-xl">
									{t("description")}
								</p>
							</div>

							<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
								<Link href="tel:+49017670440689">
									<Button
										size="lg"
										className="w-full gap-4 sm:w-auto"
										variant="outline"
									>
										{t("bookRepair")} <PhoneCall className="h-4 w-4" />
									</Button>
								</Link>
								<Link href="#contact">
									<Button size="lg" className="w-full gap-4 sm:w-auto">
										{t("getQuote")} <MoveRight className="h-4 w-4" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
							<Image
								alt={t("altText")}
								src="/stock/phone-repair-2.jpg"
								width="500"
								height="350"
								className="aspect-square w-full max-w-[400px] rounded-md bg-muted shadow-lg shadow-primary/30 lg:max-w-[500px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
