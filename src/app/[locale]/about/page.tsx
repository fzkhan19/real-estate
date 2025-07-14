import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import {
	Award,
	Building,
	Calendar,
	Home,
	MapPin,
	PhoneCall,
	Shield,
	Star,
	TrendingUp,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

interface Props {
	params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
	return {
		title: "About Us - Kuhn & Partners Real Estate",
		description:
			"Learn about Kuhn & Partners, a trusted real estate company with years of experience serving clients with professional property services and expert guidance.",
		keywords: [
			"about Kuhn Partners",
			"real estate company",
			"property experts",
			"real estate team",
			"company history",
		],
	};
}

export default async function AboutPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	const stats = [
		{
			number: "15+",
			label: "Years of Experience",
			icon: Calendar,
		},
		{
			number: "500+",
			label: "Properties Sold",
			icon: Building,
		},
		{
			number: "95%",
			label: "Client Satisfaction",
			icon: Star,
		},
		{
			number: "€50M+",
			label: "Total Sales Volume",
			icon: TrendingUp,
		},
	];

	const values = [
		{
			icon: Shield,
			title: "Trust & Integrity",
			description:
				"We build lasting relationships based on honesty, transparency, and ethical business practices.",
		},
		{
			icon: Star,
			title: "Excellence",
			description:
				"We strive for excellence in every transaction, ensuring the highest quality of service for our clients.",
		},
		{
			icon: Users,
			title: "Client-Focused",
			description:
				"Your goals are our priority. We tailor our services to meet your specific needs and objectives.",
		},
		{
			icon: Award,
			title: "Expertise",
			description:
				"Our team brings deep market knowledge and professional expertise to every real estate transaction.",
		},
	];

	const teamMembers = [
		{
			name: "Klaus Kuhn",
			position: "Founder & CEO",
			experience: "20+ years",
			specialization: "Luxury Properties & Investment",
			description:
				"Klaus founded Kuhn & Partners with a vision to provide exceptional real estate services. With over two decades of experience, he specializes in luxury properties and investment opportunities.",
		},
		{
			name: "Maria Schmidt",
			position: "Senior Property Consultant",
			experience: "12+ years",
			specialization: "Residential Properties",
			description:
				"Maria brings extensive knowledge of the residential market, helping families find their perfect homes and guiding first-time buyers through the process.",
		},
		{
			name: "Thomas Weber",
			position: "Commercial Real Estate Specialist",
			experience: "15+ years",
			specialization: "Commercial & Industrial",
			description:
				"Thomas focuses on commercial real estate, helping businesses find optimal locations and investors identify profitable commercial opportunities.",
		},
	];

	const achievements = [
		{
			year: "2009",
			title: "Company Founded",
			description:
				"Klaus Kuhn established Kuhn & Partners with a small team and big dreams.",
		},
		{
			year: "2012",
			title: "First 100 Properties",
			description:
				"Reached our first milestone of 100 successful property transactions.",
		},
		{
			year: "2015",
			title: "Team Expansion",
			description:
				"Expanded our team to include specialized consultants for different market segments.",
		},
		{
			year: "2018",
			title: "Digital Innovation",
			description:
				"Implemented cutting-edge technology to enhance client experience and service delivery.",
		},
		{
			year: "2020",
			title: "Market Leadership",
			description:
				"Achieved recognition as a leading real estate firm in the region.",
		},
		{
			year: "2023",
			title: "Continued Growth",
			description:
				"Celebrating sustained growth and expanding our service offerings.",
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
							<BreadcrumbPage>About Us</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Hero Section */}
			<section className="bg-linear-to-r from-primary/10 to-accent/10 py-16">
				<div className="container mx-auto px-4">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<div>
							<h1 className="font-bold font-serif text-4xl text-foreground tracking-tight sm:text-5xl md:text-6xl">
								About Kuhn & Partners
							</h1>
							<p className="mt-6 text-lg text-muted-foreground">
								For over 15 years, Kuhn & Partners has been a trusted name in
								real estate, providing exceptional service and expert guidance
								to clients across all property sectors.
							</p>
							<p className="mt-4 text-lg text-muted-foreground">
								Our commitment to excellence, integrity, and client satisfaction
								has made us a leading real estate firm, helping hundreds of
								clients achieve their property goals.
							</p>
							<Link href="/contact" className="mt-8 inline-block">
								<Button size="lg" className="gap-2">
									<PhoneCall className="h-4 w-4" />
									Get in Touch
								</Button>
							</Link>
						</div>
						<div className="relative">
							<div className="aspect-square rounded-lg bg-linear-to-br from-primary/20 to-accent/20 p-8">
								<div className="flex h-full flex-col justify-center text-center">
									<Building className="mx-auto h-24 w-24 text-primary" />
									<h3 className="mt-4 font-semibold font-serif text-2xl">
										Your Trusted Real Estate Partner
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{stats.map((stat, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Card key={index} className="text-center">
								<CardContent className="p-6">
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
										<stat.icon className="h-8 w-8 text-primary" />
									</div>
									<div className="font-bold font-serif text-3xl text-foreground">
										{stat.number}
									</div>
									<div className="mt-2 text-muted-foreground">{stat.label}</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Our Values
						</h2>
						<p className="mt-4 text-muted-foreground">
							The principles that guide everything we do
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{values.map((value, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={index} className="text-center">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
									<value.icon className="h-8 w-8" />
								</div>
								<h3 className="mb-3 font-semibold font-serif text-xl">
									{value.title}
								</h3>
								<p className="text-muted-foreground">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Meet Our Team
						</h2>
						<p className="mt-4 text-muted-foreground">
							Experienced professionals dedicated to your success
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map((member, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Card key={index} className="h-full">
								<CardContent className="p-6">
									<div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
										<Users className="h-12 w-12 text-primary" />
									</div>
									<h3 className="font-semibold font-serif text-xl">
										{member.name}
									</h3>
									<p className="text-primary">{member.position}</p>
									<div className="mt-2 flex items-center gap-4 text-muted-foreground text-sm">
										<span>{member.experience}</span>
										<Separator orientation="vertical" className="h-4" />
										<span>{member.specialization}</span>
									</div>
									<p className="mt-4 text-muted-foreground">
										{member.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Our Journey
						</h2>
						<p className="mt-4 text-muted-foreground">
							Key milestones in our company's growth
						</p>
					</div>

					<div className="mx-auto max-w-4xl">
						<div className="space-y-8">
							{achievements.map((achievement, index) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className="flex items-start gap-6 rounded-lg bg-background p-6 shadow-xs"
								>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
										{achievement.year}
									</div>
									<div>
										<h3 className="font-semibold font-serif text-xl">
											{achievement.title}
										</h3>
										<p className="mt-2 text-muted-foreground">
											{achievement.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-semibold font-serif text-3xl text-foreground">
						Ready to Work With Us?
					</h2>
					<p className="mt-4 text-muted-foreground">
						Experience the difference that professional, personalized service
						makes in your real estate journey.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Link href="/contact">
							<Button size="lg" className="gap-2">
								<PhoneCall className="h-4 w-4" />
								Contact Our Team
							</Button>
						</Link>
						<Link href="/services">
							<Button variant="outline" size="lg" className="gap-2">
								<MapPin className="h-4 w-4" />
								View Our Services
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export const runtime = "edge";
