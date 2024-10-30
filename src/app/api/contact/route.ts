import { createClient } from "@/lib/supabase/server"
import { cookies } from 'next/headers'
export async function POST(request: Request) {
  const body = await request.json()
  const supabase = createClient()
  const { data, error } = await supabase.from('contact').insert(body)

  return Response.json({ data })
}
export async function GET(request: Request) {
  const user = JSON.parse(cookies().get('user')?.value ?? '')
  const supabase = createClient()
  const { data, error } = await supabase.from('contact').select('*').eq("email", user.id,)

  return Response.json(data)
}