import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaDiscord, FaWhatsapp } from 'react-icons/fa';
import { NavbarItem } from '@nextui-org/react';
export default function SocialLinks() {
  return (
    <>
      <NavbarItem>
        <Link href='/'><FaFacebook /></Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/'><FaTwitter /></Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/'><FaInstagram /></Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/'><FaGithub /></Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/'><FaDiscord /></Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/'><FaWhatsapp /></Link>
      </NavbarItem>
        </>
  )
}
