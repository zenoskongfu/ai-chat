"use client";
import { Sender } from "@ant-design/x";
import { App } from "antd";
import { useState } from "react";

export default function InputSender() {
	const [value, setValue] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const { message } = App.useApp();

	return (
		<div className='w-full '>
			<Sender
				loading={loading}
				value={value}
				onChange={(v) => {
					setValue(v);
				}}
				onSubmit={() => {
					setValue("");
					setLoading(true);
					message.info("Send message!");
				}}
				onCancel={() => {
					setLoading(false);
					message.error("Cancel sending!");
				}}
				autoSize={{ minRows: 2, maxRows: 6 }}
			/>
		</div>
	);
}
