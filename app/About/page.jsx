/** @format */

import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import { FaArrowRight, FaChevronDown, FaChevronRight } from "react-icons/fa";

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

					top: 0,
					right: 0,
					position: "absolute",
				}}></div>
			<div className="  min-h-[60vh] lg:min-h-[90vh]  ">
				<div className=" container lg:flex-col flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-8 2xl:px-36  xl:px-32 lg:px-20 md:px-4 sm:px-12  w-full justify-center items-center mb-[4rem]">
					<div className="w-full lg:w-full  flex flex-col justify-center items-center sm:pb-8 md:pb-0 ">
						<div className="md:w-2/5 w-3/5 md:pb-4 pb-2 z-10">
							<h1 className="font-[700]  text-[2rem] xl:text-[72px] lg:text-[2.6rem] sm:text-center textGradientAbout xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-8  pb-5">
								About Us
							</h1>
						</div>
						<p className="md:w-[70%] w-full text-center xl:text-[18px]">
							We’ve got some really innovative and interesting SaaS projects on
							various domains, ranging from web development, mobile app
							development and UI/Ux design. Explore some of our projects today.
						</p>
						<div className="mt-20">
							<img
								src="/images/12.svg"
								className="absolute left-0 w-full -z-10"
							/>
						</div>
					</div>
					<div className="mt-32">
						<img
							src="/images/26.svg"
							className="absolute top-[32rem] right-0 z-10"
						/>
					</div>

					<div className="flex justify-center  items-center mt-[12rem] ">
						<div className="lg:w-[75%] w-full px-10  flex md:flex-row flex-col bg-[#FCFCFC] py-16 rounded-[20px] z-10 imgShadow">
							<div className="lg:w-1/2 w-full  flex justify-center items-center">
								<div className="w-full flex justify-center items-center md:pt-[12rem] pt-[6rem]">
									<img src="/images/32.svg" />
								</div>
							</div>
							<div className="lg:w-1/2 w-full  flex flex-col gap-16 justify-center items-center">
								<div className="w-full bg-[#7A24A1] p-9 rounded-[24px]">
									<h2 className="md:text-[30px] text-[20px] sm:text-[30px] pb-4 text-left font-medium text-[#FEAA53]">
										Our <span className="text-[#fff]">Mission</span>
									</h2>
									<p className="text-left md:text-[12px] text-[9px]  text-[#fff] pb-8">
										Our aim is to achieve increased efficiency and convenience.
										Developing a custom software solution is a dedicated
										development process that results in a personalized software
										application that serves to satisfy the specific needs of a
										particular company.
									</p>
								</div>
								<div className="w-full bg-[#7A24A1] p-9 rounded-[24px]">
									<h2 className="md:text-[30px] text-[30px] sm:text-[30px] pb-4 text-left font-medium text-[#FEAA53]">
										Our <span className="text-[#fff]">Vision</span>
									</h2>
									<span className="text-left md:text-[12px] text-[9px]  text-[#fff] pb-8">
										We at Lvivity are always ready to become a reliable
										technology partner for you and help you build IT solutions
										at an affordable cost. Such solutions will focus on solving
										your company's unique needs
										<p className="pt-3">
											Continuously improve our products and services through
											customer feedback and ongoing research and development.
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:mt-[24rem] mt-0 relative flex ">
						<div className="lg:w-[70%] w-full bg-[#EEE0F5] z-10 py-16 rounded-[20px] mt-[20rem]">
							<h1 className="lg:text-[48px] text-[30px] text-center text-[#FEAA53] pb-8">
								Objectives
							</h1>
							<div className="w-full md:px-16 px-8">
								<div className="flex lg:gap-[4rem] gap-[2rem] mb-10">
									<div>
										<span className="w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-[#7A24A1] ">
											<span className="rounded-full w-[14px] h-[14px] bg-[#7A24A1]"></span>
										</span>
									</div>
									<p className="md:text-[20px] text-[14px]">
										Allows optimizing work processes and developing any business
										more efficiently. 
									</p>
								</div>
								<div className="flex lg:gap-[4rem] gap-[2rem] mb-10 justify-center items-center">
									<div className="">
										<span className="w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-[#7A24A1] ">
											<span className="rounded-full w-[14px] h-[14px] bg-[#7A24A1]"></span>
										</span>
									</div>
									<p className="md:text-[20px] text-[14px]">
										We also offer a variety of services to help clients succeed
										in their goals , including software development contracts,
										mobile app development and, professional branding, andUI/UX
										designing and on-demand consultancy.
									</p>
								</div>
								<div className="flex lg:gap-[4rem] gap-[2rem] mb-10 justify-center items-center">
									<div className="">
										<span className="w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-[#7A24A1] ">
											<span className="rounded-full w-[14px] h-[14px] bg-[#7A24A1]"></span>
										</span>
									</div>
									<p className="md:text-[20px] text-[14px]">
										Our aim is to achieve increased efficiency and convenience.
										Developing a custom software solution is a dedicated
										development process that results in a personalized software
										application that serves to satisfy the specific needs of a
										particular company.
									</p>
								</div>
								<div className="flex lg:gap-[4rem] gap-[2rem] mb-10 justify-center items-center">
									<div className="">
										<span className="w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-[#7A24A1] ">
											<span className="rounded-full w-[14px] h-[14px] bg-[#7A24A1]"></span>
										</span>
									</div>
									<p className="md:text-[20px] text-[14px]">
										To provide access to the world's information in one click”
										and to create a better everyday life for the many people”
									</p>
								</div>
								<div className="flex lg:gap-[4rem] gap-[2rem] mb-10 justify-center items-center">
									<div className="">
										<span className="w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-[#7A24A1] ">
											<span className="rounded-full w-[14px] h-[14px] bg-[#7A24A1]"></span>
										</span>
									</div>
									<p className="md:text-[20px] text-[14px]">
										We at Lvivity are always ready to become a reliable
										technology partner for you and help you build IT solutions
										at an affordable cost. Such solutions will focus on solving
										your company's unique needs
									</p>
								</div>
								<div className="flex lg:gap-[4rem] gap-[2rem] mb-10 justify-center items-center">
									<div className="">
										<span className="w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-[#7A24A1] ">
											<span className="rounded-full w-[14px] h-[14px] bg-[#7A24A1]"></span>
										</span>
									</div>
									<p className="md:text-[20px] text-[14px]">
										Continuously improve our products and services through
										customer feedback and ongoing research and development.
									</p>
								</div>
							</div>
						</div>
						<div className="w-[60%] h-[1020px] lg:block  bg-[#DBD1ED] flex absolute -z-10 ml-[18rem]  left-32 py-16 rounded-[20px] hidden">
							<div className="mt-[24rem] ">
								<img src="" className="" />
							</div>
						</div>
						<div className="mt-[24rem]  ">
							<img
								src="/images/33.svg"
								className=" w-[50%] lg:block absolute -z-10 top-[20rem] xl:left-[45%] min-[1414px]:left-[58%] lg:left-[58%] hidden"
							/>
						</div>
					</div>
					<div className="w-full lg:mt-[10rem] mt-[7rem] lg:pb-[6rem] pb-[4rem]">
						<div className="flex flex-col justify-center items-center">
							<div className="lg:w-[70%]  w-full px-7">
								<h1 className="xl:text-[48px] text-center lg:text-[40px] text-[35px] pb-4 font-medium text-[#173953]">
									Contact <span className="text-[#FEAA53]">Us</span>
								</h1>
								<p className="text-center md:text-[20px] text-[18px]  text-[#173953] pb-8">
									Have any questions in mind? A comment or suggestions? Simply
									fill in the form below and we’ll get in touch with you as soon
									as possible.
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-[20px] w-full bg-[#483464] py-14 md:px-12 px-6">
						<div className="flex w-full gap-7 mb-7">
							<div class="w-full justify-center items-center px-7 py-4 whitespace-nowrap rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="Name"
								/>
							</div>
							<div class="w-full justify-center items-center px-8 py-4 rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="flex w-full gap-7 mb-7">
							<div class="w-full justify-center items-center px-7 py-4 whitespace-nowrap rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="Phone"
								/>
							</div>
							<div class="w-full justify-center items-center px-8 py-4 rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="State/Region"
								/>
							</div>
						</div>
						<div className="w-full mb-7">
							<div class="w-full justify-center items-center px-8 py-4 rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<textarea
									rows={10}
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none text-white placeholder:text-white"
									placeholder="State/Region"
								/>
							</div>
						</div>
						<div className="flex w-full gap-7 mb-12">
							<div class="w-full justify-center items-center px-7 py-4 whitespace-nowrap rounded-3xl border border-violet-100 border-solid max-md:px-5">
								<select
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									name="cars"
									id="cars">
									<option>Select Category</option>
									<option value="saab">Saab</option>
									<option value="mercedes">Mercedes</option>
									<option value="audi">Audi</option>
								</select>
								{/* <input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="Phone"
								/> */}
							</div>
							<div class="w-full justify-center items-center px-8 py-4 rounded-3xl border-solid max-md:px-5">
								{/* <input
									className="w-full bg-transparent h-full border-none focus:border-none focus:outline-none  text-white placeholder:text-white"
									placeholder="State/Region"
								/> */}
							</div>
						</div>
						<div className="w-full flex justify-center ">
							<button
								// endContent={<img src="/images/Home/3rem.svg" />}
								link
								href="#how-it-works"
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
