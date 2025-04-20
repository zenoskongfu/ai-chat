export const generateStaticParams = async () => {
	return [{ title: "hello" }, { title: "world" }];
};
export default async function Layout(props: {
	params: Promise<{ title: string }>;
	children: React.ReactElement;
}) {
	const { title } = await props.params;
	return (
		<div>
			layout title: {title}
			<div>{props.children}</div>
		</div>
	);
}
