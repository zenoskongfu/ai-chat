export default function ChatLayout(props: {
	children: React.ReactNode;
	session: React.ReactNode;
	topic: React.ReactNode;
}) {
	return (
		<div>
			{props.session}
			{props.children}
			{props.topic}
		</div>
	);
}
