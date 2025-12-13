import type { Metadata } from "next";
import { Geist_Mono, Gaegu, Kosugi_Maru } from "next/font/google";
import "./globals.css";

import AppShell from "@/components/app-shell";

const kosugiMaru = Kosugi_Maru({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-kosugi-maru",
	display: "swap",
});

const gaegu = Gaegu({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	variable: "--font-gaegu",
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Y",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${gaegu.variable} ${kosugiMaru.variable} ${geistMono.variable} antialiased`}
			>
				<AppShell>{children}</AppShell>
			</body>
		</html>
	);
}
