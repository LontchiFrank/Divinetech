/** @format */

import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import Button from "../components/Buttons/Button";
import {FaArrowRight, FaChevronRight} from 'react-icons/fa'

function page() {
	return (
		<DefaultLayout>
			<div
				className="w-full h-[100vh] "
				style={{
					background: 'url("/images/6.svg") ',
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}>
				{/* container flex min-h-[60vh] lg:min-h-[90vh] mx-auto */}

				<div className="container flex mx-auto px-32 w-full justify-center items-center pt-12">
					<div className="w-full lg:w-2/5 flex flex-col justify-center ">
						<div className="md:pb-4 pb-2 z-10">
							<h1 className="font-[700]  text-[3.4rem] text-gradient md:leading-[4.5rem] leading-[1rem] pb-5">
								Elevate your business with SaaS services today.
							</h1>
							<p className="text-dark-background font-light text-[20px]">
								With our intuitive and user-friendly platforms, you can
								seamlessly manage your operations, connect with people, and
								drive productivity from anywhere, at any time.
							</p>
						</div>
						<button
							// endContent={<img src="/images/Home/3rem.svg" />}
							link
							href="#how-it-works"
							className="px-12 py-4 rounded-full bg-[#7A24A1] text-white w-fit">
						<span className="flex gap-3">	Let's Discuss{" "}
                            <span className="flex items-center "><FaArrowRight /></span></span>
						</button>
						{/* <div className='w-[30%] md:py-7 py-6 bg-purple rounded-md flex flex-row justify-center items-center'>
              <h4 className='text-white text-[1.143rem] font-semibold'> How it Works </h4><div className='pl-2'><img src='/images/Home/3rem.svg' /> </div>
            </div> */}
					</div>
					<div className="w-full lg:w-3/5 hidden lg:flex flex-col justify-center self-center md:mr-[-100px]">
						<img
							src="/images/7.svg"
							// className="right-0 top-0 z-10"
							style={{ paddingTop: "1rem" }}
						/>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default page;
