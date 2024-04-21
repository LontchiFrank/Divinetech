/** @format */

import React from "react";
import { TbCalendarCheck } from "react-icons/tb";

function Article({ screen }) {
	return (
		<div class="my-1 px-1 w-full  lg:my-4 lg:px-4">
			<article class="overflow-hidden rounded-lg ">
				<a href="/Blog/blog-details">
					<img
						alt="Placeholder"
						class="block h-auto w-full rounded-lg"
						src="https://picsum.photos/600/400/?random"
					/>
				</a>

				<header class="flex items-center justify-between leading-tight py-2 md:py-4">
					<h1 class="text-lg">
						<a
							class={
								screen?.details == "details"
									? "no-underline hover:underline text-white font-bold"
									: "no-underline hover:underline text-black font-bold"
							}
							href="/Blog/blog-details">
							The Future of SaaS: Predictions & Trends For The Coming Years
						</a>
					</h1>
				</header>
				<span
					className={
						screen.details == "details"
							? "text-white mb-[4rem] text-[17px]"
							: "text-[#183953] mb-[4rem] text-[17px]"
					}>
					What are the possible future trends and predictions for SaaS in the
					coming years?
				</span>

				<footer class="flex items-center border-t-2 border-stroke border-[#909090] justify-between leading-none py-2 md:py-4 mt-3">
					<a
						class="flex items-center no-underline hover:underline text-black"
						href="/Blog/blog-details">
						<img
							alt="Placeholder"
							class="block rounded-full border-3 border-stroke border-[#FEAA53]"
							src="https://picsum.photos/32/32/?random"
						/>
						<p
							class={
								screen.details == "details"
									? "ml-2 text-sm text-white"
									: "ml-2 text-sm"
							}>
							ADMIN
						</p>
						<span className="ml-5 rounded-full block w-[15px] h-[15px] bg-[#FEAA53]"></span>
					</a>
					<a
						class="no-underline flex gap-3 text-black hover:text-red-dark"
						href="/Blog/blog-details">
						<span>
							<TbCalendarCheck className="text-[20px] text-[#FEAA53]" />
						</span>
						<span
							class={
								screen.details == "details"
									? "block text-[16px] text-white flex items-center"
									: "block text-[16px] flex items-center"
							}>
							12/04/2024
						</span>
						<i class="fa fa-heart"></i>
					</a>
				</footer>
			</article>
		</div>
	);
}

export default Article;
