import PropertiesPage from "@/app/[locale]/properties/page";
import { getTranslations } from "next-intl/server";
export const runtime = "edge";

export async function generateMetadata() {
	const t = await getTranslations("SearchPage");
	return {
		title: t("metadata.title"),
		description: t("metadata.description"),
	};
}

export default function SearchPage() {
	return <PropertiesPage />;
}
