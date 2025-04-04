import { Flexbox } from "react-layout-kit";
import ChatList from "./features/ChatList";
import Sender from "./features/Sender";

export default function Conversation() {
	return (
		<Flexbox className='h-full'>
			<div className='flex-[8_0_auto]'>
				<ChatList />
			</div>
			<div className='flex-[2_0_auto]'>
				<Sender />
			</div>
		</Flexbox>
	);
}
