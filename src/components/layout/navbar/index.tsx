"use client";
import { Home, Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { Suspense, useMemo, useTransition } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../ui/sheet";

import { Label } from "@/components/ui/label";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { usePathname } from "@/i18n/navigation";
import Image from "next/image";

interface RouteProps {
	href: string;
	label: string;
}

const MemoizedRouteList = React.lazy(() =>
	import("./MemoizedRouteList").then((module) => ({
		default: module.MemoizedRouteList,
	})),
);

const CustomNavigationMenu = React.memo(() => {
	const t = useTranslations("navigation");
	const routeList: RouteProps[] = useMemo(
		() => [
			{
				href: "#services",
				label: t("ourServices"),
			},
			{
				href: "#prices",
				label: t("priceList"),
			},
			{
				href: "#testimonials",
				label: t("testimonials"),
			},
			{
				href: "#contact",
				label: t("contactUs"),
			},
		],
		[t],
	);

	return (
		<NavigationMenu className="mx-auto hidden lg:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<Suspense fallback={<div>{t("loading")}</div>}>
						<MemoizedRouteList routeList={routeList} />
					</Suspense>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
});

const MemoizedSheetContent = React.memo(SheetContent);
const MemoizedSheetFooter = React.memo(SheetFooter);

export const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const t = useTranslations("navigation");
	const locale = useLocale();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();

	const handleLocaleSwitch = (checked: boolean) => {
		const nextLocale = checked ? "en" : "de";
		const path = pathname || "/";
		startTransition(() => {
			window.location.href = `/${nextLocale}${path}`;
		});
	};

	const isEnglish = locale === "en";

	const routeList: RouteProps[] = useMemo(
		() => [
			{
				href: "#services",
				label: t("ourServices"),
			},
			{
				href: "#prices",
				label: t("priceList"),
			},
			{
				href: "#testimonials",
				label: t("testimonials"),
			},
			{
				href: "#contact",
				label: t("contactUs"),
			},
		],
		[t],
	);

	return (
		<header
			className={cn(
				"sticky top-0 right-0 left-0 z-40 flex w-full items-center justify-between md:mx-auto",
				"border border-secondary p-4",
				// "shadow-primary/10 shadow-sm",
				"border-0 hover:shadow-primary/20",
				"transition-all duration-500 ease-in-out",
				"md:top-0 md:w-full",
				"bg-white/50 saturate-150 backdrop-blur backdrop-contrast-125 dark:bg-black/50",
			)}
		>
			<Link className="-mt-3 flex items-center gap-4 text-xl md:pl-4" href="/">
				<Image
					src={"/logo1.png"}
					alt="logo"
					className="hidden md:block"
					width={150}
					height={70}
				/>
				<Image
					src={"/logo1.png"}
					alt="logo"
					className="md:hidden"
					width={120}
					height={20}
				/>
			</Link>

			{/* <!-- Mobile --> */}
			<div className="flex items-center gap-4 lg:hidden">
				<div className="mr-4 flex items-center gap-2 md:hidden">
					<Label>DE</Label>
					<Switch
						checked={isEnglish}
						onCheckedChange={handleLocaleSwitch}
						disabled={isPending}
					/>
					<Label>EN</Label>
				</div>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Menu
							className="cursor-pointer lg:hidden"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</SheetTrigger>
					<MemoizedSheetContent
						className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-secondary bg-card"
						side="left"
					>
						<div>
							<SheetHeader className="mb-4 ml-4">
								<SheetTitle className="flex">
									<Link
										className="-ml-2 flex gap-3 self-start font-bold text-lg"
										href="/"
									>
										<Image
											src={"/logo1.png"}
											alt="logo"
											width={120}
											height={20}
										/>
									</Link>
								</SheetTitle>
							</SheetHeader>

							<div className="flex flex-col gap-2">
								{routeList.map(({ href, label }) => (
									<Button
										key={href}
										asChild
										className="justify-start text-base"
										variant="ghost"
										onClick={() => setIsOpen(false)}
									>
										<Link href={href}>{label}</Link>
									</Button>
								))}
							</div>
						</div>

						<MemoizedSheetFooter className="w-full flex-col items-start justify-start sm:flex-col">
							<Separator className="mb-2" />
							<div className="flex w-full items-center justify-between">
								<Link className="mx-3" href={"/"}>
									<Button
										className="w-full justify-start"
										size="sm"
										variant="ghost"
									>
										<Home className="size-5" />
									</Button>
								</Link>
							</div>
						</MemoizedSheetFooter>
					</MemoizedSheetContent>
				</Sheet>
			</div>

			{/* <!-- Desktop --> */}
			<CustomNavigationMenu />

			<div className="mr-12 hidden items-center gap-2 md:flex">
				<Label>DE</Label>
				<Switch
					checked={isEnglish}
					onCheckedChange={handleLocaleSwitch}
					disabled={isPending}
				/>
				<Label>EN</Label>
			</div>

			<div className="hidden items-center lg:flex">
				<Link href={"/"}>
					<Button
						className="w-full justify-start px-4 py-6 hover:bg-primary/30"
						size="icon"
						variant="ghost"
					>
						<Home className="size-5" />
					</Button>
				</Link>
			</div>
		</header>
	);
};
