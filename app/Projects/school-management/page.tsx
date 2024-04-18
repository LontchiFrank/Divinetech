/** @format */

import React from "react";
import DefaultLayout from "../../Layout/DefaultLayout";

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
					<div className="w-full relative  rounded-[40px] mt-[7rem] bg-[#EEE0F5]">
						<img
							src="/images/17.svg"
							className="absolute top-[0rem] left-0 z-10 w-[45%]"
						/>
						<div className="w-full h-full flex md:flex-row flex-col  justify-center items-center">
							<div className="md:w-1/2 w-full h-full xl:p-14 p-10 flex justify-center items-center">
								<div className="flex flex-col ">
									<h1 className="text-[#7A24A1] xl:text-[48px] text-[38px]  font-semibold">
										School Management System
									</h1>
									<span className="text-[#FEAA53] md:mt-[7rem] mt-[3rem] text-left md:text-[30px] text-[20px] ">
										{" "}
										Web Development
									</span>
									<span>ReactJS,Laravel,Figma</span>
								</div>
							</div>
							<div className="md:w-3/5 w-full h-full flex justify-center items-center">
								<div className="w-full xl:p-20 p-10">
									<img src="/images/61.svg" />
								</div>
							</div>
						</div>
					</div>
					<div className="relative w-full mt-[7rem]">
						<img
							src="/images/40.svg"
							className="w-[80px] h-[80px] p-3 absolute z-10  left-0 mt-[10px] ml-[-28px]  rounded-full flex justify-center items-center "
						/>
						{/* </div> */}
						<div className=" xl:w-full md:w-[400px] w-full shrink flex flex-col py-7 px-12  bg-[#fff]rounded-[20px]  ">
							<span className="pb-2 font-medium text-[30px] text-[#183953]">
								{" "}
								Description
							</span>
							<span className="text-[20px] text-[#183953]">
								The school management System is a web application that allows
								schools to manage their staff, students, lessons and activities
								in the school. Our School management system is applicable to all
								schools, ranging from nursery,primary , secondary and other
								higher learning institutions.
							</span>
						</div>

						<div className="w-full flex justify-center mt-[10rem]">
							<img src="/images/62.svg" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full xl:block hidden -z-10 ">
				<img
					src="/images/26.svg"
					className="absolute top-[60rem] right-0 -z-10 mt-[18rem]"
				/>
			</div>
		</DefaultLayout>
	);
}

export default page;
