/** @format */

import React from "react";

function Footers() {
	return (
		<div className="w-full flex justify-center items-center">
			{/* <div className="">
             bg-[url('/images/5.svg')] bg-no-repeat bg-center bg-cover
				<img src="/images/5.svg" className="w-full " />
			</div> */}
			<footer
				className="p-4 bg-white md:p-8 lg:p-10   w-full h-full"
				style={{
					background: 'url("/images/5.svg") ',
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
				// dark:bg-gray-800
				// style={{
				// 	height: "80%",

				// 	background: 'url("/images/5.svg") ',
				// 	backgroundPosition: "center",
				// 	backgroundSize: "cover",
				// 	backgroundRepeat: "no-repeat",
				// }}
			>
				<div className="mx-auto max-w-screen-xl flex flex-col pt-[20rem] justify-center items-center text-center">
					<a
						href="#"
						className="flex justify-center items-center text-2xl font-semibold text-gray-900  mb-12">
						<img src="/images/1.svg" />
					</a>
					<ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900  ">
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								Our Services
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								Team
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								Projects
							</a>
						</li>
					</ul>
					<ul className="flex flex-wrap justify-center items-center mb-6 gap-5 text-gray-900 ">
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								<img src="/images/2.svg" />
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								<img src="/images/3.svg" />
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								<img src="/images/4.svg" />
							</a>
						</li>
					</ul>
					<span className="text-sm text-gray-500 sm:text-center  ">
						© 2024{" "}
						<a href="#" className="hover:underline">
							Saas Simplified
						</a>
						. All Rights Reserved
					</span>
					<ul className="flex flex-wrap items-center justify-center mt-2 text-sm font-medium text-[#FEAA53] sm:mb-0 dark:text-[#FEAA53]">
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 ">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Terms and Condition
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Footers;
