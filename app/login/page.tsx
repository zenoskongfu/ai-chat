"use client";
import { useState } from "react";
import { login } from "./actions";

export default function Page() {
	const [error, setError] = useState<string>("");
	return (
		<div className='border p-4'>
			{error && <div className='text-red-500'>{error}</div>}
			<form
				name='login'
				action={async (formdata) => {
					const result = await login(formdata);
					if (!result) {
						setError("用户名或密码错误");
					}
					console.log(process.env.NEXT_PUBLIC_USER_NAME);
					console.log(process.env.NEXT_PUBLIC_USER_PASSWORD);
				}}>
				<input
					name='username'
					type='text'
					autoComplete='on'
					className='border w-full rounded p-2'
					placeholder='username'
				/>
				<input
					name='password'
					type='password'
					autoComplete='new-password'
					className='rounded border w-full mt-1.5 p-2'
					placeholder='password'
				/>
				<button type='submit' className='border rounded w-full mt-5 bg-blue-400 p-2'>
					提交
				</button>
			</form>
		</div>
	);
}
