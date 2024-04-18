/** @format */
"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import DefaultLayout from "../Layout/DefaultLayout";
import Paginations from "../components/Paginations/PaginationCom";
import { projects } from "../data";
import ProjectCards from "../components/ProjectCards/ProjectCard";
import { FaArrowRight } from "react-icons/fa";

function page() {
	const [tests, setTests] = useState([
		{
			name: "Frank Brown",
			description:
				"SaaSSimplified has one of the best IT consulting staffs They helped my business survive, especially when I thought all hopes has been lost. Just want to say a big THANK YOU to SaaSSimplified",
			img: "/images/2.jpg",
		},
		{
			name: "Alice Wells",
			description:
				"SaaSSimplified has one of the best IT consulting staffs They helped my business survive, especially when I thought all hopes has been lost. Just want to say a big THANK YOU to SaaSSimplified",
			img: "/images/1.jpg",
		},
		{
			name: "Lucas James",
			description:
				"SaaSSimplified has one of the best IT consulting staffs They helped my business survive, especially when I thought all hopes has been lost. Just want to say a big THANK YOU to SaaSSimplified",
			img: "/images/43.svg",
		},
	]);

	const [testimony, setTestimony] = useState(0);
	const lengthArr = projects.length;
	console.log(lengthArr);

	const changeTestimonies = () => {
		setTestimony((prevIndex) =>
			prevIndex === tests.length - 1 ? 0 : prevIndex + 1
		);
	};
	const arr = tests[testimony];

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
			<div className="  min-h-[60vh] lg:min-h-[90vh]  ">
				<div className=" container lg:flex-col flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-8 2xl:px-36  xl:px-32 lg:px-20 md:px-4 sm:px-12  w-full justify-center items-center mb-[4rem]">
					<div className="w-full lg:w-full  flex flex-col justify-center items-center sm:pb-8 md:pb-0 ">
						<div className="md:w-2/5 w-3/5 md:pb-4 pb-2 z-10">
							<h1 className="font-[700]  text-[2rem] xl:text-[72px] lg:text-[2.6rem] sm:text-center textGradientAbout xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-8  pb-5">
								Projects
							</h1>
						</div>
						<p className="md:w-[70%] w-full text-center xl:text-[22px]  text-[#183953]">
							Welcome to Saas Simplify , based in Cameroon, where our dedicated
							professionals excel in Design, Software Development, IT
							Consultancy, Mobile App Development. Discover excellence in
							technology with Saas Simplify.
						</p>
						<div className="w-full xl:block hidden -z-10 mt-[13rem]">
							<img
								src="/images/26.svg"
								className="absolute top-[60rem] right-0 -z-10"
							/>
						</div>
					</div>
				</div>
				<div className="container mx-auto md:px-0 px-4 mb-[10rem]">
					<div className="w-full flex justify-center">
						<div className="w-[95%]">
							<div className="w-full">
								<Sidebar>
									<div className="w-full pt-5 px-7">
										<div className="w-full flex lg:flex-row flex-col justify-between mb-3">
											<span className="md:text-[26px] text-[20px] sm:text-[20px] text-center font-medium text-[#173953] lg:mb-0 md:mb-5 mb-0">
												Web Development{" "}
												<span className="text-[#FEAA53]">Projects</span>{" "}
											</span>
											<form className="lg:max-w-md    flex lg:justify-end justify-center">
												<div className="relative w-[300px]">
													{/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div> */}
													<input
														type="search"
														id="default-search"
														placeholder="Search"
														className="block w-full p-4 ps-10 text-sm text-gray-900  border-1 border-stroke border-[#173953] rounded-[20px] bg-white focus:ring-none focus:border-none placeholder:text-[#FEAA53]"
														required
													/>
													<button
														type="submit"
														className="w-[40px] h-[40px] text-white absolute end-2.5 bottom-1.5 bg-[#7A24A1] hover:bg-[#9a42c3] focus:ring-4 focus:outline-none focus:ring-[#7A24A1] font-medium  text-sm px-4 py-2 rounded-full">
														<FaArrowRight />
													</button>
												</div>
											</form>
										</div>
										<div className="  flex justify-center flex-wrap gap-3">
											{projects.map((el: any) => (
												<div key={`${el.id}+${el.img}`} className=" shrink-0">
													<ProjectCards el={el} />
												</div>
											))}
										</div>
										<div className="w-full flex justify-center items-center">
											<Paginations />
										</div>
									</div>
								</Sidebar>
							</div>
						</div>
					</div>

					{/* <div className="mt-0">
						<img
							src="/images/42.svg"
							className="absolute left-0 w-full -z-10"
						/>
					</div> */}
				</div>
			</div>
		</DefaultLayout>
	);
}

export default page;
