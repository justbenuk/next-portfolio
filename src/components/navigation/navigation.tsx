'use client'
import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { menuItems } from "@/data/menuItems";
import NavLink from "./nav-link";
export default function Navigation() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred isBordered shouldHideOnScroll maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className='text-sm font-bold uppercase'>Just Ben</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, idx) => (
          <NavbarItem key={idx}>
            <NavLink href={item.link}>{item.name}</NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/contact" className="border-2 border-yellow-300 rounded-xl px-6 py-1 text-sm uppercase font-bold">Hire Me</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, idx) => (
          <NavbarMenuItem key={idx}>
            <Link
              className="w-full text-center text-sm uppercase"
              href={item.link}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

