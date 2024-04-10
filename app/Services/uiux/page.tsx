/** @format */

import React from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import { FaArrowRight, FaChevronDown, FaChevronRight } from "react-icons/fa";

function page() {
	return (
		<div className="">
			<DefaultLayout>
				<div className="  min-h-[60vh] lg:min-h-[90vh]  ">
					<div className=" container lg:flex flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-8 2xl:px-36  xl:px-32 lg:px-20 md:px-12 sm:px-12  w-full justify-center items-center mb-[4rem]">
						<div className="w-full lg:w-2/5  flex flex-col justify-center sm:pb-8 md:pb-0 ">
							<div className="md:pb-4 pb-2 z-10">
								<h1 className="font-[700]  text-[2rem] xl:text-[3.4rem] lg:text-[2.6rem] sm:text-left text-center text-gradient xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-8  pb-5">
									Elevate your business with SaaS services today.
								</h1>
								<div className="w-full flex flex-col justify-center self-center md:mr-[-100px] lg:pt-0 pt-10 lg:hidden">
									<img src="/images/7.svg" style={{ height: "60%" }} />
								</div>
								<p className="text-dark-background font-light xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[16px] pt-[2rem]">
									With our intuitive and user-friendly platforms, you can
									seamlessly manage your operations, connect with people, and
									drive productivity from anywhere, at any time.
								</p>
							</div>
							<button
								// endContent={<img src="/images/Home/3rem.svg" />}

								className="px-12 py-4 rounded-full bg-[#7A24A1] text-white w-fit">
								<span className="flex gap-3">
									{" "}
									Let's Discuss{" "}
									<span className="flex items-center ">
										<FaArrowRight />
									</span>
								</span>
							</button>
						</div>
						<div className="w-full lg:w-3/5  lg:flex flex-col justify-center self-center md:mr-[-100px] lg:pt-0 pt-10 hidden">
							<img src="/images/7.svg" style={{ paddingTop: "1rem" }} />
						</div>
					</div>
				</div>
			</DefaultLayout>
		</div>
	);
}

export default page;
