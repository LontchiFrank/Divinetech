/** @format */
"use client";
import React, { useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaArrowRight, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Paginations from "../../components/Paginations/PaginationCom";
import { projects } from "../../data";
import ProjectCards from "../../components/ProjectCards/ProjectCard";

function Page() {
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
		<div className="">
			<DefaultLayout>
				<div
					className="lg:h-[110%] md:h-[100%] h-[70%]"
					style={{
						background: 'url("/images/38.svg") ',
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						width: "100%",

						top: 0,
						right: 0,
						position: "absolute",
					}}></div>
				<div className="w-full relative">
					<div className="  min-h-[40vh] lg:min-h-[80vh]  ">
						<div className=" container lg:flex flex-col mx-auto  pt-16 md:flex-row sm:flex-col  gap-9 px-8 2xl:px-32  xl:px-32 lg:px-20 md:px-12 sm:px-12  w-full justify-center items-center mb-[10rem]">
							<div className="w-full lg:w-2/5  flex flex-col justify-center  sm:pb-8 md:pb-0 ">
								<div className="md:pb-4 pb-2 z-10 mb-10">
									<h1 className="font-[700] xl:text-[3.23rem] md:text-[2.6rem] text-[2.3rem] sm:text-left text-center text-gradient xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-8  pb-5">
										UI/UX Design
									</h1>
									<div className="w-full flex flex-col justify-center self-center md:mr-[-100px] lg:pt-0 pt-10 lg:hidden">
										<img src="/images/39.svg" style={{ height: "60%" }} />
									</div>
									<p className="text-dark-background font-light xl:text-[17px] lg:text-[18px] md:text-[16px] sm:text-[16px] pt-[2rem]">
										Our team of highly skilled UI/UX designers is passionate
										about creating seamless and engaging interactions that leave
										a lasting impression on your users. We believe that every
										element, from the layout and navigation to the colors and
										typography, should work harmoniously to deliver a delightful
										experience that keeps users coming back for more
									</p>
								</div>
								<button className="px-12 py-4 rounded-full bg-[#7A24A1] text-white w-fit">
									<span className="flex gap-3">
										{" "}
										Request Service{" "}
										<span className="flex items-center ">
											<FaArrowRight />
										</span>
									</span>
								</button>
							</div>
							<div className="w-full lg:w-3/5  lg:flex flex-col justify-center self-center md:mr-[-100px] lg:pt-0 pt-10 hidden">
								<img src="/images/39.svg" style={{ paddingTop: "1rem" }} />
							</div>
						</div>
					</div>
				</div>
				<div className="md:container  lg:mx-auto  md:px-12 px-2 lg:flex flex-col mb-[13rem]">
					<div className="w-full flex justify-center ">
						<div className="w-[90%] relative  flex-none">
							<div className="border-dashed border-t-3 border-r-3 border-[#7A24A1] xl:w-[50%]  md:w-[45%] h-[30%]  absolute -z-10 lg:bottom-[35rem] bottom-[39rem] xl:left-[22rem] left-[20rem] rounded-[20px] md:block hidden "></div>
							<div className="border-dashed border-t-3 ml-20 border-l-3 border-[#7A24A1] xl:w-[50%] md:w-[45%] h-[30%]  absolute bottom-[15rem]  -z-10  left-[16rem] rounded-[20px] md:block hidden"></div>
							<div className="border-dashed border-t-3 ml-20 border-r-3 border-[#7A24A1] xl:w-[50%] md:w-[45%] h-[30%]  absolute -z-10 bottom-[-3rem] left-[12rem] rounded-[20px] md:block hidden"></div>
							<div className="relative w-fit ">
								{/* xl:bottom-[11rem] md:bottom-[16rem] sm:bottom-[11rem] bottom-[12rem]  sm:left-[-2rem] left-[-3rem]  */}
								{/* <div className=" w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff] left-0 mt-[-40px]  rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow"> */}
								<img
									src="/images/40.svg"
									className="w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff] left-0 mt-[-49px] ml-[-28px]  rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow"
								/>
								{/* </div> */}
								<div className=" xl:w-[500px] md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										Creativity and User-Centered Design
									</span>
									<span className="text-[14px] text-[#183953]">
										Our team of skilled UI/UX designers combines creativity and
										user-centered design principles to craft interfaces that are
										both aesthetically pleasing and highly functional. We begin
										by gaining a deep understanding of your target audience,
										their needs, and pain points.
									</span>
								</div>
							</div>

							<div className=" relative w-fit xl:left-[43rem] md:left-[24rem] left-0 top-[4rem]">
								{/* xl:bottom-[11rem] sm:bottom-[12rem]  bottom-[12rem]   right-[-2rem] */}
								<div className=" ">
									<img
										src="/images/40.svg"
										className="w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff]  right-0 mt-[-49px] mr-[-28px]  rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow"
									/>
								</div>
								<div className=" xl:w-[500px] md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										Wireframing and Prototyping
									</span>
									<span className="text-[14px] text-[#183953]">
										We create low-fidelity wireframes and High-fidelity
										prototypes to outline the structure and layout of your
										software application, ensuring optimal user flow and
										intuitive navigation. Through interactive prototypes, we
										simulate the user experience, allowing you to visualize and
										test the interface before development begins.
									</span>
								</div>
							</div>

							<div className=" relative w-fit left-[0rem] top-[10rem]">
								{/* xl:bottom-[13rem] sm:bottom-[14rem] bottom-[14rem]    sm:left-[-2rem] left-[-3rem]  */}
								<div className=" w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff] left-0 mt-[-49px] ml-[-28px] rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow">
									<img src="/images/40.svg" />
								</div>
								<div className=" xl:w-[500px]  md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										Accessible Designs
									</span>
									<span className="text-[14px] text-[#183953]">
										Accessibility is another crucial aspect of our UI/UX Design
										services. We ensure that your software application meets
										accessibility standards, making it usable for individuals
										with disabilities. By adhering to WCAG guidelines and
										incorporating features such as alternative text for images
										and keyboard navigation, we make your SaaS product inclusive
										and accessible to a wider audience.
									</span>
								</div>
							</div>
							<div className=" relative w-fit xl:left-[43rem] md:left-[24rem] left-0 top-[15rem]">
								{/* xl:bottom-[13rem] sm:bottom-[14rem] bottom-[14rem]    right-[-2rem]  */}
								<div className=" w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff] right-0 mt-[-49px] mr-[-28px]  rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow">
									<img src="/images/40.svg" />
								</div>
								<div className=" xl:w-[500px] md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										Mobile Responsive Designs
									</span>
									<span className="text-[14px] text-[#183953]">
										Mobile responsiveness is vital in today's digital landscape.
										Our UI/UX designers optimize your SaaS application for a
										seamless experience across various devices, including
										smartphones and tablets. Whether it's adapting the layout,
										adjusting interactive elements, or optimizing touch
										interactions, we prioritize delivering a consistent user
										experience across all platforms.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full pt-[28rem] flex justify-center items-center">
						<button className="md:px-12 md:py-4 px-7 py-2 rounded-full bg-[#7A24A1] text-white lg:text-[22px] text-[16px] w-fit">
							<span className="flex gap-3">
								{" "}
								Schedule Meeting{" "}
								<span className="flex items-center ">
									<FaArrowRight />
								</span>
							</span>
						</button>
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

					<div className="mt-0">
						<img
							src="/images/42.svg"
							className="absolute left-0 w-full -z-10"
						/>
					</div>
				</div>

				<div className="pb-[35rem] pt-[10rem]  w-full ">
					<h2 className="md:text-[48px] text-[36px] sm:text-[30px] pb-[8rem] text-center font-medium text-[#173953]">
						What Clients <span className="text-[#FEAA53]">Say</span>
					</h2>
					<div className="w-full  flex justify-center items-center">
						<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[56rem] p-4 ">
							<div className="md:w-2/5 relative flex items-center justify-center">
								<img
									className=" w-full rounded-t-lg  md:rounded-none md:rounded-s-lg"
									src={arr.img}
									alt=""
								/>
								<img
									onClick={changeTestimonies}
									src="/images/44.svg"
									className="absolute md:right-0 md:mr-[-40px] md:mb-[14rem]  bottom-0 mb-[-40px] z-10"
								/>
							</div>

							<div className="flex md:w-3/5 flex-col justify-between p-4 leading-normal">
								<div className="px-12 pb-6 md:pt-0 pt-16 flex justify-center items-center">
									<img src="/images/45.svg" />
								</div>
								<p className="mb-3 px-10 font-normal text-[#183953] dark:text-gray-400">
									{arr.description}
								</p>
								<div className="w-full px-12 flex mt-10 justify-center gap-3">
									<img
										className="w-24 h-24 mb-3 rounded-full shadow-lg"
										src="/images/43.svg"
										alt="Bonnie image"
									/>
									<img
										className="w-24 h-24 mb-3 rounded-full shadow-lg"
										src="/images/1.jpg"
										alt="Bonnie image"
									/>
									<img
										className="w-24 h-24 mb-3 rounded-full shadow-lg"
										src="/images/2.jpg"
										alt="Bonnie image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DefaultLayout>
		</div>
	);
}

export default Page;
