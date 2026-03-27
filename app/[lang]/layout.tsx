import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ExternalLinkIcon, HomeIcon } from "lucide-react";
import { baseOptions, i18nUI } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default async function LangLayout({
	params,
	children,
}: LayoutProps<"/[lang]">) {
	const { lang } = await params;
	const { nav, ...base } = baseOptions();

	return (
		<html lang={lang} suppressHydrationWarning>
			<body>
				<RootProvider i18n={i18nUI.provider(lang)}>
					<DocsLayout
						{...base}
						nav={{ ...nav, mode: "top" }}
						tabMode="navbar"
						tree={source.getPageTree(lang)}
						sidebar={{
							collapsible: false,
							banner: (
								<div key="sidebar-banner" className="flex flex-col gap-1">
									<a
										href="https://giselles.ai"
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-3 rounded-lg p-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground"
									>
										<HomeIcon className="size-4" />
										Website
										<ExternalLinkIcon className="size-3 ml-auto" />
									</a>
									<a
										href="https://github.com/giselles-ai/giselle"
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-3 rounded-lg p-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground"
									>
										<svg
											className="size-4"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true"
										>
											<title>GitHub</title>
											<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
										</svg>
										Open Source
										<ExternalLinkIcon className="size-3 ml-auto" />
									</a>
								</div>
							),
						}}
					>
						{children}
					</DocsLayout>
				</RootProvider>
			</body>
		</html>
	);
}
