import { Contact } from "@/components/sections/Contact";
import { getTranslations } from "next-intl/server";
export const runtime = "edge";

export async function generateMetadata() {
	const t = await getTranslations("ContactPage");
	return {
		title: t("metadata.title"),
		description: t("metadata.description"),
	};
}

export default function ContactPage() {
	return (
		<div className="mt-18 min-h-screen">
			<Contact />
		</div>
	);
}
