"use server";

import { revalidatePath } from "next/cache";

const temp = Array.from({ length: 4 }).map((_, index) => ({
	key: `item${index + 1}`,
	label: `Conversation Item ${index + 1}`,
	disabled: index === 3,
}));

const topics = temp;

export type TopicType = {
	key: string;
	label: string;
	disabled?: boolean;
};

export const getTopics = async () => {
	return topics;
};

export const addTopics = async (data: TopicType) => {
	topics.push(data as any);
	console.log(topics);
	revalidatePath("/chat");
	return false;
};

export const addTopics2 = async (preState: string | null, formData: FormData) => {
	const label = formData.get("topic") as string;
	const data = {
		key: `item${topics.length + 1}`,
		label,
	};
	console.log(data);
	topics.push(data as any);
	revalidatePath("/chat");
	return label;
};
