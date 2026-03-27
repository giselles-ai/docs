import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./global.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://docs.giselles.ai"),
	title: {
		default: "Giselle Docs",
		template: "%s | Giselle Docs",
	},
	description: "Official documentation for Giselle, the AI agent platform.",
	icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return children as React.JSX.Element;
}
