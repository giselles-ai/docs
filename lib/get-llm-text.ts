import type { InferPageType } from "fumadocs-core/source";
import type { source } from "@/lib/source";

export async function getLLMText(page: InferPageType<typeof source>) {
	const content = await page.data.getText("raw");

	return `# ${page.data.title} (${page.url})\n\n${content}`;
}
