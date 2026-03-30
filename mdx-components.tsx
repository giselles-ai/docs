import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

export function useMDXComponents(): MDXComponents {
	return {
		...defaultComponents,
		img: (props) => (
			// biome-ignore lint/suspicious/noExplicitAny: fumadocs recommended pattern for ImageZoom
			<ImageZoom {...(props as any)} />
		),
		Steps,
		Step: ({ title, children }: { title?: string; children: ReactNode }) => (
			<Step>
				{title && <h4>{title}</h4>}
				{children}
			</Step>
		),
		Accordions,
		Accordion,
		Tab,
		Tabs,
	};
}
