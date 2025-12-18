"use client"

import React from "react"
import { comments } from "./yorumlar"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function CommentsCarousel() {
  const plugin = React.useRef(
    Autoplay({ 
      delay: 5500,
      stopOnInteraction: true,
    })
  )

  return (
    <div className="w-full px-2 sm:px-4 md:px-8">
      <Carousel
        opts={{
          align: "center",
        }}
        plugins={[plugin.current]}
        orientation="vertical"
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent className="-mt-1 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px]">
          {comments.map((item, i) => (
            <CarouselItem key={item.id} className="pt-1 flex items-center justify-center basis-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full flex items-center justify-center px-2"
              >
                <Card className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/30 hover:border-purple-500/70 transition cursor-pointer">
                  <CardContent className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center p-4 sm:p-6 md:p-8">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Comment Text */}
                    <p className="font-medium text-gray-200 text-center text-xs sm:text-sm md:text-base italic line-clamp-3 sm:line-clamp-none">
                      "{item.comment}"
                    </p>

                    {/* Name */}
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        {item.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">QR Menü Kullanıcısı</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-1 mt-8 sm:mt-10 md:mt-12">
          <CarouselPrevious className="border-0 text-purple-400/70 hover:text-purple-300 transition w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:bg-transparent" />
          <CarouselNext className="border-0 text-purple-400/70 hover:text-purple-300 transition w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:bg-transparent" />
        </div>
      </Carousel>
    </div>
  )
}

export default CommentsCarousel
