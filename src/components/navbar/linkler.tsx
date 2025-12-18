"use client"

import * as React from "react"
import { RiHome4Line } from "react-icons/ri"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white text-sm font-semibold bg-transparent hover:bg-slate-800/50 data-[state=open]:bg-slate-800/50 rounded-lg transition">
            Menü
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-full">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-gradient-to-br from-slate-900 to-black border border-slate-700/50 rounded-lg backdrop-blur-sm">
              <li className="row-span-3">
                <NavigationMenuLink className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-white border border-purple-500/20 hover:border-purple-500/50 transition" asChild>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    title="QR Menü Ana Sayfa"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-bold flex items-center flex-col">
                      <RiHome4Line size={50} />
                      <p className="font-bold opacity-90 mt-2">Anasayfa</p>
                    </div>
                    <p className="text-xs leading-tight text-gray-300 flex text-center opacity-70">
                      QR Menü Sistemi hakkında detaylı bilgi alabilirsiniz.
                    </p>
                  </motion.a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/hakkimizda" title="Hakkımızda">
                Arlan Medya ve vizyon hakkında.
              </ListItem>
              <ListItem href="/iletisim" title="İletişim">
                Bize ulaşın ve teklif alın.
              </ListItem>
              <ListItem href="/demo" title="Demo">
                QR Menü sistemini deneyimleyin.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: string
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <motion.a 
          whileHover={{ x: 5 }}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800/50 hover:text-white focus:bg-slate-800/50 focus:text-white text-gray-300",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </motion.a>
      </NavigationMenuLink>
    </li>
  )
)

ListItem.displayName = "ListItem"