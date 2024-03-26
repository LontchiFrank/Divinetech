/** @format */
"use client";
import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import Button from "../components/Buttons/Button";
import VideoCom from "../components/videoCom/videoCom";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import 'swiper/less/free-mode';
// import 'swiper/less/autoplay';
// Import Swiper styles
// import 'swiper/css';

function page() {
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
					<div className=" container lg:flex flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-12 2xl:px-36  xl:px-32 lg:px-20 md:px-12 sm:px-12  w-full justify-center items-center mb-32">
						<div className="w-full lg:w-2/5  flex flex-col justify-center sm:pb-8 md:pb-0 ">
							<div className="md:pb-4 pb-2 z-10">
								<h1 className="font-[700]  text-[2.6rem] xl:text-[3.4rem] lg:text-[2.6rem] sm:text-[2rem] text-gradient xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] sm:leading-[3rem]  pb-5">
									Elevate your business with SaaS services today.
								</h1>
								<p className="text-dark-background font-light xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[16px]">
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
						<div className="w-full lg:w-3/5  lg:flex flex-col justify-center self-center md:mr-[-100px]">
							<img src="/images/7.svg" style={{ paddingTop: "1rem" }} />
						</div>
					</div>
					<div className=" container mx-auto">
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
			<div className="container  md:flex flex-col mx-auto xl:px-32 w-full  pt-32 md:flex-row ">
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
		</DefaultLayout>
	);
}

export default page;
