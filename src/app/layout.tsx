import type { Metadata } from "next";
import {  Roboto, Roboto_Mono } from "next/font/google";

import "./globals.css";
import AppLayout from "@/layouts/AppLayout";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets:["latin"]
})

const robotoMono =Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Builders Desk",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased`}
      >
        <AppLayout>

        {children} 
        </AppLayout>
      </body>
    </html>
  );
}
