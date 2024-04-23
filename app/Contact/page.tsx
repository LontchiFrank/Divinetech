/** @format */

import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";

function page() {
	return (
		<DefaultLayout>
			<div
				className="lg:h-[150%] h-[100%]"
				style={{
					background: 'url("/images/6.svg") ',
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
					zIndex: "-10",
					top: 0,
					right: 0,
					position: "absolute",
				}}></div>
			<div className=" min-h-[60vh] lg:min-h-[90vh] ">
				<div className=" container lg:flex-col flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-8 2xl:px-36  xl:px-32 lg:px-20 md:px-4 sm:px-12  w-full justify-center items-center mb-[4rem]">
					<div className="w-full lg:w-full  flex flex-col justify-center items-center sm:pb-8 md:pb-0 ">
						<div className="w-full  md:pb-4 pb-2 z-10 mt-[4rem]">
							<h1 className="font-[700]  text-[2rem] xl:text-[72px] lg:text-[2.6rem] sm:text-center textGradientAbout xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-8  pb-5">
								Contact Us
							</h1>
						</div>
						<p className="md:w-[70%] w-full text-center xl:text-[22px]  text-[#183953]">
							We are here for you! How can we help? Feel free to contact us any
							time. We will get back to you as soon as we can.Have a project in
							mind that you think we’d be a great fit for it? We’d love to know
							what you’re thinking. With Saas Simplify, We help you bring your
							ideas ,thoughts and projects to real life.
						</p>
						<img
							src="/images/17.svg"
							className="absolute top-[0rem] left-0 z-10 w-[65%] mt-[7rem]"
						/>
						<div className="w-full xl:block hidden -z-10 mt-[13rem]">
							<img
								src="/images/26.svg"
								className="absolute top-[60rem] right-0 -z-10"
							/>
						</div>
					</div>
					<div className="w-full flex justify-center ">
						<img src="/images/70.svg" />
					</div>
					<div className="rounded-[20px] w-full bg-[#483464] py-14 md:px-12 px-6 mt-[10rem]">
						<div className="flex md:flex-row flex-col w-full gap-7 mb-7">
							<div className="w-full justify-center items-center px-7 py-4 whitespace-nowrap rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="Name"
								/>
							</div>
							<div className="w-full justify-center items-center px-8 py-4 rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="flex md:flex-row flex-col w-full gap-7 mb-7">
							<div className="w-full justify-center items-center px-7 py-4 whitespace-nowrap rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="Phone"
								/>
							</div>
							<div className="w-full justify-center items-center px-8 py-4 rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="State/Region"
								/>
							</div>
						</div>
						<div className="w-full mb-7">
							<div className="w-full justify-center items-center px-8 py-4 rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<textarea
									rows={10}
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none text-white placeholder:text-white"
									placeholder="State/Region"
								/>
							</div>
						</div>
						<div className="flex md:flex-row flex-col w-full gap-7 mb-12">
							<div className="w-full justify-center items-center px-7 py-4 whitespace-nowrap rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<select
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									name="cars"
									id="cars">
									<option>Select Category</option>
									<option value="saab">Saab</option>
									<option value="mercedes">Mercedes</option>
									<option value="audi">Audi</option>
								</select>
							</div>
							<div className="w-full justify-center items-center px-8 py-4 rounded-3xl border-solid max-md:px-5"></div>
						</div>
						<div className="w-full flex justify-center ">
							<button
								// href="#how-it-works"
								className="px-24 py-4 rounded-full bg-[#7A24A1] text-white w-fit">
								<span className="flex items-center ">
									{" "}
									Send{" "}
									<span className="flex items-center ">
										<img src="/images/34.svg" />
									</span>
								</span>
							</button>
						</div>
					</div>
					<div className="w-full grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-7 mt-14">
						<div className=" bg-[#EEE0F5] p-9 flex justify-center items-center rounded-[10px]">
							<div className="flex gap-3">
								<div>
									<img src="/images/35.svg" />
								</div>
								<div>
									<span className="text-[#7A24A1] text-[14px]">
										<span className="font-bold ">Phone</span>: +237 6XX-
										476-2010
									</span>
								</div>
							</div>
						</div>
						<div className=" bg-[#EEE0F5] p-6 flex justify-center items-center rounded-[10px]">
							<div className="flex gap-3">
								<div className="flex items-center">
									<img src="/images/36.svg" />
								</div>
								<div>
									<span className="text-[#7A24A1] text-[14px]">
										<span className="font-bold "> Email:</span>{" "}
										contact@sassimplified.com
									</span>
								</div>
							</div>
						</div>
						<div className=" bg-[#EEE0F5] p-9  flex justify-center items-center rounded-[10px]">
							<div className="flex gap-3">
								<div>
									<img src="/images/37.svg" />
								</div>
								<div>
									<span className="text-[#7A24A1] text-[14px]">
										<span className="font-bold ">Location:</span> Buea, Cameroon
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default page;
