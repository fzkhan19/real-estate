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
import { Building, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Valuation = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		propertyType: "",
		bedrooms: "",
		bathrooms: "",
		squareFootage: "",
		yearBuilt: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const t = useTranslations("ValuationPage");

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Reset form
		setFormData({
			name: "",
			email: "",
			phone: "",
			address: "",
			propertyType: "",
			bedrooms: "",
			bathrooms: "",
			squareFootage: "",
			yearBuilt: "",
			message: "",
		});

		setIsSubmitting(false);
		alert(t("formAlert"));
	};

	return (
		<section id="valuation" className="py-16">
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
					{/* Valuation Form */}
					<div>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2 font-playfair text-2xl">
									<Building className="h-6 w-6 text-primary" />
									{t("formCardTitle")}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid gap-4 md:grid-cols-2">
										<div>
											<Label htmlFor="name">{t("form.fullName")}</Label>
											<Input
												id="name"
												type="text"
												value={formData.name}
												onChange={(e) =>
													handleInputChange("name", e.target.value)
												}
												required
											/>
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
											/>
										</div>
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
										/>
									</div>

									<div>
										<Label htmlFor="address">{t("form.address")}</Label>
										<Input
											id="address"
											type="text"
											value={formData.address}
											onChange={(e) =>
												handleInputChange("address", e.target.value)
											}
											required
										/>
									</div>

									<div className="grid gap-4 md:grid-cols-2">
										<div>
											<Label htmlFor="propertyType">
												{t("form.propertyType")}
											</Label>
											<Select
												value={formData.propertyType}
												onValueChange={(value) =>
													handleInputChange("propertyType", value)
												}
											>
												<SelectTrigger>
													<SelectValue placeholder={t("form.selectType")} />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Single Family">
														{t("form.singleFamily")}
													</SelectItem>
													<SelectItem value="Condo">
														{t("form.condo")}
													</SelectItem>
													<SelectItem value="Townhouse">
														{t("form.townhouse")}
													</SelectItem>
													<SelectItem value="Apartment">
														{t("form.apartment")}
													</SelectItem>
													<SelectItem value="Loft">{t("form.loft")}</SelectItem>
													<SelectItem value="Villa">
														{t("form.villa")}
													</SelectItem>
													<SelectItem value="Penthouse">
														{t("form.penthouse")}
													</SelectItem>
													<SelectItem value="Studio">
														{t("form.studio")}
													</SelectItem>
													<SelectItem value="Commercial">
														{t("form.commercial")}
													</SelectItem>
													<SelectItem value="Land">{t("form.land")}</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div>
											<Label htmlFor="bedrooms">{t("form.bedrooms")}</Label>
											<Select
												value={formData.bedrooms}
												onValueChange={(value) =>
													handleInputChange("bedrooms", value)
												}
											>
												<SelectTrigger>
													<SelectValue placeholder={t("form.selectNumber")} />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="1">1</SelectItem>
													<SelectItem value="2">2</SelectItem>
													<SelectItem value="3">3</SelectItem>
													<SelectItem value="4">4</SelectItem>
													<SelectItem value="5+">5+</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>

									<div className="grid gap-4 md:grid-cols-2">
										<div>
											<Label htmlFor="bathrooms">{t("form.bathrooms")}</Label>
											<Select
												value={formData.bathrooms}
												onValueChange={(value) =>
													handleInputChange("bathrooms", value)
												}
											>
												<SelectTrigger>
													<SelectValue placeholder={t("form.selectNumber")} />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="1">1</SelectItem>
													<SelectItem value="2">2</SelectItem>
													<SelectItem value="3">3</SelectItem>
													<SelectItem value="4">4</SelectItem>
													<SelectItem value="5+">5+</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div>
											<Label htmlFor="squareFootage">
												{t("form.approxSquareFootage")}
											</Label>
											<Input
												id="squareFootage"
												type="number"
												value={formData.squareFootage}
												onChange={(e) =>
													handleInputChange("squareFootage", e.target.value)
												}
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="yearBuilt">{t("form.yearBuilt")}</Label>
										<Input
											id="yearBuilt"
											type="number"
											value={formData.yearBuilt}
											onChange={(e) =>
												handleInputChange("yearBuilt", e.target.value)
											}
										/>
									</div>

									<div>
										<Label htmlFor="message">
											{t("form.additionalInformation")}
										</Label>
										<Textarea
											id="message"
											value={formData.message}
											onChange={(e) =>
												handleInputChange("message", e.target.value)
											}
											rows={4}
											placeholder={t("form.messagePlaceholder")}
										/>
									</div>

									<Button
										type="submit"
										className="w-full"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											t("form.submitting")
										) : (
											<>
												<Send className="mr-2 h-4 w-4" />
												{t("form.submitRequest")}
											</>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					{/* Contact Info / Map Placeholder */}
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="font-playfair text-xl">
									{t("contactCard.title")}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center gap-3">
									<Phone className="h-5 w-5 text-primary" />
									<div>
										<p className="font-medium">{t("contactCard.phone")}</p>
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
										<p className="font-medium">{t("contactCard.email")}</p>
										<a
											href="mailto:valuation@kuhnandpartners.com"
											className="text-primary hover:underline"
										>
											valuation@kuhnandpartners.com
										</a>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<MapPin className="h-5 w-5 text-primary" />
									<div>
										<p className="font-medium">
											{t("contactCard.officeAddress")}
										</p>
										<p className="text-muted-foreground text-sm">
											{t("contactCard.addressText")}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="font-playfair text-xl">
									{t("whyValuation.title")}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-inside list-disc space-y-2 text-muted-foreground">
									{t
										.raw("whyValuation.reasons")
										.map((reason: string, index: number) => (
											<li key={reason}>{reason}</li>
										))}
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="font-playfair text-xl">
									{t("valuationProcess.title")}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ol className="list-inside list-decimal space-y-2 text-muted-foreground">
									{t
										.raw("valuationProcess.steps")
										.map((step: string, index: number) => (
											<li key={step}>{step}</li>
										))}
								</ol>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
