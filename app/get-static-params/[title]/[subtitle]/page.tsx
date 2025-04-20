export const generateStaticParams = async (options: {
	params: { title: string };
}) => {
	const { title } = options.params;
	console.log("title: ", title);
	return [{ subtitle: title + "hello" }, { subtitle: title + "world" }];
};

export default async function Page(props: {
	params: Promise<{ subtitle: string }>;
}) {
	const { subtitle } = await props.params;
	return <div>subTitle: {subtitle}</div>;
}
