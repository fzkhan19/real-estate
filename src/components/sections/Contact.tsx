"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	Building,
	Car,
	Clock,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
} from "lucide-react";
import { useState } from "react";

interface OfficeProps {
	name: string;
	address: string;
	phone: string;
	email: string;
	hours: string[];
	parking: boolean;
	image: string;
}

const offices: OfficeProps[] = [
	{
		name: "Manhattan Office",
		address: "123 Fifth Avenue, Suite 1500, New York, NY 10011",
		phone: "(732) 614-8835",
		email: "manhattan@kuhnandpartners.com",
		hours: [
			"Monday - Friday: 9:00 AM - 7:00 PM",
			"Saturday: 10:00 AM - 5:00 PM",
			"Sunday: 12:00 PM - 4:00 PM",
		],
		parking: true,
		image: "/offices/manhattan.jpg",
	},
	{
		name: "Brooklyn Office",
		address: "456 Court Street, Brooklyn, NY 11201",
		phone: "(732) 614-8836",
		email: "brooklyn@kuhnandpartners.com",
		hours: [
			"Monday - Friday: 9:00 AM - 6:00 PM",
			"Saturday: 10:00 AM - 4:00 PM",
			"Sunday: By Appointment",
		],
		parking: false,
		image: "/offices/brooklyn.jpg",
	},
];

const contactReasons = [
	"Buying a Property",
	"Selling a Property",
	"Property Valuation",
	"Investment Consultation",
	"General Inquiry",
	"Schedule a Viewing",
	"Market Analysis",
	"Other",
];

