

export interface IMenuItem {
    name: string;
    href: string;
    icon?: () => React.ReactElement ;
    subMenu?: IMenuItem[];
    }

export interface IMenuConfig {
    logo: {
        text: string;
        scrolledTextColor: string;
        defaultTextColor: string;
    };
    topMenu: {
        defaultBgColor: string;
        scrolledBgColor: string;
        items: IMenuItem[];
    };
    bottomMenu: {
        defaultBgColor: string;
        scrolledBgColor: string;
        items: IMenuItem[];
    };
    mobileIcons: {
        callIcon: () => React.Component;
        menuIcon: () => React.Component;
        closeIcon: () => React.Component;
    };
    }