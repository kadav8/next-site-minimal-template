'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import '../../styles/css/menubar-dropdown.css';
import '../../styles/css/menubar.css';
import LanguageSelector from "./language-selector";
import MobileMenu from "./mobile-menu";

export default function Menubar(props) {
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

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
            <LanguageSelector />
          </span>
        </div>

        <div className='menu-wrap md:hidden'>
          <input type="checkbox" className='toggler' onChange={e => setShowMobileMenu(!showMobileMenu)} checked={showMobileMenu} id="hamburger-menu-checkbox" aria-label='hamburger menü' />
          <div className='hamburger'><div>
          </div>
          </div>
        </div>
      </div>
      <div className=' relative md:hidden'>
        <MobileMenu show={showMobileMenu}>
          <Navigation lang={props.lang} navigation={props.navigation} />
        </MobileMenu>
      </div>
    </>

  );
}

export function Navigation({ lang, navigation }) {
  return (
    <ul className="flex flex-col justify-center items-center gap-10 md:flex-row">
      <NavigationItem href={`/${lang}`} name={navigation.home.title} />
      <NavigationItem href={`/${lang}/${navigation.about.url}`} name={navigation.about.title} />
      <NavigationItem lang={lang} items={navigation.services.dropdown} name={navigation.services.title} />
      <NavigationItem lang={lang} items={navigation.other.dropdown} name={navigation.other.title} />
      <NavigationItem lang={lang} items={navigation.other.dropdown} name={navigation.other.title} />
      <NavigationItem lang={lang} items={navigation.other.dropdown} name={navigation.other.title} />
    </ul>
  );
}

export function NavigationItem({ href, name, items, lang }) {
  return (
    <>
      {href ?
        <MenuLink href={href} name={<span className="font-bold md:font-normal text-xl md:text-xs">{name}</span>} />
        :
        <Dropdown lang={lang} items={items} name={name} />}
    </>
  );
}

function Dropdown({ name, items, lang }) {

  return (
    <li className="dropdown">
      <span className="font-bold md:font-normal text-xl md:text-xs">{name}</span>
      <div className="dropdown_menu_container p-2">
        <ul className="dropdown_menu rounded-lg">
          {items.map((item, i) =>
            <MenuLink href={`/${lang}/${item.url}`} className="dropdown_item" name={item.title} key={i} />)}
        </ul>
      </div>
    </li>
  );
}

export function MenuLink({ href, name, className }) {
  return (
    <li className={className}>
      <Link href={href} className="md:hover:text-white hover:cursor-pointer">
        {name}
      </Link>
    </li>
  );
}

