"use client";

import Link from "next/link";
import * as fonts from "@/util/fonts";
import { usePathname } from "next/navigation";

const NavLink = ({ name, href }) => {
  const activeRoute = usePathname();
  const isActive = activeRoute === href || false;
  return (
    <li
      key={name}
      className={`mx-5  cursor-pointer border-b-2  pb-2 text-white  transition-all  hover:border-active_navbar xxlg:border-b-4 ${
        isActive ? "border-active_navbar" : "border-[transparent]"
      }`}
    >
      <Link href={href}>
        <h6
          className={`text-[12px] tracking-[1.5px] xxlg:text-2xl ${fonts.montserrat500}`}
          href={href}
        >
          {name}
        </h6>
      </Link>
    </li>
  );
};

function NavLinks() {
  const routes = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "EVENTS", href: "/events" },
    { name: "OUR FLEET", href: "/ourfleet" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <ul className=" mt-[20px] hidden w-[700px] justify-end lg:flex">
      {routes.map((route) => {
        return <NavLink key={route.name} {...route} />;
      })}
    </ul>
  );
}

export default function Navbar() {
  return (
    <div className="absolute z-10 flex w-full items-center justify-between sm:px-5 xxs:px-4 px-2 md:py-7 sm:py-5 py-3 xxlg:px-10">
      <div className="">
        <img src="/images/Logo.png" alt="Logo" className="sm:w-44 xxs:w-40 w-32 xxlg:w-auto" />
      </div>
      <div className="flex w-auto justify-end lg:w-[70%]">
        <NavLinks />
      </div>
      <div className="">
        <button
          className={`hidden bg-crimson px-4  py-[15px] text-xs uppercase text-white lg:block ${fonts.montserrat600}`}
        >
          Reservations
        </button>
      </div>
    </div>
  );
}
