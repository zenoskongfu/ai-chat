"use client";
import { useFormState, useFormStatus } from "react-dom";
import AddBtn from "./AddBtn";
import { addTopics2 } from "../../actions";

export default function AddTopic() {
	const [state, action, isPending] = useFormState(addTopics2, null);
	return (
		<div>
			<form action={action}>
				<input type='text' name='topic' className='w-full  border' />
				<AddBtn />
				{isPending && <div>loading...</div>}
			</form>
		</div>
	);
}
