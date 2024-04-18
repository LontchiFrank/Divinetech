/** @format */

import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import ExpertCards from "../components/ExpertCards/page";
import { experts } from "../data";

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
			<div className="  min-h-[60vh] lg:min-h-[90vh]  ">
				<div className=" container lg:flex-col flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-8 2xl:px-36  xl:px-32 lg:px-20 md:px-4 sm:px-12  w-full justify-center items-center mb-[4rem]">
					<div className="w-full lg:w-full  flex flex-col justify-center items-center sm:pb-8 md:pb-0 ">
						<div className="w-full md:pb-4 pb-2 mt-[4rem] z-10">
							<h1 className="font-[700]  text-[2rem] xl:text-[72px] lg:text-[2.6rem] sm:text-center textGradientAbout xl:leading-[4.5rem] lg:leading-[3.5rem] md:leading-[2rem] leading-8  pb-5">
								Our Exceptional Team
							</h1>
						</div>
						<p className="md:w-[70%] w-full text-center xl:text-[22px] text-[#183953]">
							Meet our exceptional, talented and dedicated team of professionals
							who are passionate about bringing unique SaaS solutions. Our team
							brings a diverse range of expertise and experience.
						</p>
						<div className="w-full xl:block hidden -z-10 mt-[13rem]">
							<img
								src="/images/26.svg"
								className="absolute top-[60rem] right-0 -z-10"
							/>
						</div>
					</div>
					<div className="w-full mt-[3rem] mb-[10rem]">
						<div className=" flex justify-center">
							<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">
								{experts.map((el) => (
									<ExpertCards el={el} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default page;
