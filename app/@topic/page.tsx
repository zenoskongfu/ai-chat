import { sleep } from "../util/sleep";
import Items from "./features/Items";

const TopicStyle: React.CSSProperties = {
	borderLeft: "1px solid #d3d3d338",
};

export default async function Topic() {
	await sleep(2300);
	return (
		<div className='h-full ' style={TopicStyle}>
			<Items />
		</div>
	);
}
