
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage
} from "@/components/ui/card"
import { ICard } from "@/interface/info"
import Image from "next/image"
import { PlaceImageCarousel } from "./place"

export function InfoCard({ content }: { content: ICard }) {
  return (
    <Card className={cn("w-full")}>
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>
          {content.subTitle}
        </CardDescription>
        <CardImage>
          {
            typeof content.poster === 'string' ?
              <Image className="rounded-md" src={content.poster} alt="content image" width={1000} height={400} />
              :
              <div className="w-full h-full overflow-hidden">
                <PlaceImageCarousel images={content.poster} />
              </div>
          }
        </CardImage>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {content.description.map((description, index) => (
            <div
              key={index}
              className="items-start pb-2 last:mb-0 last:pb-0"
            >
              <p className="text-sm font-medium leading-none">
                {description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
