"use client";
import { locales } from "@/config/languages";
import { useParams, useRouter } from "next/navigation";

export default function SwitchLangs() {
	const params = useParams();
	const router = useRouter();
	const lang = params.lang;

	return (
		<select
			value={lang}
			onChange={(e) => {
				let pathname = window.location.pathname;
				pathname = pathname.replace(/\/[^\/]+/, "/" + e.target.value);
				console.log(pathname);
				// window.location.href = pathname.replace(/\/[^\/]+/, "/" + e.target.value);
				router.push(pathname);
			}}
			className='p-2 m-2 border rounded'>
			{locales.map((locale) => (
				<option key={locale} value={locale}>
					{locale.toUpperCase()}
				</option>
			))}
		</select>
	);
}
