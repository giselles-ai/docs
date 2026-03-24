import { createI18nMiddleware } from "fumadocs-core/i18n/middleware";
import type { NextFetchEvent, NextRequest } from "next/server";
import { i18n } from "@/lib/i18n";

const i18nProxy = createI18nMiddleware(i18n);

export function proxy(request: NextRequest, event: NextFetchEvent) {
	return i18nProxy(request, event);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo/).*)"],
};
