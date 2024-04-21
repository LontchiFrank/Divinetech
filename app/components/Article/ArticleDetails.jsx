/** @format */

import React from "react";

function ArticleDetails() {
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
							class="no-underline hover:underline text-white font-bold"
							href="/Blog/blog-details">
							The Future of SaaS: Predictions & Trends For The Coming Years
						</a>
					</h1>
				</header>
				<span className="text-white mb-[4rem] text-[17px] font-light">
					What are the possible future trends and predictions for SaaS in the
					coming years?
				</span>

				<footer class="flex items-center border-t-2 border-stroke border-[#909090] justify-between leading-none py-2 md:py-4 mt-3"></footer>
			</article>
		</div>
	);
}

export default ArticleDetails;