const OfficeCard = ({ office }: { office: OfficeProps }) => {
	return (
		<Card className="h-full transition-shadow duration-300 hover:shadow-lg">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 font-playfair text-xl">
					<Building className="h-5 w-5 text-primary" />
					{office.name}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-start gap-3">
					<MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
					<div>
						<p className="font-medium">Address</p>
						<p className="text-muted-foreground text-sm">{office.address}</p>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Phone className="h-5 w-5 text-primary" />
					<div>
						<p className="font-medium">Phone</p>
						<a
							href={`tel:${office.phone}`}
							className="text-primary text-sm hover:underline"
						>
							{office.phone}
						</a>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Mail className="h-5 w-5 text-primary" />
					<div>
						<p className="font-medium">Email</p>
						<a
							href={`mailto:${office.email}`}
							className="text-primary text-sm hover:underline"
						>
							{office.email}
						</a>
					</div>
				</div>

				<div className="flex items-start gap-3">
					<Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
					<div>
						<p className="font-medium">Hours</p>
						<div className="space-y-1">
							{office.hours.map((hour, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<p key={index} className="text-muted-foreground text-sm">
									{hour}
								</p>
							))}
						</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Car className="h-5 w-5 text-primary" />
					<div>
						<p className="font-medium">Parking</p>
						<p className="text-muted-foreground text-sm">
							{office.parking ? "Available" : "Street parking only"}
						</p>
					</div>
				</div>

				<div className="pt-4">
					<Button className="w-full" variant="outline" asChild>
						<a
							href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<MapPin className="mr-2 h-4 w-4" />
							Get Directions
						</a>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		reason: "",
		message: "",
		newsletter: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Reset form
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			reason: "",
			message: "",
			newsletter: false,
		});

		setIsSubmitting(false);
		alert("Thank you for your message! We'll get back to you soon.");
	};

	const handleInputChange = (field: string, value: string | boolean) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	return (
		<section id="contact" className="bg-white py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						Get in Touch
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Ready to start your real estate journey? Contact us today for a free
						consultation and personalized service.
					</p>
				</div>

				<div className="grid gap-12 lg:grid-cols-2">
					{/* Contact Form */}
					<div>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2 font-playfair text-2xl">
									<MessageSquare className="h-6 w-6 text-primary" />
									Send Us a Message
								</CardTitle>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid gap-4 md:grid-cols-2">
										<div>
											<Label htmlFor="firstName">First Name *</Label>
											<Input
												id="firstName"
												type="text"
												value={formData.firstName}
												onChange={(e) =>
													handleInputChange("firstName", e.target.value)
												}
												required
											/>
										</div>
										<div>
											<Label htmlFor="lastName">Last Name *</Label>
											<Input
												id="lastName"
												type="text"
												value={formData.lastName}
												onChange={(e) =>
													handleInputChange("lastName", e.target.value)
												}
												required
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="email">Email Address *</Label>
										<Input
											id="email"
											type="email"
											value={formData.email}
											onChange={(e) =>
												handleInputChange("email", e.target.value)
											}
											required
										/>
									</div>

									<div>
										<Label htmlFor="phone">Phone Number</Label>
										<Input
											id="phone"
											type="tel"
											value={formData.phone}
											onChange={(e) =>
												handleInputChange("phone", e.target.value)
											}
										/>
									</div>

									<div>
										<Label htmlFor="reason">How can we help you? *</Label>
										<Select
											value={formData.reason}
											onValueChange={(value) =>
												handleInputChange("reason", value)
											}
										>
											<SelectTrigger>
												<SelectValue placeholder="Select a reason" />
											</SelectTrigger>
											<SelectContent>
												{contactReasons.map((reason) => (
													<SelectItem key={reason} value={reason}>
														{reason}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									<div>
										<Label htmlFor="message">Message *</Label>
										<Textarea
											id="message"
											value={formData.message}
											onChange={(e) =>
												handleInputChange("message", e.target.value)
											}
											rows={4}
											placeholder="Please provide any additional details about your request..."
											required
										/>
									</div>

									<div className="flex items-center space-x-2">
										<Checkbox
											id="newsletter"
											checked={formData.newsletter}
											onCheckedChange={(checked) =>
												handleInputChange("newsletter", checked as boolean)
											}
										/>
										<Label htmlFor="newsletter" className="text-sm">
											I'd like to receive market updates and property alerts
										</Label>
									</div>

									<Button
										type="submit"
										className="w-full"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											"Sending..."
										) : (
											<>
												<Send className="mr-2 h-4 w-4" />
												Send Message
											</>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					{/* Office Information */}
					<div className="space-y-6">
						<div>
							<h3 className="mb-6 font-bold font-playfair text-2xl">
								Our Offices
							</h3>
							<div className="space-y-6">
								{offices.map((office, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<OfficeCard key={index} office={office} />
								))}
							</div>
						</div>

						{/* Quick Contact */}
						<Card>
							<CardHeader>
								<CardTitle className="font-playfair text-xl">
									Need Immediate Assistance?
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center gap-3">
									<Phone className="h-5 w-5 text-primary" />
									<div>
										<p className="font-medium">Emergency Line</p>
										<a
											href="tel:+17326148835"
											className="text-primary hover:underline"
										>
											(732) 614-8835
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Mail className="h-5 w-5 text-primary" />
									<div>
										<p className="font-medium">General Inquiries</p>
										<a
											href="mailto:info@kuhnandpartners.com"
											className="text-primary hover:underline"
										>
											info@kuhnandpartners.com
										</a>
									</div>
								</div>

								<div className="pt-4">
									<Button asChild className="w-full">
										<a href="tel:+17326148835">
											<Phone className="mr-2 h-4 w-4" />
											Call Now
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Map Placeholder */}
						<Card>
							<CardHeader>
								<CardTitle className="font-playfair text-xl">Find Us</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex aspect-video items-center justify-center rounded-lg bg-gray-100">
									<div className="text-center">
										<MapPin className="mx-auto mb-2 h-12 w-12 text-gray-400" />
										<p className="text-gray-500">Interactive Map Coming Soon</p>
										<p className="text-gray-400 text-sm">
											Click "Get Directions" above for now
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
