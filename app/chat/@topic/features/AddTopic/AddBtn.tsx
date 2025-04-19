"use client";
import { useFormStatus } from "react-dom";

export default function AddBtn(props: any) {
	const { pending } = useFormStatus();
	return (
		<button type='submit' className='border bg-blue-400 rounded text-white py-2 px-6'>
			{/* {pending ? "提交中" : "添加"} */}
			添加
		</button>
	);
}
