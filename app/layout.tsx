import type { Metadata } from "next";
import { Flexbox } from "react-layout-kit";
import "./globals.css";
import Loading from "./loading";

export const metadata: Metadata = {
	title: "Home",
	description: "note home page",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isLoading = false;
	if (isLoading) {
		return <Loading />;
	}

	return (
		<html lang='en'>
			<body className={`w-screen h-screen `}>
				<Flexbox horizontal wrap='nowrap'>
					<div className='w-[70%]'>{children}</div>
				</Flexbox>
			</body>
		</html>
	);
}
