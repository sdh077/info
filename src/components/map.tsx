'use client'
import { NAVER_KEY } from '@/lib/constants';
import { useFilterStore } from '@/stores/filter-store-provider';
import Script from 'next/script'
import places from '@/data/theplace.json'
import { renderToString } from 'react-dom/server';

export type NaverMap = naver.maps.Map;
function MapInfo({ place }: { place: IPlace }) {
  return (
    <div className='w-[150px] h-full text-center p-2.5 relative border-none'>
      <Image src={`/place-image/${place.images[0]}`} width={150} height={150} alt={place.title}
        className='object-cover'
      />
      {place.title}
    </div>
  )
}
function NMap({ place }: { place: IPlace }) {
  React.useEffect(() => {
    if (window.naver && window.naver.maps && place) {
      initializeMap();
    }
  }, [place]);

  if (!place) return <></>
  const lng = place?.position.py
  const lat = place?.position.px;
  const initializeMap = () => {
    const location = new naver.maps.LatLng(lng, lat);
    const mapOptions = {
      center: new window.naver.maps.LatLng(location),
      zoom: 17,
      minZoom: 17,
      zoomControl: false,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
      disableTwoFingerTapZoom: false,
      draggable: false,
      scrollWheel: false
    };
    const map = new window.naver.maps.Map('map', mapOptions);
    const marker = new naver.maps.Marker({
      map: map,
      position: location
    });
    const infowindow = new naver.maps.InfoWindow({
      content: renderToString(<MapInfo place={place} />)
    });
    infowindow.open(map, marker);
  }
  return (
    <div className='sticky top-32 w-full h-full order-1 md:order-none'>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_KEY}`}
        onReady={initializeMap}
      />
      <div id='map' style={{ width: '100%', height: '400px' }} />
    </div>
  )
}

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { IPlace } from '@/interface/place';
import Image from 'next/image';

export default function Map() {
  const { placeId, chagePlaceId } = useFilterStore(state => state)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const place = places.find(place => place.id === placeId)
  if (!place) return <></>
  if (isDesktop) {
    return (
      <div className='w-full'>
        <div>{place.title}</div>
        <NMap place={place} />
      </div>
    )
  }

  return (
    <Drawer open={placeId !== -1} onOpenChange={(open) => chagePlaceId(open ? placeId : -1)}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle >{place.title}</DrawerTitle>
          <DrawerDescription>
            <NMap place={place} />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
