// 设置两个button，在页面剧中放置
// 一个button，导向home
// 一个button，导向about
// 点击button，页面跳转

import Link from "next/link";
import { Flexbox } from "react-layout-kit";

export default function Page() {
	return (
		<Flexbox>
			<Link href={"/home"}>home</Link>
			<Link href={"/menu"}>about</Link>
		</Flexbox>
	);
}
