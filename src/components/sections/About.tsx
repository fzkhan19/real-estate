"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Award,
	Building,
	Mail,
	Phone,
	Shield,
	TrendingUp,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface TeamMemberProps {
	name: string;
	role: string;
	image: string;
	phone: string;
	email: string;
	experience: string;
	specialties: string[];
}

interface AchievementProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	year: string;
}

const teamMembers: TeamMemberProps[] = [
	{
		name: "Michael Kuhn",
		role: "Managing Partner",
		image: "/team/michael.jpg",
		phone: "(732) 614-8835",
		email: "michael@kuhnandpartners.com",
		experience: "15+ years",
		specialties: [
			"Luxury Properties",
			"Commercial Real Estate",
			"Investment Properties",
		],
	},
	{
		name: "Sarah Partners",
		role: "Senior Real Estate Agent",
		image: "/team/sarah.jpg",
		phone: "(732) 614-8836",
		email: "sarah@kuhnandpartners.com",
		experience: "12+ years",
		specialties: ["First-Time Buyers", "Family Homes", "Relocation Services"],
	},
	{
		name: "David Rodriguez",
		role: "Property Specialist",
		image: "/team/david.jpg",
		phone: "(732) 614-8837",
		email: "david@kuhnandpartners.com",
		experience: "8+ years",
		specialties: ["Condos", "Rentals", "Property Management"],
	},
	{
		name: "Emma Chen",
		role: "Marketing Director",
		image: "/team/emma.jpg",
		phone: "(732) 614-8838",
		email: "emma@kuhnandpartners.com",
		experience: "10+ years",
		specialties: ["Digital Marketing", "Property Photography", "Virtual Tours"],
	},
];

const achievements: AchievementProps[] = [
	{
		icon: <Award className="h-6 w-6" />,
		title: "Top Real Estate Firm",
		description: "Awarded by NYC Real Estate Board",
		year: "2023",
	},
	{
		icon: <TrendingUp className="h-6 w-6" />,
		title: "$500M+ in Sales",
		description: "Lifetime transaction volume",
		year: "2024",
	},
	{
		icon: <Users className="h-6 w-6" />,
		title: "1000+ Happy Clients",
		description: "Successfully served families",
		year: "2024",
	},
	{
		icon: <Shield className="h-6 w-6" />,
		title: "Licensed & Insured",
		description: "Full compliance and protection",
		year: "Always",
	},
];

const certifications = [
	"National Association of Realtors (NAR)",
	"New York State Association of Realtors",
	"Manhattan Association of Realtors",
	"Certified Residential Specialist (CRS)",
	"Accredited Buyer's Representative (ABR)",
	"Graduate, Realtor Institute (GRI)",
];

const TeamMemberCard = ({ member }: { member: TeamMemberProps }) => {
	return (
		<Card className="group flex flex-col overflow-hidden p-4 transition-shadow duration-300 hover:shadow-lg">
			<CardHeader className="flex-grow p-0">
				<div className="relative h-64 overflow-hidden">
					<Image
						src={member.image}
						alt={member.name}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			</CardHeader>
			<CardContent className="flex-grow p-6">
				<h3 className="mb-1 font-playfair font-semibold text-xl">
					{member.name}
				</h3>
				<p className="mb-3 font-medium text-muted-foreground">{member.role}</p>
				<p className="mb-4 text-muted-foreground text-sm">
					{member.experience} of experience
				</p>

				<div className="mb-4 space-y-2">
					<div className="flex items-center gap-2 text-sm">
						<Phone className="h-4 w-4 text-muted-foreground" />
						<a href={`tel:${member.phone}`}>{member.phone}</a>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<Mail className="h-4 w-4 text-muted-foreground" />
						<a href={`mailto:${member.email}`}>{member.email}</a>
					</div>
				</div>

				<div className="mb-4">
					<h4 className="mb-2 font-medium">Specialties:</h4>
					<div className="flex flex-wrap gap-1">
						{member.specialties.map((specialty, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Badge key={index} variant="secondary" className="text-xs">
								{specialty}
							</Badge>
						))}
					</div>
				</div>
			</CardContent>
			<Button asChild className="w-full">
				<Link
					href={`/contact?agent=${member.name.toLowerCase().replace(" ", "-")}`}
				>
					Contact {member.name.split(" ")[0]}
				</Link>
			</Button>
		</Card>
	);
};

