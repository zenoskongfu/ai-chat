export const generateStaticParams = async () => {
	return [{ title: "hello" }, { title: "world" }];
};

export default async function Page(props: {
	params: Promise<{ title: string }>;
}) {
	const { title } = await props.params;
	return <div>title: {title}</div>;
}
