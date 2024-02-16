"use client"

import * as React from "react"
import Link from "next/link"
import { FaHome } from "react-icons/fa";
import { RiHome4Line } from "react-icons/ri";

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex   gap-4">

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white max-md:text-xs py-1 px-2 font-bold bg-transparent max-md:text-black  ">Menü</NavigationMenuTrigger>
          <NavigationMenuContent className="w-full  ">
            <ul className="grid gap-3 p-4 md:w-[400px] max-md:w-full lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-3 ">
                <NavigationMenuLink className="bg-black text-white" asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >

                    <div className="mb-2 mt-4 text-lg font-medium flex items-center flex-col ">
                      <RiHome4Line size={70} />
                      <p className="font-bold opacity-80">Anasayfa</p>
                    </div>

                    <p className="text-xs leading-tight text-muted-foreground text-white flex text-center opacity-70  ">
                      Anasayfa'ya dönerek Qr Menü sistemlerimiz hakkında detaylı bilgi alabilirsiniz.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/hakkimizda" title="Hakkımızda">
                Arlan Medya hakkında detaylı bilgi alabilirsiniz.
              </ListItem>
              <ListItem href="/iletisim" title="İletişim">
                Bu sayfadan Arlan Medya ile iletişime geçebilirsiniz.
              </ListItem>
              <ListItem href="#yorumlar" title="Müşteri Yorumlar">
                Arlan Medya için Erzrurum qr menü müşteri yorumları.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
