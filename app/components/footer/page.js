/** @format */

import React from "react";

function Footers() {
	return (
		<div className="w-full flex flex-col justify-center items-center ">
			<footer
				className="p-4 bg-white md:p-0 lg:py-[6rem]   w-full h-full"
				style={{
					background: 'url("/images/5.svg") ',
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}>
				{/* <div className="xl:mx-[23rem] lg:mx-[13rem] sm:mx-[8rem] mb-24"> */}
				<div className="xl:px-[20rem] lg:px-[16rem]  md:px-16 sm:px-12 mx-auto ">
					<div class="flex justify-center items-center px-16 py-16 rounded-xl shadow-xl max-md:px-5 footerBox ">
						<div class="flex flex-col items-center w-full max-w-[870px] max-md:max-w-full px-14">
							<div class="text-7xl font-bold text-center text-orange-400 leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
								Willing to elevate your ideas?
							</div>
							<div class="mt-9 text-lg leading-7 text-center text-white">
								Subscribe to our Newsletter to be updated
							</div>
							<div class="w-full flex gap-3 self-stretch mt-16 text-sm text-violet-100 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
								<div class="w-full justify-center items-center px-7 py-2 whitespace-nowrap rounded-3xl border border-violet-100 border-solid max-md:px-5">
									<input
										className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none placeholder:text-white"
										placeholder="Email"
									/>
								</div>
								<div class="w-full justify-center items-center px-8 py-2 rounded-3xl border border-violet-100 border-solid max-md:px-5">
									<input
										className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none placeholder:text-white"
										placeholder="Your Message"
									/>
								</div>
								<div class="justify-center px-8 py-5 text-center text-white capitalize whitespace-nowrap bg-gray-700 rounded-full leading-[143%] max-md:px-5">
									Subscribe
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto max-w-screen-xl flex flex-col pb-3 justify-center   items-center text-center w-full xl:pt-[22rem] lg:pt-[18rem] sm:pt-[8rem] ">
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
