import { sleep } from "@/app/util/sleep";
import Items from "./features/Items";
import { Suspense } from "react";
import AddTopic from "./features/AddTopic";

const TopicStyle: React.CSSProperties = {
	borderLeft: "1px solid #d3d3d338",
};

export default async function Topic() {
	await sleep(2300);

	return (
		<div className='h-full ' style={TopicStyle}>
			<Suspense fallback={<div>Topic Suspense</div>}>
				<Items />
			</Suspense>
			<AddTopic />
		</div>
	);
}
