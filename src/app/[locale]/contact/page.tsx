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
import { Clock, Home, Mail, MapPin, PhoneCall, Send } from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

interface Props {
	params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
	return {
		title: "Contact Us - Kuhn & Partners Real Estate",
		description:
			"Get in touch with Kuhn & Partners for all your real estate needs. Professional consultation, property services, and expert guidance available.",
		keywords: [
			"contact real estate",
			"Kuhn Partners contact",
			"real estate consultation",
			"property services contact",
		],
	};
}

export default async function ContactPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	const contactInfo = [
		{
			icon: PhoneCall,
			title: "Phone",
			content: "+49 (0)176 70440689",
			action: "tel:+49017670440689",
		},
		{
			icon: Mail,
			title: "Email",
			content: "info@kuhnpartners.de",
			action: "mailto:info@kuhnpartners.de",
		},
		{
			icon: MapPin,
			title: "Address",
			content: "Musterstraße 123, 12345 Berlin, Germany",
			action: null,
		},
		{
			icon: Clock,
			title: "Business Hours",
			content: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
			action: null,
		},
	];

	const officeFeatures = [
		"Free parking available",
		"Accessible entrance",
		"Conference rooms",
		"Professional consultation",
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
							<BreadcrumbPage>Contact</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
				<div className="container mx-auto px-4 text-center">
					<h1 className="font-bold font-serif text-4xl text-foreground tracking-tight sm:text-5xl md:text-6xl">
						Contact Kuhn & Partners
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
						Ready to discuss your real estate needs? We're here to help you
						navigate the property market with expert guidance and personalized
						service.
					</p>
				</div>
			</section>

			{/* Contact Information */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid gap-8 lg:grid-cols-2">
						{/* Contact Form */}
						<Card>
							<CardHeader>
								<CardTitle className="font-serif text-2xl">
									Send Us a Message
								</CardTitle>
								<p className="text-muted-foreground">
									Fill out the form below and we'll get back to you within 24
									hours.
								</p>
							</CardHeader>
							<CardContent>
								<form className="space-y-6">
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="space-y-2">
											<Label htmlFor="firstName">First Name *</Label>
											<Input
												id="firstName"
												name="firstName"
												placeholder="Enter your first name"
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="lastName">Last Name *</Label>
											<Input
												id="lastName"
												name="lastName"
												placeholder="Enter your last name"
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="email">Email Address *</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="Enter your email address"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="phone">Phone Number</Label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="Enter your phone number"
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="subject">Subject *</Label>
										<Input
											id="subject"
											name="subject"
											placeholder="What can we help you with?"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message">Message *</Label>
										<Textarea
											id="message"
											name="message"
											placeholder="Please provide details about your inquiry..."
											className="min-h-[120px]"
											required
										/>
									</div>

									<Button type="submit" className="w-full gap-2">
										<Send className="h-4 w-4" />
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Contact Information Cards */}
						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Card key={index}>
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
												<info.icon className="h-6 w-6 text-primary" />
											</div>
											<div className="flex-1">
												<h3 className="font-semibold font-serif text-lg">
													{info.title}
												</h3>
												{info.action ? (
													<a
														href={info.action}
														className="mt-1 text-muted-foreground transition-colors hover:text-primary"
													>
														{info.content}
													</a>
												) : (
													<p className="mt-1 whitespace-pre-line text-muted-foreground">
														{info.content}
													</p>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Office Information */}
			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Office Details */}
						<div>
							<h2 className="font-semibold font-serif text-3xl text-foreground">
								Visit Our Office
							</h2>
							<p className="mt-4 text-muted-foreground">
								Our modern office space is designed to provide a comfortable
								environment for consultations and meetings. Located in the heart
								of Berlin, we're easily accessible by public transport and car.
							</p>

							<div className="mt-6 space-y-3">
								{officeFeatures.map((feature, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<div key={index} className="flex items-center gap-2">
										<div className="h-2 w-2 rounded-full bg-primary" />
										<span className="text-muted-foreground">{feature}</span>
									</div>
								))}
							</div>

							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<Link href="tel:+49017670440689">
									<Button className="gap-2">
										<PhoneCall className="h-4 w-4" />
										Call to Schedule
									</Button>
								</Link>
								<Button variant="outline" className="gap-2">
									<MapPin className="h-4 w-4" />
									Get Directions
								</Button>
							</div>
						</div>

						{/* Map Placeholder */}
						<Card>
							<CardContent className="p-0">
								<div className="aspect-square bg-gradient-to-br from-muted to-muted/50 lg:aspect-video">
									<div className="flex h-full items-center justify-center">
										<div className="text-center">
											<MapPin className="mx-auto h-16 w-16 text-muted-foreground" />
											<p className="mt-4 text-muted-foreground">
												Interactive map coming soon
											</p>
											<p className="text-muted-foreground text-sm">
												Musterstraße 123, 12345 Berlin, Germany
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="font-semibold font-serif text-3xl text-foreground">
							Frequently Asked Questions
						</h2>
						<div className="mt-8 space-y-6 text-left">
							<div>
								<h3 className="font-semibold font-serif text-lg">
									How quickly can you respond to my inquiry?
								</h3>
								<p className="mt-2 text-muted-foreground">
									We aim to respond to all inquiries within 24 hours during
									business days. For urgent matters, please call us directly.
								</p>
							</div>
							<div>
								<h3 className="font-semibold font-serif text-lg">
									Do you offer free consultations?
								</h3>
								<p className="mt-2 text-muted-foreground">
									Yes, we offer free initial consultations to discuss your real
									estate needs and how we can help you achieve your goals.
								</p>
							</div>
							<div>
								<h3 className="font-semibold font-serif text-lg">
									What areas do you service?
								</h3>
								<p className="mt-2 text-muted-foreground">
									We primarily serve Berlin and surrounding areas, but we can
									also assist with properties in other regions of Germany.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Emergency Contact */}
			<section className="bg-primary/10 py-8">
				<div className="container mx-auto px-4 text-center">
					<h3 className="font-semibold font-serif text-xl">
						Need Immediate Assistance?
					</h3>
					<p className="mt-2 text-muted-foreground">
						For urgent real estate matters, call us directly
					</p>
					<Link href="tel:+49017670440689" className="mt-4 inline-block">
						<Button size="lg" className="gap-2">
							<PhoneCall className="h-4 w-4" />
							+49 (0)176 70440689
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}

export const runtime = "edge";
