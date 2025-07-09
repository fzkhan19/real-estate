import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export const metadata = { title: "404 : Not Found" };

export default function NotFound() {
	const t = useTranslations("notFound");
	return (
		<div className="mx-3 flex h-screen flex-col items-center justify-center gap-4 pb-12 text-center sm:mr-12 sm:ml-28 lg:ml-12">
			<h1 className="font-bold text-4xl text-primary">404</h1>
			<p className="text-gray-700 text-xl">{t("notFound")}</p>
			<p className="text-gray-500">{t("brokenLink")}</p>
			<Link
				href="/"
				className="mt-6 rounded-lg bg-primary px-6 py-3 text-white shadow transition duration-300 hover:bg-primary/80 hover:shadow-md"
			>
				Go Back Home
			</Link>
		</div>
	);
}
