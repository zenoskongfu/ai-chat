import { sleep } from "../util/sleep";

export default async function Session() {
	await sleep(4300);
	return <div className='h-screen w-1/6 bg-gray-100'>session</div>;
}
