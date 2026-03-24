import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import {
	Accordion,
	AccordionGroup,
	Card,
	CardGroup,
	Frame,
	Info,
	Note,
	Step,
	Steps,
	Warning,
} from "@/components/mintlify-compat";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...defaultComponents,
		...components,
		Frame,
		Steps,
		Step,
		AccordionGroup,
		Accordion,
		Note,
		Info,
		Warning,
		Tab,
		Tabs,
		CardGroup,
		Card,
	};
}
