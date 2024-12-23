'use client'
import { IPlace } from "@/interface/place";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/stores/filter-store-provider";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
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
        "grid grid-cols-1",
        "md:grid-cols-3",
        "gap-2",
        'lg:grid-cols-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  place, id
}: {
  place: IPlace, id: string | undefined
}) => {
  const [carousel, setCarousel] = useState(0)
  const { chagePlaceId, placeId } = useFilterStore(state => state)
  const [enter, setEnter] = useState(false)
  const [isBook, setBook] = useState(place.bookmark?.length && place.bookmark[0].use_yn)
  const handleBook = async (forBook: boolean) => {
    const supabase = createClient()
    if (!id) return

    const { data: bookmark } = await supabase.from('bookmark').select('*').eq('user_id', id).eq('place_id', place.id).single()
    const q = bookmark ?
      supabase.from('bookmark').update({ use_yn: forBook }).eq('id', bookmark.id) :
      supabase.from('bookmark').insert({ place_id: place.id, user_id: id, use_yn: forBook })
    q.then(() => setBook(forBook))

  }

  return (
    <div className="w-full group/card h-fit bg-white" >
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-80 shadow-xl mx-auto backgroundImage flex flex-col justify-between",
          " bg-cover bg-center",
          `bg-[url(/place-image/${place.images[0]})] bg-cover`,
          `before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0  hover:after:opacity-50",
          // "transition-all duration-500"
        )}

        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}

        style={{
          backgroundImage: `url(/place-image/${place.images[carousel]})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 group-hover/card:bg-black/30 group-hover/card:scale-[101%] opacity-60 z-10" onClick={() => chagePlaceId(place.id)}></div>
        <div className="relative text content hover:bg-black/20 w-full h-full p-2 flex flex-col justify-between">
          <div>
            <div className="font-normal text-base relative z-10 text-gray-200">
              {place.subTitle}
            </div>
            <div className="absolute w-full bottom-0 hidden group-hover/card:flex flex-wrap font-normal text-sm text-gray-50 z-10 my-4">
              {place.description.map(description =>
                <div key={description} className='w-fit text-sm'>#{description}</div>
              )}
            </div>
          </div>
        </div>
        {enter && place.images.length > 1 ? <>
          <ChevronLeft className="absolute top-[50%] p-1 left-3 w-4 h-4 bg-gray rounded-full z-10 text-white" onClick={() => setCarousel((carousel + 1) % 2)} />
          <ChevronRight className="absolute top-[50%] p-1 right-3 w-4 h-4 bg-gray rounded-full z-10 text-white" onClick={() => setCarousel((carousel + 1) % 2)} />
        </> : <></>
        }
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl md:text-3xl text-right relative z-10">
          {place.title}
        </h1>
        {id && isBook ? <BsBookmarkFill onClick={() => handleBook(false)} /> : <BsBookmark onClick={() => handleBook(true)} />}
      </div>
    </div>)
};
