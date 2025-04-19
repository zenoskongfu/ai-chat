import { v4 as uuidv4 } from "uuid";
import MsgItem from "./MsgItem";
import { sleep } from "@/app/util/sleep";

export type MessageType = {
	id: string;
	content: string;
	role: "user" | "assistant";
	createdAt: Date;
};

const messages: MessageType[] = [
	{
		id: uuidv4(),
		content: "hello, i am assistant",
		role: "assistant",
		createdAt: new Date(),
	},
	{
		id: uuidv4(),
		content: "介绍你自己",
		role: "user",
		createdAt: new Date(),
	},
	{
		id: uuidv4(),
		content: "我是人工智能助手，有什么问题可以来问我",
		role: "assistant",
		createdAt: new Date(),
	},
	{
		id: uuidv4(),
		content: "如何学习前端",
		role: "user",
		createdAt: new Date(),
	},
	{
		id: uuidv4(),
		content: "很简单",
		role: "assistant",
		createdAt: new Date(),
	},
];

const getMessages = async () => {
	await sleep();
	return messages;
};

export default async function ChatList() {
	const messages = await getMessages();
	return (
		<div className='w-full h-full p-4 pt-[4em]'>
			{messages.map((item) => {
				return <MsgItem key={item.id} {...item} />;
			})}
		</div>
	);
}
