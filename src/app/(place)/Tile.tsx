'use client'
import CaseTile from '@/components/article';
import { IPlace } from '@/interface/place';
import Link from 'next/link';

export default function Home({ places }: { places: IPlace[] }) {
  return (
    <div className='grid md:grid-cols-3 gap-1 w-full z-0'>
      {places.map(place =>
        <Link className='col-span-1' key={place.id} href={`/place/${place.id}`}>
          <CaseTile place={place} />
        </Link>
      )}
    </div >
  )
}