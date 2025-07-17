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
import Link from "next/link";

interface ServiceProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	features: string[];
	popular?: boolean;
}

const services: ServiceProps[] = [
	{
		icon: <Home className="h-8 w-8" />,
		title: "Property Buying",
		description:
			"Find your perfect home with our expert guidance and market knowledge.",
		features: [
			"Property Search & Analysis",
			"Market Evaluation",
			"Negotiation Support",
			"Legal Documentation",
		],
		popular: true,
	},
	{
		icon: <Building className="h-8 w-8" />,
		title: "Property Selling",
		description:
			"Maximize your property value with our proven selling strategies.",
		features: [
			"Property Valuation",
			"Marketing & Listing",
			"Professional Photography",
			"Transaction Management",
		],
	},
	{
		icon: <Calculator className="h-8 w-8" />,
		title: "Property Valuation",
		description:
			"Get accurate property valuations from certified professionals.",
		features: [
			"Comparative Market Analysis",
			"Professional Appraisal",
			"Investment Analysis",
			"Market Trends Report",
		],
	},
	{
		icon: <Search className="h-8 w-8" />,
		title: "Property Search",
		description:
			"Comprehensive property search tailored to your specific needs.",
		features: [
			"Custom Search Criteria",
			"Off-Market Properties",
			"Virtual Tours",
			"Neighborhood Analysis",
		],
	},
	{
		icon: <TrendingUp className="h-8 w-8" />,
		title: "Investment Consulting",
		description: "Expert advice for real estate investment opportunities.",
		features: [
			"ROI Analysis",
			"Market Forecasting",
			"Portfolio Management",
			"Risk Assessment",
		],
	},
	{
		icon: <FileText className="h-8 w-8" />,
		title: "Legal Services",
		description:
			"Complete legal support for all your real estate transactions.",
		features: [
			"Contract Review",
			"Title Search",
			"Closing Services",
			"Legal Documentation",
		],
	},
];

const ServiceCard = ({ service }: { service: ServiceProps }) => {
	return (
		<Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-accent/60">
			{service.popular && (
				<div className="absolute top-4 right-4 z-10">
					<Badge variant="default" className="bg-primary">
						Most Popular
					</Badge>
				</div>
			)}
			<CardHeader>
				<div className="mb-3 flex items-center gap-3">
					<div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary group-hover:text-white">
						{service.icon}
					</div>
					<CardTitle className="font-playfair text-xl">
						{service.title}
					</CardTitle>
				</div>
				<p className="text-muted-foreground">{service.description}</p>
			</CardHeader>
			<CardContent>
				<ul className="mb-6 space-y-2">
					{service.features.map((feature, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={index} className="flex items-center gap-2 text-sm">
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
					<Link href="/contact">Learn More</Link>
				</Button>
			</CardContent>
		</Card>
	);
};

export const Services = () => {
	return (
		<section id="services" className="py-16">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						Our Services
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Comprehensive real estate services designed to meet all your
						property needs
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<ServiceCard key={index} service={service} />
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<div className="rounded-lg p-8">
						<h3 className="mb-4 font-bold font-playfair text-2xl">
							Ready to Get Started?
						</h3>
						<p className="mx-auto mb-6 max-w-md text-muted-foreground">
							Contact us today for a free consultation and let us help you
							achieve your real estate goals.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
							<Button size="lg" asChild>
								<Link href="/contact">
									<Users className="mr-2 h-5 w-5" />
									Free Consultation
								</Link>
							</Button>
							<Button size="lg" variant="secondary" asChild>
								<Link href="tel:+17326148835">
									<PhoneCallIcon className="mr-2 h-5 w-5" />
									Call (732) 614-8835
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
