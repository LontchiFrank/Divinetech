/** @format */
"use client";
import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import Article from "../components/Article/Article";

import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	EffectFade,
	Autoplay,
	FreeMode,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "./styles.css";

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
			<div className="  min-h-[60vh] lg:min-h-[90vh]">
				<div className=" container lg:flex-col flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-8 2xl:px-36  xl:px-32 lg:px-20 md:px-4 sm:px-12  w-full justify-center items-center mb-[4rem]">
					<div className="w-full lg:w-full  flex flex-col justify-start sm:pb-8 md:pb-0 ">
						<div className="xl:w-[40%] md:w-[60%] w-full md:pb-4 pb-2 z-10 flex justify-start">
							<h1 className="font-[700]  text-[2rem] xl:text-[58px] lg:text-[2.6rem] md:text-left text-center textGradientAbout xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-8  pb-5">
								New Articles Every Week
							</h1>
						</div>
						<p className="md:w-[70%] w-full text-left xl:text-[18px]">
							Are you looking for any SaaS related tips or onboarding resources
							to help your customers get up to speed with Software quickly, then
							you’re in the right place.
						</p>
					</div>
					<div className="w-full relative  rounded-[40px] mt-[5rem] bg-[#EEE0F5]  testimonials">
						<img
							src="/images/17.svg"
							className="absolute top-[0rem] left-0 z-10 w-[60%]"
						/>
						<div className="w-full flex flex-col md:p-[4rem] p-[2rem]">
							<div className="w-full border-b-2 border-stroke border-[#7A24A1] flex justify-between  pb-0">
								<span>
									{" "}
									<img src="/images/logo.svg" alt="" />
								</span>
								<span className="md:text-[16px] text-[13px] flex items-center font-medium">
									Elevating Your Ideas
								</span>
							</div>
							<div className="w-full ">
								<Swiper
									effect="fade"
									modules={[
										Navigation,
										Pagination,
										EffectFade,
										Autoplay,
										FreeMode,
									]}
									navigation={false}
									fadeEffect={{ crossFade: true }}
									// loop={true}
									autoplay={{
										delay: 1000,
										disableOnInteraction: false,
									}}
									spaceBetween={50}
									pagination={{
										clickable: true,
										bulletClass: "swiper-pagination-bullet",
										bulletActiveClass: "swiper-pagination-bullet-active",
									}}
									freeMode={true}
									className="flex mySwiper">
									<SwiperSlide>
										<div className="w-full flex md:flex-row flex-col  justify-center items-center">
											<div className="md:w-1/2 w-full h-full xl:p-[0rem] md:p-10 py-10 flex justify-center items-center">
												<div className="flex flex-col ">
													<h1 className="text-[#7A24A1] xl:text-[53px] md:text-[38px] text-[30px] font-semibold">
														The Importance Of User Experience Design In SaaS
														Applications
													</h1>
												</div>
											</div>
											<div className="md:w-3/5 w-full h-full flex justify-center items-center">
												<div className="w-full xl:py-[4rem] flex justify-end py-10">
													<img src="/images/71.svg" />
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="w-full h-full flex md:flex-row flex-col  justify-center items-center">
											<div className="md:w-1/2 w-full h-full xl:p-[0rem] md:p-10 py-10 flex justify-center items-center">
												<div className="flex flex-col ">
													<h1 className="text-[#7A24A1] xl:text-[53px] md:text-[38px] text-[30px] font-semibold">
														The Default Of User Experience Design In SaaS web
														Application
													</h1>
												</div>
											</div>
											<div className="md:w-3/5 w-full h-full flex justify-center items-center">
												<div className="w-full xl:py-[4rem] flex justify-end py-10">
													<img src="/images/71.svg" />
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="w-full h-full flex md:flex-row flex-col  justify-center items-center">
											<div className="md:w-1/2 w-full h-full xl:p-[0rem] md:p-10 py-10 flex justify-center items-center">
												<div className="flex flex-col ">
													<h1 className="text-[#7A24A1] xl:text-[53px] md:text-[38px] text-[30px] font-semibold">
														The Benefits Of User Experience Design In SaaS
														Mobile Applications
													</h1>
												</div>
											</div>
											<div className="md:w-3/5 w-full h-full flex justify-center items-center">
												<div className="w-full xl:py-[4rem] flex justify-end py-10">
													<img src="/images/71.svg" />
												</div>
											</div>
										</div>
										{/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
					<div className="w-full mt-[10rem]">
						<h2 className="md:text-[48px] text-[36px] sm:text-[30px] pb-[8rem] text-center font-medium text-[#173953]">
							Recent <span className="text-[#FEAA53]">Articles</span>
						</h2>
						<div className="w-full flex flex-wrap">
							<Article />
							<Article />
							<Article />
							<Article />
							<Article />
							<Article />
							<Article />
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default page;
