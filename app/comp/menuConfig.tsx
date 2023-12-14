// menuConfig.ts
import React from "react";
import { IoIosCloseCircleOutline, IoIosCall } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

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
    { name: "Link 1", href: "/link1",icon: <MdOutlineDesignServices className="text-white h-6 w-6"/> },
    { name: "Link 2", href: "/link2",icon: <MdOutlineDesignServices className="text-white h-6 w-6"/> },
];

const bottomMenuItems: IMenuItem[] = [
    {
        name: "Services",
        href: "/services",
        icon: <MdOutlineDesignServices className="text-white h-6 w-6"/>,
        subMenu: [
            { name: "Service 1", href: "/service1" },
            { name: "Service 2", href: "/service2" },
        ],
    },
    {
        name: "Blog",
        href: "/blog",
    },
];

export const menuConfig: IMenuConfig = {
    logo: {
        text: "Cumbia Stack",
        href: "/",
        logoUrl: "path/to/logo/image",
        defaultTextColor: "text-white",
        scrolledTextColor: "text-black",
        defaultBgColor: "bg-gray-800",
        scrolledBgColor: "bg-white",
    },
    topMenu: {
        defaultBgColor: "bg-gray-800",
        scrolledBgColor: "bg-white",
        defaultTextColor: "text-white",
        scrolledTextColor: "text-black",
        items: topMenuItems,
    },
    bottomMenu: {
        defaultBgColor: "bg-blue-500",
        scrolledBgColor: "bg-white",
        defaultTextColor: "text-white",
        scrolledTextColor: "text-black",
        items: bottomMenuItems,
    },
    mobileMenu: {
        ctaIcon: <IoIosCall className="text-white h-6 w-6" />,
        menuIcon: <IoMenuSharp className="text-white h-6 w-6" />,
        closeIcon: <IoIosCloseCircleOutline className="text-white h-6 w-6" />,
        items: [...topMenuItems, ...bottomMenuItems], // Combine top and bottom menu items
    },
};
