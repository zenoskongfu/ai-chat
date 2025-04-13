import { Suspense } from "react";
import StaticRouter from "./StaticRouter";
import DynamicRouter from "./DynamicRouter";

export default function Page() {
	return (
		<div>
			<Suspense fallback={<div>static Router loading...</div>}>
				<StaticRouter />
			</Suspense>
			<Suspense fallback={<div>dynamic Router loading...</div>}>
				<DynamicRouter />
			</Suspense>
		</div>
	);
}
