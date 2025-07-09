import type { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";
import QueryProviders from "./query-client-provider";
import { ThemeProvider } from "./theme-provider";
const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider
			disableTransitionOnChange
			enableSystem
			attribute="class"
			defaultTheme="light"
		>
			<QueryProviders>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</QueryProviders>
		</ThemeProvider>
	);
};

export default Providers;
