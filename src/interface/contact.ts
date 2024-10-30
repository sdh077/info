export interface Contact {
  id: number,
  created_at: string
  name: string
  email: string
  phone: string
  description: string
  purpose: string
  status: '요청' | '추가완료' | '반려'
}