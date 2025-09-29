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
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const runtime = "edge";

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
	status: string;
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
			"A stunning modern family home with contemporary design and premium finishes. Located in a vibrant neighborhood with easy access to parks, schools, and downtown amenities. Features a spacious open-plan living area, gourmet kitchen, and a private backyard perfect for entertaining. Energy-efficient appliances and smart home technology included.",
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
			"Exclusive penthouse with panoramic city views and luxury amenities. This exquisite property offers unparalleled elegance and comfort. Enjoy breathtaking sunsets from your private terrace. Building features include a 24/7 concierge, state-of-the-art gym, and rooftop pool.",
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
	const t = useTranslations("PropertiesPage");

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
							{property.status === "For Sale"
								? t("status.forSale")
								: property.status === "Sold"
									? t("status.sold")
									: t("status.pending")}
						</Badge>
						<Badge variant="outline" className="bg-white/90">
							{property.type === "Single Family"
								? t("type.singleFamily")
								: property.type === "Condo"
									? t("type.condo")
									: property.type === "Townhouse"
										? t("type.townhouse")
										: property.type === "Apartment"
											? t("type.apartment")
											: property.type === "Loft"
												? t("type.loft")
												: property.type === "Villa"
													? t("type.villa")
													: property.type === "Penthouse"
														? t("type.penthouse")
														: t("type.studio")}
						</Badge>
					</div>
					<div className="absolute top-4 right-4 flex gap-2">
						<Button size="sm" variant="ghost" className="h-8 w-8 p-0">
							<Heart className="h-4 w-4" />
						</Button>
						<Button size="sm" variant="ghost" className="h-8 w-8 p-0">
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
						{property.beds} {t("beds")}
					</div>
					<div className="flex items-center gap-1">
						<Bath className="h-4 w-4" />
						{property.baths} {t("baths")}
					</div>
					<div className="flex items-center gap-1">
						<Square className="h-4 w-4" />
						{property.sqft} {t("sqft")}
					</div>
				</div>
			</CardContent>
			<CardFooter className="p-4 pt-0">
				<Button asChild className="w-full">
					<Link href={`/property/${property.id}`}>{t("viewDetails")}</Link>
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
	const t = useTranslations("PropertiesPage");

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
		<div className="min-h-screen">
			{/* Header */}
			<div className="border-b shadow-xs">
				<div className="container mx-auto px-4 py-8">
					<h1 className="mb-2 font-bold font-playfair text-3xl sm:text-4xl">
						{t("header.title")}
					</h1>
					<p className="text-muted-foreground">{t("header.subtitle")}</p>
				</div>
			</div>

			{/* Filters */}
			<div className="border-b shadow-xs">
				<div className="container mx-auto px-4 py-6">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
						<div className="lg:col-span-2">
							<div className="relative">
								<Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
								<Input
									placeholder={t("filters.searchPlaceholder")}
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10"
								/>
							</div>
						</div>

						<Select value={propertyType} onValueChange={setPropertyType}>
							<SelectTrigger>
								<SelectValue placeholder={t("filters.propertyType")} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">{t("filters.allTypes")}</SelectItem>
								<SelectItem value="Single Family">
									{t("type.singleFamily")}
								</SelectItem>
								<SelectItem value="Condo">{t("type.condo")}</SelectItem>
								<SelectItem value="Townhouse">{t("type.townhouse")}</SelectItem>
								<SelectItem value="Apartment">{t("type.apartment")}</SelectItem>
								<SelectItem value="Loft">{t("type.loft")}</SelectItem>
								<SelectItem value="Villa">{t("type.villa")}</SelectItem>
								<SelectItem value="Penthouse">{t("type.penthouse")}</SelectItem>
								<SelectItem value="Studio">{t("type.studio")}</SelectItem>
							</SelectContent>
						</Select>

						<Select value={bedrooms} onValueChange={setBedrooms}>
							<SelectTrigger>
								<SelectValue placeholder={t("filters.bedrooms")} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">{t("filters.any")}</SelectItem>
								<SelectItem value="1">1+ {t("beds")}</SelectItem>
								<SelectItem value="2">2+ {t("beds")}</SelectItem>
								<SelectItem value="3">3+ {t("beds")}</SelectItem>
								<SelectItem value="4">4+ {t("beds")}</SelectItem>
								<SelectItem value="5">5+ {t("beds")}</SelectItem>
							</SelectContent>
						</Select>

						<Select value={status} onValueChange={setStatus}>
							<SelectTrigger>
								<SelectValue placeholder={t("filters.status")} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">{t("filters.allStatus")}</SelectItem>
								<SelectItem value="For Sale">{t("status.forSale")}</SelectItem>
								<SelectItem value="Sold">{t("status.sold")}</SelectItem>
								<SelectItem value="Pending">{t("status.pending")}</SelectItem>
							</SelectContent>
						</Select>

						<div className="flex gap-2">
							<Button onClick={handleSearch} className="flex-1">
								<Filter className="mr-2 h-4 w-4" />
								{t("filters.filterButton")}
							</Button>
							<Button onClick={resetFilters} variant="outline">
								{t("filters.resetButton")}
							</Button>
						</div>
					</div>

					{/* Price Range */}
					<div className="mt-4 border-t pt-4">
						<div className="flex items-center gap-4">
							<span className="min-w-[80px] font-medium text-sm">
								{t("filters.priceRange")}
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
						{t("results.showingProperties", {
							current: filteredProperties.length,
							total: allProperties.length,
						})}
					</p>
					<Select defaultValue="newest">
						<SelectTrigger className="w-48">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="newest">{t("results.newestFirst")}</SelectItem>
							<SelectItem value="price-low">
								{t("results.priceLowToHigh")}
							</SelectItem>
							<SelectItem value="price-high">
								{t("results.priceHighToLow")}
							</SelectItem>
							<SelectItem value="sqft">{t("results.squareFootage")}</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{filteredProperties.length === 0 ? (
					<div className="py-12 text-center">
						<p className="text-lg text-muted-foreground">
							{t("results.noPropertiesFound")}
						</p>
						<Button onClick={resetFilters} className="mt-4">
							{t("results.clearFilters")}
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
