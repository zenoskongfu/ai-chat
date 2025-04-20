import { locales } from "@/config/languages";
import { ParamsType } from "./types";
import SwitchLangs from "./features/SwitchLangs";

export default async function Layout(props: { params: ParamsType; children: React.ReactNode }) {
	return (
		<div>
			<SwitchLangs />
			{props.children}
		</div>
	);
}
