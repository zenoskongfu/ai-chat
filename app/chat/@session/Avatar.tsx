"use client";
import dynamic from "next/dynamic";

const Avatar = dynamic(() => import("@zenos-chen/avatar").then((res) => res.AvatarCircle), {
	ssr: false,
	loading: () => <div>头像加载中</div>,
});

const temp = () => <Avatar str='程' height={200} />;

export default temp;
