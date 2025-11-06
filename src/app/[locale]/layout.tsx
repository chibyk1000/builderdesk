import type { Metadata } from "next";
import {  Roboto, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import AppLayout from "@/layouts/AppLayout";
import { hasLocale, NextIntlClientProvider } from "next-intl";

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



export default async function RootLayout({
  children,
  params

}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
  if (!hasLocale
    (routing.locales, locale)) {
      notFound();
    }
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.variable} antialiased`}>
        <NextIntlClientProvider>
          <AppLayout>{children}</AppLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
