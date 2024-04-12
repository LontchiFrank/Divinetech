/** @format */

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function ProjectCards({ el }) {
	return (
		<div class="max-w-[16rem] bg-[#332C3F] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
			<div className="w-full">
				<img class="rounded-t-lg w-full" src={el.img} alt="" />
			</div>
			<div class="p-5">
				<div href="#">
					<h5 class="mb-4 text-[15px] font-bold tracking-tight text-white dark:text-white">
						{el.name}
					</h5>
				</div>

				<div class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-[#7A24A1] cursor-pointer rounded-[22px] hover:bg-[#7A24A1]  focus:ring-4 focus:outline-none focus:ring-[#7A24A1]">
					Request Service
					<span className="flex items-center ml-1">
						<FaArrowRight />
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProjectCards;
