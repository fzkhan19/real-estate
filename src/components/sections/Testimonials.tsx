"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Award,
	Calendar,
	MapPin,
	Quote,
	Star,
	TrendingUp,
	Users,
} from "lucide-react";
import Link from "next/link";

interface TestimonialProps {
	name: string;
	role: string;
	location: string;
	rating: number;
	content: string;
	image: string;
	propertyType: string;
	date: string;
}

interface StatProps {
	icon: React.ReactNode;
	value: string;
	label: string;
	description: string;
}

const testimonials: TestimonialProps[] = [
	{
		name: "Jennifer Martinez",
		role: "First-Time Buyer",
		location: "Manhattan, NY",
		rating: 5,
		content:
			"Michael and his team made our first home purchase incredibly smooth. They guided us through every step and helped us find the perfect apartment in our budget. Highly recommend!",
		image: "/testimonials/jennifer.jpg",
		propertyType: "2BR Apartment",
		date: "March 2024",
	},
	{
		name: "Robert Chen",
		role: "Property Investor",
		location: "Brooklyn, NY",
		rating: 5,
		content:
			"Outstanding service from Sarah! She helped me build a portfolio of 5 investment properties over 2 years. Her market knowledge and negotiation skills are exceptional.",
		image: "/testimonials/robert.jpg",
		propertyType: "Investment Portfolio",
		date: "February 2024",
	},
	{
		name: "Lisa Thompson",
		role: "Home Seller",
		location: "Queens, NY",
		rating: 5,
		content:
			"David helped us sell our family home for 15% above asking price! His marketing strategy and professional photography made all the difference. Thank you!",
		image: "/testimonials/lisa.jpg",
		propertyType: "Single Family Home",
		date: "January 2024",
	},
	{
		name: "Mark Williams",
		role: "Luxury Buyer",
		location: "Upper East Side, NY",
		rating: 5,
		content:
			"The level of service and attention to detail was incredible. They found us the perfect penthouse and handled all negotiations professionally. Worth every penny!",
		image: "/testimonials/mark.jpg",
		propertyType: "Luxury Penthouse",
		date: "December 2023",
	},
	{
		name: "Amanda Rodriguez",
		role: "Relocating Professional",
		location: "Chelsea, NY",
		rating: 5,
		content:
			"Moving from California was stressful, but Emma made the process seamless. She arranged virtual tours and handled everything remotely. Fantastic experience!",
		image: "/testimonials/amanda.jpg",
		propertyType: "1BR Condo",
		date: "November 2023",
	},
	{
		name: "James Patterson",
		role: "Downsizing Senior",
		location: "Brooklyn Heights, NY",
		rating: 5,
		content:
			"After 40 years in our family home, we needed to downsize. The team was patient, understanding, and helped us find the perfect retirement condo. Excellent service!",
		image: "/testimonials/james.jpg",
		propertyType: "Senior Living Condo",
		date: "October 2023",
	},
];

const stats: StatProps[] = [
	{
		icon: <Users className="h-6 w-6" />,
		value: "1,000+",
		label: "Happy Clients",
		description: "Families served since 2008",
	},
	{
		icon: <Star className="h-6 w-6" />,
		value: "4.9/5",
		label: "Average Rating",
		description: "Based on 500+ reviews",
	},
	{
		icon: <TrendingUp className="h-6 w-6" />,
		value: "98%",
		label: "Client Satisfaction",
		description: "Would recommend to friends",
	},
	{
		icon: <Award className="h-6 w-6" />,
		value: "50+",
		label: "Awards Won",
		description: "Industry recognition",
	},
];

const platforms = [
	{ name: "Google", rating: 4.9, reviews: 156 },
	{ name: "Zillow", rating: 4.8, reviews: 89 },
	{ name: "Realtor.com", rating: 4.9, reviews: 134 },
	{ name: "Yelp", rating: 4.7, reviews: 67 },
];

