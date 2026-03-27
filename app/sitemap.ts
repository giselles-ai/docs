import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const baseUrl = "https://docs.giselles.ai";

export default function sitemap(): MetadataRoute.Sitemap {
	return source.getPages().map((page) => ({
		url: `${baseUrl}${page.url}`,
		changeFrequency: "weekly",
	}));
}
