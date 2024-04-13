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
						<div className=" container lg:flex flex-col mx-auto  pt-16 md:flex-row sm:flex-col  gap-9 px-8 2xl:px-32  xl:px-32 lg:px-4 md:px-12 sm:px-12  w-full justify-center items-center mb-[10rem]">
							<div className="w-full lg:w-2/5  flex flex-col justify-center  sm:pb-8 md:pb-0 ">
								<div className="md:pb-4 pb-2 z-10 mb-10">
									<h1 className="font-[700]   xl:text-[3.03rem] md:text-[2.6rem] text-[2.3rem] sm:text-left text-center text-gradient xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-10  pb-5">
										IT Consultation
									</h1>
									<div className="w-full flex flex-col justify-center self-center md:mr-[-100px] lg:pt-0 pt-10 lg:hidden">
										<img src="/images/55.svg" style={{ height: "60%" }} />
									</div>
									<p className="text-dark-background font-light xl:text-[17px] lg:text-[15px] md:text-[16px] sm:text-[16px] pt-[2rem]">
										Our IT consultation services are designed to empower your
										company with the right technology infrastructure, security
										measures, and strategic guidance. By partnering with us, you
										can optimize your IT operations, enhance data security,
										leverage emerging technologies, and stay ahead in the
										competitive SaaS landscape. Let us be your trusted IT
										advisor, helping you navigate the complexities of technology
										and driving your SaaS business towards success.
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
								<img src="/images/55.svg" style={{ paddingTop: "1rem" }} />
							</div>
						</div>
					</div>
				</div>
				<div className="md:container  lg:mx-auto  md:px-12 px-2 lg:flex flex-col mb-[13rem]">
					<div className="w-full flex justify-center ">
						<div className="w-[90%] relative  flex-none">
							<div className="border-dashed border-t-3 border-r-3 border-[#7A24A1] xl:w-[50%]  md:w-[45%] h-[30%]  absolute -z-10 xl:bottom-[22rem] lg:bottom-[28rem] bottom-[30rem] xl:left-[22rem] lg:left-[16rem] left-[20rem] rounded-[20px] md:block hidden "></div>
							<div className="border-dashed border-t-3 ml-20 border-l-3 border-[#7A24A1] xl:w-[50%] md:w-[45%] h-[30%]  absolute xl:bottom-[3rem]  xl:eft-[16rem] lg:bottom-[7rem] lg:left-[8rem] bottom-[5rem] left-[6rem] -z-10  rounded-[20px] md:block hidden"></div>
							{/* <div className="border-dashed border-t-3 ml-20 border-r-3 border-[#7A24A1] xl:w-[50%] md:w-[45%] h-[30%]  absolute -z-10 bottom-[-3rem] left-[12rem] rounded-[20px] md:block hidden"></div> */}
							<div className="relative w-fit ">
								<img
									src="/images/40.svg"
									className="w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff] left-0 mt-[-49px] ml-[-28px]  rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow"
								/>
								{/* </div> */}
								<div className=" xl:w-[500px] md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										Data Management and Analytics
									</span>
									<span className="text-[14px] text-[#183953]">
										We work closely with you to define the scope of the project,
										identify key features and functionalities, and create a
										user-centric mobile app design. Our developers select the
										most suitable technologies and frameworks to build native or
										cross-platform applications that deliver optimal performance
										and user experience.
									</span>
								</div>
							</div>

							<div className=" relative w-fit xl:left-[43rem] md:left-[24rem] left-0 top-[4rem]">
								<div className=" ">
									<img
										src="/images/40.svg"
										className="w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff]  right-0 mt-[-49px] mr-[-28px]  rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow"
									/>
								</div>
								<div className=" xl:w-[500px] md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										Infrastructure Optimization
									</span>
									<span className="text-[14px] text-[#183953]">
										We evaluate your current IT infrastructure and recommend
										solutions to streamline operations, improve scalability, and
										ensure data security. Whether it's optimizing your cloud
										infrastructure, implementing robust data backup and recovery
										systems, or enhancing network performance, we provide
										tailored recommendations and assist in their implementation.
									</span>
								</div>
							</div>

							<div className=" relative w-fit left-[0rem] top-[10rem]">
								<div className=" w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff] left-0 mt-[-49px] ml-[-28px] rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow">
									<img src="/images/40.svg" />
								</div>
								<div className=" xl:w-[500px]  md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										Guidance on Cybersecurity Strategies
									</span>
									<span className="text-[14px] text-[#183953]">
										In addition, we provide guidance on cybersecurity strategies
										and best practices to protect your SaaS company from
										potential threats and vulnerabilities. Our consultants
										assess your current security measures, identify potential
										risks, and implement robust security protocols to safeguard
										your sensitive data and maintain compliance with industry
										regulations.
									</span>
								</div>
							</div>
							{/* <div className=" relative w-fit xl:left-[43rem] md:left-[24rem] left-0 top-[15rem]">
								<div className=" w-[80px] h-[80px] p-3 absolute z-10 bg-[#fff] right-0 mt-[-49px] mr-[-28px]  rounded-full border-[#7A24A1] border border-stroke flex justify-center items-center purpleShadow">
									<img src="/images/40.svg" />
								</div>
								<div className=" xl:w-[500px] md:w-[400px] w-full shrink flex flex-col py-7 px-10 border bg-[#fff] border-stroke rounded-[20px] border-[#7A24A1] purpleShadow">
									<span className="pb-2 font-medium text-[20px] text-[#183953]">
										{" "}
										User Experience
									</span>
									<span className="text-[14px] text-[#183953]">
										We create intuitive and visually appealing interfaces that
										provide a seamless and engaging experience for your mobile
										users. Through careful consideration of information
										architecture, navigation, and interaction design, we ensure
										that users can easily navigate through your mobile app and
										accomplish their tasks with efficiency and delight.
									</span>
								</div>
							</div> */}
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
				<div className="w-full container mx-auto flex flex-col justify-center">
					<h2 className="md:text-[48px] text-[36px] sm:text-[30px] pb-[8rem] text-center font-medium text-[#173953]">
						Service <span className="text-[#FEAA53]">Statistics</span>
					</h2>
					<div className="w-full flex justify-center items-center">
						<div className="w-[70%] rounded-[43px] ">
							<img alt="statistics" src="/images/53.svg" className="w-full" />
						</div>
					</div>
				</div>
				<div className="mb-[45rem] pt-[10rem]  w-full ">
					<div className="">
						<img
							src="/images/42.svg"
							className="absolute mt-[-35rem] left-0 w-full -z-10"
						/>
					</div>
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
