
'use client'
import React,{Children, useState} from "react";
import Footers from '../components/footer/page'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function DefaultLayout({children}) {
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
      <Navbar className="xl:px-1 md:px-16 sm:px-12 py-8" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
         
        <img src="/images/logo.svg" alt="" />
          {/* <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-14  items-center text-[20px]" justify="center">
        <NavbarItem isActive>
          <Link  className="text-[#183953]" color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" className="text-[#183953]" aria-current="page">
            Our Services
          </Link>
        </NavbarItem>
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
        <Button className="bg-[#7A24A1] px-5 py-3 rounded-[50px] text-white" link href='' radius="sm">Contact</Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
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

