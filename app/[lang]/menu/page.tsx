import { useTranslation } from "@/app/i18n";
import { Flexbox } from "react-layout-kit";
import { ParamsType } from "../types";

export default async function Menu(props: { params: ParamsType }) {
	const { lang } = await props.params;
	const { t } = await useTranslation(lang);
	return (
		<Flexbox flex={"1 0"} className='h-screen'>
			<div>{t("home")}</div>
			<div>{t("chat")}</div>
			<div>{t("friends")}</div>
		</Flexbox>
	);
}
