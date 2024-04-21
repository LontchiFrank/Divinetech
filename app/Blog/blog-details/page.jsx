/** @format */

"use client";
import React, { useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import { TbCalendarCheck } from "react-icons/tb";
import Article from "../../components/Article/Article";

function BlogDetails() {
	const [toggle, setToggle] = useState({
		details: "details",
		article: "article",
	});
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
			<div className=" min-h-[60vh] lg:min-h-[90vh]">
				<div className=" container lg:flex-col flex-col mx-auto  pt-16 md:flex-row sm:flex-col  px-8  xl:px-12 lg:px-12 md:px-4 sm:px-12  w-full justify-center items-center mb-[4rem]">
					<div className="w-full flex gap-[4rem]">
						<div className="w-3/5 flex flex-col">
							<div className="w-full relative  rounded-[40px]  bg-[#EEE0F5]  testimonials">
								<img
									src="/images/17.svg"
									className="absolute top-[0rem] left-0 z-10 w-[60%]"
								/>
								<div className="w-full flex flex-col p-[4rem]">
									<div className="w-full border-b-2 border-stroke border-[#7A24A1] flex justify-between pb-3">
										<span>
											{" "}
											<img src="/images/logo.svg" alt="" />
										</span>
										<span className="font-medium">
											Elevating Your <br />
											<span className="font-normal">Ideas</span>
										</span>
									</div>
									<div className="w-full h-full flex md:flex-row flex-col  justify-center items-center">
										<div className="md:w-1/2 w-full h-full xl:p-[0rem] md:p-10 py-10 flex justify-center items-center">
											<div className="flex flex-col ">
												<h1 className="text-[#7A24A1] md:text-[40px] text-[20px] font-semibold">
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
								</div>
							</div>
							<div className="mt-[4rem]">
								<span className="text-[40px] text-[#FEAA53]">
									The Importance Of User Experience Design In SaaS Applications
								</span>
							</div>
							<footer class="flex items-center border-t-2 border-stroke border-[#909090] leading-none py-2 md:py-4 mt-3">
								<a
									class="flex items-center no-underline hover:underline text-black"
									href="/Blog/blog-details">
									<img
										alt="Placeholder"
										class="block rounded-full border-3 border-stroke border-[#FEAA53]"
										src="https://picsum.photos/32/32/?random"
									/>
									<p class="ml-2 text-sm">ADMIN</p>
									<span className="ml-5 rounded-full block w-[15px] h-[15px] bg-[#FEAA53]"></span>
								</a>
								<a
									class="no-underline flex gap-3 text-black hover:text-red-dark ml-4"
									href="/Blog/blog-details">
									<span>
										<TbCalendarCheck className="text-[20px] text-[#FEAA53]" />
									</span>
									<span class="block text-[16px] flex items-center">
										12/04/2024
									</span>
									<i class="fa fa-heart"></i>
								</a>
							</footer>
							<div className="w-full">
								<span className="w-full text ">
									In today's digital landscape, where Software as a Service
									(SaaS) applications have become omnipresent, user experience
									(UX) design plays a critical role in determining the success
									of these platforms. SaaS companies understand that providing a
									seamless, intuitive, and enjoyable user experience is not
									merely a luxury but a necessity. In this article, we delve
									into the importance of user experience design in SaaS
									applications and how it influences customer satisfaction,
									adoption rates, and overall business success.
								</span>
								<div className="w-full mt-[2rem]">
									<img
										alt="Placeholder"
										class="block h-auto w-full rounded-lg"
										src="https://picsum.photos/600/400/?random"
									/>
								</div>
								<span>
									<ul className="list-decimal mt-[2rem] px-7 pb-[3rem] border-b-2 border-stroke border-[#909090]">
										<li className="font-semibold text-[22px] ">
											Enhancing User Engagement:
										</li>
										<div className="pb-[1rem]">
											User experience design focuses on creating interfaces that
											are visually appealing, easy to navigate, and intuitive to
											use. By employing well-designed layouts, clear navigation
											structures, and consistent branding, SaaS applications can
											enhance user engagement. When users enjoy interacting with
											the software, they are more likely to explore its
											features, spend more time on the platform, and become
											loyal customers.
										</div>
										<li className="font-semibold text-[22px]">
											Improving User Productivity:
										</li>
										<div className="pb-[1rem]">
											Efficient user experience design can significantly impact
											user productivity. By streamlining workflows, reducing
											unnecessary steps, and providing intuitive interfaces,
											SaaS applications enable users to accomplish tasks more
											quickly and effectively. Well-designed interfaces guide
											users through complex processes, minimizing the learning
											curve and maximizing productivity. This, in turn, leads to
											increased user satisfaction and higher adoption rates.
										</div>
										<li className="font-semibold text-[22px]">
											Driving Customer Satisfaction and Retention:
										</li>
										<div className="pb-[1rem]">
											User experience directly impacts customer satisfaction and
											long-term retention rates. When users have positive
											experiences with a SaaS application, they are more likely
											to continue using it, recommend it to others, and remain
											loyal customers. Conversely, a poor user experience can
											result in frustration, dissatisfaction, and churn. By
											investing in user experience design, SaaS companies can
											build strong relationships with their customers, enhance
											brand loyalty, and gain a competitive advantage.
										</div>
									</ul>
								</span>
								<div className="w-full p-[3rem] rounded-lg bg-[#483464]">
									<div className="text-[#FEAA53] mb-[1rem]">Comments</div>
									<div className="border-2 border-stroke rounded-[16px]">
										<textarea
											rows={10}
											className=" p-6 w-full bg-transparent outline-none focus:border-none focus:ring-0"
											placeholder="What do you think about this post?..."
										/>
										<div className="w-full bg-[#183953] rounded-b-[16px] p-[1rem] flex justify-end">
											<button
												// href="#how-it-works"
												className="px-10 py-4 rounded-full bg-[#7A24A1] text-white w-fit">
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
								</div>
							</div>
						</div>
						<div className="w-2/5 z-10">
							<div className="bgSecond py-[3rem] rounded-[20px]">
								<div className="text-[#FEAA53] text-[24px] text-center">
									<span className="mb-[2rem]">Related Articles</span>
									<div className="w-full">
										<Article screen={toggle} />
										<Article screen={toggle} />
										<Article screen={toggle} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default BlogDetails;
