import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { defaultLocale, locales } from "./config/languages";

// lang_local, 字符集
const getLang = async (req: NextRequest) => {
	const headers = {
		"accept-language": req.headers.get("accept-language") || "",
	};
	const langs = new Negotiator({ headers }).languages();
	return match(langs, locales, defaultLocale);
};

export async function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname;

	// 已经有语言前缀
	const hasLocales = locales.find((locale) => {
		if (pathname.startsWith(`/${locale}`) || pathname === `/${locale}`) {
			return true;
		}
	});
	if (hasLocales) {
		return NextResponse.next();
	}

	// 静态资源
	if (/\.(.*)$/.test(pathname)) {
		return NextResponse.next();
	}

	const lang = await getLang(req);
	req.nextUrl.pathname = `/${lang}${pathname}`;
	return NextResponse.redirect(req.nextUrl);
}
