import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import AnimatedBackground from "./components/animated-background";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Doongsil Universe",
    template: "%s | Doongsil Universe",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Doongsil Universe</title>
        <meta name="description" content="Hyunwoo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative lg:mx-auto max-w-5xl h-svh antialiased">
        {/* <AnimatedBackground /> */}
        <main className="flex flex-col flex-auto px-4 md:px-2 py-2 md:py-4 min-w-0 h-full">
          <Navbar />
          <div className="flex-1 overflow-visible">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
