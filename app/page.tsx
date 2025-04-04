import { Flexbox } from "react-layout-kit";
import Topic from "./components/Topic";
import Conversation from "./components/Conversation";

export default function Home() {
	return (
		<Flexbox horizontal flex={"1 0"} className='h-screen'>
			<div className='flex-[8_0_10%] h-full'>
				<Conversation />
			</div>
			<div className='flex-[2_0_2%]'>
				<Topic />
			</div>
		</Flexbox>
	);
}
