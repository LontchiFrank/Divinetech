/** @format */

"use client";
import React, { Children, useState, useEffect } from "react";
import Footers from "../components/footer/page";
import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Button,
	Menu,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function DefaultLayout({ children }) {
	const [isBgTransparent, setIsBgTransparent] = useState();
	// (useState < null) | (boolean > null);

	useEffect(() => {
		setState();
		window.addEventListener("scroll", setState);

		return () => {
			window.removeEventListener("scroll", setState);
		};
	}, []);
	const setState = async () => {
		if (window.scrollY > 50) {
			setIsBgTransparent(false);
		} else {
			setIsBgTransparent(true);
		}
	};
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeItem, setActiveItem] = useState("");

	const handleItemClick = (item) => {
		if (item === "Our Services" || item === "about-dropdown") {
			setActiveItem("Our Services");
			console.log(item);
		} else {
			setActiveItem(item);
		}
	};

	useEffect(() => {
		if (
			window.location.pathname === "/Services/uiux" ||
			window.location.pathname === "/Services/web" ||
			window.location.pathname === "/Services/mobile" ||
			window.location.pathname === "/Services/digital-marketing" ||
			window.location.pathname === "/Services/IT-consultation"
		) {
			setActiveItem("Our Services");
		} else {
			setActiveItem(window.location.pathname.substring(1));
		}
	}, []);

	const menuItems = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	const navs = [""];

	return (
		<div className="">
			<Navbar
				onMenuOpenChange={setIsMenuOpen}
				className={
					(isBgTransparent
						? "!backdrop-blur-none !backdrop-saturate-none !bg-transparent xl:px-1 md:px-16 sm:px-12 py-8"
						: "bg-[#F9FAFF]",
					"border-b-1 top-0 left-0 py-5")
				}>
				<NavbarContent>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="sm:hidden"
					/>
					<NavbarBrand>
						<Link className="text-[#183953]" color="foreground" href="/">
							<img src="/images/logo.svg" alt="" />
						</Link>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent
					className="hidden sm:flex gap-14  items-center text-[20px]"
					justify="center">
					<NavbarItem>
						<Link
							prefetch={false}
							className={
								activeItem === "About" ? "isActive" : "text-[#183953] "
							}
							onClick={() => handleItemClick("About")}
							href="/About">
							About
						</Link>
					</NavbarItem>
					<Dropdown>
						<NavbarItem>
							<DropdownTrigger>
								<Button
									disableRipple
									className={
										activeItem === "Our Services"
											? "isActive"
											: "text-[#183953] p-0 bg-transparent "
									}
									onClick={() => handleItemClick("Our Services")}
									radius="sm"
									variant="light">
									Our Services
								</Button>
							</DropdownTrigger>
						</NavbarItem>
						<DropdownMenu
							aria-label="ACME features"
							className="w-[550px] flex"
							itemClasses={{
								base: "gap-1",
							}}>
							<DropdownItem
								key="services"
								href="/Services/uiux"
								prefetch={false}
								onClick={(e) => handleItemClick("about-dropdown")}
								description={
									<span className="text-[12px]">
										We create user friendly and centered designs
									</span>
								}
								startContent={
									<img src="/images/27.svg" style={{ width: "80px" }} />
								}>
								UI/UX Design
							</DropdownItem>
							<DropdownItem
								href="/Services/web"
								prefetch={false}
								onClick={() => handleItemClick("about-dropdown")}
								description={
									<span className="text-[12px]">
										Build your website with us
									</span>
								}
								startContent={
									<img src="/images/28.png" style={{ width: "80px" }} />
								}>
								Web Development
							</DropdownItem>

							<DropdownItem
								href="/Services/mobile"
								prefetch={false}
								onClick={() => handleItemClick("about-dropdown")}
								description={
									<span className="text-[12px]">
										Build you mobile app with us.
									</span>
								}
								startContent={
									<img src="/images/29.png" style={{ width: "80px" }} />
								}>
								Mobile App Development
							</DropdownItem>
							<DropdownItem
								href="/Services/IT-consultation"
								prefetch={false}
								onClick={() => handleItemClick("about-dropdown")}
								description={
									<span className="text-[12px]">
										Share your ideas with experts for better performance.
									</span>
								}
								startContent={
									<img src="/images/30.png" style={{ width: "80px" }} />
								}>
								IT consulting
							</DropdownItem>
							<DropdownItem
								href="/Services/digital-marketing"
								prefetch={false}
								onClick={() => handleItemClick("about-dropdown")}
								description={
									<span className="text-[12px]">
										Taking your products to the world.
									</span>
								}
								startContent={
									<img src="/images/31.png" style={{ width: "80px" }} />
								}>
								Digital Marketing
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<NavbarItem>
						<Link
							prefetch={false}
							className={
								activeItem === "Projects" ? "isActive" : "text-[#183953]"
							}
							onClick={() => handleItemClick("Projects")}
							color="foreground"
							href="/Projects">
							Projects
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							prefetch={false}
							className={activeItem === "Team" ? "isActive" : "text-[#183953]"}
							onClick={() => handleItemClick("Team")}
							color="foreground"
							href="/Team">
							Team
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							prefetch={false}
							color="foreground"
							className={activeItem === "Blog" ? "isActive" : "text-[#183953]"}
							onClick={() => handleItemClick("Blog")}
							href="/Blog">
							Blog
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem>
						<Link href="/Contact" prefetch={false}>
							<Button
								className={
									activeItem === "Contact"
										? "isActive bg-[#7A24A1] px-5 py-3 rounded-[50px] "
										: "bg-[#7A24A1] px-5 py-3 rounded-[50px] text-white"
								}
								// className=""
								link
								radius="sm"
								onClick={() => handleItemClick("Contact")}>
								Contact
							</Button>
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === menuItems.length - 1
										? "danger"
										: "foreground"
								}
								className="w-full"
								href="#"
								size="lg">
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
			{children}
			<Footers />
		</div>
	);
}
