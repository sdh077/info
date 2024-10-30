import { Bookmark } from "@/interface/bookmark"
import { Contact } from "@/interface/contact"
import { IPlace } from "@/interface/place"
import { createClient } from "@/utils/supabase/server"


import { authOptions } from "@/app/api/auth/[...nextauth]"
import { getServerSession } from "next-auth";
import { PostgrestSingleResponse } from "@supabase/supabase-js"

export const getContact = async (id: string) => {
  const supabase = createClient()
  return await supabase.from('contact').select('*').eq("email", id,).returns<Contact[]>()

}
export const getBookmark = async (id: string): Promise<PostgrestSingleResponse<Bookmark[]>> => {
  const supabase = createClient()
  return await supabase.from('bookmark').select('*').eq("user_id", id,).returns<Bookmark[]>()
}

export const getPlace = async (activeNavi: string[], subcate: string, pfs: string, pageNo: number | null) => {
  const supabase = createClient()

  const session = await getServerSession(authOptions)
  let q = session?.user?.id ?
    supabase.from('place').select('*, bookmark(*)', { count: 'estimated', head: false }).eq('bookmark.user_id', session.user.id) :
    supabase.from('place').select('*', { count: 'estimated', head: false })
  if (activeNavi.length) { q = q.in('cate', activeNavi) }
  if (subcate) q = q.contains('subType', [subcate])
  if (pfs && pfs !== '전체') q = q.contains('categories', [pfs])
  if (pageNo) q = q.range((pageNo - 1) * 9, pageNo * 9 - 1)
  return await q.returns<IPlace[]>()
}
export const getBookmarkPlace = async () => {
  const supabase = createClient()

  const session = await getServerSession(authOptions)
  const id = session?.user?.id ?? '-1'
  let q =
    supabase.from('place')
      .select('*, bookmark!inner(*)', { count: 'estimated', head: false })
      .eq('bookmark.user_id', id)
      .eq('bookmark.use_yn', true)

  return await q.returns<IPlace[]>()
}