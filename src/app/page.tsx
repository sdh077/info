import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Video link="/video/food.mp4" />
      <Video link="/video/exercise.mp4" />
    </main>
  );
}
function Video({ link }: { link: string }) {
  return (
    <video width="320" height="240" controls preload="none" className="w-64">
      <source src={link} type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}