'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import LanguageSelector from "./language-selector";
import MobileMenu from "./mobile-menu";
import '../../styles/css/header.css';

export default function Menubar(props) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  useEffect(() => {
    showMobileMenu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [showMobileMenu]);

  return (
    <>
      <div className="flex text-xs items-center justify-center text-indigo-200 bg-indigo-600">
        <div className="flex flex-row w-full ml-6 md:ml-0 md:w-20 text-start text-white py-3 font-extrabold">
          Temply
        </div>
        <nav className="hidden md:flex px-32">
          <Navigation lang={props.lang} navigation={props.navigation} />
        </nav>

        <div className="flex flex-row justify-end w-20 py-3">
          <span className="border border-white text-white rounded-lg py-1 px-3">
            <LanguageSelector/>
          </span>
        </div>

        <div className='menu-wrap md:hidden'>
          <input type="checkbox" className='toggler' onChange={e => setShowMobileMenu(!showMobileMenu)} checked={showMobileMenu} id="hamburger-menu-checkbox" aria-label='hamburger menü' />
          <div className='hamburger'><div>
          </div>
          </div>
        </div>
      </div>

      <MobileMenu bg="text-indigo-200 bg-indigo-600" show={showMobileMenu}>
        <Navigation lang={props.lang} navigation={props.navigation} />
      </MobileMenu>
    </>

  );
}

export function Navigation(props) {
  return (
    <>
      <MenuLink href={`/${props.lang}`} name={props.navigation.homeTitle} />
      <MenuLink href={`/${props.lang}/${props.navigation.aboutUrl}`} name={props.navigation.aboutTitle} />
    </>
  );
}

export function MenuLink(props) {
  return (
    <div className="py-3 px-5">
      <Link href={props.href} className="hover:text-white hover:cursor-pointer">
        {props.name}
      </Link>
    </div>
  );
}
