import { Contact } from "@/components/sections/Contact";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations("ContactPage");
	return {
		title: t("metadata.title"),
		description: t("metadata.description"),
	};
}

export default function ContactPage() {
	return <Contact />;
}
