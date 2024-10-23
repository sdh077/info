'use client'
import { useCreateQueryString } from "@/hooks/use-create-query-string";
import { useMediaQuery } from "@/hooks/use-media-query";
import { IPlace } from "@/interface/place";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/stores/filter-store-provider";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const { placeId } = useFilterStore(state => state)
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-2 container mx-auto ",
        placeId !== -1 ? 'md:grid-cols-3' : 'md:grid-cols-4',
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
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const { chagePlaceId, placeId } = useFilterStore(state => state)
  // if (isDesktop)
  //   return (
  //     <div
  //       className={cn(
  //         "relative row-span-1 rounded-xl group/bento hover:scale-[101%] transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 cursor-pointer",
  //         placeId === place.id ? "border-2 border-primary" : ''
  //       )}
  //       onClick={() => chagePlaceId(place.id)}
  //     >
  //       <Image
  //         src={`/place-image/${place.images[0]}`}
  //         alt="Placeholder"
  //         className="object-cover rounded-lg aspect-square"
  //         width={600}
  //         height={600}
  //       />
  //       <div className="translate-x-2 transition duration-200 flex justify-between items-center">
  //         <div>
  //           <div className="font-sans font-bold text-neutral-600 mt-2">
  //             {place.title}
  //           </div>
  //           <div className="font-sans font-normal text-neutral-600 mb-2  text-xs ">
  //             {place.description}
  //           </div>
  //         </div>
  //         <div className="flex gap-1">{place.categories.map(category =>
  //           <div key={category} className='w-fit text-sm'>#{category}</div>
  //         )}</div>
  //       </div>
  //     </div>
  //   );

  return (<div className="max-w-xs w-full group/card" onClick={() => chagePlaceId(place.id)}>
    <div
      className={cn(
        " cursor-pointer overflow-hidden relative card h-32 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between",
        " bg-cover bg-black/50"
      )}
      style={{
        backgroundImage: `url(/place-image/${place.images[0]})`
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
      <div className="flex flex-row items-center space-x-4 z-10">
        <div className="flex flex-col">

        </div>
      </div>
      <div className="text content bg-black/20 w-full h-full p-2">
        <h1 className="font-bold text-md md:text-2xl text-right text-gray-50 relative z-10">
          {place.title}
        </h1>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="font-normal text-base relative z-10">
        {place.description}
      </div>
      <div className="font-normal text-sm relative z-10 my-4">
        {place.categories.map(category =>
          <div key={category} className='w-fit text-sm'>#{category}</div>
        )}
      </div>
    </div>
  </div>)
};
