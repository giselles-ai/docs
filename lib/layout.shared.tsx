import { defineI18nUI } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";

export const i18nUI = defineI18nUI(i18n, {
	en: {
		displayName: "English",
	},
	ja: {
		displayName: "日本語",
		search: "ドキュメントを検索",
	},
});

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<>
					{/* biome-ignore lint/performance/noImgElement: SVG doesn't benefit from next/image optimization */}
					<img
						src="/logo/dark.svg"
						alt="Giselle"
						width={100}
						className="hidden dark:block"
					/>
					{/* biome-ignore lint/performance/noImgElement: SVG doesn't benefit from next/image optimization */}
					<img
						src="/logo/light.svg"
						alt="Giselle"
						width={100}
						className="dark:hidden"
					/>
				</>
			),
		},
		links: [
			{
				text: "Support",
				url: "mailto:support@giselles.ai",
			},
			{
				text: "Log in",
				url: "https://studio.giselles.ai/login",
			},
			{
				text: "Sign up",
				url: "https://studio.giselles.ai/signup",
			},
			{
				type: "custom",
				children: (
					<a
						href="https://studio.giselles.ai/"
						className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
					>
						Get Started
					</a>
				),
			},
		],
		i18n: true,
	};
}
