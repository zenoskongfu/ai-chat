import { Flexbox } from "react-layout-kit";
import { ParamsType } from "../types";
import { useTranslation } from "@/app/i18n";

export default async function Home(props: { params: ParamsType }) {
	const { lang } = await props.params;
	const { t } = await useTranslation(lang);
	return (
		<Flexbox flex={"1 0"} className='h-screen'>
			{lang}
			<div>{t("name")}</div>
			<div>{t("age")}</div>
			<div>{t("address")}</div>
		</Flexbox>
	);
}
