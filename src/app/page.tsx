import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import exerciseThumb from '@public/image/exercise_thumb.jpg'
import foodThumb from '@public/image/food_thumb.jpg'
import { Navigation } from "@/components/navigation";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const items = [
    {
      id: 1,
      cate: 'exercise',
      type: 'waist',
      link: '/video/exercise.mp4',
      poster: '/image/exercise_thumb.jpg'
    },
    {
      id: 2,
      cate: 'food',
      type: 'diet',
      link: '/video/food.mp4',
      poster: '/image/food_thumb.jpg'
    }, {
      id: 3,
      cate: 'exercise',
      type: 'waist',
      link: '/video/exercise.mp4',
      poster: '/image/exercise_thumb.jpg'
    },
    {
      id: 4,
      cate: 'food',
      type: 'diet',
      link: '/video/food.mp4',
      poster: '/image/food_thumb.jpg'
    }, {
      id: 5,
      cate: 'exercise',
      type: 'waist',
      link: '/video/exercise.mp4',
      poster: '/image/exercise_thumb.jpg'
    },
    {
      id: 6,
      cate: 'food',
      type: 'diet',
      link: '/video/food.mp4',
      poster: '/image/food_thumb.jpg'
    }
  ]
  const filterItem = items.filter(item => {
    if (!searchParams.cate) return true
    if (!searchParams.type) return item.cate === searchParams.cate
    return item.cate === searchParams.cate && item.type === searchParams.type
  })
  console.log(searchParams)
  return (
    <main className="flex min-h-screen flex-col items-center gap-32">
      <div
        className="h-64 w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(54.09deg,#0348dd 2.03%,#8142f5 48.63%,#ee4dd4 96.22%)' }}
      >
        <Input type="text" placeholder="instagram link" className="w-[500px]" />
        <Button>추가</Button>
      </div>
      <div className="w-min-[960px]">
        <Navigation />
        <div className="grid grid-cols-4 gap-4">
          {filterItem.map(item =>
            <Video key={item.id} link={item.link} poster={item.poster} />
          )}
        </div>
      </div>
    </main>
  );
}
function Video({ link, poster }: { link: string, poster: string }) {
  return (
    <video width="320" height="240" controls preload="none" className="w-64" poster={poster}>
      <source src={link} type="video/mp4" />
      <track
        src="/image/exercise_thumb.jpg"
        kind="subtitles"
        srcLang="ko"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}