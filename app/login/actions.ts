"use server";

import { redirect } from "next/navigation";

const user = {
	username: process.env.USER_NAME,
	password: process.env.USER_PASSWORD,
};

export const login = async (formData: FormData) => {
	const data = {
		username: formData.get("username") as string,
		password: formData.get("password") as string,
	};

	console.log(data, user);

	if (data.username === user.username && data.password === user.password) {
		redirect("/chat");
	} else {
		return false;
	}
};
