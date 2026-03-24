import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	async redirects() {
		const sections = [
			"guides",
			"models",
			"prompts",
			"glossary",
			"faq",
			"releases",
		];
		return sections.map((section) => ({
			source: `/${section}/:slug*`,
			destination: `/en/${section}/:slug*`,
			permanent: true,
		}));
	},
	async rewrites() {
		return [
			{
				source: "/:lang(en|ja)/:path*.mdx",
				destination: "/llms.mdx/:lang/:path*",
			},
		];
	},
};

const withMDX = createMDX();

export default withMDX(config);
