/** @format */

import React from "react";
import { Button as Btn, ButtonProps } from "@nextui-org/react";
import Link from "next/link";

type Props = ButtonProps & {
	link?: boolean; // if true, will use Link from next/link
};

function Button({ className, link, as, ...rest }: Props) {
	return (
		<Btn
			as={as}
			{...(link && { as: Link })}
			className={`bg-purple px-[20px] font-[500] rounded-custom-sm text-white h-[52px] ${className} ${
				rest.disabled && "bg-gray text-black hover:cursor-not-allowed"
			}`}
			{...rest}
		/>
	);
}

Button.Outline = ({ className, ...rest }: Props) => {
	return (
		<Button
			className={` bg-transparent border-2 text-purple font-[600] border-purple ${className}`}
			{...rest}
		/>
	);
};

export default Button;
