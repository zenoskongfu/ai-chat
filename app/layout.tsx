import type { Metadata } from "next";
import { Flexbox } from "react-layout-kit";
import Session from "./components/Session";
import "./globals.css";

export const metadata: Metadata = {
	title: "Home",
	description: "note home page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`w-screen h-screen `}>
				<Flexbox horizontal wrap='nowrap'>
					<Session />
					{children}
				</Flexbox>
			</body>
		</html>
	);
}
