"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Building, Car, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
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
	const t = useTranslations("ContactPage");
	return (
		<Card className="h-full">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 font-playfair text-xl">
					<Building className="h-5 w-5 text-primary-foreground" />
					{office.name === "Manhattan Office"
						? t("officeInfo.manhattanOffice")
						: t("officeInfo.brooklynOffice")}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex items-start gap-3">
					<MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground" />
					<div>
						<p className="font-medium">{t("officeInfo.address")}</p>
						<p className="text-muted-foreground text-sm">{office.address}</p>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Phone className="h-5 w-5 text-primary-foreground" />
					<div>
						<p className="font-medium">{t("officeInfo.phone")}</p>
						<a
							href={`tel:${office.phone}`}
							className="text-muted-foreground text-sm hover:underline"
						>
							{office.phone}
						</a>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Mail className="h-5 w-5 text-primary-foreground" />
					<div>
						<p className="font-medium">{t("officeInfo.email")}</p>
						<a
							href={`mailto:${office.email}`}
							className="text-muted-foreground text-sm hover:underline"
						>
							{office.email}
						</a>
					</div>
				</div>

				<div className="flex items-start gap-3">
					<Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground" />
					<div>
						<p className="font-medium">{t("officeInfo.hours")}</p>
						<div className="space-y-1">
							{office.name === "Manhattan Office" ? (
								<>
									<p className="text-muted-foreground text-sm">
										{t("officeInfo.officeHoursManhattan1")}
									</p>
									<p className="text-muted-foreground text-sm">
										{t("officeInfo.officeHoursManhattan2")}
									</p>
									<p className="text-muted-foreground text-sm">
										{t("officeInfo.officeHoursManhattan3")}
									</p>
								</>
							) : (
								<>
									<p className="text-muted-foreground text-sm">
										{t("officeInfo.officeHoursBrooklyn1")}
									</p>
									<p className="text-muted-foreground text-sm">
										{t("officeInfo.officeHoursBrooklyn2")}
									</p>
									<p className="text-muted-foreground text-sm">
										{t("officeInfo.officeHoursBrooklyn3")}
									</p>
								</>
							)}
						</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Car className="h-5 w-5 text-primary-foreground" />
					<div>
						<p className="font-medium">{t("officeInfo.parking")}</p>
						<p className="text-muted-foreground text-sm">
							{office.parking
								? t("officeInfo.available")
								: t("officeInfo.streetParkingOnly")}
						</p>
					</div>
				</div>

				<div className="pt-4">
					<Button className="w-full" asChild>
						<a
							href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<MapPin className="mr-2 h-4 w-4" />
							{t("officeInfo.getDirections")}
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
	const t = useTranslations("ContactPage");

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
		alert(t("formAlert"));
	};

	const handleInputChange = (field: string, value: string | boolean) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	return (
		<section id="contact" className="py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2 className="mb-4 font-bold font-playfair text-3xl sm:text-4xl md:text-5xl">
						{t("header.title")}
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						{t("header.subtitle")}
					</p>
				</div>

				<div className="grid gap-12 lg:grid-cols-2">
					<div className="flex flex-col gap-8">
						{/* Contact Form */}
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2 font-playfair text-2xl">
									{t("formCardTitle")}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="flex flex-col gap-4">
									<div className="grid gap-4 md:grid-cols-2">
										<div>
											<Label htmlFor="firstName">{t("form.firstName")}</Label>
											<Input
												id="firstName"
												type="text"
												value={formData.firstName}
												onChange={(e) =>
													handleInputChange("firstName", e.target.value)
												}
												required
												className=""
											/>
										</div>
										<div>
											<Label htmlFor="lastName">{t("form.lastName")}</Label>
											<Input
												id="lastName"
												type="text"
												value={formData.lastName}
												onChange={(e) =>
													handleInputChange("lastName", e.target.value)
												}
												required
												className=""
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="email">{t("form.email")}</Label>
										<Input
											id="email"
											type="email"
											value={formData.email}
											onChange={(e) =>
												handleInputChange("email", e.target.value)
											}
											required
											className=""
										/>
									</div>

									<div>
										<Label htmlFor="phone">{t("form.phone")}</Label>
										<Input
											id="phone"
											type="tel"
											value={formData.phone}
											onChange={(e) =>
												handleInputChange("phone", e.target.value)
											}
											className=""
										/>
									</div>

									<div>
										<Label htmlFor="reason">{t("form.helpQuestion")}</Label>
										<Select
											value={formData.reason}
											onValueChange={(value) =>
												handleInputChange("reason", value)
											}
										>
											<SelectTrigger className="">
												<SelectValue placeholder={t("form.selectReason")} />
											</SelectTrigger>
											<SelectContent className="">
												{contactReasons.map((reason) => (
													<SelectItem key={reason} value={reason}>
														{t(
															`contactReasons.${contactReasons.indexOf(reason)}`,
														)}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									<div>
										<Label htmlFor="message">{t("form.message")}</Label>
										<Textarea
											id="message"
											value={formData.message}
											onChange={(e) =>
												handleInputChange("message", e.target.value)
											}
											rows={4}
											placeholder={t("form.messagePlaceholder")}
											required
											className=""
										/>
									</div>

									<Button
										type="submit"
										className="w-full"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											t("form.sending")
										) : (
											<>
												<Send className="mr-2 h-4 w-4" />
												{t("form.sendMessage")}
											</>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
						{/* Quick Contact */}
						<Card>
							<CardHeader>
								<CardTitle className="font-playfair text-xl">
									{t("quickContact.title")}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-4">
								<div className="flex items-center gap-3">
									<Phone className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="font-medium text-primary-foreground/70">
											{t("quickContact.emergencyLine")}
										</p>
										<a
											href="tel:+17326148835"
											className="text-primary-foreground hover:underline"
										>
											(732) 614-8835
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Mail className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="font-medium text-primary-foreground/70">
											{t("quickContact.generalInquiries")}
										</p>
										<a
											href="mailto:info@kuhnandpartners.com"
											className="text-primary-foreground hover:underline"
										>
											info@kuhnandpartners.com
										</a>
									</div>
								</div>

								<div className="pt-4">
									<Button asChild className="w-full">
										<a href="tel:+17326148835">
											<Phone className="mr-2 h-4 w-4" />
											{t("quickContact.callNow")}
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Office Information */}
					<div className="flex flex-col gap-8">
						<div>
							<div className="space-y-6">
								{offices.map((office) => (
									<OfficeCard key={office.name} office={office} />
								))}
							</div>
						</div>

						{/* Map Placeholder */}
						<Card>
							<CardHeader>
								<CardTitle className="font-playfair text-xl">
									{t("mapPlaceholder.title")}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex aspect-video items-center justify-center rounded-lg bg-gray-100">
									<div className="text-center">
										<MapPin className="mx-auto mb-2 h-12 w-12 text-gray-400" />
										<p className="text-gray-500">
											{t("mapPlaceholder.comingSoon")}
										</p>
										<p className="text-gray-400 text-sm">
											{t("mapPlaceholder.clickDirections")}
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
