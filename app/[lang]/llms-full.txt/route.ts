import { getLLMText } from "@/lib/get-llm-text";
import { source } from "@/lib/source";

export const revalidate = false;

export async function GET(
	_req: Request,
	{ params }: RouteContext<"/[lang]/llms-full.txt">,
) {
	const { lang } = await params;
	const pages = source.getPages(lang);
	const scanned = await Promise.all(pages.map(getLLMText));
	return new Response(scanned.join("\n\n"));
}

export function generateStaticParams() {
	return [{ lang: "en" }, { lang: "ja" }];
}
