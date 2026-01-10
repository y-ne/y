import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
	return (
		<div className="container mx-auto p-8">
			<div className="flex justify-center">
				<Card>
					<CardContent>
						<span
							className="text-2xl font-bold"
							style={{ color: "#C96868" }}
						>
							&quot;
						</span>{" "}
						Sacrifice everything for the one{" "}
						<span
							className="text-2xl font-bold"
							style={{ color: "#C96868" }}
						>
							&quot;
						</span>
					</CardContent>
				</Card>
			</div>

			<div className="mt-8">
				<h2 className="text-3xl font-bold" style={{ color: "#C96868" }}>
					Exorde
				</h2>
			</div>

			<div className="mt-2">
				<p className="text-base">
					It&apos;s not balanced, Why would so many sacrifice their
					lives in exchange for one?
				</p>
			</div>
		</div>
	);
}
