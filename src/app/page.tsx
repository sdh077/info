import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import exerciseThumb from '@public/image/exercise_thumb.jpg'
import foodThumb from '@public/image/food_thumb.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-32">
      <div
        className="h-64 w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(54.09deg,#0348dd 2.03%,#8142f5 48.63%,#ee4dd4 96.22%)' }}
      >
        <Input type="text" placeholder="instagram link" className="w-[500px]" />
        <Button>추가</Button>
      </div>
      <div className="flex gap-4">
        <Video link="/video/food.mp4" poster="/image/exercise_thumb.jpg" />
        <Video link="/video/exercise.mp4" poster="/image/food_thumb.jpg" />
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