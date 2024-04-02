import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

import Footer from "~/comp/Footer";
import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

import Header from "./comp/atom/Header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  const route = useMatches()[1];
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {route.pathname.includes("dashboard") ? 
      
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
        :
        <MainLayout>
          <Outlet />
        </MainLayout>
      
      }
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// define MainLayout component

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  );
}

// define empty DashboardLayout component

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
