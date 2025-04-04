"use client";
import { Bubble } from "@ant-design/x";
import { MessageType } from ".";
import { UserOutlined } from "@ant-design/icons";

const fooAvatar: React.CSSProperties = {
	color: "#f56a00",
	backgroundColor: "#fde3cf",
};

const barAvatar: React.CSSProperties = {
	color: "#fff",
	backgroundColor: "#87d068",
};

export default function MsgItem(props: MessageType) {
	const placement = props.role === "assistant" ? "start" : "end";
	const avatarStyle = props.role === "assistant" ? fooAvatar : barAvatar;
	return (
		<Bubble
			key={props.id}
			placement={placement}
			content={props.content}
			avatar={{ icon: <UserOutlined />, style: avatarStyle }}
		/>
	);
}
