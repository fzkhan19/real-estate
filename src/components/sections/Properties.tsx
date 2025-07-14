"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Bath, Bed, Eye, Heart, MapPin, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
	id: string;
	title: string;
	location: string;
	price: string;
	beds: number;
	baths: number;
	sqft: number;
	image: string;
	type: string;
	status: "For Sale" | "Sold" | "Pending";
}

const featuredProperties: PropertyProps[] = [
	{
		id: "1",
		title: "Modern Family Home",
		location: "Downtown Manhattan, NY",
		price: "$2,850,000",
		beds: 4,
		baths: 3,
		sqft: 2400,
		image: "/stock/property1.jpg",
		type: "Single Family",
		status: "For Sale",
	},
	{
		id: "2",
		title: "Luxury Penthouse",
		location: "Upper East Side, NY",
		price: "$4,200,000",
		beds: 3,
		baths: 2,
		sqft: 1800,
		image: "/stock/property2.jpg",
		type: "Condo",
		status: "For Sale",
	},
	{
		id: "3",
		title: "Cozy Townhouse",
		location: "Brooklyn Heights, NY",
		price: "$1,750,000",
		beds: 3,
		baths: 2,
		sqft: 1600,
		image: "/stock/property3.jpg",
		type: "Townhouse",
		status: "Sold",
	},
	{
		id: "4",
		title: "Spacious Apartment",
		location: "Chelsea, NY",
		price: "$1,950,000",
		beds: 2,
		baths: 2,
		sqft: 1200,
		image: "/stock/property4.jpg",
		type: "Apartment",
		status: "Pending",
	},
	{
		id: "5",
		title: "Contemporary Loft",
		location: "SoHo, NY",
		price: "$3,100,000",
		beds: 2,
		baths: 1,
		sqft: 1400,
		image: "/stock/property5.jpg",
		type: "Loft",
		status: "For Sale",
	},
	{
		id: "6",
		title: "Waterfront Villa",
		location: "Long Island, NY",
		price: "$5,500,000",
		beds: 5,
		baths: 4,
		sqft: 3200,
		image: "/stock/property6.jpg",
		type: "Villa",
		status: "For Sale",
	},
];

const PropertyCard = ({ property }: { property: PropertyProps }) => {
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
				<div className="mb-4 font-bold text-2xl text-primary">
					{property.price}
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

export const Properties = () => {
	return (
		<section id="properties" className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						Featured Properties
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Discover our handpicked selection of premium properties in prime
						locations
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{featuredProperties.map((property) => (
						<PropertyCard key={property.id} property={property} />
					))}
				</div>

				<div className="mt-12 text-center">
					<Button size="lg" variant="outline" asChild>
						<Link href="/properties">View All Properties</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
