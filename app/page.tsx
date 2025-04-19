"use client";

import { useEffect, useState } from "react";
import { Flexbox } from "react-layout-kit";
import LoadingContent from "./LoadingContent";
import Redirect from "./Redirect";
// import { sleep } from "./util/sleep";
const stages = ["start", "init user", "end"];

let index = 0;
export default function Home() {
	// await sleep(3000);
	const [stage, setStage] = useState("start");

	useEffect(() => {
		const interval = setInterval(() => {
			const stage = stages[index++];
			console.log(stage);
			setStage(stage);
			if (index >= stages.length) {
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Flexbox horizontal flex={"1 0"} className='h-screen'>
			<LoadingContent stage={stage} />
			<Redirect stage={stage} />
		</Flexbox>
	);
}
