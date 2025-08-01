import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "CodeCell",
  description: "Generated By Ansh Jain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "dark:bg-black dark:text-white")}>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}