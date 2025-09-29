import { PropertyDetail } from "@/components/sections/PropertyDetail";
import { getTranslations } from "next-intl/server";

// This data would typically come from an API or database
const allProperties = [
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
		features: [
			"Central Air Conditioning",
			"Hardwood Floors",
			"Stainless Steel Appliances",
			"Two-Car Garage",
			"Smart Home System",
			"Large Backyard",
		],
		gallery: [
			"/stock/property1.jpg",
			"/stock/property1-interior1.jpg",
			"/stock/property1-interior2.jpg",
			"/stock/property1-kitchen.jpg",
		],
		agent: {
			name: "Michael Kuhn",
			phone: "(732) 614-8835",
			email: "michael@kuhnandpartners.com",
		},
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
		features: [
			"Panoramic City Views",
			"Private Terrace",
			"Marble Bathrooms",
			"Custom Cabinetry",
			"Concierge Service",
			"Rooftop Pool",
		],
		gallery: [
			"/stock/property2.jpg",
			"/stock/property2-interior1.jpg",
			"/stock/property2-view.jpg",
			"/stock/property2-kitchen.jpg",
		],
		agent: {
			name: "Sarah Partners",
			phone: "(732) 614-8836",
			email: "sarah@kuhnandpartners.com",
		},
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
			"Charming townhouse with classic architecture and modern updates. Situated on a quiet, tree-lined street, this home offers a perfect blend of historic charm and contemporary living. Features include a renovated kitchen, cozy fireplace, and a small garden.",
		features: [
			"Historic Charm",
			"Renovated Kitchen",
			"Fireplace",
			"Private Garden",
			"Close to Public Transport",
			"Pet-Friendly",
		],
		gallery: [
			"/stock/property3.jpg",
			"/stock/property3-interior1.jpg",
			"/stock/property3-garden.jpg",
			"/stock/property3-kitchen.jpg",
		],
		agent: {
			name: "David Rodriguez",
			phone: "(732) 614-8837",
			email: "david@kuhnandpartners.com",
		},
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
		description:
			"Bright and spacious apartment in a prime Chelsea location. This unit boasts large windows, ample natural light, and modern finishes throughout. Building amenities include a fitness center and communal lounge. Walking distance to popular restaurants and art galleries.",
		features: [
			"Large Windows",
			"Modern Finishes",
			"Fitness Center",
			"Communal Lounge",
			"Near Public Transport",
			"Pet-Friendly",
		],
		gallery: [
			"/stock/property4.jpg",
			"/stock/property4-interior1.jpg",
			"/stock/property4-view.jpg",
			"/stock/property4-kitchen.jpg",
		],
		agent: {
			name: "Emma Chen",
			phone: "(732) 614-8838",
			email: "emma@kuhnandpartners.com",
		},
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
		description:
			"Artistic loft with high ceilings and industrial charm. Perfect for creatives and urban dwellers. Features exposed brick walls, large windows, and an open-concept layout. Building offers a unique blend of historic architecture and modern amenities.",
		features: [
			"High Ceilings",
			"Exposed Brick",
			"Open Concept",
			"Designer Kitchen",
			"Artistic Community",
			"Close to Galleries",
		],
		gallery: [
			"/stock/property5.jpg",
			"/stock/property5-interior1.jpg",
			"/stock/property5-view.jpg",
			"/stock/property5-kitchen.jpg",
		],
		agent: {
			name: "Michael Kuhn",
			phone: "(732) 614-8835",
			email: "michael@kuhnandpartners.com",
		},
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
		description:
			"Stunning waterfront villa with private beach access. Experience luxurious coastal living in this brand new custom-built home. Features include a private dock, infinity pool, and panoramic ocean views. Ideal for those seeking an exclusive retreat.",
		features: [
			"Private Beach Access",
			"Infinity Pool",
			"Private Dock",
			"Ocean Views",
			"Smart Home System",
			"Gourmet Kitchen",
		],
		gallery: [
			"/stock/property6.jpg",
			"/stock/property6-view.jpg",
			"/stock/property6-pool.jpg",
			"/stock/property6-interior1.jpg",
		],
		agent: {
			name: "Sarah Partners",
			phone: "(732) 614-8836",
			email: "sarah@kuhnandpartners.com",
		},
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
			"Beautifully restored historic brownstone with original details. This charming home offers a glimpse into Brooklyn's rich past while providing modern comforts. Features include original moldings, hardwood floors, and a renovated kitchen. Close to parks and local boutiques.",
		features: [
			"Original Details",
			"Hardwood Floors",
			"Renovated Kitchen",
			"Historic District",
			"Close to Parks",
			"Tree-lined Street",
		],
		gallery: [
			"/stock/property7.jpg",
			"/stock/property7-interior1.jpg",
			"/stock/property7-exterior.jpg",
			"/stock/property7-kitchen.jpg",
		],
		agent: {
			name: "David Rodriguez",
			phone: "(732) 614-8837",
			email: "david@kuhnandpartners.com",
		},
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
		description:
			"Efficient studio apartment with smart home features. Ideal for young professionals seeking a minimalist urban lifestyle. Features include integrated smart home technology, compact kitchen, and city views. Building offers a communal workspace and gym.",
		features: [
			"Smart Home Features",
			"City Views",
			"Compact Kitchen",
			"Communal Workspace",
			"Gym Access",
			"Prime Location",
		],
		gallery: [
			"/stock/property8.jpg",
			"/stock/property8-interior1.jpg",
			"/stock/property8-view.jpg",
			"/stock/property8-kitchen.jpg",
		],
		agent: {
			name: "Emma Chen",
			phone: "(732) 614-8838",
			email: "emma@kuhnandpartners.com",
		},
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
		description:
			"Exclusive duplex penthouse with private terrace. This expansive property offers two levels of luxurious living with high-end finishes and appliances. Enjoy entertaining on your private rooftop terrace with stunning city views. Building includes a private elevator and dedicated parking.",
		features: [
			"Private Terrace",
			"Duplex Layout",
			"High-End Finishes",
			"Private Elevator",
			"City Views",
			"Dedicated Parking",
		],
		gallery: [
			"/stock/property9.jpg",
			"/stock/property9-interior1.jpg",
			"/stock/property9-terrace.jpg",
			"/stock/property9-kitchen.jpg",
		],
		agent: {
			name: "Michael Kuhn",
			phone: "(732) 614-8835",
			email: "michael@kuhnandpartners.com",
		},
	},
];

// --- your types ---
interface PropertyPageProps {
	params: Promise<{
		locale: string;
		id: string;
	}>;
	// searchParams?: { [key: string]: string | string[] | undefined };
}

// ✅ Explicit props typing for page
export default async function PropertyPage({ params }: PropertyPageProps) {
	const resolvedParams = await params;
	const t = await getTranslations("PropertyPage");
	const property = allProperties.find((p) => p.id === resolvedParams.id);

	if (!property) {
		return (
			<div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
				<h1 className="font-bold text-2xl">{t("metadata.notFoundTitle")}</h1>
			</div>
		);
	}

	return <PropertyDetail property={property} />;
}
