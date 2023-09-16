import { Providers } from "@/redux/provider";
import Navbar from "@/components/layout/navbar";
import { Inter } from "next/font/google";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const { SITE_NAME } = process.env;
const baseUrl = "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Providers>
          <Navbar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
