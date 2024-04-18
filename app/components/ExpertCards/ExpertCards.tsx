/** @format */

import React from "react";

type Props = {
	el: any;
};

function ExpertCards({ el }: any) {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img className="w-full" src={el.img} alt="Sunset in the mountains" />
			<div className=" bg-[#7A24A1]">
				<div className="px-9 py-5">
					<div className="font-normal text-center text-[25px] text-white  mb-2">
						{el.name}
					</div>
					<p className="text-base font-light text-center text-white">
						{el.role}
					</p>
				</div>
				<div className="w-full flex justify-end">
					<div className="w-[80px] h-[60px] bg-[#FEAA53] text-white text-[30px] font-bold flex justify-center items-center">
						in
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExpertCards;
