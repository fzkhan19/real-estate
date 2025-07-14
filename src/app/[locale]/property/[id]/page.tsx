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
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";
import {
	Bath,
	Bed,
	ChevronLeft,
	ChevronRight,
	Download,
	Heart,
	Home,
	MapPin,
	Phone,
	Send,
	Share2,
	Square,
	Star,
	TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface Props {
	params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;

	// In a real app, you'd fetch property data here
	const propertyTitle = "Modern City Apartment";

	return {
		title: `${propertyTitle} - Kuhn & Partners Real Estate`,
		description: `View details for ${propertyTitle}. Professional real estate services and property listings with Kuhn & Partners.`,
		keywords: [
			"property details",
			"real estate listing",
			"property for sale",
			"Berlin property",
		],
	};
}

export default async function PropertyDetailPage({ params }: Props) {
	const { locale, id } = await params;
	setRequestLocale(locale);

	// Mock property data - in a real app, fetch this based on the ID
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const properties: Record<string, any> = {
		"1": {
			id: 1,
			title: "Modern City Apartment",
			address: "Musterstraße 45, 10115 Berlin-Mitte",
			price: "€450,000",
			pricePerSqm: "€6,000",
			bedrooms: 2,
			bathrooms: 1,
			area: 75,
			rooms: 3,
			floor: 3,
			totalFloors: 5,
			yearBuilt: 2018,
			type: "Apartment",
			status: "For Sale",
			description:
				"This stunning modern apartment in the heart of Berlin-Mitte offers contemporary living with high-quality finishes throughout. The open-plan layout maximizes space and natural light, while the premium location provides easy access to the city's best amenities, restaurants, and transport links.",
			features: [
				"Central heating",
				"Double glazed windows",
				"Hardwood floors",
				"Modern kitchen",
				"Built-in wardrobes",
				"Balcony",
			],
			amenities: [
				"Elevator",
				"Bike storage",
				"Courtyard garden",
				"Video intercom",
				"Mail service",
			],
			energyRating: "B",
			contactPerson: "Maria Schmidt",
			contactPhone: "+49 (0)176 70440689",
			contactEmail: "maria@kuhnpartners.de",
		},
	};

	const property = properties[id];

	if (!property) {
		notFound();
	}

	const relatedProperties = [
		{
			id: 2,
			title: "Luxury Villa with Garden",
			address: "Charlottenburg, Berlin",
			price: "€1,200,000",
			bedrooms: 4,
			bathrooms: 3,
			area: 220,
		},
		{
			id: 3,
			title: "Cozy Studio Apartment",
			address: "Kreuzberg, Berlin",
			price: "€280,000",
			bedrooms: 1,
			bathrooms: 1,
			area: 45,
		},
		{
			id: 4,
			title: "Family House with Terrace",
			address: "Prenzlauer Berg, Berlin",
			price: "€850,000",
			bedrooms: 3,
			bathrooms: 2,
			area: 160,
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
							<BreadcrumbLink asChild>
								<Link href="/search">Properties</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{property.title}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Property Gallery */}
			<section>
				<div className="container mx-auto px-4">
					<div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
						{/* Main Image */}
						<div className="relative lg:col-span-2 lg:row-span-2">
							<div className="aspect-square rounded-lg bg-linear-to-br from-muted to-muted/50">
								<div className="flex h-full items-center justify-center">
									<Home className="h-24 w-24 text-muted-foreground" />
								</div>
							</div>
							<Button
								size="sm"
								variant="secondary"
								className="absolute top-4 right-4 h-10 w-10 p-0"
							>
								<Heart className="h-5 w-5" />
							</Button>
						</div>

						{/* Thumbnail Images */}
						{[1, 2, 3, 4].map((i) => (
							<div
								key={i}
								className="aspect-square rounded-lg bg-linear-to-br from-muted to-muted/50"
							>
								<div className="flex h-full items-center justify-center">
									<Home className="h-12 w-12 text-muted-foreground" />
								</div>
							</div>
						))}
					</div>

					<div className="mt-4 flex justify-between">
						<Button variant="outline" className="gap-2">
							<ChevronLeft className="h-4 w-4" />
							Previous
						</Button>
						<div className="flex gap-2">
							<Button variant="outline" size="sm" className="gap-2">
								<Share2 className="h-4 w-4" />
								Share
							</Button>
							<Button variant="outline" size="sm" className="gap-2">
								<Download className="h-4 w-4" />
								Download
							</Button>
						</div>
						<Button variant="outline" className="gap-2">
							Next
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</section>

			{/* Property Details */}
			<section className="py-8">
				<div className="container mx-auto px-4">
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Main Content */}
						<div className="space-y-8 lg:col-span-2">
							{/* Property Header */}
							<div>
								<div className="mb-2 flex items-center gap-2">
									<span className="rounded bg-primary/10 px-2 py-1 font-medium text-primary text-sm">
										{property.status}
									</span>
									<span className="rounded bg-muted px-2 py-1 text-muted-foreground text-sm">
										{property.type}
									</span>
								</div>
								<h1 className="font-bold font-serif text-3xl text-foreground">
									{property.title}
								</h1>
								<div className="mt-2 flex items-center gap-2 text-muted-foreground">
									<MapPin className="h-4 w-4" />
									<span>{property.address}</span>
								</div>
								<div className="mt-4 flex items-center gap-6">
									<div>
										<div className="font-bold text-3xl text-primary">
											{property.price}
										</div>
										<div className="text-muted-foreground text-sm">
											{property.pricePerSqm}/m²
										</div>
									</div>
								</div>
							</div>

							{/* Property Stats */}
							<Card>
								<CardContent className="p-6">
									<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
										<div className="text-center">
											<Bed className="mx-auto mb-2 h-8 w-8 text-primary" />
											<div className="font-semibold">{property.bedrooms}</div>
											<div className="text-muted-foreground text-sm">
												Bedrooms
											</div>
										</div>
										<div className="text-center">
											<Bath className="mx-auto mb-2 h-8 w-8 text-primary" />
											<div className="font-semibold">{property.bathrooms}</div>
											<div className="text-muted-foreground text-sm">
												Bathrooms
											</div>
										</div>
										<div className="text-center">
											<Square className="mx-auto mb-2 h-8 w-8 text-primary" />
											<div className="font-semibold">{property.area}m²</div>
											<div className="text-muted-foreground text-sm">
												Living Area
											</div>
										</div>
										<div className="text-center">
											<Home className="mx-auto mb-2 h-8 w-8 text-primary" />
											<div className="font-semibold">{property.rooms}</div>
											<div className="text-muted-foreground text-sm">
												Total Rooms
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Description */}
							<div>
								<h2 className="mb-4 font-semibold font-serif text-2xl">
									Description
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									{property.description}
								</p>
							</div>

							{/* Property Details */}
							<div>
								<h2 className="mb-4 font-semibold font-serif text-2xl">
									Property Details
								</h2>
								<Card>
									<CardContent className="p-6">
										<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
											<div className="flex justify-between">
												<span className="text-muted-foreground">
													Property Type:
												</span>
												<span className="font-medium">{property.type}</span>
											</div>
											<div className="flex justify-between">
												<span className="text-muted-foreground">Floor:</span>
												<span className="font-medium">
													{property.floor} of {property.totalFloors}
												</span>
											</div>
											<div className="flex justify-between">
												<span className="text-muted-foreground">
													Year Built:
												</span>
												<span className="font-medium">
													{property.yearBuilt}
												</span>
											</div>
											<div className="flex justify-between">
												<span className="text-muted-foreground">
													Energy Rating:
												</span>
												<span className="rounded bg-green-100 px-2 py-1 font-medium text-green-800 text-sm">
													{property.energyRating}
												</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>

							{/* Features */}
							<div>
								<h2 className="mb-4 font-semibold font-serif text-2xl">
									Features
								</h2>
								<Card>
									<CardContent className="p-6">
										<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
											{property.features.map(
												(feature: string, index: number) => (
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													<div key={index} className="flex items-center gap-2">
														<Star className="h-4 w-4 text-primary" />
														<span>{feature}</span>
													</div>
												),
											)}
										</div>
									</CardContent>
								</Card>
							</div>

							{/* Building Amenities */}
							<div>
								<h2 className="mb-4 font-semibold font-serif text-2xl">
									Building Amenities
								</h2>
								<Card>
									<CardContent className="p-6">
										<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
											{property.amenities.map(
												(amenity: string, index: number) => (
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													<div key={index} className="flex items-center gap-2">
														<Star className="h-4 w-4 text-primary" />
														<span>{amenity}</span>
													</div>
												),
											)}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>

						{/* Sidebar */}
						<div className="space-y-6">
							{/* Contact Form */}
							<Card>
								<CardHeader>
									<CardTitle className="font-serif">
										Inquire About This Property
									</CardTitle>
								</CardHeader>
								<CardContent>
									<form className="space-y-4">
										<div className="grid grid-cols-2 gap-3">
											<div className="space-y-2">
												<Label htmlFor="firstName">First Name</Label>
												<Input id="firstName" placeholder="John" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="lastName">Last Name</Label>
												<Input id="lastName" placeholder="Doe" />
											</div>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												type="email"
												placeholder="john@example.com"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="phone">Phone</Label>
											<Input
												id="phone"
												type="tel"
												placeholder="+49 123 456 789"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="message">Message</Label>
											<Textarea
												id="message"
												placeholder="I'm interested in this property..."
												className="min-h-[80px]"
											/>
										</div>
										<Button type="submit" className="w-full gap-2">
											<Send className="h-4 w-4" />
											Send Inquiry
										</Button>
									</form>
								</CardContent>
							</Card>

							{/* Contact Agent */}
							<Card>
								<CardHeader>
									<CardTitle className="font-serif">Contact Agent</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3 text-center">
										<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
											<Home className="h-8 w-8 text-primary" />
										</div>
										<div>
											<div className="font-semibold">
												{property.contactPerson}
											</div>
											<div className="text-muted-foreground text-sm">
												Senior Property Consultant
											</div>
										</div>
										<div className="space-y-2">
											<Link href={`tel:${property.contactPhone}`}>
												<Button variant="outline" className="w-full gap-2">
													<Phone className="h-4 w-4" />
													{property.contactPhone}
												</Button>
											</Link>
											<Link href={`mailto:${property.contactEmail}`}>
												<Button variant="outline" className="w-full gap-2">
													<Send className="h-4 w-4" />
													Email Agent
												</Button>
											</Link>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Mortgage Calculator */}
							<Card>
								<CardHeader>
									<CardTitle className="font-serif">
										Mortgage Calculator
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="space-y-2">
											<Label htmlFor="loanAmount">Loan Amount</Label>
											<Input
												id="loanAmount"
												type="number"
												placeholder="400000"
												defaultValue="400000"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="interestRate">Interest Rate (%)</Label>
											<Input
												id="interestRate"
												type="number"
												step="0.1"
												placeholder="3.5"
												defaultValue="3.5"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="loanTerm">Loan Term (years)</Label>
											<Input
												id="loanTerm"
												type="number"
												placeholder="30"
												defaultValue="30"
											/>
										</div>
										<Button variant="outline" className="w-full">
											Calculate Payment
										</Button>
										<div className="rounded-lg bg-muted p-4 text-center">
											<div className="text-muted-foreground text-sm">
												Estimated Monthly Payment
											</div>
											<div className="font-bold text-2xl text-primary">
												€1,896
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-8 text-center font-semibold font-serif text-3xl">
						Location & Neighborhood
					</h2>
					<Card>
						<CardContent className="p-0">
							<div className="aspect-video bg-linear-to-br from-muted to-muted/50">
								<div className="flex h-full items-center justify-center">
									<div className="text-center">
										<MapPin className="mx-auto h-16 w-16 text-muted-foreground" />
										<p className="mt-4 text-muted-foreground">
											Interactive neighborhood map
										</p>
										<p className="text-muted-foreground text-sm">
											{property.address}
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Related Properties */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-8 text-center font-semibold font-serif text-3xl">
						Similar Properties
					</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{relatedProperties.map((relatedProperty) => (
							<Card
								key={relatedProperty.id}
								className="group overflow-hidden transition-shadow hover:shadow-lg"
							>
								<div className="aspect-video bg-linear-to-br from-muted to-muted/50">
									<div className="flex h-full items-center justify-center">
										<Home className="h-12 w-12 text-muted-foreground" />
									</div>
								</div>
								<CardContent className="p-4">
									<h3 className="mb-2 font-semibold font-serif text-lg transition-colors group-hover:text-primary">
										{relatedProperty.title}
									</h3>
									<div className="mb-3 flex items-center gap-1 text-muted-foreground">
										<MapPin className="h-3 w-3" />
										<span className="text-sm">{relatedProperty.address}</span>
									</div>
									<div className="mb-3 font-bold text-primary text-xl">
										{relatedProperty.price}
									</div>
									<div className="mb-4 flex items-center gap-4 text-muted-foreground text-sm">
										<div className="flex items-center gap-1">
											<Bed className="h-4 w-4" />
											<span>{relatedProperty.bedrooms}</span>
										</div>
										<div className="flex items-center gap-1">
											<Bath className="h-4 w-4" />
											<span>{relatedProperty.bathrooms}</span>
										</div>
										<div className="flex items-center gap-1">
											<Square className="h-4 w-4" />
											<span>{relatedProperty.area}m²</span>
										</div>
									</div>
									<Link href={`/property/${relatedProperty.id}`}>
										<Button variant="outline" className="w-full">
											View Details
										</Button>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-primary/10 py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-semibold font-serif text-3xl text-foreground">
						Interested in This Property?
					</h2>
					<p className="mt-4 text-muted-foreground">
						Contact our experts for a personalized consultation and viewing
						appointment.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Link href={`tel:${property.contactPhone}`}>
							<Button size="lg" className="gap-2">
								<Phone className="h-4 w-4" />
								Call Agent Now
							</Button>
						</Link>
						<Link href="/valuation">
							<Button variant="outline" size="lg" className="gap-2">
								<TrendingUp className="h-4 w-4" />
								Get Property Valuation
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export const runtime = "edge";
