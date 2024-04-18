import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Home/Navbar";
import ClientProvider from "./_components/Hoc/ClientProvider";
import Footer from "./_components/Home/Footer";
const font= Plus_Jakarta_Sans({
  weight:['200','300','400','500','600','700','800'],
  subsets:['latin']
});

export const metadata: Metadata = {
  title: "Find your first job   ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
    </ClientProvider>
  );
}
