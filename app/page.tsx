import { Flexbox } from "react-layout-kit";
import Topic from "./components/Topic";
import Conversation from "./components/Conversation";

export default function Home() {
	return (
		<Flexbox horizontal flex={"1 0"} className='h-screen'>
			<div className='flex-[8_0_auto] h-full'>
				<Conversation />
			</div>
			<div className='flex-[2_0_auto]'>
				<Topic />
			</div>
		</Flexbox>
	);
}