const AchievementCard = ({
	achievement,
}: { achievement: AchievementProps }) => {
	return (
		<Card className="text-center transition-shadow duration-300 hover:shadow-lg">
			<CardContent className="p-6">
				<div className="mb-4 flex justify-center">
					<div className="rounded-full bg-secondary/10 p-3 text-secondary">
						{achievement.icon}
					</div>
				</div>
				<h3 className="mb-2 font-playfair font-semibold text-lg">
					{achievement.title}
				</h3>
				<p className="mb-2 text-muted-foreground">{achievement.description}</p>
				<Badge variant="outline">{achievement.year}</Badge>
			</CardContent>
		</Card>
	);
};

export const About = () => {
	return (
		<section id="about" className="py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						About Kuhn & Partners
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Your trusted real estate experts with over 20 years of combined
						experience in the New York market
					</p>
				</div>

				{/* Company Story */}
				<div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
					<div>
						<h3 className="mb-6 font-bold font-playfair text-2xl">Our Story</h3>
						<div className="space-y-4 text-muted-foreground">
							<p>
								Founded in 2008, Kuhn & Partners has grown from a small local
								agency to one of New York's most respected real estate firms.
								Our journey began with a simple mission: to provide exceptional
								service and expertise to every client.
							</p>
							<p>
								Over the years, we've built our reputation on trust, integrity,
								and results. Our team of dedicated professionals combines deep
								market knowledge with innovative marketing strategies to help
								our clients achieve their real estate goals.
							</p>
							<p>
								Today, we're proud to serve families, investors, and businesses
								throughout Manhattan, Brooklyn, and the surrounding areas. Our
								commitment to excellence has earned us numerous awards and, more
								importantly, the trust of our clients.
							</p>
						</div>
					</div>
					<div className="relative">
						<div className="aspect-square overflow-hidden rounded-lg">
							<Image
								src="/about/office.jpg"
								alt="Kuhn & Partners Office"
								width={500}
								height={500}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Achievements */}
				<div className="mb-16">
					<h3 className="mb-8 text-center font-bold font-playfair text-2xl">
						Our Achievements
					</h3>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{achievements.map((achievement, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<AchievementCard key={index} achievement={achievement} />
						))}
					</div>
				</div>

				{/* Team */}
				<div className="mb-16">
					<h3 className="mb-8 text-center font-bold font-playfair text-2xl">
						Meet Our Team
					</h3>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{teamMembers.map((member, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<TeamMemberCard key={index} member={member} />
						))}
					</div>
				</div>

				{/* Certifications */}
				<div className="mb-16">
					<h3 className="mb-8 text-center font-bold font-playfair text-2xl">
						Certifications & Memberships
					</h3>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{certifications.map((cert, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="flex items-center gap-3 rounded-lg bg-gray-50 p-4"
							>
								<Shield className="h-5 w-5 shrink-0 text-primary" />
								<span className="font-medium text-primary text-sm">{cert}</span>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="rounded-md text-center shadow shadow-accent/30 backdrop-blur-2xl">
					<div className="mx-auto max-w-2xl rounded-lg p-8">
						<h3 className="mb-4 font-bold font-playfair text-2xl">
							Ready to Work with Us?
						</h3>
						<p className="mb-6 text-muted-foreground">
							Let our experienced team help you find your perfect property or
							sell your current home.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
							<Button size="lg" className="hover:scale-105" asChild>
								<Link href="/contact">
									<Users className="mr-2 h-5 w-5" />
									Get Started Today
								</Link>
							</Button>
							<Button
								size="lg"
								variant="secondary"
								className="hover:scale-105"
								asChild
							>
								<Link href="/properties">
									<Building className="mr-2 h-5 w-5" />
									View Properties
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
