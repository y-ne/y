"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
	return (
		<header className="h-(--header-height) flex items-center gap-2 px-4 border-b">
			<SidebarTrigger />
			<div className="font-bold text-2xl">Wakimae</div>
		</header>
	);
}
