"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Building,
	Calculator,
	FileText,
	Home,
	PhoneCallIcon,
	Search,
	TrendingUp,
	Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface TranslatedServiceContent {
	title: string;
	description: string;
	features: string[];
}

interface ServiceProps {
	icon: React.ReactNode;
	title: string; // This will be removed as title comes from translation
	description: string; // This will be removed as description comes from translation
	features: string[]; // This will be removed as features comes from translation
	popular?: boolean;
}

const servicesData = [
	// Renamed from 'services' to avoid conflict with translation function
	{
		key: "propertyBuying",
		icon: <Home className="h-8 w-8" />,
		popular: true,
	},
	{
		key: "propertySelling",
		icon: <Building className="h-8 w-8" />,
	},
	{
		key: "propertyValuation",
		icon: <Calculator className="h-8 w-8" />,
	},
	{
		key: "propertySearch",
		icon: <Search className="h-8 w-8" />,
	},
	{
		key: "investmentConsulting",
		icon: <TrendingUp className="h-8 w-8" />,
	},
	{
		key: "legalServices",
		icon: <FileText className="h-8 w-8" />,
	},
];

const ServiceCard = ({
	service,
	t,
}: {
	service: { key: string; icon: React.ReactNode; popular?: boolean };
	t: ReturnType<typeof useTranslations>;
}) => {
	const serviceTranslation = t.raw(
		`servicesList.${service.key}`,
	) as TranslatedServiceContent;
	return (
		<Card className="group relative h-full overflow-hidden text-accent transition-all duration-300 hover:shadow-accent/60">
			{service.popular && (
				<div className="absolute top-4 right-4 z-10">
					<Badge variant="default" className="bg-primary">
						{t("mostPopular")}
					</Badge>
				</div>
			)}
			<CardHeader>
				<div className="mb-3 flex items-center gap-3">
					<div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary group-hover:text-white">
						{service.icon}
					</div>
					<CardTitle className="font-playfair text-xl">
						{serviceTranslation.title}
					</CardTitle>
				</div>
				<p className="text-muted-foreground">
					{serviceTranslation.description}
				</p>
			</CardHeader>
			<CardContent>
				<ul className="mb-6 space-y-2">
					{serviceTranslation.features.map((feature: string, index: number) => (
						<li key={feature} className="flex items-center gap-2 text-sm">
							<div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
							{feature}
						</li>
					))}
				</ul>
				<Button
					variant="secondary"
					className="w-full transition-colors group-hover:bg-primary group-hover:text-white"
					asChild
				>
					<Link href="/contact">{t("learnMore")}</Link>
				</Button>
			</CardContent>
		</Card>
	);
};

export const Services = () => {
	const t = useTranslations("ServicesPage");
	return (
		<section id="services" className="py-16">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						{t("header.title")}
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						{t("header.subtitle")}
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{servicesData.map((service, index) => (
						<ServiceCard key={service.key} service={service} t={t} />
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<div className="rounded-lg p-8">
						<h3 className="mb-4 font-bold font-playfair text-2xl">
							{t("cta.title")}
						</h3>
						<p className="mx-auto mb-6 max-w-md text-muted-foreground">
							{t("cta.description")}
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
							<Button size="lg" asChild>
								<Link href="/contact">
									<Users className="mr-2 h-5 w-5" />
									{t("cta.freeConsultation")}
								</Link>
							</Button>
							<Button size="lg" variant="secondary" asChild>
								<Link href="tel:+17326148835">
									<PhoneCallIcon className="mr-2 h-5 w-5" />
									{t("cta.callNow")}
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
