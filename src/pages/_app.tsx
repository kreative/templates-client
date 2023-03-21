import "@/styles/globals.css";
import Script from "next/script";
import React from "react";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import localFont from "@next/font/local";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// custom craftwork sans font loading locally
const craftworkSans = localFont({
  src: [
    {
      path: "../../public/fonts/CraftworkSans/CraftworkSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CraftworkSans/CraftworkSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CraftworkSans/CraftworkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CraftworkSans/CraftworkSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CraftworkSans/CraftworkSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CraftworkSans/CraftworkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-craftworksans",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <div className={`${craftworkSans.variable} font-sans`}>
              <Component {...pageProps} />
            </div>
          </Hydrate>
        </CookiesProvider>
      </QueryClientProvider>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </React.Fragment>
  );
}
