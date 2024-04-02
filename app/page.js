/** @format */
"use client";
import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import VideoCom from "./components/videoCom/videoCom";
import { FaArrowRight, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import "./globals.css";

function App() {
	const ProfData = [
		{
			img: "/images/8.svg",
			title: "Michael Blaise",
		},
		{
			img: "/images/10.svg",
			title: "Kim Park",
		},
		{
			img: "/images/11.svg",
			title: "Angela Watte",
		},
		{
			img: "/images/8.svg",
			title: "Michael Blaise",
		},
		{
			img: "/images/10.svg",
			title: "Kim Park",
		},
		{
			img: "/images/11.svg",
			title: "Angela Watte",
		},
	];
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
			<div className="w-full relative">
				{/* container flex min-h-[60vh] lg:min-h-[90vh] mx-auto */}

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
								link
								href="#how-it-works"
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
					<div className=" container mx-auto mt-[15rem]">
						<Swiper
							loop
							autoplay
							// className="flex max-w-[90%] lg:max-w-[90%]"
							direction="horizontal"
							spaceBetween={20}
							slidesPerView={4}
							breakpoints={{
								340: {
									slidesPerView: 2,
								},
								800: {
									slidesPerView: 3,
								},
								900: {
									slidesPerView: 4,
								},
								1100: {
									slidesPerView: 4,
								},
							}}
							freeMode={true}
							// pagination={{
							// 	clickable: true,
							// }}
							modules={[Autoplay, FreeMode]}
							// className=""
						>
							{ProfData.map((item) => (
								<SwiperSlide key={item.title}>
									{" "}
									<VideoCom item={item} />
								</SwiperSlide>
							))}
						</Swiper>

						{/* <VideoCom />
				<VideoCom />
				<VideoCom />
				<VideoCom /> */}
					</div>
				</div>
			</div>
			<div className="mt-44">
				<img src="/images/12.svg" className="absolute left-0 w-full -z-10" />
			</div>
			<div className="container  md:flex flex-col mx-auto xl:px-32 w-full  pt-24 md:flex-row mt-[0rem]">
				<div className="md:w-1/2 w-full flex  justify-center items-center">
					<img src="/images/9.svg" />
				</div>
				<div className="md:w-1/2 w-full  flex p-12 pt-32 flex-col ">
					<h2 className="md:text-[48px] text-[40px] sm:text-[30px] pb-4 text-left font-medium text-[#173953]">
						SaaS<span className="text-[#FEAA53]">GPT</span>
					</h2>
					<p className="text-[20px] text-[#173953] pb-8">
						With our custom SaaSGPT chatbot, life only gets better and easier.
					</p>
					<button
						// endContent={<img src="/images/Home/3rem.svg" />}
						link
						href="#how-it-works"
						className="px-12 py-4 rounded-full bg-[#7A24A1] text-white w-fit">
						<span className="flex gap-3">
							{" "}
							Try it Now{" "}
							<span className="flex items-center ">
								<FaArrowRight />
							</span>
						</span>
					</button>
				</div>
			</div>

			<div className="w-full lg:mt-[18rem] mt-[7rem] lg:pb-[14rem] pb-[6rem]">
				<div className="flex flex-col justify-center items-center">
					<div className="xl:w-[45%] lg:w-[50%] w-full px-7">
						<h1 className="xl:text-[48px] text-center lg:text-[40px] text-[35px] pb-4 font-medium text-[#173953]">
							Productivity <span className="text-[#FEAA53]">Services</span>
						</h1>
						<p className="text-center md:text-[20px] text-[18px]  text-[#173953] pb-8">
							Looking for any Tech-related services, we got you totally covered
							on that. With our innovative SaaS (Software-as-a-Services)
							offerings, we unleash your business potential in this digital era.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full relative lg:pb-[16rem] pb-[6rem]">
				<div className="w-full flex-col flex justify-center relative items-center">
					<div className="xl:w-[40%] w-3/5 lg:h-[561px] h-[320px] rounded-[20px] frames">
						<div className="flex justify-between">
							<div className="absolute z-10 top-0 xl:left-[17rem] left-[2rem]">
								<img className="lg:w-[520px] w-[310px] " src="/images/15.svg" />
							</div>
							<div className="absolute z-10 lg:top-[6.5rem] top-[3rem] xl:right-[14.5rem] right-[5rem]">
								<img className="lg:w-[520px] w-[310px]" src="/images/16.svg" />
							</div>
						</div>
					</div>
					<div className="w-full flex justify-center absolute z-10 lg:top-[32rem] top-[18rem]">
						<button
							// endContent={<img src="/images/Home/3rem.svg" />}
							link
							href="#how-it-works"
							className="px-12 py-6 rounded-full bg-[#7A24A1] text-white w-fit">
							<span className="flex gap-3">
								{" "}
								Get Started{" "}
								<span className="flex items-center ">
									<FaArrowRight />
								</span>
							</span>
						</button>
					</div>
				</div>
				<div className="mt-0">
					<img src="/images/17.svg" className="absolute left-0 w-full -z-10" />
				</div>
			</div>

			<div className="w-full lg:mb-[0rem] pb-[6rem]">
				<div className="flex flex-col justify-center items-center">
					<div className="xl:w-[70%] lg:w-[80%] w-full px-7 mt-[9rem]">
						<h1 className="xl:text-[48px] text-center flex flex-col md:text-[40px] text-[35px] lg:pb-16 pb-10 font-medium ">
							<span className="text-[#FEAA53]">Share your projects</span>
							<span className="text-[#173953]">with SaaSSimplified</span>
						</h1>
						<p className="text-center md:text-[20px] text-[18px]  text-[#173953] pb-[8rem]">
							Be ahead of the competition with our comprehensive suite of SaaS
							solutions tailored to meet your business expectations. From robust
							project management tools to advanced customer relationship
							management systems, we have you covered every step of the way.
						</p>
						<div className="w-full flex justify-center items-center">
							<button
								// endContent={<img src="/images/Home/3rem.svg" />}
								link
								href="#how-it-works"
								className="px-14 py-6 rounded-full bg-[#7A24A1] text-white w-fit">
								<span className="flex gap-3">
									{" "}
									Get To Us{" "}
									<span className="flex items-center ">
										<FaArrowRight />
									</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center items-center">
				<img src="/images/18.svg" />
			</div>
			<div className="w-full lg:mb-[0rem] pb-[6rem]">
				<div className="flex flex-col justify-center items-center">
					<div className="w-[100%] container mx-auto xl:px-28 px-12 mt-[9rem]">
						<h1 className="md:text-[48px] text-center flex flex-col text-[40px] sm:text-[30px] pb-4 font-medium ">
							<span className="text-[#FEAA53]">Benefits</span>
							{/* <span className="text-[#173953]">with SaaSSimplified</span> */}
						</h1>
						<div className="w-full flex justify-center items-center">
							<p className="xl:w-[40%] lg:w-[60%] w-[100%] text-center md:text-[20px] text-[18px]  text-[#173953] pb-[8rem]">
								With SaaSSimplified, forget the hassle of expensive and
								time-consuming maintenance.
							</p>
						</div>
						<div className="w-full flex lg:flex-row sm:flex-col flex-col gap-5 justify-center items-center">
							<div className="lg:w-1/3 w-full h-[400px]  flex flex-col   rounded-[20px] benefits">
								<div className="w-full pt-9 flex justify-center ">
									<div className="w-[25%] py-7 bg-[#ffffff4a]  rounded-[20px] flex justify-center items-center">
										<div className="w-full flex justify-center items-center ">
											<img
												src="/images/21.svg"
												style={{ width: "50%", height: "70%" }}
											/>
										</div>
									</div>
								</div>
								<div className="flex flex-col justify-center">
									<span className="text-center font-bold text-[20px] text-white pt-16 pb-5">
										Reliable Security
									</span>
									<span className="text-center px-9 text-white ">
										Our platform provides you with a variety of resources to
										help you learn the skills you need to succeed in your
										interview.
									</span>
								</div>
							</div>
							<div className="lg:w-1/3 w-full h-[420px]  flex flex-col   rounded-[20px] benefits">
								<div className="w-full pt-9 flex justify-center ">
									<div className="w-[25%] py-7 bg-[#ffffff4a]  rounded-[20px] flex justify-center items-center">
										<div className="w-full flex justify-center items-center ">
											<img
												src="/images/22.svg"
												style={{ width: "50%", height: "70%" }}
											/>
										</div>
									</div>
								</div>
								<div className="flex flex-col justify-center">
									<span className="text-center font-bold text-[20px] text-white pt-16 pb-5">
										Cost Effectiveness
									</span>
									<span className="text-center px-9 text-white ">
										SaaSSimplified offers quality services at vary affordable
										prices.
									</span>
								</div>
							</div>
							<div className="lg:w-1/3 w-full h-[400px]  flex flex-col   rounded-[20px] benefits">
								<div className="w-full pt-9 flex justify-center ">
									<div className="w-[25%] py-7 bg-[#ffffff4a]  rounded-[20px] flex justify-center items-center">
										<div className="w-full flex justify-center items-center ">
											<img
												src="/images/23.svg"
												style={{ width: "50%", height: "70%" }}
											/>
										</div>
									</div>
								</div>
								<div className="flex flex-col justify-center">
									<span className="text-center font-bold text-[20px] text-white pt-16 pb-5">
										Drive Productivity
									</span>
									<span className="text-center px-9 text-white ">
										With SaaSSimplified, productivity is been driven from
										anywhere at anytime.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full relative mb-[20rem]">
				<div className="hidden lg:flex justify-end absolute bottom-[24rem] right-0">
					<img src="/images/24.svg" className="" />
				</div>
				<div className="w-full mt-[15rem] container mx-auto xl:px-28 px-10 flex lg:flex-row flex-col gap-6">
					<div className="lg:pb-0 pb-12">
						<img src="/images/25.svg" className="" />
					</div>
					<div className="lg:w-[45%] w-full px-7">
						<div className="flex flex-col pb-12">
							<h2 className="text-[#173953] font-medium xl:text-[48px] text-[30px]">
								What Our
							</h2>
							<span className="font-medium xl:text-[48px] text-[30px] text-[#FEAA53]">
								client says
							</span>
						</div>
						<p className="text-left lg:text-[24px] text-[18px] text-[#173953] lg:pb-24 pb-16">
							"SaaSSimplified is a game-changer in the world of business
							software . As a business owner, I have always been a look-out for
							efficient solutions in my operations, and SaaSSimplified exceeded
							my expectations in every way. "
						</p>
						<div className="flex flex-col">
							<span className="text-[#FEAA53] font-bold text-[18px]">
								Mary Lynn
							</span>
							<small className="text-[#FEAA53] text-[16px]">
								Business Owner
							</small>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full container mx-auto lg:px-28 px-10 ">
				<div className="flex flex-col mb-10">
					<h2 className="lg:text-[48px] text-[30px] font-medium text-[#173953]">
						Frequently
					</h2>
					<h2 className="text-[#FEAA53] lg:text-[48px] font-medium text-[30px]">
						Asked Questions
					</h2>
				</div>
				<div className="w-full mb-48">
					<div className="border-b-1 border-[#173953] flex justify-between py-3">
						<span className="text-[18px] text-[#173953]">
							What specific services does SaaSSimplied offers?
						</span>
						<FaChevronDown className="text-[#173953]" />
					</div>
					<div className="border-b-1 border-[#173953] flex justify-between pt-10 pb-3">
						<span className="text-[18px] text-[#173953]">
							Are there any prerequisites or prior knowledge required to benefit
							from SaaSSimplified?
						</span>
						<FaChevronDown className="text-[#173953]" />
					</div>
					<div className="border-b-1 border-[#173953] flex justify-between pt-10 pb-3">
						<span className="text-[18px] text-[#173953]">
							Is SaaSSimplied suitable for beginners or more advanced job
							seekers?
						</span>
						<FaChevronDown className="text-[#173953]" />
					</div>
					<div className="border-b-1 border-[#173953] flex justify-between pt-10 pb-3">
						<span className="text-[18px] text-[#173953]">
							Can I access SaaSSimplified services on anywhere in the world?
						</span>
						<FaChevronDown className="text-[#173953]" />
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default App;
