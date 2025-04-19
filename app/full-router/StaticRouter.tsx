import { getData } from "./util";

export default async function StaticRouter() {
	const res = await getData({
		next: {
			revalidate: 2,
		},
	});

	return <img src={res[0].url}></img>;
}
