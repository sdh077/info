"use client";

import React, { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FilterStoreProvider } from "@/stores/filter-store-provider";
import Cookies from "js-cookie"
import AuthProvider from "@/lib/next-auth";

const queryClient = new QueryClient()
export default function Provider({ children, ...props }: { children: React.ReactNode }) {
  const [isMount, setMount] = useState(false)
  const theme = Cookies.get('theme') ?? 'light'
  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null
  }
  return (
    <>
      <FilterStoreProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <FilterStoreProvider>
              {children}
            </FilterStoreProvider>
          </AuthProvider>
        </QueryClientProvider>
      </FilterStoreProvider>
    </>
  )
}