import { Flexbox } from "react-layout-kit";
import ChatList from "./features/ChatList";
import Sender from "./features/Sender";
import { Suspense } from "react";

const senderStyle: React.CSSProperties = {
	borderTop: "1px solid #d3d3d338",
	// clipPath: "polygon(0 -10px, 100% -10px, 100% 100%, 0 100%)",
};

export default function Conversation() {
	return (
		<Flexbox className='h-full w-full'>
			<div className='flex-[8_0_20%]'>
				<Suspense fallback={<div>loading...</div>}>
					<ChatList />
				</Suspense>
			</div>
			<div style={senderStyle} className='flex-[1_0_2%]'>
				<Flexbox justify='center'>
					<Sender />
				</Flexbox>
			</div>
		</Flexbox>
	);
}
