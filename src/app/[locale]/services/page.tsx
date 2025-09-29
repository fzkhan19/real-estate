import { Services } from "@/components/sections/Services";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations("ServicesPage");
	return {
		title: t("metadata.title"),
		description: t("metadata.description"),
	};
}

export default function ServicesPage() {
	return <Services />;
}
