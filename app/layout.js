/** @format */
"use client";
// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const montserrat = Montserrat({
	display: "swap",
	subsets: ["latin"],
	weight: ["700", "600", "500", "400", "300", "200"],
	variable: "--montserrat",
});

export default function RootLayout({ children }) {
	const navigate = useRouter();
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>

				<meta
					name="viewport"
					content="width=device-width, height=device-height, maximum-scale=1,  initial-scale=1.0, user-scalable=no;user-scalable=0;"
				/>
			</head>
			<body className={montserrat.variable}>
				<NextUIProvider navigate={navigate.push}>{children}</NextUIProvider>
			</body>
		</html>
	);
}
