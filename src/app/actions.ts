"use server";

import { cookies } from 'next/headers'

export default async function cookieSet(key: string, value: string) {
  const cookieStore = cookies()
  cookieStore.set(key, value);
}