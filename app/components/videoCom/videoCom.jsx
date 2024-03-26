/** @format */

import React from "react";

function VideoCom({ item }) {
	return (
		<div className=" bg-[#EEE0F5] rounded-lg  p-2">
			<div className="h-[80%] rounded-lg w-full flex justify-center">
				<img src={item.img} />
			</div>
			<div className="h-[20%] rounded-md w-full p-3 flex items-center">
				<span className="text-[#7A24A1]">{item.title}</span>
			</div>
		</div>
	);
}

export default VideoCom;
