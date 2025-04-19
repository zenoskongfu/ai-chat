export const generateStaticParams = async () => {
	return [{ title: "hello" }, { title: "world" }];
};

export default function Page(props: { params: { title: string } }) {
	return <div>title: {props.params.title}</div>;
}
