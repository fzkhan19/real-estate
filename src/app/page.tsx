import {Contact} from "@/components/layout/contact";
import {Hero} from "@/components/layout/Hero";
import {PriceList} from "@/components/layout/PriceList";
import {Services} from "@/components/layout/Services";
import Testimonial from "@/components/testimonial-04/testimonial-04";

export const runtime = "edge";
export default function Home() {
	return (
		<article className="flex min-h-[100dvh] flex-col space-y-8 pt-4 pb-40 md:px-6 md:pt-12">
			<div className="mx-auto w-full max-w-2xl md:max-w-max">
				<Hero />
				<Services />
				<PriceList />
				<Testimonial />
				<Contact/>
			</div>
		</article>
	);
}
