import { Flexbox } from "react-layout-kit";

export default function Menu() {
	return (
		<Flexbox flex={"1 0"} className='h-screen'>
			<div>home</div>
			<div>chat</div>
			<div>friends</div>
		</Flexbox>
	);
}
