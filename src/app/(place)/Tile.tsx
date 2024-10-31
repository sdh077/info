'use client'
import CaseTile from '@/components/article';
import { IPlace } from '@/interface/place';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from '@/page/bento';
import { createClient } from '@/utils/supabase/client';
import { useSession } from 'next-auth/react';
import placeAll from '@public/theplaces.json'
export default function Tile({ places }: { places: IPlace[] }) {
  const { data } = useSession()
  const id = data?.user?.id
  const up = async () => {
    const supabase = createClient()
    for (const place of placeAll) {
      const { error, data } = await supabase.from('place').insert(place)
      if (error) console.log(error, place.id)
    }
  }
  return (
    <>
      <BentoGrid className="w-full order-2 md:order-none">
        {places.map((place, i) => (
          <BentoGridItem
            key={i}
            place={place}
            id={id}
          />
        ))}
      </BentoGrid>
    </>
  )
}
