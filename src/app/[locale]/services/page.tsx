import { Services } from "@/components/sections/Services";
import { getTranslations } from "next-intl/server";
export const runtime = "edge";

export async function generateMetadata() {
	const t = await getTranslations("ServicesPage");
	return {
		title: t("metadata.title"),
		description: t("metadata.description"),
	};
}

export default function ServicesPage() {
	return <div className="mt-18 min-h-screen">{<Services />}</div>;
}
