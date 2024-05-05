import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"
import { siteConfig } from "@/config/site"

export default function HeroHeader() {
  return (
    <section className="space-y-24 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          {heroHeader.header}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {heroHeader.subheader}
        </p>
        <div className="space-x-6">
          <Link
            href="/#download"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Download for Desktop
          </Link>
        </div>
      </div>
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center ">
          <Image
            src={heroHeader.image}
            width={1100}
            height={500}
            alt="Header image"
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}
