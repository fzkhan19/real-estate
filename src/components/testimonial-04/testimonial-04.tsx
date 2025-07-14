import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const testimonials = [
	{
		id: 1,
		name: "Klaus Schmidt",
		designation: "Business Owner",
		testimonial:
			"Their mobile repair service is outstanding! Fixed my iPhone screen in no time. The staff was very professional and friendly. Highly recommended!",
	},
	{
		id: 2,
		name: "Jennifer Thompson",
		designation: "Customer",
		testimonial:
			"Had my laptop's hardware issues resolved quickly. Their PC repair team is excellent and the pricing was reasonable. Great experience!",
	},
	{
		id: 3,
		name: "Wolfgang Mueller",
		designation: "Regular Client",
		testimonial:
			"I regularly bring my devices here for software updates and virus removal. Their software services are top-notch and staff is very knowledgeable.",
	},
	{
		id: 4,
		name: "Michael Anderson",
		designation: "Business Partner",
		testimonial:
			"As a business owner, I rely on their comprehensive repair services. From mobile repairs to PC maintenance, they consistently deliver excellent results.",
	},
	{
		id: 5,
		name: "Heidi Bauer",
		designation: "Customer",
		testimonial:
			"Got my laptop's screen replaced and they did an amazing job. The service was quick and professional. Outstanding attention to detail.",
	},
	{
		id: 6,
		name: "Robert Wilson",
		designation: "Regular Client",
		testimonial:
			"Their smartphone repair service saved my device! Also got help with software installation. Very impressed with their technical expertise and customer care.",
	},
	{
		id: 7,
		name: "Greta Fischer",
		designation: "Business Owner",
		testimonial:
			"The software troubleshooting service is exceptional. They helped set up my entire business system and provide regular maintenance.",
	},
	{
		id: 8,
		name: "Brandon Mitchell",
		designation: "Customer",
		testimonial:
			"Had multiple devices repaired here - both phones and laptops. Their multi-device repair service is convenient and reliable.",
	},
];

const Testimonial = () => {
	const t = useTranslations("testimonials");

	return (
		<div
			className="flex min-h-screen items-center justify-center py-12"
			id="testimonials"
		>
			<div className="h-full w-full">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-semibold text-2xl text-primary tracking-tighter md:text-4xl">
						{t("title")}
					</h2>
					<p className="text-base text-muted-foreground md:text-lg">
						{t("subtitle")}
					</p>
				</div>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 z-10 w-[15%] bg-linear-to-r from-background to-transparent" />
					<div className="absolute inset-y-0 right-0 z-10 w-[15%] bg-linear-to-l from-background to-transparent" />
					<Marquee pauseOnHover className="[--duration:20s]">
						<TestimonialList />
					</Marquee>
					<Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
						<TestimonialList />
					</Marquee>
				</div>
			</div>
		</div>
	);
};

const TestimonialList = () =>
	testimonials.map((testimonial) => (
		<div
			key={testimonial.id}
			className="min-w-96 max-w-sm rounded-xl border border-accent p-6"
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Avatar>
						<AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
							{testimonial.name.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div>
						<p className="font-semibold text-lg">{testimonial.name}</p>
						<p className="text-gray-500 text-sm">{testimonial.designation}</p>
					</div>
				</div>
				<Button variant="ghost" size="icon" asChild>
					<Link
						href="https://maps.app.goo.gl/iKBAopLvtYo7Upqc6"
						target="_blank"
					>
						<IconBrandGoogle className="h-6 w-6 text-primary" />
					</Link>
				</Button>
			</div>
			<p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
		</div>
	));

export default Testimonial;
