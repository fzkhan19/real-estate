import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import {
	Calculator,
	Clock,
	FileText,
	Home,
	MapPin,
	PhoneCall,
	Star,
	TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface Props {
	params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
	return {
		title: "Services - Kuhn & Partners Real Estate",
		description:
			"Professional real estate services including property valuation, buying, selling, and consultation. Expert guidance for all your real estate needs.",
		keywords: [
			"real estate services",
			"property valuation",
			"real estate consultation",
			"property buying",
			"property selling",
		],
	};
}

export default async function ServicesPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	const services = [
		{
			icon: Calculator,
			title: "Property Valuation",
			description:
				"Professional property assessment with detailed market analysis and accurate pricing recommendations.",
			features: [
				"Comprehensive market research",
				"Detailed property inspection",
				"Written valuation report",
				"Price comparison analysis",
			],
			price: "From €299",
			duration: "2-3 business days",
		},
		{
			icon: Home,
			title: "Property Buying",
			description:
				"Expert guidance through the entire property purchasing process from search to closing.",
			features: [
				"Property search assistance",
				"Negotiation support",
				"Legal documentation",
				"Market insight consultation",
			],
			price: "2.5% commission",
			duration: "30-90 days",
		},
		{
			icon: TrendingUp,
			title: "Property Selling",
			description:
				"Maximize your property value with our comprehensive selling strategy and marketing approach.",
			features: [
				"Professional photography",
				"Marketing campaign",
				"Buyer qualification",
				"Negotiation management",
			],
			price: "3.5% commission",
			duration: "45-120 days",
		},
		{
			icon: FileText,
			title: "Real Estate Consultation",
			description:
				"Strategic advice for property investment, portfolio management, and market opportunities.",
			features: [
				"Investment strategy planning",
				"Market analysis reports",
				"Portfolio optimization",
				"Risk assessment",
			],
			price: "€150/hour",
			duration: "Flexible",
		},
	];

	const process = [
		{
			step: 1,
			title: "Initial Consultation",
			description:
				"We discuss your needs, goals, and timeline to create a customized approach.",
		},
		{
			step: 2,
			title: "Market Analysis",
			description:
				"Comprehensive research and analysis of current market conditions and trends.",
		},
		{
			step: 3,
			title: "Strategy Development",
			description:
				"Creation of a tailored strategy based on your objectives and market insights.",
		},
		{
			step: 4,
			title: "Implementation",
			description:
				"Execution of the agreed strategy with regular updates and communication.",
		},
		{
			step: 5,
			title: "Completion & Follow-up",
			description:
				"Successful completion of services with ongoing support as needed.",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Breadcrumb */}
			<div className="container mx-auto px-4 py-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/" className="flex items-center gap-2">
									<Home className="h-4 w-4" />
									Home
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Services</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
				<div className="container mx-auto px-4 text-center">
					<h1 className="font-bold font-serif text-4xl text-foreground tracking-tight sm:text-5xl md:text-6xl">
						Professional Real Estate Services
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
						Comprehensive real estate solutions tailored to your needs. From
						property valuation to investment consultation, we provide expert
						guidance every step of the way.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Link href="/contact">
							<Button size="lg" className="gap-2">
								<PhoneCall className="h-4 w-4" />
								Schedule Consultation
							</Button>
						</Link>
						<Link href="/valuation">
							<Button variant="outline" size="lg" className="gap-2">
								<Calculator className="h-4 w-4" />
								Get Property Valuation
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Our Services
						</h2>
						<p className="mt-4 text-muted-foreground">
							Expert real estate services designed to meet your specific needs
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
						{services.map((service, index) => (
							<Card
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="h-full transition-shadow hover:shadow-lg"
							>
								<CardContent className="p-6">
									<div className="mb-4 flex items-center gap-3">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
											<service.icon className="h-6 w-6 text-primary" />
										</div>
										<div>
											<h3 className="font-semibold font-serif text-xl">
												{service.title}
											</h3>
											<div className="flex items-center gap-4 text-muted-foreground text-sm">
												<span className="flex items-center gap-1">
													<Clock className="h-3 w-3" />
													{service.duration}
												</span>
												<span className="font-medium text-primary">
													{service.price}
												</span>
											</div>
										</div>
									</div>

									<p className="mb-4 text-muted-foreground">
										{service.description}
									</p>

									<div className="mb-6">
										<h4 className="mb-2 font-medium">What's included:</h4>
										<ul className="space-y-1">
											{service.features.map((feature, idx) => (
												<li
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={idx}
													className="flex items-center gap-2 text-sm"
												>
													<Star className="h-3 w-3 text-primary" />
													{feature}
												</li>
											))}
										</ul>
									</div>

									<Link href="/contact">
										<Button className="w-full">Learn More</Button>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Our Process
						</h2>
						<p className="mt-4 text-muted-foreground">
							A systematic approach to delivering exceptional results
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
						{process.map((step, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={index} className="text-center">
								<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
									<span className="font-semibold">{step.step}</span>
								</div>
								<h3 className="mb-2 font-medium font-serif">{step.title}</h3>
								<p className="text-muted-foreground text-sm">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-semibold font-serif text-3xl text-foreground">
						Ready to Get Started?
					</h2>
					<p className="mt-4 text-muted-foreground">
						Contact us today for a free consultation and discover how we can
						help you achieve your real estate goals.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Link href="tel:+49017670440689">
							<Button size="lg" className="gap-2">
								<PhoneCall className="h-4 w-4" />
								Call Now: +49 (0)176 70440689
							</Button>
						</Link>
						<Link href="/contact">
							<Button variant="outline" size="lg" className="gap-2">
								<MapPin className="h-4 w-4" />
								Visit Our Office
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export const runtime = "edge";
