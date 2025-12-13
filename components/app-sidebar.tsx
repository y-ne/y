"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, Wrench } from "lucide-react";

import {
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const tools = [
	{ title: "Rand", href: "/tools/rand" },
	{ title: "Hash", href: "/tools/hash" },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();
	const toolsOpenByRoute = pathname.startsWith("/tools");

	const [toolsOpen, setToolsOpen] = React.useState(toolsOpenByRoute);
	const prev = React.useRef(toolsOpenByRoute);

	React.useEffect(() => {
		if (!prev.current && toolsOpenByRoute) setToolsOpen(true);
		prev.current = toolsOpenByRoute;
	}, [toolsOpenByRoute]);

	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<div className="px-3 py-2 text-sm font-semibold select-none cursor-default">
					Wakimae À La Carte
				</div>
			</SidebarHeader>

			<SidebarContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild isActive={pathname === "/"}>
							<Link href="/">
								<Home className="size-4" />
								<span>Home</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<Collapsible
						open={toolsOpen}
						onOpenChange={setToolsOpen}
						className="group/collapsible"
					>
						<SidebarMenuItem>
							<CollapsibleTrigger asChild>
								<SidebarMenuButton isActive={toolsOpen}>
									<Wrench className="size-4" />
									<span>Tools</span>
									<ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
								</SidebarMenuButton>
							</CollapsibleTrigger>

							<CollapsibleContent>
								<SidebarMenuSub>
									{tools.map((t) => (
										<SidebarMenuSubItem key={t.href}>
											<SidebarMenuSubButton
												asChild
												isActive={pathname === t.href}
											>
												<Link href={t.href}>
													<span>{t.title}</span>
												</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									))}
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
