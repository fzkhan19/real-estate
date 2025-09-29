import { Valuation } from "@/components/sections/Valuation";
import { getTranslations } from "next-intl/server";
export const runtime = "edge";

export async function generateMetadata() {
	const t = await getTranslations("ValuationPage");
	return {
		title: t("metadata.title"),
		description: t("metadata.description"),
	};
}

export default function ValuationPage() {
	return <Valuation />;
}
