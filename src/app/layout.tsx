import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FilterStoreProvider } from "@/stores/filter-store-provider";
import { SiteFooter } from "@/components/site-footer";
import dynamic from 'next/dynamic'

const FloatingActionButton = dynamic(() => import('@/components/floatingButton'), { ssr: false })

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
export const metadata: Metadata = {
  title: "The Place",
  description: "최고의 장소",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          // fontSans.variable
        )}
      >
        <FilterStoreProvider>
          <Container className="flex min-h-screen flex-col">
            {children}
            <FloatingActionButton />
          </Container>
        </FilterStoreProvider>
        <SiteFooter />
      </body>
    </html>
  );
}
