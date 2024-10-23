'use client'
import { IPlace } from "@/interface/place";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/stores/filter-store-provider";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-2 ",
        'md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  place
}: {
  place: IPlace
}) => {
  const { chagePlaceId, placeId } = useFilterStore(state => state)
  const [enter, setEnter] = useState(false)
  return (<div className="max-w-xs w-full group/card h-fit" onClick={() => chagePlaceId(place.id)}>
    <div
      className={cn(
        " cursor-pointer overflow-hidden relative card h-40 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between",
        " bg-cover bg-center",
        `bg-[url(/place-image/${place.images[0]})] bg-cover`,
        `before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
        "hover:after:content-[''] hover:after:absolute hover:after:inset-0  hover:after:opacity-50",
        // "transition-all duration-500"
      )}
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}

      style={{
        backgroundImage: `url(/place-image/${place.images[enter ? 1 : 0]})`,
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 group-hover/card:bg-black/30 group-hover/card:scale-[101%] opacity-60"></div>
      <div className="relative text content hover:bg-black/20 w-full h-full p-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-md md:text-xl text-right text-gray-50 relative z-10">
            {place.title}
          </h1>
          <div className="font-normal text-base relative z-10 text-gray-200">
            {place.subTitle}
          </div>
        </div>
        <div className="absolute w-full bottom-0 hidden group-hover/card:flex flex-wrap font-normal text-sm text-gray-50 z-10 my-4">
          {place.description.map(description =>
            <div key={description} className='w-fit text-sm'>#{description}</div>
          )}
        </div>
      </div>
    </div>

  </div>)
};
