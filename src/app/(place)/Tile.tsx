'use client'
import CaseTile from '@/components/article';
import { IPlace } from '@/interface/place';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from '../page/bento';

// export default function Home({ places }: { places: IPlace[] }) {
//   return (
//     <div className='grid md:grid-cols-4 gap-1 w-full z-0'>
//       {places.map(place =>
//         <Link className='col-span-1' key={place.id} href={`/place/${place.id}`}>
//           <CaseTile place={place} />
//         </Link>
//       )}
//     </div >
//   )
// }

export default function Tile({ places }: { places: IPlace[] }) {
  return (
    <BentoGrid className="mx-auto order-2 md:order-none">
      {places.map((place, i) => (
        <BentoGridItem
          key={i}
          place={place}
        />
      ))}
    </BentoGrid>
  )
}
