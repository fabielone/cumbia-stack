interface ProjectConfig {
    title: string;
    description: string;
    keywords: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        headingColor: string;
        subheadingColor: string;
        mainTextColor: string;
        footerMainColor: string;
        footerSecondaryColor: string;
        footerTextColor: string;
        
    };

    images: {
        logo: string;
        favicon: string;
    };


    icons: {
        menu:string;
        close:string;
        facebook:string;
        instagram:string;
        twitter:string;
        linkedin:string;
        youtube:string;
        search:string;
    };

    hero: {
        title: string;
        description: string;
        image: string;
        cta: {
            label: string;
            url: string;
        };
        cta2: {
            label: string;
            url: string;
        };
    };

}

const projectConfig: ProjectConfig = {
    title: "Cumbia-Stack",
    description: "A Remix Service Provider App",
    keywords: "Remix, Service Providers, Cumbia-Stack",

    colors: {
        primary: "#000000",
        secondary: "#000000",
        tertiary: "#000000",
        headingColor: "#000000",
        subheadingColor: "#000000",
        mainTextColor: "#000000",
        footerMainColor: "#000000",
        footerSecondaryColor: "#000000",
        footerTextColor: "#000000",
    },

    images: {
        logo: "/images/logo.png",
        favicon: "/images/favicon.png",
    },

    icons: {
        menu:"/icons/menu.svg",
        close:"/icons/close.svg",
        facebook:"/icons/facebook.svg",
        instagram:"/icons/instagram.svg",
        twitter:"/icons/twitter.svg",
        linkedin:"/icons/linkedin.svg",
        youtube:"/icons/youtube.svg",
        search:"/icons/search.svg",
    },

    //content 

    hero: {
        title: "Cumbia-Stack",
        description: "A Remix Service Provider App that will help you get started with your next project.",
        image: "/images/hero.png",
        cta: {
            label: "Get Started",
            url: "/",
        },
        cta2: {
            label: "Speak to Sales",
            url: "/",
        },
    },
};

export default projectConfig;

