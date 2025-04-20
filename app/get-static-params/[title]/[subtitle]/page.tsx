export const generateStaticParams = async (options: { params: { title: string } }) => {
	const { title } = options.params;
	console.log("title: ", title);
	return [{ subtitle: title + "hello" }, { subtitle: title + "world" }];
};

async function getData() {
	// 接口每次调用都会返回一个随机的猫猫图片数据
	const res = await fetch("https://api.thecatapi.com/v1/images/search", {
		cache: "no-store",
	});
	return res.json();
}

export default async function Page(props: { params: Promise<{ subtitle: string }> }) {
	const { subtitle } = await props.params;
	const data = await getData();
	return (
		<div>
			subTitle: {subtitle}
			<div>
				<img src={data[0].url} alt='' />
			</div>
		</div>
	);
}
