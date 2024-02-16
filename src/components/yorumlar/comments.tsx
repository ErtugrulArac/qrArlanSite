import * as React from "react"
import { comments } from "./yorumlar"
import { FaUserCheck } from "react-icons/fa6";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[200px] md:h-[500px]">
        {comments.map((item) => (
          <CarouselItem key={item.id} className="pt-1 md:basis-1/2  flex items-center justify-center">
            <div className="p-1  flex items-center justify-center w-full">
              <Card className=" flex items-center justify-center md:w-[60%] w-[90%]">
                <CardContent className="flex flex-col gap-8 items-center justify-center p-6">
                <FaUserCheck size={30} />
                  <span className="font-fontpopins font-normal">{item.comment}</span>
                  <span className="text-xl flex items-center gap-3 font-semibold text-[#8b38cb] font-fontpopins">  {item.name} </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
