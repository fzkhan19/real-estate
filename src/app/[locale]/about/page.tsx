import { About } from "@/components/sections/About";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations("AboutPage");
	return {
		title: t("metadata.title"),
		description: t("metadata.description"),
	};
}

export default function AboutPage() {
	return <About />;
}
