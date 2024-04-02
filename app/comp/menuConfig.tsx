// menuConfig.ts
import React from "react";
import { IoIosCloseCircleOutline, IoIosCall } from "react-icons/io";
import { FaFacebook,FaInstagramSquare,FaTiktok,FaPhone,FaWhatsappSquare  } from "react-icons/fa";

import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineDesignServices, MdEmail } from "react-icons/md";

export interface IMenuItem {
    name: string;
    href: string;
    description?: string;
    logo?: string;
    icon?: React.ReactElement;
    subMenu?: IMenuItem[];
}

export interface IMenuConfig {
    logo: {
        text: string;
        href: string;
        logoUrl?: string;
        defaultTextColor: string;
        scrolledTextColor: string;
        defaultBgColor?: string;
        scrolledBgColor?: string;
    };
    topMenu: {
        defaultBgColor: string;
        scrolledBgColor: string;
        defaultTextColor?: string;
        scrolledTextColor?: string;
        items: IMenuItem[];
    };
    bottomMenu: {
        defaultBgColor: string;
        scrolledBgColor: string;
        defaultTextColor?: string;
        scrolledTextColor?: string;
        items: IMenuItem[];
    };
    mobileMenu:{
        ctaIcon?: React.ReactElement; 
        menuIcon: React.ReactElement;
        closeIcon: React.ReactElement;
        items: IMenuItem[];
    };
}

const topMenuItems: IMenuItem[] = [
    { name: "Facebook", href: "/link1",icon: <FaFacebook className="text-black h-6 w-6"/> },
    { name: "Instagram", href: "/link1",icon: <FaInstagramSquare className="text-red-400 h-6 w-6"/> },
    { name: "TikTok", href: "/link1",icon: <FaTiktok className="text-black h-6 w-6"/> },
    { name: "WhatsApp", href: "/link1",icon: <FaWhatsappSquare className="text-black h-6 w-6"/> },
    { name: "Phone", href: "/link1",icon: <FaPhone className="text-black h-6 w-6"/> },
    { name: "Email", href: "/link1",icon: <MdEmail className="text-black h-6 w-6"/> },
    { name: "Link 2", href: "/link2",icon: <div>Log In</div> },
];

const bottomMenuItems: IMenuItem[] = [
    {
        name: "Services",
        href: "/services",
        icon: <MdOutlineDesignServices className="text-black h-6 w-6"/>,
        subMenu: [
            { name: "Service 1", href: "/service1" },
            { name: "Service 2", href: "/service2" },
        ],
    },
    {
        name: "Our Work",
        href: "/portfolio",
        icon: <MdOutlineDesignServices className="text-black h-6 w-6"/>,
    },
    {
        name: "About Us",
        icon: <MdOutlineDesignServices className="text-black h-6 w-6"/>,
        href: "/about",
    },
    {
        name: "About Us",
        icon: <MdOutlineDesignServices className="text-black h-6 w-6"/>,
        href: "/about",
    },
];

export const menuConfig: IMenuConfig = {
    logo: {
        text: "Cumbia Stack",
        href: "/",
        logoUrl: "path/to/logo/image",
        defaultTextColor: "text-black",
        scrolledTextColor: "text-black",
        defaultBgColor: "bg-transparent",
        scrolledBgColor: "bg-transparent",
    },
    topMenu: {
        defaultBgColor: "bg-transparent",
        scrolledBgColor: "bg-white",
        defaultTextColor: "text-black",
        scrolledTextColor: "text-black",
        items: topMenuItems,
    },
    bottomMenu: {
        defaultBgColor: "bg-transparent",
        scrolledBgColor: "bg-white",
        defaultTextColor: "text-black",
        scrolledTextColor: "text-blue-500",
        items: bottomMenuItems,
    },
    mobileMenu: {
        ctaIcon: <IoIosCall className="text-white h-6 w-6" />,
        menuIcon: <IoMenuSharp className="text-white h-6 w-6" />,
        closeIcon: <IoIosCloseCircleOutline className="text-white h-6 w-6" />,
        items: [...topMenuItems, ...bottomMenuItems], // Combine top and bottom menu items
    },
};
