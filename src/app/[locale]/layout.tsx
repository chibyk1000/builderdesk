import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import AppLayout from "@/layouts/AppLayout";
import { hasLocale, NextIntlClientProvider } from "next-intl";



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
      <body >
        <NextIntlClientProvider>
          <AppLayout>{children}</AppLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
