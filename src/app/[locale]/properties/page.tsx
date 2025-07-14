"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
	Bath,
	Bed,
	Eye,
	Filter,
	Heart,
	MapPin,
	Search,
	Square,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PropertyProps {
	id: string;
	title: string;
	location: string;
	price: number;
	beds: number;
	baths: number;
	sqft: number;
	image: string;
	type: string;
	status: "For Sale" | "Sold" | "Pending";
	yearBuilt: number;
	description: string;
}

const allProperties: PropertyProps[] = [
	{
		id: "1",
		title: "Modern Family Home",
		location: "Downtown Manhattan, NY",
		price: 2850000,
		beds: 4,
		baths: 3,
		sqft: 2400,
		image: "/stock/property1.jpg",
		type: "Single Family",
		status: "For Sale",
		yearBuilt: 2020,
		description:
			"A stunning modern family home with contemporary design and premium finishes.",
	},
	{
		id: "2",
		title: "Luxury Penthouse",
		location: "Upper East Side, NY",
		price: 4200000,
		beds: 3,
		baths: 2,
		sqft: 1800,
		image: "/stock/property2.jpg",
		type: "Condo",
		status: "For Sale",
		yearBuilt: 2019,
		description:
			"Exclusive penthouse with panoramic city views and luxury amenities.",
	},
	{
		id: "3",
		title: "Cozy Townhouse",
		location: "Brooklyn Heights, NY",
		price: 1750000,
		beds: 3,
		baths: 2,
		sqft: 1600,
		image: "/stock/property3.jpg",
		type: "Townhouse",
		status: "Sold",
		yearBuilt: 2018,
		description:
			"Charming townhouse with classic architecture and modern updates.",
	},
	{
		id: "4",
		title: "Spacious Apartment",
		location: "Chelsea, NY",
		price: 1950000,
		beds: 2,
		baths: 2,
		sqft: 1200,
		image: "/stock/property4.jpg",
		type: "Apartment",
		status: "Pending",
		yearBuilt: 2021,
		description: "Bright and spacious apartment in a prime Chelsea location.",
	},
	{
		id: "5",
		title: "Contemporary Loft",
		location: "SoHo, NY",
		price: 3100000,
		beds: 2,
		baths: 1,
		sqft: 1400,
		image: "/stock/property5.jpg",
		type: "Loft",
		status: "For Sale",
		yearBuilt: 2017,
		description: "Artistic loft with high ceilings and industrial charm.",
	},
	{
		id: "6",
		title: "Waterfront Villa",
		location: "Long Island, NY",
		price: 5500000,
		beds: 5,
		baths: 4,
		sqft: 3200,
		image: "/stock/property6.jpg",
		type: "Villa",
		status: "For Sale",
		yearBuilt: 2022,
		description: "Stunning waterfront villa with private beach access.",
	},
	{
		id: "7",
		title: "Historic Brownstone",
		location: "Brooklyn, NY",
		price: 2300000,
		beds: 4,
		baths: 3,
		sqft: 2000,
		image: "/stock/property7.jpg",
		type: "Townhouse",
		status: "For Sale",
		yearBuilt: 1920,
		description:
			"Beautifully restored historic brownstone with original details.",
	},
	{
		id: "8",
		title: "Modern Studio",
		location: "Midtown, NY",
		price: 850000,
		beds: 1,
		baths: 1,
		sqft: 600,
		image: "/stock/property8.jpg",
		type: "Studio",
		status: "For Sale",
		yearBuilt: 2023,
		description: "Efficient studio apartment with smart home features.",
	},
	{
		id: "9",
		title: "Duplex Penthouse",
		location: "Tribeca, NY",
		price: 6200000,
		beds: 4,
		baths: 3,
		sqft: 2800,
		image: "/stock/property9.jpg",
		type: "Penthouse",
		status: "For Sale",
		yearBuilt: 2021,
		description: "Exclusive duplex penthouse with private terrace.",
	},
];

