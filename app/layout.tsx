import type { Metadata } from "next";
import { Flexbox } from "react-layout-kit";
import "./globals.css";

export const metadata: Metadata = {
	title: "Home",
	description: "note home page",
};

export default function RootLayout({
	children,
	topic,
	session,
}: Readonly<{
	children: React.ReactNode;
	topic: React.ReactNode;
	session: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`w-screen h-screen `}>
				<Flexbox horizontal wrap='nowrap'>
					<div className='w-[15%] bg-gray-100'>{session}</div>
					<div className='w-[70%]'>{children}</div>
					<div className='w-[15%] bg-gray-100'>{topic}</div>
				</Flexbox>
			</body>
		</html>
	);
}
