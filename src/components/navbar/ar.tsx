"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-white" asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Button variant="link" className="text-white hover:text-purple-400 transition px-0">
            <h1 className="text-sm font-semibold">Arlan Medya</h1>
          </Button>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-gradient-to-br from-slate-900 to-black border border-slate-700/50 backdrop-blur-sm">
        <div className="flex justify-between space-x-4">
          <Avatar className="border-2 border-purple-500/50">
            <AvatarImage src="arlan.webp" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="space-y-2 flex-1">
            <h4 className="text-sm font-bold text-white">@arlanmedya</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              QR Menü Sistemi ve Dijital Çözümler ile işletmenizi geleceğe taşıyoruz.
            </p>
            <div className="flex items-center pt-2 text-xs text-gray-400">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Kuruluş: 2021</span>
            </div>
            <div className="pt-2 text-xs text-gray-500">
              © 2021-2025 Tüm Hakları Saklıdır
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
