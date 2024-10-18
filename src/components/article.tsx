'use client'
import { IPlace } from '@/interface/place';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

const CaseTile = ({ place }: { place: IPlace }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  if (isDesktop)
    return (
      <div
        className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 이미지 섹션 */}
        <div
          className={`absolute top-0 rounded-lg w-full h-full transition-all duration-300 ease-in-out hover:scale-[103%]`}
        >
          <Image
            src={`/place-image/${place.images[0]}`}
            alt="Placeholder"
            className="w-full h-full object-cover rounded-lg object-top	"
            fill
          />
        </div>

        {/* 텍스트 섹션 */}
        <div
          className={`absolute bottom-0 w-full text-white p-4 transition-all duration-300 ease-in-out bg-black`}
        >
          <div className='flex items-center justify-between'>
            <h2 className="text-white text-lg font-semibold">{place.title}</h2>
            <p className="text-white line-clamp-2">{place.description}</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className="text-white text-sm">{place.location}</div>
            <div className="text-white flex gap-2">{place.categories.map(category =>
              <div key={category} className='w-[60px] text-sm text-right'>#{category}</div>
            )}</div>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden shadow-lg flex gap-4 justify-between"
    >
      {/* 이미지 섹션 */}
      <div
        className={`relative rounded-lg !w-32 h-32 transition-all duration-300 ease-in-out hover:scale-[103%]`}
      >
        <Image
          src={`/place-image/${place.images[0]}`}
          alt="Placeholder"
          className="object-cover rounded-lg	"
          fill
        />
      </div>

      {/* 텍스트 섹션 */}
      <div
        className={`max-w-[200px] w-full text-white py-4 transition-all duration-300 ease-in-out `}
      >
        <div className='flex flex-col'>
          <h2 className="text-white text-lg font-semibold">{place.title}</h2>
          <div className="text-white flex gap-2">{place.categories.map(category =>
            <div key={category} className='w-[60px] text-sm'>#{category}</div>
          )}</div>
          <p className="text-white line-clamp-2">{place.description}</p>
          <div className="text-white text-sm">{place.location}</div>
        </div>
      </div>
    </div>
  )
};

export default CaseTile;
