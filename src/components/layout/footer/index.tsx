"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Award,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Send,
	Shield,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const quickLinks = [
	{ name: "Home", href: "/" },
	{ name: "Properties", href: "/properties" },
	{ name: "Services", href: "/services" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
	{ name: "Valuation", href: "/valuation" },
];

const services = [
	{ name: "Property Buying", href: "/services#buying" },
	{ name: "Property Selling", href: "/services#selling" },
	{ name: "Property Valuation", href: "/services#valuation" },
	{ name: "Investment Consulting", href: "/services#investment" },
	{ name: "Market Analysis", href: "/services#analysis" },
	{ name: "Legal Services", href: "/services#legal" },
];

const propertyTypes = [
	{ name: "Single Family Homes", href: "/properties?type=single-family" },
	{ name: "Condos & Apartments", href: "/properties?type=condo" },
	{ name: "Townhouses", href: "/properties?type=townhouse" },
	{ name: "Luxury Properties", href: "/properties?type=luxury" },
	{ name: "Investment Properties", href: "/properties?type=investment" },
	{ name: "Commercial Real Estate", href: "/properties?type=commercial" },
];

const socialLinks = [
	{
		name: "Facebook",
		href: "https://facebook.com/kuhnandpartners",
		icon: Facebook,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/kuhnandpartners",
		icon: Twitter,
	},
	{
		name: "Instagram",
		href: "https://instagram.com/kuhnandpartners",
		icon: Instagram,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/company/kuhnandpartners",
		icon: Linkedin,
	},
];

export const Footer = () => {
	const [email, setEmail] = useState("");
	const [isSubscribing, setIsSubscribing] = useState(false);

	const handleNewsletterSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubscribing(true);

		// Simulate subscription
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setEmail("");
		setIsSubscribing(false);
		alert("Thank you for subscribing to our newsletter!");
	};

	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Company Info */}
					<div className="lg:col-span-1">
						<div className="mb-4 flex items-center gap-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
								<span className="font-bold font-playfair text-lg text-white">
									K&P
								</span>
							</div>
							<span className="font-bold font-playfair text-xl">
								Kuhn & Partners
							</span>
						</div>
						<p className="mb-6 text-gray-300 text-sm leading-relaxed">
							Your trusted real estate experts in New York. We've been helping
							families find their perfect homes and investors build their
							portfolios since 2008.
						</p>

						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<Phone className="h-4 w-4 flex-shrink-0 text-primary" />
								<a
									href="tel:+17326148835"
									className="text-gray-300 text-sm transition-colors hover:text-white"
								>
									(732) 614-8835
								</a>
							</div>
							<div className="flex items-center gap-3">
								<Mail className="h-4 w-4 flex-shrink-0 text-primary" />
								<a
									href="mailto:info@kuhnandpartners.com"
									className="text-gray-300 text-sm transition-colors hover:text-white"
								>
									info@kuhnandpartners.com
								</a>
							</div>
							<div className="flex items-start gap-3">
								<MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
								<div className="text-gray-300 text-sm">
									<p>123 Fifth Avenue, Suite 1500</p>
									<p>New York, NY 10011</p>
								</div>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 font-playfair font-semibold text-lg">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-300 text-sm transition-colors hover:text-white"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="mb-4 font-playfair font-semibold text-lg">
							Our Services
						</h3>
						<ul className="space-y-2">
							{services.map((service) => (
								<li key={service.name}>
									<Link
										href={service.href}
										className="text-gray-300 text-sm transition-colors hover:text-white"
									>
										{service.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Property Types */}
					<div>
						<h3 className="mb-4 font-playfair font-semibold text-lg">
							Property Types
						</h3>
						<ul className="space-y-2">
							{propertyTypes.map((type) => (
								<li key={type.name}>
									<Link
										href={type.href}
										className="text-gray-300 text-sm transition-colors hover:text-white"
									>
										{type.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Newsletter Signup */}
				<div className="mt-12 border-gray-800 border-t pt-8">
					<div className="mx-auto max-w-md text-center">
						<h3 className="mb-2 font-playfair font-semibold text-lg">
							Stay Updated
						</h3>
						<p className="mb-4 text-gray-300 text-sm">
							Get the latest property listings and market insights delivered to
							your inbox.
						</p>
						<form onSubmit={handleNewsletterSubmit} className="flex gap-2">
							<Input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="border-gray-700 bg-gray-800 text-white placeholder-gray-400"
								required
							/>
							<Button type="submit" disabled={isSubscribing}>
								{isSubscribing ? "..." : <Send className="h-4 w-4" />}
							</Button>
						</form>
					</div>
				</div>

				{/* Social Media & Bottom Info */}
				<div className="mt-8 border-gray-800 border-t pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						{/* Social Media */}
						<div className="flex items-center gap-4">
							<span className="text-gray-300 text-sm">Follow us:</span>
							<div className="flex gap-3">
								{socialLinks.map((social) => {
									const Icon = social.icon;
									return (
										<a
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-400 transition-colors hover:text-white"
										>
											<Icon className="h-5 w-5" />
										</a>
									);
								})}
							</div>
						</div>

						{/* Certifications */}
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2">
								<Award className="h-4 w-4 text-primary" />
								<span className="text-gray-400 text-xs">
									Licensed & Certified
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Shield className="h-4 w-4 text-primary" />
								<span className="text-gray-400 text-xs">Fully Insured</span>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 border-gray-800 border-t pt-8 text-center">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-gray-400 text-sm">
							© 2024 Kuhn & Partners Real Estate. All rights reserved.
						</p>
						<div className="flex items-center gap-6 text-gray-400 text-xs">
							<Link
								href="/privacy"
								className="transition-colors hover:text-white"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="transition-colors hover:text-white"
							>
								Terms of Service
							</Link>
							<Link
								href="/licenses"
								className="transition-colors hover:text-white"
							>
								Licenses
							</Link>
						</div>
					</div>
					<div className="mt-4 text-gray-500 text-xs">
						<p>
							Real Estate License #: 10401234567 | Equal Housing Opportunity
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
