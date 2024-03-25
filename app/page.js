/** @format */
"use client";
import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
// import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";

function App() {
	return (
		<NextUIProvider>
			<DefaultLayout></DefaultLayout>
		</NextUIProvider>
	);
}

export default App;
