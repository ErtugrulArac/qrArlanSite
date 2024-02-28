"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { logolar } from "./logolar"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function CarouselSpacing() {
  return (
    <div className="justify-center items-center w-full py-20 max-lg:py-10 bg-white flex">

      <Carousel
       plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
      className="w-full max-w-[90%] max-sm:w-[90%] max-lg:w-[80%]">
        <CarouselContent className="-ml-1">
          {logolar.map((item) => (
            <CarouselItem key={item.id} className="pl-1 basis-[40%] md:basis-[30%] lg:basis-[15%]">
              <div className="p-1">
                <img src={item.logo} alt={item.name} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}