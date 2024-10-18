import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { FilterStoreProvider } from "@/stores/filter-store-provider";
import { SiteFooter } from "@/components/site-footer";
import dynamic from 'next/dynamic'
import { Analytics } from "@vercel/analytics/react"

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
        <Analytics />
      </body>
    </html>
  );
}
