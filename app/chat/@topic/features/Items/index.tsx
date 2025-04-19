import { getTopics } from "../../actions";

export default async function Items() {
	const style = {};

	const itemsData = await getTopics();

	return (
		<div style={style}>
			{itemsData.map((item) => {
				return <div key={item.key}>{item.label}</div>;
			})}
		</div>
	);
}
