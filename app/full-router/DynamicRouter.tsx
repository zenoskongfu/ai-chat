import { getData } from "./util";

export default async function DynamicRouter() {
	const res = await getData({
		next: {
			tags: ["dynamic"],
		},
	});
	return (
		<>
			dynamic router:
			<img src={res[0].url} alt='' />
		</>
	);
}