const PropertyCard = ({ property }: { property: PropertyProps }) => {
	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(price);
	};

	return (
		<Card className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg">
			<CardHeader className="relative p-0">
				<div className="relative h-64 overflow-hidden">
					<Image
						src={property.image}
						alt={property.title}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute top-4 left-4 flex gap-2">
						<Badge
							variant={
								property.status === "For Sale"
									? "default"
									: property.status === "Sold"
										? "destructive"
										: "secondary"
							}
						>
							{property.status}
						</Badge>
						<Badge variant="outline" className="bg-white/90">
							{property.type}
						</Badge>
					</div>
					<div className="absolute top-4 right-4 flex gap-2">
						<Button
							size="sm"
							variant="ghost"
							className="h-8 w-8 bg-white/90 p-0 hover:bg-white"
						>
							<Heart className="h-4 w-4" />
						</Button>
						<Button
							size="sm"
							variant="ghost"
							className="h-8 w-8 bg-white/90 p-0 hover:bg-white"
						>
							<Eye className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<div className="mb-2 flex items-center gap-1 text-muted-foreground text-sm">
					<MapPin className="h-4 w-4" />
					{property.location}
				</div>
				<h3 className="mb-2 font-playfair font-semibold text-xl">
					{property.title}
				</h3>
				<p className="mb-3 line-clamp-2 text-muted-foreground text-sm">
					{property.description}
				</p>
				<div className="mb-4 font-bold text-2xl text-primary">
					{formatPrice(property.price)}
				</div>
				<div className="flex items-center gap-4 text-muted-foreground text-sm">
					<div className="flex items-center gap-1">
						<Bed className="h-4 w-4" />
						{property.beds} beds
					</div>
					<div className="flex items-center gap-1">
						<Bath className="h-4 w-4" />
						{property.baths} baths
					</div>
					<div className="flex items-center gap-1">
						<Square className="h-4 w-4" />
						{property.sqft} sqft
					</div>
				</div>
			</CardContent>
			<CardFooter className="p-4 pt-0">
				<Button asChild className="w-full">
					<Link href={`/property/${property.id}`}>View Details</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default function PropertiesPage() {
	const [filteredProperties, setFilteredProperties] = useState(allProperties);
	const [searchTerm, setSearchTerm] = useState("");
	const [priceRange, setPriceRange] = useState([0, 10000000]);
	const [propertyType, setPropertyType] = useState("all");
	const [bedrooms, setBedrooms] = useState("all");
	const [status, setStatus] = useState("all");

	const handleSearch = () => {
		let filtered = allProperties;

		if (searchTerm) {
			filtered = filtered.filter(
				(property) =>
					property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					property.location.toLowerCase().includes(searchTerm.toLowerCase()),
			);
		}

		if (propertyType !== "all") {
			filtered = filtered.filter((property) => property.type === propertyType);
		}

		if (bedrooms !== "all") {
			filtered = filtered.filter(
				(property) => property.beds >= Number.parseInt(bedrooms),
			);
		}

		if (status !== "all") {
			filtered = filtered.filter((property) => property.status === status);
		}

		filtered = filtered.filter(
			(property) =>
				property.price >= priceRange[0] && property.price <= priceRange[1],
		);

		setFilteredProperties(filtered);
	};

	const resetFilters = () => {
		setSearchTerm("");
		setPriceRange([0, 10000000]);
		setPropertyType("all");
		setBedrooms("all");
		setStatus("all");
		setFilteredProperties(allProperties);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="border-b bg-white shadow-xs">
				<div className="container mx-auto px-4 py-8">
					<h1 className="mb-2 font-bold font-playfair text-3xl sm:text-4xl">
						Properties
					</h1>
					<p className="text-muted-foreground">
						Discover your perfect home from our curated collection of premium
						properties
					</p>
				</div>
			</div>

			{/* Filters */}
			<div className="border-b bg-white shadow-xs">
				<div className="container mx-auto px-4 py-6">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
						<div className="lg:col-span-2">
							<div className="relative">
								<Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
								<Input
									placeholder="Search properties..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10"
								/>
							</div>
						</div>

						<Select value={propertyType} onValueChange={setPropertyType}>
							<SelectTrigger>
								<SelectValue placeholder="Property Type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Types</SelectItem>
								<SelectItem value="Single Family">Single Family</SelectItem>
								<SelectItem value="Condo">Condo</SelectItem>
								<SelectItem value="Townhouse">Townhouse</SelectItem>
								<SelectItem value="Apartment">Apartment</SelectItem>
								<SelectItem value="Loft">Loft</SelectItem>
								<SelectItem value="Villa">Villa</SelectItem>
								<SelectItem value="Penthouse">Penthouse</SelectItem>
								<SelectItem value="Studio">Studio</SelectItem>
							</SelectContent>
						</Select>

						<Select value={bedrooms} onValueChange={setBedrooms}>
							<SelectTrigger>
								<SelectValue placeholder="Bedrooms" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Any</SelectItem>
								<SelectItem value="1">1+ Bedrooms</SelectItem>
								<SelectItem value="2">2+ Bedrooms</SelectItem>
								<SelectItem value="3">3+ Bedrooms</SelectItem>
								<SelectItem value="4">4+ Bedrooms</SelectItem>
								<SelectItem value="5">5+ Bedrooms</SelectItem>
							</SelectContent>
						</Select>

						<Select value={status} onValueChange={setStatus}>
							<SelectTrigger>
								<SelectValue placeholder="Status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Status</SelectItem>
								<SelectItem value="For Sale">For Sale</SelectItem>
								<SelectItem value="Sold">Sold</SelectItem>
								<SelectItem value="Pending">Pending</SelectItem>
							</SelectContent>
						</Select>

						<div className="flex gap-2">
							<Button onClick={handleSearch} className="flex-1">
								<Filter className="mr-2 h-4 w-4" />
								Filter
							</Button>
							<Button onClick={resetFilters} variant="outline">
								Reset
							</Button>
						</div>
					</div>

					{/* Price Range */}
					<div className="mt-4 border-t pt-4">
						<div className="flex items-center gap-4">
							<span className="min-w-[80px] font-medium text-sm">
								Price Range:
							</span>
							<div className="flex-1 px-4">
								<Slider
									value={priceRange}
									onValueChange={setPriceRange}
									max={10000000}
									min={0}
									step={100000}
									className="w-full"
								/>
							</div>
							<div className="min-w-[200px] text-muted-foreground text-sm">
								${(priceRange[0] / 1000000).toFixed(1)}M - $
								{(priceRange[1] / 1000000).toFixed(1)}M
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Results */}
			<div className="container mx-auto px-4 py-8">
				<div className="mb-6 flex items-center justify-between">
					<p className="text-muted-foreground">
						Showing {filteredProperties.length} of {allProperties.length}{" "}
						properties
					</p>
					<Select defaultValue="newest">
						<SelectTrigger className="w-48">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="newest">Newest First</SelectItem>
							<SelectItem value="price-low">Price: Low to High</SelectItem>
							<SelectItem value="price-high">Price: High to Low</SelectItem>
							<SelectItem value="sqft">Square Footage</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{filteredProperties.length === 0 ? (
					<div className="py-12 text-center">
						<p className="text-lg text-muted-foreground">
							No properties found matching your criteria.
						</p>
						<Button onClick={resetFilters} className="mt-4">
							Clear Filters
						</Button>
					</div>
				) : (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filteredProperties.map((property) => (
							<PropertyCard key={property.id} property={property} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
