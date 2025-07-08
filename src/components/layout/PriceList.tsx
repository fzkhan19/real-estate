"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

// --- Data for IPHONE Repairs ---
const iphoneRepairs = [
	{
		model: "iPhone 16 Pro Max",
		screenOem: "389€ (120Hz)",
		batteryOem: "139€",
		backCover: "189€",
	},
	{
		model: "iPhone 16 Pro",
		screenOem: "350€ (120Hz)",
		batteryOem: "120€",
		backCover: "179€",
	},
	{
		model: "iPhone 16 Plus",
		screenOem: "249€",
		batteryOem: "99€",
		backCover: "169€",
	},
	{
		model: "iPhone 16",
		screenOem: "239€",
		batteryOem: "89€",
		backCover: "149€",
	},
	{
		model: "iPhone 15 Pro Max",
		screenOem: "279€ (120Hz)",
		batteryOem: "99€",
		backCover: "149€",
	},
	{
		model: "iPhone 15 Pro",
		screenOem: "249€ (120Hz)",
		batteryOem: "89€",
		backCover: "139€",
	},
	{
		model: "iPhone 15 Plus",
		screenOem: "229€",
		batteryOem: "79€",
		backCover: "119€",
	},
	{
		model: "iPhone 15",
		screenOem: "199€",
		batteryOem: "79€",
		backCover: "99€",
	},
	{
		model: "iPhone 14 Pro Max",
		screenOem: "189€ (120Hz)",
		batteryOem: "89€",
		backCover: "130€",
	},
	{
		model: "iPhone 14 Pro",
		screenOem: "179€ (120Hz)",
		batteryOem: "79€",
		backCover: "120€",
	},
	{
		model: "iPhone 14 Plus",
		screenOem: "159€",
		batteryOem: "75€",
		backCover: "89€",
	},
	{
		model: "iPhone 14",
		screenOem: "139€",
		batteryOem: "75€",
		backCover: "79€",
	},
	{
		model: "iPhone 13 Pro Max",
		screenOem: "179€ (120Hz) / 149€",
		batteryOem: "69€",
		backCover: "99€",
	},
	{
		model: "iPhone 13 Pro",
		screenOem: "169€ (120Hz)",
		batteryOem: "69€",
		backCover: "89€",
	},
	{
		model: "iPhone 13",
		screenOem: "139€",
		batteryOem: "69€",
		backCover: "89€",
	},
	{
		model: "iPhone 13 mini",
		screenOem: "129€",
		batteryOem: "69€",
		backCover: "79€",
	},
	{
		model: "iPhone 12 Pro Max",
		screenOem: "139€",
		batteryOem: "69€",
		backCover: "89€",
	},
	{
		model: "iPhone 12 Pro",
		screenOem: "129€",
		batteryOem: "69€",
		backCover: "79€",
	},
	{
		model: "iPhone 12",
		screenOem: "129€",
		batteryOem: "69€",
		backCover: "79€",
	},
	{
		model: "iPhone 12 mini",
		screenOem: "99€",
		batteryOem: "69€",
		backCover: "69€",
	},
	{
		model: "iPhone 11 Pro Max",
		screenOem: "99€",
		batteryOem: "69€",
		backCover: "69€",
	},
	{
		model: "iPhone 11 Pro",
		screenOem: "89€",
		batteryOem: "69€",
		backCover: "69€",
	},
	{
		model: "iPhone 11",
		screenOem: "79€",
		batteryOem: "69€",
		backCover: "69€",
	},
	{
		model: "iPhone XS Max",
		screenOem: "89€",
		batteryOem: "69€",
		backCover: "69€",
	},
	{
		model: "iPhone X / XS / XR",
		screenOem: "69€",
		batteryOem: "59€",
		backCover: "59€",
	},
	{
		model: "iPhone SE (2022)",
		screenOem: "69€",
		batteryOem: "59€",
		backCover: "49€",
	},
	{
		model: "iPhone SE (2020)",
		screenOem: "59€",
		batteryOem: "49€",
		backCover: "49€",
	},
	{
		model: "iPhone 8 Plus",
		screenOem: "59€",
		batteryOem: "49€",
		backCover: "39€",
	},
	{
		model: "iPhone 8",
		screenOem: "49€",
		batteryOem: "49€",
		backCover: "39€",
	},
	{
		model: "iPhone 7 / 7 Plus",
		screenOem: "45€",
		batteryOem: "39€",
		backCover: "-",
	},
	{
		model: "iPhone 6s / 6s Plus",
		screenOem: "39€",
		batteryOem: "29€",
		backCover: "-",
	},
	{
		model: "iPhone 6 / 6 Plus",
		screenOem: "39€",
		batteryOem: "29€",
		backCover: "-",
	},
];

