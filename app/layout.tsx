import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Kameter",
  description: "Web developer and graphic designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-cover bg-center bg-fixed"}>
        <Navbar />
        <NavbarMobile />
        {children}
      </body>
    </html>
  );
}
