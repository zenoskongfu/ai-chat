import { useEffect } from "react";

export default function Redirect(props: { stage: string }) {
	const gotoChat = () => {
		window.location.href = "/chat";
	};

	useEffect(() => {
		if (props.stage === "end") {
			gotoChat();
		}
	}, [props.stage]);
	return null;
}
