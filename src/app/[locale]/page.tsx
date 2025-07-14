import { Hero } from "@/components/layout/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Properties } from "@/components/sections/Properties";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export const runtime = "edge";
export default function Home() {
	return (
		<article className="flex min-h-dvh flex-col">
			<Hero />
			<Properties />
			<Services />
			<About />
			<Testimonials />
			<Contact />
		</article>
	);
}
