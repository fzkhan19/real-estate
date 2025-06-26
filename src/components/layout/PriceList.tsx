import {Card, CardContent} from "@/components/ui/card";

const iphoneRepairs = [
	{
		model: "iPhone 5 5s 5se",
		highQualityScreen: "39€",
		originalScreen: "49€",
		batteryReplacement: "29€",
	},
	{
		model: "iPhone 6 6s",
		highQualityScreen: "49€",
		originalScreen: "49€",
		batteryReplacement: "39€",
	},
];

const samsungRepairs = [
	{
		model: "iPhone 5 5s 5se",
		highQualityScreen: "39€",
		originalScreen: "49€",
		batteryReplacement: "29€",
	},
	{
		model: "iPhone 6 6s",
		highQualityScreen: "49€",
		originalScreen: "49€",
		batteryReplacement: "39€",
	},
];

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const PriceTable = ({ title, repairs }: { title: string; repairs: any[] }) => (
	<Card className="mb-8 bg-white shadow-primary/20 shadow-sm">
		<CardContent className="p-6">
			<h3 className="mb-4 font-semibold text-2xl text-primary">{title}</h3>
			<div className="overflow-x-auto rounded-lg">
				<table className="w-full border-collapse">
					<thead className="bg-primary/5">
						<tr>
							<th className="p-4 text-left font-medium text-primary">Model</th>
							<th className="p-4 text-left font-medium text-primary">
								High Quality Screen
							</th>
							<th className="p-4 text-left font-medium text-primary">
								Original Screen
							</th>
							<th className="p-4 text-left font-medium text-primary">
								Battery Replacement
							</th>
						</tr>
					</thead>
					<tbody>
						{repairs.map((repair, index) => (
							<tr
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="border-b transition-colors hover:bg-slate-50"
							>
								<td className="p-4">{repair.model}</td>
								<td className="p-4 font-medium">{repair.highQualityScreen}</td>
								<td className="p-4 font-medium">{repair.originalScreen}</td>
								<td className="p-4 font-medium">{repair.batteryReplacement}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</CardContent>
	</Card>
);

export const PriceList = () => (
	<div className="my-0 w-full bg-slate-50 py-10" id="prices">
		<div className="container px-4">
			<div className="mb-16 text-center">
				<h2 className="mb-4 font-semibold text-2xl text-primary tracking-tighter md:text-4xl">
					Our Price List
				</h2>
				<p className="text-base text-muted-foreground md:text-lg">
					Competitive pricing for quality repairs
				</p>
			</div>

			<div className="space-y-8">
				<PriceTable title="iPhone Repairs" repairs={iphoneRepairs} />
				<PriceTable title="Samsung Repairs" repairs={samsungRepairs} />
			</div>
		</div>
	</div>
);
