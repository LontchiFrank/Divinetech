/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";

function VideoCom({ item }) {
	return (
		<Link href={item.link}>
			<div className=" bg-[#EEE0F5] rounded-lg cursor-pointer p-2">
				<div className=" rounded-lg w-full flex justify-center">
					<div className="w-full ">
						<img src={item.img} preload="true" />
					</div>
				</div>
				<div className="h-[20%] rounded-md w-full p-3 flex items-center">
					<span className="text-[#7A24A1]">{item.title}</span>
				</div>
			</div>
		</Link>
	);
}

export default VideoCom;
