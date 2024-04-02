// app/components/Navbar.tsx
import { useState, useEffect } from 'react';

import { menuConfig } from './menuConfig'; // Adjust the path as needed

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); //
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50); // Change color if scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // generate top menu
  
const renderTopMenuItems = () => {
    return menuConfig.topMenu.items.map((item, index) => (
      <a key={index} href={item.href} className="text-white mx-2 hover:text-gray-300">
        {item.icon}
      </a>
    ));
  };
  const renderBottomMenuItems = () => {
    return menuConfig.bottomMenu.items.map((item, index) => (
      <div key={index} className="relative">
        {/* Render Icon */}

        {item.icon ? item.icon : null}

        {/* Render Dropdown Icon */}
        <a 
          href={item.href} 
          className="text-white hover:text-gray-300"
          onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(openDropdown === item.name ? null : item.name); // Toggle dropdown
          }}
        >
          {item.name}
        </a>

        {/* Dropdown Menu */}
        {item.subMenu && openDropdown === item.name ? <div className="absolute bg-white shadow-md">
            {item.subMenu.map((subItem, subIndex) => (
              <a key={subIndex} href={subItem.href} className="block text-gray-700 hover:bg-gray-100 px-4 py-2">
                {subItem.name}
              </a>
            ))}
          </div> : null}
      </div>
    ));
  };

 // Accessing colors from menuConfig
 const navBgColor = isScrolled ? menuConfig.bottomMenu.scrolledBgColor : menuConfig.bottomMenu.defaultBgColor;
 const topMenuColors = isScrolled ? menuConfig.topMenu.scrolledBgColor+' '+menuConfig.topMenu.scrolledTextColor : menuConfig.topMenu.defaultBgColor+" "+menuConfig.topMenu.defaultTextColor;
 const bottomMenuColors = isScrolled ? menuConfig.bottomMenu.scrolledBgColor+ "" + menuConfig.bottomMenu.scrolledTextColor : menuConfig.bottomMenu.defaultBgColor+" "+menuConfig.bottomMenu.defaultTextColor;
 const logoMenuTextColor = isScrolled ? menuConfig.logo.scrolledTextColor : menuConfig.logo.defaultTextColor;
 const logoMenuBgColor = isScrolled ? menuConfig.logo.scrolledBgColor : menuConfig.logo.defaultBgColor;
 const hideonScroll = isScrolled ? "hidden" : "";
  return (
    <div className={`sticky top-0 z-50 ${navBgColor}`}>
    {/* Navbar */}
    <div className={`grid grid-cols-8 md:grid-cols-8 text-sm items-center`}>
      {/* Logo Section */}
      <div className={`relative col-span-1 md:col-span-1 animate-fadeIn items-center space-x-4 ${logoMenuBgColor}`}>
        <span className={`font-bold text-lg ${logoMenuTextColor}`}>
          {menuConfig.logo.text}
        </span>
      </div>

       {/* Wrapper for Top and Bottom Menus */}
       <div className="col-span-7 md:col-span-7">
          {/* Top Navbar - Hidden on Mobile */}
          <div className={`hidden md:flex p-1 md:p-1  ${topMenuColors} justify-end`}>
            {/* Top Menu Goes Here */}
            {renderTopMenuItems()}
          </div>

          {/* Bottom Navbar - Hidden on Mobile */}
          <div className={`hidden md:flex p-1 md:p-2 justify-between ${bottomMenuColors}`}>
            {/* Bottom Menu Goes Here */}
            {renderBottomMenuItems()}
          </div>
        </div>
       
        {/* Mobile Icons */}
        <div className="col-span-3 md:col-span-1 md:hidden flex justify-end items-center">
          
        {menuConfig.mobileMenu.ctaIcon ? menuConfig.mobileMenu.ctaIcon : null}

{/* Menu toggle button */}
<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
  {isMenuOpen ? menuConfig.mobileMenu.closeIcon : menuConfig.mobileMenu.menuIcon}
</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen ? <div className="bg-white p-4 md:hidden">
          {/* Mobile Navigation Links */}
        </div> : null}
    </div>
  );
};

export default Navbar;
