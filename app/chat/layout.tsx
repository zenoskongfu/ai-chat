import { Flexbox } from "react-layout-kit";

export default function ChatLayout(props: {
	children: React.ReactNode;
	session: React.ReactNode;
	topic: React.ReactNode;
}) {
	return (
		<Flexbox horizontal>
			{props.session}
			<div className='flex-[8_0_20%]'>{props.children}</div>
			{props.topic}
		</Flexbox>
	);
}
