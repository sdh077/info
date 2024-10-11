'use client'
import { Place } from "@/components/place";
import { IPlace } from "@/interface/place";
import { useFilterStore } from "@/stores/filter-store-provider";

export default function PlaceBox({
  places
}: {
  places: IPlace[]
}) {
  const { ableItem } = useFilterStore(state => state);
  // const filterFn = (items: string[]) => {
  //   const set = new Set(ableItem());
  //   for (let item of items) {
  //     if (set.has(item)) {
  //       return true; // 공통된 값이 있으면 true 반환
  //     }
  //   }
  //   return false;
  // }
  return (
    <>
      {places.map(place =>
        <Place key={place.title} place={place} isView={true} />
      )}
    </>
  )
}
