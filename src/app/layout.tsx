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
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react"

const FloatingActionButton = dynamic(() => import('@/components/floatingButton'), { ssr: false })

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
const saveLog = async () => {
  const supabase = createClient()

  const header = headers()
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  if (ip !== '::1' && ip !== '40.113.88.148') {
    try {
      const { error } = await supabase
        .from('log')
        .insert({ ip, site: 'info' })
    } catch (error) {
    }
  }
}
export const metadata: Metadata = {
  title: "The Place",
  description: "최고의 장소",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  saveLog()
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
