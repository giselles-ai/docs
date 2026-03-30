import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
	MarkdownCopyButton,
} from "fumadocs-ui/layouts/notebook/page";
import { notFound, redirect } from "next/navigation";
import { source } from "@/lib/source";
import { useMDXComponents } from "@/mdx-components";
import { SocialFooter } from "../social-footer";

export default async function Page(props: PageProps<"/[lang]/[[...slug]]">) {
	const { slug, lang } = await props.params;

	if (!slug || slug.length === 0) {
		redirect(`/${lang}/guides/introduction`);
	}

	const page = source.getPage(slug, lang);

	if (!page) notFound();

	const MDX = page.data.body;
	const components = useMDXComponents();
	const markdownUrl = `${page.url}.mdx`;

	return (
		<DocsPage
			toc={page.data.toc}
			footer={{
				children: <SocialFooter />,
			}}
		>
			<div className="flex items-center justify-between gap-4">
				<DocsTitle>{page.data.title}</DocsTitle>
				<MarkdownCopyButton markdownUrl={markdownUrl} className="shrink-0" />
			</div>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX components={components} />
			</DocsBody>
		</DocsPage>
	);
}

export function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(
	props: PageProps<"/[lang]/[[...slug]]">,
) {
	const { slug, lang } = await props.params;

	if (!slug || slug.length === 0) {
		return {};
	}

	const page = source.getPage(slug, lang);

	if (!page) notFound();

	const baseUrl = "https://docs.giselles.ai";
	const slugPath = slug.join("/");

	return {
		title: page.data.title,
		description: page.data.description,
		alternates: {
			canonical: `${baseUrl}/${lang}/${slugPath}`,
			languages: {
				en: `${baseUrl}/en/${slugPath}`,
				ja: `${baseUrl}/ja/${slugPath}`,
			},
		},
	};
}
