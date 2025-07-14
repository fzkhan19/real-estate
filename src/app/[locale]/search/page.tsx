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
import { Link } from "@/i18n/navigation";
import {
	Bath,
	Bed,
	Filter,
	Grid,
	Heart,
	Home,
	List,
	MapPin,
	Search,
	SlidersHorizontal,
	Square,
} from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface Props {
	params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
	return {
		title: "Property Search - Kuhn & Partners Real Estate",
		description:
			"Search properties with Kuhn & Partners. Advanced filters, detailed listings, and expert guidance to find your perfect home or investment property.",
		keywords: [
			"property search",
			"real estate listings",
			"homes for sale",
			"property finder",
			"real estate search",
		],
	};
}

export default async function SearchPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	// Mock property data
	const properties = [
		{
			id: 1,
			title: "Modern City Apartment",
			address: "Mitte, Berlin",
			price: "€450,000",
			bedrooms: 2,
			bathrooms: 1,
			area: 75,
			type: "Apartment",
			featured: true,
		},
		{
			id: 2,
			title: "Luxury Villa with Garden",
			address: "Charlottenburg, Berlin",
			price: "€1,200,000",
			bedrooms: 4,
			bathrooms: 3,
			area: 220,
			type: "Villa",
			featured: false,
		},
		{
			id: 3,
			title: "Cozy Studio Apartment",
			address: "Kreuzberg, Berlin",
			price: "€280,000",
			bedrooms: 1,
			bathrooms: 1,
			area: 45,
			type: "Studio",
			featured: false,
		},
		{
			id: 4,
			title: "Family House with Terrace",
			address: "Prenzlauer Berg, Berlin",
			price: "€850,000",
			bedrooms: 3,
			bathrooms: 2,
			area: 160,
			type: "House",
			featured: true,
		},
		{
			id: 5,
			title: "Penthouse with City View",
			address: "Friedrichshain, Berlin",
			price: "€950,000",
			bedrooms: 3,
			bathrooms: 2,
			area: 130,
			type: "Penthouse",
			featured: false,
		},
		{
			id: 6,
			title: "Renovated Loft Space",
			address: "Wedding, Berlin",
			price: "€620,000",
			bedrooms: 2,
			bathrooms: 2,
			area: 110,
			type: "Loft",
			featured: false,
		},
	];

	const propertyTypes = [
		"All Types",
		"Apartment",
		"House",
		"Villa",
		"Studio",
		"Penthouse",
		"Loft",
		"Commercial",
	];

	const priceRanges = [
		"Any Price",
		"Up to €200,000",
		"€200,000 - €400,000",
		"€400,000 - €600,000",
		"€600,000 - €800,000",
		"€800,000 - €1,000,000",
		"€1,000,000+",
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
							<BreadcrumbPage>Property Search</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Search Header */}
			<section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8">
				<div className="container mx-auto px-4">
					<h1 className="font-bold font-serif text-3xl text-foreground tracking-tight sm:text-4xl">
						Find Your Perfect Property
					</h1>
					<p className="mt-4 text-muted-foreground">
						Search through our curated selection of premium properties
					</p>
				</div>
			</section>

			{/* Search Filters */}
			<section className="border-b bg-background py-6">
				<div className="container mx-auto px-4">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<SlidersHorizontal className="h-5 w-5" />
								Search Filters
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
								{/* Location */}
								<div className="space-y-2">
									<Label htmlFor="location">Location</Label>
									<div className="relative">
										<Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
										<Input
											id="location"
											placeholder="City, district..."
											className="pl-10"
										/>
									</div>
								</div>

								{/* Property Type */}
								<div className="space-y-2">
									<Label htmlFor="propertyType">Property Type</Label>
									<select
										id="propertyType"
										className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
									>
										{propertyTypes.map((type) => (
											<option key={type} value={type}>
												{type}
											</option>
										))}
									</select>
								</div>

								{/* Price Range */}
								<div className="space-y-2">
									<Label htmlFor="priceRange">Price Range</Label>
									<select
										id="priceRange"
										className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
									>
										{priceRanges.map((range) => (
											<option key={range} value={range}>
												{range}
											</option>
										))}
									</select>
								</div>

								{/* Bedrooms */}
								<div className="space-y-2">
									<Label htmlFor="bedrooms">Bedrooms</Label>
									<select
										id="bedrooms"
										className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
									>
										<option value="">Any</option>
										<option value="1">1+</option>
										<option value="2">2+</option>
										<option value="3">3+</option>
										<option value="4">4+</option>
										<option value="5">5+</option>
									</select>
								</div>
							</div>

							<div className="mt-6 flex flex-wrap gap-3">
								<Button className="gap-2">
									<Search className="h-4 w-4" />
									Search Properties
								</Button>
								<Button variant="outline" className="gap-2">
									<Filter className="h-4 w-4" />
									Advanced Filters
								</Button>
								<Button variant="outline">Clear Filters</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Results and Layout */}
			<section className="py-6">
				<div className="container mx-auto px-4">
					<div className="flex flex-col gap-6 lg:flex-row">
						{/* Sidebar Filters */}
						<div className="lg:w-1/4">
							<Card className="sticky top-6">
								<CardHeader>
									<CardTitle className="text-lg">Refine Search</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									{/* Area Range */}
									<div className="space-y-3">
										<Label>Area (m²)</Label>
										<div className="grid grid-cols-2 gap-2">
											<Input placeholder="Min" type="number" />
											<Input placeholder="Max" type="number" />
										</div>
									</div>

									<Separator />

									{/* Features */}
									<div className="space-y-3">
										<Label>Features</Label>
										<div className="space-y-2">
											{[
												"Balcony",
												"Garden",
												"Parking",
												"Elevator",
												"Furnished",
												"Pet-friendly",
											].map((feature) => (
												<label
													key={feature}
													className="flex items-center space-x-2"
												>
													<input type="checkbox" className="rounded" />
													<span className="text-sm">{feature}</span>
												</label>
											))}
										</div>
									</div>

									<Separator />

									{/* Energy Rating */}
									<div className="space-y-3">
										<Label>Energy Rating</Label>
										<select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
											<option value="">Any Rating</option>
											<option value="A">A</option>
											<option value="B">B</option>
											<option value="C">C</option>
											<option value="D">D</option>
										</select>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Results Area */}
						<div className="lg:w-3/4">
							{/* Results Header */}
							<div className="mb-6 flex items-center justify-between">
								<div>
									<h2 className="font-semibold font-serif text-xl">
										{properties.length} Properties Found
									</h2>
									<p className="text-muted-foreground">
										Showing results for Berlin area
									</p>
								</div>
								<div className="flex items-center gap-2">
									<Button variant="outline" size="sm" className="gap-1">
										<List className="h-4 w-4" />
										List
									</Button>
									<Button variant="outline" size="sm" className="gap-1">
										<Grid className="h-4 w-4" />
										Grid
									</Button>
								</div>
							</div>

							{/* Property Grid */}
							<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
								{properties.map((property) => (
									<Card
										key={property.id}
										className="group overflow-hidden transition-shadow hover:shadow-lg"
									>
										<div className="relative">
											{/* Property Image Placeholder */}
											<div className="aspect-video bg-gradient-to-br from-muted to-muted/50">
												<div className="flex h-full items-center justify-center">
													<Home className="h-12 w-12 text-muted-foreground" />
												</div>
											</div>

											{/* Property Badges */}
											<div className="absolute top-3 left-3 flex gap-2">
												{property.featured && (
													<span className="rounded bg-primary px-2 py-1 font-medium text-primary-foreground text-xs">
														Featured
													</span>
												)}
											</div>

											{/* Favorite Button */}
											<Button
												size="sm"
												variant="secondary"
												className="absolute top-3 right-3 h-8 w-8 p-0"
											>
												<Heart className="h-4 w-4" />
											</Button>
										</div>

										<CardContent className="p-4">
											<div className="mb-2">
												<h3 className="font-semibold font-serif text-lg transition-colors group-hover:text-primary">
													{property.title}
												</h3>
												<div className="flex items-center gap-1 text-muted-foreground">
													<MapPin className="h-3 w-3" />
													<span className="text-sm">{property.address}</span>
												</div>
											</div>

											<div className="mb-3 font-bold text-2xl text-primary">
												{property.price}
											</div>

											<div className="flex items-center gap-4 text-muted-foreground text-sm">
												<div className="flex items-center gap-1">
													<Bed className="h-4 w-4" />
													<span>{property.bedrooms}</span>
												</div>
												<div className="flex items-center gap-1">
													<Bath className="h-4 w-4" />
													<span>{property.bathrooms}</span>
												</div>
												<div className="flex items-center gap-1">
													<Square className="h-4 w-4" />
													<span>{property.area}m²</span>
												</div>
											</div>

											<Link
												href={`/property/${property.id}`}
												className="mt-4 block"
											>
												<Button className="w-full">View Details</Button>
											</Link>
										</CardContent>
									</Card>
								))}
							</div>

							{/* Pagination */}
							<div className="mt-8 flex justify-center">
								<div className="flex items-center gap-2">
									<Button variant="outline" disabled>
										Previous
									</Button>
									<Button
										variant="outline"
										className="bg-primary text-primary-foreground"
									>
										1
									</Button>
									<Button variant="outline">2</Button>
									<Button variant="outline">3</Button>
									<Button variant="outline">Next</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section Placeholder */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-8 text-center font-semibold font-serif text-3xl">
						Property Locations
					</h2>
					<Card>
						<CardContent className="p-0">
							<div className="aspect-video bg-gradient-to-br from-muted to-muted/50">
								<div className="flex h-full items-center justify-center">
									<div className="text-center">
										<MapPin className="mx-auto h-16 w-16 text-muted-foreground" />
										<p className="mt-4 text-muted-foreground">
											Interactive map with property locations
										</p>
										<p className="text-muted-foreground text-sm">Coming soon</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-semibold font-serif text-3xl text-foreground">
						Can't Find What You're Looking For?
					</h2>
					<p className="mt-4 text-muted-foreground">
						Let our experts help you find the perfect property that matches your
						specific requirements.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Link href="/contact">
							<Button size="lg" className="gap-2">
								<Search className="h-4 w-4" />
								Custom Property Search
							</Button>
						</Link>
						<Link href="/valuation">
							<Button variant="outline" size="lg" className="gap-2">
								<Home className="h-4 w-4" />
								Property Alerts
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export const runtime = "edge";
