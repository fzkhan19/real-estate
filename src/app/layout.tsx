import Providers from "@/components/layout/Providers";
import { JSON_LD, METADATA } from "@/constants/Metadata";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Roboto_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = Roboto_Serif({
	subsets: ["latin"],
	variable: "--font-custom-primary",
});

const font2 = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-custom-secondary",
});

export const metadata: Metadata = METADATA;

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta name="apple-mobile-web-app-title" content="MyWebSite" />
			</head>
			<body
				className={cn(
					"bg-foreground text-background",
					font.variable,
					font2.variable,
				)}
			>
				<main className="scrollbar overflow-x-hidden overflow-y-scroll scroll-smooth font-custom-secondary">
					<Analytics />
					<Script
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
						type="application/ld+json"
					/>

					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
}
