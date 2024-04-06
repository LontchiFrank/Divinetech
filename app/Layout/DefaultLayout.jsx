/** @format */

"use client";
import React, { Children, useState, useEffect } from "react";
import Footers from "../components/footer/page";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
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

						{/* <p className="font-bold text-inherit">ACME</p> */}
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent
					className="hidden sm:flex gap-14  items-center text-[20px]"
					justify="center">
					<NavbarItem isActive>
						<Link className="text-[#183953]" color="foreground" href="/About">
							About
						</Link>
					</NavbarItem>
					<Dropdown>
						<NavbarItem>
							<DropdownTrigger>
								<Button
									disableRipple
									className="p-0 bg-transparent data-[hover=true]:bg-transparent"
									// endContent={icons.chevron}
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
								description={
									<span className="text-[12px]">
										We create user friendly and centered designs
									</span>
								}
								startContent={
									// <div className="flex justify-center items-center">
									<img src="/images/27.svg" style={{ width: "80px" }} />
									// </div>
								}>
								UI/UX Design
							</DropdownItem>
							<DropdownItem
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
								key="99_uptime"
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
						<Link color="foreground" className="text-[#183953]" href="#">
							Projects
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" className="text-[#183953]" href="#">
							Team
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" className="text-[#183953]" href="#">
							Blog
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem>
						<Button
							className="bg-[#7A24A1] px-5 py-3 rounded-[50px] text-white"
							link
							href=""
							radius="sm">
							Contact
						</Button>
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

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Navbar onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <AcmeLogo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
