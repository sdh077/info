'use client'
import { IPlace } from '@/interface/place';
import React, { useState } from 'react';

const CaseTile = ({ place }: { place: IPlace }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        <img
          src={place.images[0]}
          alt="Placeholder"
          className="w-full h-full object-cover rounded-lg object-top	"
        />
      </div>

      {/* 텍스트 섹션 */}
      <div
        className={`absolute bottom-0 w-full p-4 transition-all duration-300 ease-in-out 'h-1/3 opacity-100'`}
      >
        <h2 className="text-lg font-semibold">{place.title}</h2>
        <p className=" line-clamp-2">{place.description}</p>
        <p className="">{place.location}</p>
      </div>
    </div>
  );
};

export default CaseTile;
