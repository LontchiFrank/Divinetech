/** @format */

import React from "react";
import { usePagination, PaginationItemType } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@nextui-org/react";

const Pagination = ({ length, data }) => {
	const { activePage, range, setPage, onNext, onPrevious } = usePagination({
		total: length,
		showControls: true,
		siblings: 10,
		boundaries: 10,
	});

	return (
		<div className="flex flex-col gap-2 pt-9">
			{/* <p>Active page: {activePage}</p> */}
			<ul className="flex gap-2 items-center">
				{range.map((page) => {
					if (page === PaginationItemType.NEXT) {
						return (
							<li key={page.id} aria-label="next page" className="w-17 h-17">
								<button
									className="w-full h-full flex justify-center items-center bg-white border-1 border-stroke border-[#909090]  p-3 rounded-full"
									onClick={onNext}>
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
									onClick={onPrevious}>
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
								className={cn(
									"w-full h-full bg-default-300 rounded-full",
									activePage === page && "bg-amber-500"
								)}
								onClick={() => setPage(page)}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Pagination;
