/** @format */

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
	el: any;
}

// export const Home:React.FC<Props> = (props) >

export default function ProjectCards({ el }: Props) {
	return (
		<div className="max-w-[16rem] bg-[#332C3F] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
			<div className="w-full">
				<img className="rounded-t-lg w-full" src={el.img} alt="" />
			</div>
			<div className="p-5">
				<div>
					<h5 className="mb-4 text-[15px] font-bold tracking-tight text-white dark:text-white">
						{el.name}
					</h5>
				</div>

				{/* <Link href={el?.link}> */}
				<button
					onClick={() => console.log("mummy")}
					className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-[#7A24A1] cursor-pointer rounded-[22px] hover:bg-[#7A24A1]  focus:ring-4 focus:outline-none focus:ring-[#7A24A1]">
					<Link rel="preload" href={el?.link}>
						<div className="flex">
							Request Service
							<span className="flex items-center ml-1">
								<FaArrowRight />
							</span>
						</div>
					</Link>
				</button>
				{/* </Link> */}
			</div>
		</div>
	);
}
