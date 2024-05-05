import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { download } from "@/config/contents"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function FeatureCards() {
  return (
    <section id="download" className="bg-slate-50 dark:bg-slate-900">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        {download.header || download.subheader ? (
          <HeadingText subtext={download.subheader}>
            {download.header}
          </HeadingText>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {download.content.map((cards) => {
            const Icon = Icons[cards.icon || "blank"]

            return (
              <Card
                key={cards.text}
                className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
              >
                <div className="flex">
                  <Icon className="h-[6rem] w-[6rem]" />
                </div>
                <div className="space-y-2">
                  <CardTitle>{cards.text}</CardTitle>
                  <CardDescription>{cards.subtext}</CardDescription>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
