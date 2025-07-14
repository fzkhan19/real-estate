import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";
import {
	Calculator,
	CheckCircle,
	Clock,
	FileText,
	Home,
	MapPin,
	PhoneCall,
	Star,
	TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

interface Props {
	params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
	return {
		title: "Property Valuation - Kuhn & Partners Real Estate",
		description:
			"Get a professional property valuation from Kuhn & Partners. Accurate market assessments, detailed reports, and expert analysis for your real estate decisions.",
		keywords: [
			"property valuation",
			"real estate appraisal",
			"property assessment",
			"market analysis",
			"property value",
		],
	};
}

export default async function ValuationPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	const valuationTypes = [
		{
			name: "Quick Estimate",
			price: "Free",
			duration: "Within 24 hours",
			description: "Basic property estimate based on market data and location",
			features: [
				"Market comparison analysis",
				"Location-based pricing",
				"Online assessment report",
				"General market insights",
			],
			recommended: false,
		},
		{
			name: "Standard Valuation",
			price: "€299",
			duration: "2-3 business days",
			description:
				"Comprehensive property assessment with detailed market analysis",
			features: [
				"On-site property inspection",
				"Detailed market research",
				"Comprehensive written report",
				"Price recommendation",
				"Market trend analysis",
				"Comparable sales data",
			],
			recommended: true,
		},
		{
			name: "Premium Assessment",
			price: "€499",
			duration: "3-5 business days",
			description: "In-depth analysis for investment and legal purposes",
			features: [
				"Detailed property inspection",
				"Professional photography",
				"Investment potential analysis",
				"Legal compliance check",
				"Rental yield assessment",
				"Future market projections",
				"Renovation recommendations",
				"Tax implications overview",
			],
			recommended: false,
		},
	];

	const process = [
		{
			step: 1,
			title: "Submit Request",
			description: "Fill out our valuation form with property details",
		},
		{
			step: 2,
			title: "Initial Review",
			description: "Our team reviews your submission and contacts you",
		},
		{
			step: 3,
			title: "Property Inspection",
			description: "Professional on-site inspection (for standard & premium)",
		},
		{
			step: 4,
			title: "Market Analysis",
			description: "Comprehensive research and comparison analysis",
		},
		{
			step: 5,
			title: "Report Delivery",
			description: "Receive your detailed valuation report",
		},
	];

	const benefits = [
		{
			icon: TrendingUp,
			title: "Market Insights",
			description:
				"Current market conditions and trends affecting your property value",
		},
		{
			icon: Calculator,
			title: "Accurate Pricing",
			description:
				"Professional assessment based on comparable sales and market data",
		},
		{
			icon: FileText,
			title: "Detailed Reports",
			description:
				"Comprehensive documentation for your records and decision-making",
		},
		{
			icon: Star,
			title: "Expert Analysis",
			description:
				"Professional insights from experienced real estate specialists",
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
							<BreadcrumbPage>Property Valuation</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
				<div className="container mx-auto px-4 text-center">
					<h1 className="font-bold font-serif text-4xl text-foreground tracking-tight sm:text-5xl md:text-6xl">
						Professional Property Valuation
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
						Get an accurate assessment of your property's market value with our
						comprehensive valuation services. Expert analysis, detailed reports,
						and professional insights to guide your real estate decisions.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button size="lg" className="gap-2">
							<Calculator className="h-4 w-4" />
							Start Valuation Request
						</Button>
						<Link href="/contact">
							<Button variant="outline" size="lg" className="gap-2">
								<PhoneCall className="h-4 w-4" />
								Speak with Expert
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Valuation Types */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Choose Your Valuation Service
						</h2>
						<p className="mt-4 text-muted-foreground">
							Select the level of assessment that best fits your needs
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-3">
						{valuationTypes.map((type, index) => (
							<Card
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className={`relative h-full transition-shadow hover:shadow-lg ${
									type.recommended ? "ring-2 ring-primary" : ""
								}`}
							>
								{type.recommended && (
									<div className="-top-3 -translate-x-1/2 absolute left-1/2">
										<span className="rounded-full bg-primary px-3 py-1 font-medium text-primary-foreground text-sm">
											Most Popular
										</span>
									</div>
								)}
								<CardHeader>
									<CardTitle className="font-serif text-xl">
										{type.name}
									</CardTitle>
									<div className="flex items-center gap-2">
										<span className="font-bold text-3xl text-primary">
											{type.price}
										</span>
										<div className="text-muted-foreground text-sm">
											<div className="flex items-center gap-1">
												<Clock className="h-3 w-3" />
												{type.duration}
											</div>
										</div>
									</div>
									<p className="text-muted-foreground">{type.description}</p>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										{type.features.map((feature, idx) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<div key={idx} className="flex items-center gap-2">
												<CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
												<span className="text-sm">{feature}</span>
											</div>
										))}
									</div>
									<Button
										className="mt-6 w-full"
										variant={type.recommended ? "default" : "outline"}
									>
										Select {type.name}
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Valuation Form */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<div className="mb-8 text-center">
							<h2 className="font-semibold font-serif text-3xl text-foreground">
								Request Your Valuation
							</h2>
							<p className="mt-4 text-muted-foreground">
								Provide your property details to get started
							</p>
						</div>

						<Card>
							<CardHeader>
								<CardTitle className="font-serif">
									Property Information
								</CardTitle>
							</CardHeader>
							<CardContent>
								<form className="space-y-6">
									{/* Property Details */}
									<div className="space-y-4">
										<h3 className="font-medium">Property Details</h3>
										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="propertyType">Property Type *</Label>
												<select
													id="propertyType"
													name="propertyType"
													className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
													required
												>
													<option value="">Select property type</option>
													<option value="apartment">Apartment</option>
													<option value="house">House</option>
													<option value="villa">Villa</option>
													<option value="commercial">Commercial</option>
													<option value="land">Land</option>
													<option value="other">Other</option>
												</select>
											</div>
											<div className="space-y-2">
												<Label htmlFor="propertySize">Size (m²) *</Label>
												<Input
													id="propertySize"
													name="propertySize"
													type="number"
													placeholder="Living space in m²"
													required
												/>
											</div>
										</div>

										<div className="grid gap-4 sm:grid-cols-3">
											<div className="space-y-2">
												<Label htmlFor="rooms">Rooms</Label>
												<Input
													id="rooms"
													name="rooms"
													type="number"
													placeholder="Number of rooms"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="bedrooms">Bedrooms</Label>
												<Input
													id="bedrooms"
													name="bedrooms"
													type="number"
													placeholder="Number of bedrooms"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="bathrooms">Bathrooms</Label>
												<Input
													id="bathrooms"
													name="bathrooms"
													type="number"
													placeholder="Number of bathrooms"
												/>
											</div>
										</div>

										<div className="space-y-2">
											<Label htmlFor="address">Property Address *</Label>
											<Input
												id="address"
												name="address"
												placeholder="Full property address"
												required
											/>
										</div>
									</div>

									<Separator />

									{/* Contact Information */}
									<div className="space-y-4">
										<h3 className="font-medium">Contact Information</h3>
										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="firstName">First Name *</Label>
												<Input
													id="firstName"
													name="firstName"
													placeholder="Enter your first name"
													required
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="lastName">Last Name *</Label>
												<Input
													id="lastName"
													name="lastName"
													placeholder="Enter your last name"
													required
												/>
											</div>
										</div>

										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="email">Email Address *</Label>
												<Input
													id="email"
													name="email"
													type="email"
													placeholder="Enter your email"
													required
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="phone">Phone Number *</Label>
												<Input
													id="phone"
													name="phone"
													type="tel"
													placeholder="Enter your phone number"
													required
												/>
											</div>
										</div>
									</div>

									<Separator />

									{/* Additional Information */}
									<div className="space-y-4">
										<h3 className="font-medium">Additional Information</h3>
										<div className="space-y-2">
											<Label htmlFor="purpose">Valuation Purpose</Label>
											<select
												id="purpose"
												name="purpose"
												className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
											>
												<option value="">Select purpose</option>
												<option value="selling">Selling the property</option>
												<option value="buying">Buying assistance</option>
												<option value="investment">Investment analysis</option>
												<option value="refinancing">Refinancing</option>
												<option value="insurance">Insurance purposes</option>
												<option value="other">Other</option>
											</select>
										</div>

										<div className="space-y-2">
											<Label htmlFor="additionalInfo">Additional Notes</Label>
											<Textarea
												id="additionalInfo"
												name="additionalInfo"
												placeholder="Any additional information about the property or special requirements..."
												className="min-h-[80px]"
											/>
										</div>
									</div>

									<Button type="submit" size="lg" className="w-full gap-2">
										<FileText className="h-4 w-4" />
										Submit Valuation Request
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							How It Works
						</h2>
						<p className="mt-4 text-muted-foreground">
							Our streamlined valuation process
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

			{/* Benefits Section */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Why Choose Our Valuation Service?
						</h2>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{benefits.map((benefit, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={index} className="text-center">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
									<benefit.icon className="h-8 w-8 text-primary" />
								</div>
								<h3 className="mb-3 font-semibold font-serif text-lg">
									{benefit.title}
								</h3>
								<p className="text-muted-foreground">{benefit.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-semibold font-serif text-3xl text-foreground">
						Need Help Choosing?
					</h2>
					<p className="mt-4 text-muted-foreground">
						Our experts are here to help you select the right valuation service
						for your specific needs.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Link href="tel:+49017670440689">
							<Button size="lg" className="gap-2">
								<PhoneCall className="h-4 w-4" />
								Call for Consultation
							</Button>
						</Link>
						<Link href="/contact">
							<Button variant="outline" size="lg" className="gap-2">
								<MapPin className="h-4 w-4" />
								Schedule Meeting
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export const runtime = "edge";
