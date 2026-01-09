"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Home() {
	return (
		<div className="p-8">
			<Button>Click me</Button>
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ duration: 2, repeat: Infinity }}
				className="w-20 h-20 bg-blue-500 mt-4"
			/>
		</div>
	);
}
