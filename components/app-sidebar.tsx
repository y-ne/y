"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Settings2 } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const nav = [{ title: "Home", href: "/", icon: Home }];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();

	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild size="lg">
							<Link href="/">Wakimae</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<SidebarMenu>
					{nav.map((item) => (
						<SidebarMenuItem key={item.href}>
							<SidebarMenuButton
								asChild
								isActive={pathname === item.href}
							>
								<Link href={item.href}>
									<item.icon className="size-4" />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
