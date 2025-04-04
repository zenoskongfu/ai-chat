"use client";
import { Conversations, type ConversationsProps } from "@ant-design/x";
import { message, theme } from "antd";
import { DeleteOutlined, EditOutlined, StopOutlined } from "@ant-design/icons";

const items = Array.from({ length: 4 }).map((_, index) => ({
	key: `item${index + 1}`,
	label: `Conversation Item ${index + 1}`,
	disabled: index === 3,
}));

export default function Items() {
	const { token } = theme.useToken();
	const style = {
		width: 256,
		background: token.colorBgContainer,
		borderRadius: token.borderRadius,
	};

	const menuConfig: ConversationsProps["menu"] = (conversation) => ({
		items: [
			{
				label: "Operation 1",
				key: "operation1",
				icon: <EditOutlined />,
			},
			{
				label: "Operation 2",
				key: "operation2",
				icon: <StopOutlined />,
				disabled: true,
			},
			{
				label: "Operation 3",
				key: "operation3",
				icon: <DeleteOutlined />,
				danger: true,
			},
		],
		onClick: (menuInfo) => {
			menuInfo.domEvent.stopPropagation();
			message.info(`Click ${conversation.key} - ${menuInfo.key}`);
		},
	});

	return <Conversations style={style} items={items} menu={menuConfig} />;
}
