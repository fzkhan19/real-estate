import { redirect } from "next/navigation";

export const runtime = "edge";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
	redirect("/de");
}
