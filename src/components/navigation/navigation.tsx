'use client'
import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { menuItems } from "@/data/menuItems";
import SocialLinks from './social-links';
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
          <Link href="/" className='text-lg font-bold'>Just Ben</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, idx) => (
          <NavbarItem key={idx}>
            <Link href={item.link}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/contact" className="border-2 border-yellow-500 rounded-xl px-6 py-1">Hire Me</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, idx) => (
          <NavbarMenuItem key={idx}>
            <Link
              className="w-full text-center"
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