const TestimonialCard = ({
	testimonial,
}: { testimonial: TestimonialProps }) => {
	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("");
	};

	return (
		<Card className="h-full transition-shadow duration-300 hover:shadow-lg">
			<CardHeader className="pb-4">
				<div className="flex items-start gap-4">
					<Avatar className="h-12 w-12">
						<AvatarImage src={testimonial.image} alt={testimonial.name} />
						<AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
					</Avatar>
					<div className="flex-1">
						<div className="mb-1 flex items-center justify-between">
							<h3 className="font-playfair font-semibold text-lg">
								{testimonial.name}
							</h3>
							<div className="flex items-center gap-1">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={i}
										className="h-4 w-4 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
						</div>
						<p className="text-muted-foreground text-sm">{testimonial.role}</p>
						<div className="mt-1 flex items-center gap-2">
							<MapPin className="h-3 w-3 text-muted-foreground" />
							<span className="text-muted-foreground text-xs">
								{testimonial.location}
							</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className="relative mb-4">
					<Quote className="-top-2 -left-2 absolute h-8 w-8 text-primary/20" />
					<p className="pl-4 text-muted-foreground italic">
						{testimonial.content}
					</p>
				</div>
				<div className="flex items-center justify-between text-muted-foreground text-xs">
					<Badge variant="outline">{testimonial.propertyType}</Badge>
					<div className="flex items-center gap-1">
						<Calendar className="h-3 w-3" />
						{testimonial.date}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

const StatCard = ({ stat }: { stat: StatProps }) => {
	return (
		<Card className="text-center transition-shadow duration-300 hover:shadow-lg">
			<CardContent className="p-6">
				<div className="mb-4 flex justify-center">
					<div className="rounded-full bg-primary/10 p-3 text-primary">
						{stat.icon}
					</div>
				</div>
				<div className="mb-2 font-bold text-3xl text-primary">{stat.value}</div>
				<h3 className="mb-1 font-playfair font-semibold text-lg">
					{stat.label}
				</h3>
				<p className="text-muted-foreground text-sm">{stat.description}</p>
			</CardContent>
		</Card>
	);
};

export const Testimonials = () => {
	return (
		<section id="testimonials" className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						What Our Clients Say
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Don't just take our word for it. Here's what our satisfied clients
						have to say about their experience with Kuhn & Partners.
					</p>
				</div>

				{/* Stats */}
				<div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<StatCard key={index} stat={stat} />
					))}
				</div>

				{/* Testimonials */}
				<div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<TestimonialCard key={index} testimonial={testimonial} />
					))}
				</div>

				{/* Platform Reviews */}
				<div className="mb-12">
					<h3 className="mb-8 text-center font-bold font-playfair text-2xl">
						Trusted Across Platforms
					</h3>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{platforms.map((platform, index) => (
							<Card
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="text-center transition-shadow duration-300 hover:shadow-lg"
							>
								<CardContent className="p-6">
									<h4 className="mb-2 font-semibold text-lg">
										{platform.name}
									</h4>
									<div className="mb-1 flex items-center justify-center gap-2">
										<div className="flex items-center gap-1">
											{[...Array(5)].map((_, i) => (
												<Star
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={i}
													className={`h-4 w-4 ${i < Math.floor(platform.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
												/>
											))}
										</div>
										<span className="font-bold">{platform.rating}</span>
									</div>
									<p className="text-muted-foreground text-sm">
										{platform.reviews} reviews
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<div className="mx-auto max-w-2xl rounded-lg bg-white p-8">
						<h3 className="mb-4 font-bold font-playfair text-2xl">
							Ready to Join Our Happy Clients?
						</h3>
						<p className="mb-6 text-muted-foreground">
							Experience the Kuhn & Partners difference. Let us help you achieve
							your real estate goals with the same level of service our clients
							rave about.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
							<Button size="lg" asChild>
								<Link href="/contact">
									<Users className="mr-2 h-5 w-5" />
									Start Your Journey
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/properties">View Properties</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
