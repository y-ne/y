"use client";

import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AppShell({ children }: { children: ReactNode }) {
	return (
		<div className="[--header-height:calc(--spacing(14))] min-h-svh">
			<SidebarProvider className="flex min-h-svh flex-col">
				<SiteHeader />

				<div className="flex flex-1 min-h-0 min-w-0">
					<AppSidebar />

					<SidebarInset className="flex-1 min-w-0">
						{children}
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}
