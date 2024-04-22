/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import {
	FaHeadset,
	FaMoneyBillWave,
	FaMoneyCheck,
	FaFileInvoiceDollar,
	FaFileInvoice,
	FaChevronDown,
} from "react-icons/fa6";

const Sidebar = ({ children }) => {
	const location = useRouter;
	const { pathname } = location;

	const trigger = useRef();
	const sidebar = useRef();

	return (
		<div className="w-full flex">
			<aside
				className={` w-[20%] rounded-[10px] xl:block hidden absolute left-0 top-0 z-9999 flex w-72.5 flex-col overflow-y-hidden sidebarGradient duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 p-4`}
				style={{ zIndex: "0" }}>
				<div className="flex items-center justify-center gap-2 px-3 py-5.5  lg:py-6.5">
					<span className="text-center xl:text-[24px] lg:text-[18px] xl:mx-4 text-white mb-3">
						Frameworks
					</span>
				</div>
				<div className="bg-[#5f1f7f] mx-2 py-[2rem] flex justify-between px-2 mb-4">
					<span></span>
					<span>
						<FaChevronDown className="text-white" />{" "}
					</span>
				</div>
				<div className="flex items-center justify-start gap-2 px-3 py-5.5 lg:py-6.5">
					<span className="text-center xl:text-[20px] text-[18px] text-white mb-0">
						Filters
					</span>
				</div>

				<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
					<nav className="mt-5 py-4 px-3 lg:mt-0 lg:px-3 flex gap-3">
						<img src="/images/48.svg" />
						<span className="text-[#FEAA53] font-bold text-[16px]">
							License
						</span>
					</nav>
					<ul className="px-3">
						<div class="flex items-center mb-4 ">
							<input
								id="checkbox-1"
								type="checkbox"
								value=""
								class="w-4 h-4 text-[#5f1f7f] bg-gray-100 border-gray-300 rounded focus:ring-none  dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="checkbox-1"
								class="ms-2 text-sm font-medium text-white dark:text-gray-300">
								ReactJS .
							</label>
						</div>

						<div class="flex items-center mb-4">
							<input
								id="checkbox-2"
								type="checkbox"
								value=""
								class="w-4 h-4 text-[#5f1f7f] bg-gray-100 border-gray-300 rounded focus:ring-none  dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="checkbox-2"
								class="ms-2 text-sm font-medium text-white dark:text-gray-300">
								NextJS
							</label>
						</div>

						<div class="flex items-center mb-4">
							<input
								id="checkbox-3"
								type="checkbox"
								value=""
								class="w-4 h-4 text-[#5f1f7f] bg-gray-100 border-gray-300 rounded focus:ring-none  dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								for="checkbox-3"
								class="ms-2 text-sm font-medium text-white dark:text-gray-300">
								PHP
							</label>
						</div>

						<div class="flex mb-4">
							<div class="flex items-center h-5">
								<input
									id="helper-checkbox"
									aria-describedby="helper-checkbox-text"
									type="checkbox"
									value=""
									class="w-4 h-4 text-[#5f1f7f] bg-gray-100 border-gray-300 rounded focus:ring-none  dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="checkbox-3"
									class="ms-2 text-sm font-medium text-white dark:text-gray-300">
									Laravel
								</label>
							</div>
						</div>
						<div class="flex mb-4">
							<div class="flex items-center h-5">
								<input
									id="helper-checkbox"
									aria-describedby="helper-checkbox-text"
									type="checkbox"
									value=""
									class="w-4 h-4 text-[#5f1f7f] bg-gray-100 border-gray-300 rounded focus:ring-none  dark:bg-gray-700 dark:border-gray-600"
								/>
								<labe
									for="checkbox-3"
									class="ms-2 text-sm font-medium text-white dark:text-gray-300">
									Django
								</labe>
							</div>
						</div>
						<div class="flex mb-4">
							<div class="flex items-center h-5">
								<input
									id="helper-checkbox"
									aria-describedby="helper-checkbox-text"
									type="checkbox"
									value=""
									class="w-4 h-4 text-[#5f1f7f] bg-gray-100 border-gray-300 rounded focus:ring-none  dark:bg-gray-700 dark:border-gray-600"
								/>
								<labe
									for="checkbox-3"
									class="ms-2 text-sm font-medium text-white dark:text-gray-300">
									Angular
								</labe>
							</div>
						</div>
						<div class="flex mb-4">
							<div class="flex items-center h-5">
								<input
									id="helper-checkbox"
									aria-describedby="helper-checkbox-text"
									type="checkbox"
									value=""
									class="w-4 h-4 text-[#5f1f7f] bg-gray-100 border-gray-300 rounded focus:ring-none  dark:bg-gray-700 dark:border-gray-600"
								/>
								<labe
									for="checkbox-3"
									class="ms-2 text-sm font-medium text-white dark:text-gray-300">
									Python
								</labe>
							</div>
						</div>
					</ul>
				</div>
			</aside>
			{children}
		</div>
	);
};

export default Sidebar;
