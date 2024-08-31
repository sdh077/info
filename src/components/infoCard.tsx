
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ICard } from "@/interface/info"
import Image from "next/image"

export function InfoCard({ content }: { content: ICard }) {
  return (
    <Card className={cn("w-full")}>
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription><Image className="rounded-md" src={content.poster} alt="content image" objectFit="cover" width={320} height={320} />.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {content.description.map((description, index) => (
            <div
              key={index}
              className="items-start pb-2 last:mb-0 last:pb-0"
            >
              <div className="w-full">
                <p className="text-sm font-medium leading-none">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
