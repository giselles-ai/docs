import {
	Accordions,
	Accordion as FumaAccordion,
} from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Cards, Card as FumaCard } from "fumadocs-ui/components/card";
import {
	Step as FumaStep,
	Steps as FumaSteps,
} from "fumadocs-ui/components/steps";
import { Children, isValidElement, type ReactNode } from "react";

export function Frame({
	caption,
	children,
}: {
	caption?: string;
	children: ReactNode;
}) {
	return (
		<figure>
			{children}
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
}

export function Step({
	title,
	children,
}: {
	title?: string;
	children: ReactNode;
}) {
	return (
		<FumaStep>
			{title && <h4>{title}</h4>}
			{children}
		</FumaStep>
	);
}

export { FumaSteps as Steps };

export function AccordionGroup({ children }: { children: ReactNode }) {
	const defaultValue: string[] = [];
	Children.forEach(children, (child) => {
		if (
			isValidElement<{ defaultOpen?: boolean; title?: string }>(child) &&
			child.props.defaultOpen &&
			child.props.title
		) {
			defaultValue.push(String(child.props.title));
		}
	});

	return (
		<Accordions
			type="multiple"
			defaultValue={defaultValue.length > 0 ? defaultValue : undefined}
		>
			{children}
		</Accordions>
	);
}

export function Accordion({
	title,
	defaultOpen: _defaultOpen,
	children,
}: {
	title: string;
	defaultOpen?: boolean;
	children: ReactNode;
}) {
	return <FumaAccordion title={title}>{children}</FumaAccordion>;
}

export function Note({ children }: { children: ReactNode }) {
	return <Callout type="info">{children}</Callout>;
}

export function Info({ children }: { children: ReactNode }) {
	return <Callout type="info">{children}</Callout>;
}

export function Warning({ children }: { children: ReactNode }) {
	return <Callout type="warn">{children}</Callout>;
}

export function CardGroup({ children }: { children: ReactNode }) {
	return <Cards>{children}</Cards>;
}

export function Card({
	title,
	icon,
	href,
	children,
}: {
	title: string;
	icon?: ReactNode;
	href?: string;
	children?: ReactNode;
}) {
	return (
		<FumaCard title={title} icon={icon} href={href}>
			{children}
		</FumaCard>
	);
}
