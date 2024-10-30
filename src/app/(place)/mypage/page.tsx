import React from 'react'
import { Contact } from '@/interface/contact'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Tile from '../Tile'
import { getBookmarkPlace, getContact } from '@/data/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]'



function ContactTable({ contacts }: { contacts: Contact[] }) {
  return (
    <Table>
      <TableCaption>추가 요청 카페</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-48">가게명</TableHead>
          <TableHead>테마</TableHead>
          <TableHead>설명</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell className="font-medium">{contact.name}</TableCell>
            <TableCell>{contact.purpose}</TableCell>
            <TableCell>{contact.description}</TableCell>
            <TableCell className="text-right">{contact.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const Page = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session?.user?.id) return <></>
  const { data: contacts } = await getContact(session.user.id)
  const { data: places, count } = await getBookmarkPlace()
  return (
    <div className='max-w-7xl mx-auto min-h-screen mt-16 grid md:grid-cols-2 gap-16'>
      <ContactTable contacts={contacts ?? []} />
      <Tile places={places ?? []} />
    </div>
  )
}

export default Page