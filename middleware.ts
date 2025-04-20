import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

// lang_local, 字符集
let locales = ["zh", "en", "nl"];
const defaultLocale = "zh";

const getLang = async (req: NextRequest) => {
	const headers = {
		"accept-language": req.headers.get("accept-language") || "",
	};
	const langs = new Negotiator({ headers }).languages();
	return match(langs, locales, defaultLocale);
};

export async function middleware(req: NextRequest) {
	const lang = await getLang(req);
	const pathname = req.nextUrl.pathname;
	if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
		return NextResponse.next();
	}
	if (/\.(.*)$/.test(pathname)) {
		return NextResponse.next();
	}
	req.nextUrl.pathname = `/${lang}${pathname}`;
	return NextResponse.redirect(req.nextUrl);
}
