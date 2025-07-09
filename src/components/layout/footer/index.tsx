// Footer code
import { ArrowUpRightIcon, Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Label } from "@/components/ui/label";

export default function Footer() {
	const t = useTranslations("footer");
	const tNav = useTranslations("navigation");
	return (
		<footer className="flex w-full flex-col gap-6 bg-primary/90 px-4 py-6 text-white">
			<div className="flex w-full flex-col justify-between gap-4 md:flex-row">
				<div className="flex flex-col gap-2">
					<Label className="font-medium">{t("salesSupport")}</Label>
					<Label className="font-medium">{t("address")}</Label>
					<Label className="font-normal text-sm">{t("addressText")}</Label>
					<Label className="mt-2 font-medium">{t("contactInfo")}</Label>

					<div className="flex flex-col flex-wrap gap-x-4 gap-y-2 md:flex-row [&>*]:font-normal [&>*]:text-sm">
						<Label>{t("telephone")}</Label>
						<Label>{t("email")}</Label>
					</div>
				</div>
				<div className="order-2 flex flex-col md:order-1">
					<Label className="self-start font-normal text-sm md:self-end">
						{t("copyright")}
					</Label>
					<Label className="self-center pt-6 font-normal text-base md:mt-8 md:self-end">
						<Link
							className="rounded-sm bg-blue-50 p-1 font-semibold text-primary underline decoration-primary"
							href="https://faiz-khan.in"
							target="_blank"
						>
							{t("builtBy")}
							<ArrowUpRightIcon className="-mt-1 inline-block size-6 text-primary" />
						</Link>
					</Label>
				</div>
			</div>
			<div className="flex w-full flex-col justify-between gap-4 md:flex-row">
				<div className="order-1 flex flex-row gap-4 self-center text-sm underline underline-offset-4 md:order-2 md:self-end">
					<Link href="#services" className="text-center md:text-left">
						{tNav("ourServices")}
					</Link>
					<Link href="#prices" className="text-center md:text-left">
						{tNav("priceList")}
					</Link>
					<Link href="#testimonials" className="text-center md:text-left">
						{tNav("testimonials")}
					</Link>
					<Link href="#contact" className="text-center md:text-left">
						{tNav("contactUs")}
					</Link>
				</div>

				<div className="order-3 flex items-center justify-center md:justify-start md:self-end">
					<div className="flex items-center">
						<div className="flex space-x-4">
							<Link
								href="https://instagram.com/company"
								rel="noopener noreferrer"
								target="_blank"
								className="transition-opacity hover:opacity-75"
							>
								<Instagram size={16} />
							</Link>

							<Link
								href="https://twitter.com/company"
								rel="noopener noreferrer"
								target="_blank"
								className="transition-opacity hover:opacity-75"
							>
								<Twitter size={16} />
							</Link>
							<Link
								href="https://facebook.com/company/company"
								rel="noopener noreferrer"
								target="_blank"
								className="transition-opacity hover:opacity-75"
							>
								<Facebook size={16} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
