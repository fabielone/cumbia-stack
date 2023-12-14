import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { IoAirplane } from "react-icons/io5";

import AboutUs from "~/comp/AboutUs";
import Footer from "~/comp/Footer";
import Hero from "~/comp/Hero";
import Navbar from "~/comp/Navbar";
import ServicesOverview from "~/comp/Services";
import PortfolioSection from "~/comp/Showcase";
import NewsletterSignUp from "~/comp/Subscribe";
import TopBanner from "~/comp/TopBanner";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {

  const services = [
    {
      icon: <IoAirplane/>,
      title: "Service One",
      description: "Description for Service One",
      link: "/",
      linkLabel: "View case study"
          },
    {
      icon: <IoAirplane />,
      title: "Service Two",
      description: "Description for Service Two",
      link: "/",
      linkLabel: "View case study"
          },
    {
      icon: <IoAirplane />,
      title: "Service Three",
      description: "Description for Service Three",
      link: "/",
      linkLabel: "View case study"
    },
    // Add more services as needed
  ];
   
// const PortfolioItemComponent: React.FC<PortfolioItem & { onClick: () => void }> = ({
//   name,
//   role,
//   description,
//   imageUrl,
//   onClick,
// }) => {
//   ype '{ name: string; role: string; description: string; imageUrl: string; }[]' is not assignable to type 'PortfolioItem[]'.
//   Property 'details' is missing in type '{ name: string; role: string; description: string; imageUrl: string; }' but required in type 'PortfolioItem'.ts(2322)
// Showcase.tsx(13, 5): 'details' is declared here.
// Showcase.tsx(40, 36): The expected type comes from property 'items' which is declared here on type 'IntrinsicAttributes & { items: PortfolioItem[]; }'
// (property) items: PortfolioItem[]
  const portfolioItems = [
    {
      name: "Project 1",
      role: "Role",
      description: "Description for Project 1",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      details: "Details for Project 1",
    },
    {
      name: "Project 2",
      role: "Role",
      description: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      details: "Details for Project 2",
    },
    {
      name: "Project 3",
      role: "Role",
      description: "Description for Project 3",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      details: "Details for Project 3",
    },
    // Add more projects as needed

  ];

  const user = useOptionalUser();
  return (
   <>
        <TopBanner />
        <Navbar />
        <Hero />
        <ServicesOverview services={services} />
        <AboutUs />
        <PortfolioSection items={portfolioItems} />

    
              
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
              
        
      <NewsletterSignUp />
    <Footer />
    </>
  );
}
