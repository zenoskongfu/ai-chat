import { Flexbox } from "react-layout-kit";
import Conversation from "./components/Conversation";
import { Suspense } from "react";

export default function Home() {
	return (
		<Flexbox horizontal flex={"1 0"} className='h-screen'>
			<Suspense fallback={<div>loading...</div>}>
				<Conversation />
			</Suspense>
			{/* <div className='flex-[8_0_10%] h-full'>
			</div>
			<div className='flex-[2_0_2%]'>
				<Topic />
			</div> */}
		</Flexbox>
	);
}
