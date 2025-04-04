import Items from "./features/Items";

const TopicStyle: React.CSSProperties = {
	borderLeft: "1px solid #d3d3d338",
};

export default function Topic() {
	return (
		<div className='h-full ' style={TopicStyle}>
			<Items />
		</div>
	);
}
