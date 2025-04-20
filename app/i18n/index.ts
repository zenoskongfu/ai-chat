import { defaultLocale, locales } from "@/config/languages";
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

const initI18next = async (lng = defaultLocale, ns = "basic") => {
	const i18nInstance = createInstance();
	await i18nInstance
		.use(initReactI18next)
		.use(
			resourcesToBackend(
				(language: string, namespace: string) => import(`@/locales/${language}/${namespace}.json`)
			)
		)
		.init({
			// debug: true,
			supportedLngs: locales,
			fallbackLng: defaultLocale,
			lng,
			fallbackNS: "basic",
			defaultNS: "basic",
			ns,
		});
	return i18nInstance;
};

export async function useTranslation(lng: string = defaultLocale, ns: string = "basic", options = {}) {
	const i18nextInstance = await initI18next(lng as any, ns);
	return {
		t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
		i18n: i18nextInstance,
	};
}