// --- Data for Samsung Repairs ---
const samsungRepairs = [
	{
		model: "S25 Ultra",
		display: "289€",
		battery: "99€",
		chargingPort: "99€",
		backCover: "120€",
	},
	{
		model: "S25 Plus",
		display: "249€",
		battery: "89€",
		chargingPort: "89€",
		backCover: "109€",
	},
	{
		model: "S25",
		display: "189€",
		battery: "89€",
		chargingPort: "89€",
		backCover: "99€",
	},
	{
		model: "S24 Ultra",
		display: "339€",
		battery: "99€",
		chargingPort: "89€",
		backCover: "120€",
	},
	{
		model: "S24 / S24+",
		display: "259€ / 289€",
		battery: "89€",
		chargingPort: "79€",
		backCover: "109€",
	},
	{
		model: "S23 Ultra",
		display: "349€",
		battery: "99€",
		chargingPort: "89€",
		backCover: "109€",
	},
	{
		model: "S23 / S23+",
		display: "239€ / 269€",
		battery: "89€",
		chargingPort: "79€",
		backCover: "99€",
	},
	{
		model: "S22 Ultra",
		display: "339€",
		battery: "89€",
		chargingPort: "79€",
		backCover: "99€",
	},
	{
		model: "S22 / S22+",
		display: "239€ / 269€",
		battery: "89€",
		chargingPort: "69€",
		backCover: "89€",
	},
	{
		model: "S21 Ultra",
		display: "299€",
		battery: "79€",
		chargingPort: "69€",
		backCover: "89€",
	},
	{
		model: "S21 / S21+ / FE",
		display: "179€ / 199€ / 220€",
		battery: "79€",
		chargingPort: "69€",
		backCover: "89€",
	},
	{
		model: "S20 Ultra",
		display: "299€",
		battery: "79€",
		chargingPort: "69€",
		backCover: "89€",
	},
	{
		model: "S20 / S20+ / FE",
		display: "220€ / 259€ / 229€",
		battery: "69€",
		chargingPort: "59€",
		backCover: "79€",
	},
	{
		model: "S10+ / S10 / S10e",
		display: "229€ / 219€ / 199€",
		battery: "69€",
		chargingPort: "59€",
		backCover: "79€",
	},
	{
		model: "S9+ / S9",
		display: "189€ / 179€",
		battery: "59€",
		chargingPort: "49€",
		backCover: "69€",
	},
	{
		model: "S8+ / S8",
		display: "179€ / 169€",
		battery: "59€",
		chargingPort: "49€",
		backCover: "69€",
	},
	{
		model: "S7 Edge / S7",
		display: "149€ / 139€",
		battery: "49€",
		chargingPort: "39€",
		backCover: "59€",
	},
	{
		model: "S6 Edge / S6",
		display: "129€ / 119€",
		battery: "49€",
		chargingPort: "39€",
		backCover: "59€",
	},
];

// A function to format the header titles from camelCase
const formatHeader = (key: string) => {
	const result = key.replace(/([A-Z])/g, " $1");
	return result.charAt(0).toUpperCase() + result.slice(1);
};

// --- Dynamic PriceTable Component ---
const PriceTable = ({
	title,
	repairs,
}: { title: string; repairs: Array<Record<string, string>> }) => {
	const [searchTerm, setSearchTerm] = useState("");

	// Return null if there are no repairs to display
	if (!repairs || repairs.length === 0) {
		return null;
	}

	// Get the headers from the keys of the first repair object
	const headers = Object.keys(repairs[0]);

	// Filter repairs based on search term
	const filteredRepairs = repairs.filter((repair) =>
		Object.values(repair).some((value) =>
			value.toLowerCase().includes(searchTerm.toLowerCase()),
		),
	);

	return (
		<Card className="mb-8 border-none bg-white shadow-none md:border md:shadow-primary/20 md:shadow-sm">
			<CardContent className="p-0 md:p-6">
				<h3 className="mb-4 font-semibold text-2xl text-primary"> {title} </h3>
				<div className="relative mb-4">
					<input
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					<X
						className={cn("absolute top-2.5 right-2.5 size-5 cursor-pointer", {
							hidden: searchTerm === "",
						})}
						onClick={() => setSearchTerm("")}
					/>
				</div>
				<div className="overflow-x-auto rounded-lg">
					<table className="w-full border-collapse">
						<thead className="bg-primary/5">
							<tr>
								{headers.map((header) => (
									<th
										key={header}
										className="p-4 text-left font-medium text-primary text-sm md:text-base"
									>
										{formatHeader(header)}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
							{filteredRepairs.map((repair: any, index: any) => (
								<tr
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className="border-b transition-colors hover:bg-slate-50"
								>
									{headers.map((header) => (
										<td
											key={header}
											className="p-4 font-medium text-sm md:text-base"
										>
											{repair[header]}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	);
};

// --- Main PriceList Component ---
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
