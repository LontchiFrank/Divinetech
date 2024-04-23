/** @format */

import React from "react";
import { usePagination, PaginationItemType } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@nextui-org/react";

type Props = {
	arr: any;
	pros: any;
	active: any;
	setActive: (page: number) => void;
};

export default function Paginations({ arr, pros, setActive, active }: Props) {
	const { activePage, range, setPage, onNext, onPrevious } = usePagination({
		total: arr / 6,
		showControls: true,

		siblings: 10,
		boundaries: 10,
	});
	const handleClickNext = () => {
		if (active == 3) {
			setActive(1);
		} else {
			setActive(active + 1);
		}
	};
	const handleClickPrev = () => {
		if (active == 1) {
			setActive(1);
		} else {
			setActive(active - 1);
		}
	};
	console.log(active);
	return (
		<div className="flex flex-col gap-2 pt-9">
			<ul className="flex gap-2 items-center">
				{range.map((page) => {
					if (page === PaginationItemType.NEXT) {
						return (
							<li key={page} aria-label="next page" className="w-17 h-17">
								<button
									className="w-full h-full flex justify-center items-center bg-white border-1 border-stroke border-[#909090]  p-3 rounded-full"
									onClick={() => {
										onNext();
										handleClickNext();
									}}>
									<FaChevronLeft className="rotate-180 text-[#7A24A1]" />
								</button>
							</li>
						);
					}

					if (page === PaginationItemType.PREV) {
						return (
							<li key={page} aria-label="previous page" className="w-17 h-17">
								<button
									className="w-full h-full flex justify-center items-center bg-white border-1 border-stroke border-[#909090]  p-3 rounded-full"
									onClick={() => {
										onPrevious();
										handleClickPrev();
									}}>
									<FaChevronLeft className="text-[#7A24A1]" />
								</button>
							</li>
						);
					}

					if (page === PaginationItemType.DOTS) {
						return (
							<li key={page} className="w-4 h-4">
								...
							</li>
						);
					}

					return (
						<li key={page} aria-label={`page ${page}`} className="w-4 h-4">
							<button
								className={
									active == page
										? "bg-amber-500 w-full h-full rounded-full"
										: "w-full h-full bg-default-300 rounded-full"
								}
								onClick={() => {
									setPage(page);
									setActive(page);
								}}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
