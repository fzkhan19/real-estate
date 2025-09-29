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
import { useTranslations } from "next-intl";
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
	const t = useTranslations("AboutPage");
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
					{member.experience} {t("experience")}
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
					<h4 className="mb-2 font-medium">{t("specialties")}</h4>
					<div className="flex flex-wrap gap-1">
						{member.specialties.map((specialty, index) => (
							<Badge key={specialty} variant="secondary" className="text-xs">
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
					{t("contactAgent")} {member.name.split(" ")[0]}
				</Link>
			</Button>
		</Card>
	);
};

const AchievementCard = ({
	achievement,
}: { achievement: AchievementProps }) => {
	const t = useTranslations("AboutPage");
	return (
		<Card className="text-center transition-shadow duration-300 hover:shadow-lg">
			<CardContent className="p-6">
				<div className="mb-4 flex justify-center">
					<div className="rounded-full bg-secondary/10 p-3 text-secondary">
						{achievement.icon}
					</div>
				</div>
				<h3 className="mb-2 font-playfair font-semibold text-lg">
					{achievement.title === "Top Real Estate Firm"
						? t("achievements.topFirmTitle")
						: achievement.title === "$500M+ in Sales"
							? t("achievements.salesTitle")
							: achievement.title === "1000+ Happy Clients"
								? t("achievements.clientsTitle")
								: t("achievements.licensedTitle")}
				</h3>
				<p className="mb-2 text-muted-foreground">
					{achievement.description === "Awarded by NYC Real Estate Board"
						? t("achievements.topFirmDescription")
						: achievement.description === "Lifetime transaction volume"
							? t("achievements.salesDescription")
							: achievement.description === "Successfully served families"
								? t("achievements.clientsDescription")
								: t("achievements.licensedDescription")}
				</p>
				<Badge variant="outline">
					{achievement.year === "Always"
						? t("achievements.licensedYear")
						: achievement.year}
				</Badge>
			</CardContent>
		</Card>
	);
};

export const About = () => {
	const t = useTranslations("AboutPage");
	return (
		<section id="about" className="py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						{t("header.title")}
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						{t("header.subtitle")}
					</p>
				</div>

				{/* Company Story */}
				<div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
					<div>
						<h3 className="mb-6 font-bold font-playfair text-2xl">
							{t("story.title")}
						</h3>
						<div className="space-y-4 text-muted-foreground">
							<p>{t("story.p1")}</p>
							<p>{t("story.p2")}</p>
							<p>{t("story.p3")}</p>
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
						{t("achievements.title")}
					</h3>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{achievements.map((achievement, index) => (
							<AchievementCard
								key={achievement.title}
								achievement={achievement}
							/>
						))}
					</div>
				</div>

				{/* Team */}
				<div className="mb-16">
					<h3 className="mb-8 text-center font-bold font-playfair text-2xl">
						{t("team.title")}
					</h3>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{teamMembers.map((member, index) => (
							<TeamMemberCard key={member.name} member={member} />
						))}
					</div>
				</div>

				{/* Certifications */}
				<div className="mb-16">
					<h3 className="mb-8 text-center font-bold font-playfair text-2xl">
						{t("certifications.title")}
					</h3>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{certifications.map((cert, index) => (
							<div
								key={cert}
								className="flex items-center gap-3 rounded-lg bg-gray-50 p-4"
							>
								<Shield className="h-5 w-5 shrink-0 text-primary" />
								<span className="font-medium text-primary text-sm">
									{cert === "National Association of Realtors (NAR)"
										? t("certifications.nar")
										: cert === "New York State Association of Realtors"
											? t("certifications.nysar")
											: cert === "Manhattan Association of Realtors"
												? t("certifications.mar")
												: cert === "Certified Residential Specialist (CRS)"
													? t("certifications.crs")
													: cert === "Accredited Buyer's Representative (ABR)"
														? t("certifications.abr")
														: t("certifications.gri")}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="rounded-md text-center shadow shadow-accent/30 backdrop-blur-2xl">
					<div className="mx-auto max-w-2xl rounded-lg p-8">
						<h3 className="mb-4 font-bold font-playfair text-2xl">
							{t("cta.title")}
						</h3>
						<p className="mb-6 text-muted-foreground">{t("cta.description")}</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
							<Button size="lg" className="hover:scale-105" asChild>
								<Link href="/contact">
									<Users className="mr-2 h-5 w-5" />
									{t("cta.getStarted")}
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
									{t("cta.viewProperties")}
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
