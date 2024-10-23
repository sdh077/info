'use client'
import { NAVER_KEY } from '@/lib/constants';
import { useFilterStore } from '@/stores/filter-store-provider';
import Script from 'next/script'
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
function NMap({ places, place }: { places: IPlace[], place: IPlace | undefined }) {
  React.useEffect(() => {
    if (window.naver && window.naver.maps && place) {
      initializeMap();
    }
  }, [place, places]);
  if (!places.length) return <div></div>
  const lng = place?.position.py ?? places[0].position.py
  const lat = place?.position.px ?? places[0].position.px
  const initializeMap = () => {
    const location = new naver.maps.LatLng(lng, lat);
    const mapOptions = {
      center: new window.naver.maps.LatLng(location),
      zoom: 15,
      minZoom: 13,
      zoomControl: true,
      scaleControl: true,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
      disableTwoFingerTapZoom: false,
      draggable: false,
      scrollWheel: false
    };
    const map = new window.naver.maps.Map('map', mapOptions);
    for (const [index, p] of places.entries()) {
      const location = new naver.maps.LatLng(p.position.py, p.position.px);

      const ICON_GAP = 31;
      const ICON_SPRITE_IMAGE_URL = '/sp_pin_hd.png';
      const iconSpritePositionX = (index * ICON_GAP) + 1;
      const iconSpritePositionY = 1;
      new naver.maps.Marker({
        map: map,
        position: location,
        icon: {
          url: ICON_SPRITE_IMAGE_URL,
          size: new naver.maps.Size(26, 36), // 이미지 크기
          origin: new naver.maps.Point(iconSpritePositionX, iconSpritePositionY), // 스프라이트 이미지에서 클리핑 위치
          anchor: new naver.maps.Point(13, 36), // 지도상 위치에서 이미지 위치의 offset
          scaledSize: new naver.maps.Size(395, 79)
        }
      });
    }
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

export default function Map({ places }: { places: IPlace[] }) {
  const { placeId, chagePlaceId } = useFilterStore(state => state)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const place = places.find(place => place.id === placeId)
  if (isDesktop) {
    return (
      <div className='w-[40%] min-w-[500px]'>
        {place && <div>{place.title}</div>}
        <NMap places={places} place={place} />
      </div>
    )
  }

  return (
    <Drawer open={placeId !== -1} onOpenChange={(open) => chagePlaceId(open ? placeId : -1)}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle >{place?.title}</DrawerTitle>
          <DrawerDescription>
            <NMap place={place} places={places} />
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
