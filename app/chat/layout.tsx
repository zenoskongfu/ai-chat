import { Suspense } from "react";
import { Flexbox } from "react-layout-kit";

export default function ChatLayout(props: {
	children: React.ReactNode;
	session: React.ReactNode;
	topic: React.ReactNode;
}) {
	return (
		<Flexbox horizontal className='w-full'>
			{props.session}
			<div className='flex-[8_0_20%]'>{props.children}</div>
			{/* <Suspense fallback={<div>add topic....</div>}> */}
			<div className='flex-[2_0_10%]'>{props.topic}</div>
			{/* </Suspense> */}
		</Flexbox>
	);
}
