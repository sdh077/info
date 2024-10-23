'use client'
import CaseTile from '@/components/article';
import { IPlace } from '@/interface/place';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from '../page/bento';

export default function Tile({ places }: { places: IPlace[] }) {
  return (
    <BentoGrid className="md:w-[60%] order-2 md:order-none">
      {places.map((place, i) => (
        <BentoGridItem
          key={i}
          place={place}
        />
      ))}
    </BentoGrid>
  )
}
