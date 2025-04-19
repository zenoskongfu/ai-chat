export default function Layout(props: { children: React.ReactElement }) {
	return (
		<div>
			get static params layout
			<div>{props.children}</div>
		</div>
	);
}
