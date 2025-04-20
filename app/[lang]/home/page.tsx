import { Flexbox } from "react-layout-kit";
import { ParamsType } from "../types";

export default async function Home(props: { params: ParamsType }) {
	const { lang } = await props.params;
	return (
		<Flexbox flex={"1 0"} className='h-screen'>
			{lang}
			<div>name</div>
			<div>age</div>
			<div>address</div>
		</Flexbox>
	);
}
