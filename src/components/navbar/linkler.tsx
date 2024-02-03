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
          <NavigationMenuTrigger className="text-white max-md:text-xs py-1 px-2 font-bold bg-transparent max-md:text-black ">İletişime Geç</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
              <li className="row-span-3">
                <NavigationMenuLink className="" asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="https://api.whatsapp.com/send?phone=905307464899&text=Merhaba.%20Qr%20Web%20Siteniz%20%C3%BCzerinden%20ileti%C5%9Fime%20ge%C3%A7iyorum%20yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F"
                  >

                    <div className="mb-2 mt-4 max-md:mt-2 text-lg font-medium flex justify-center items-center flex-col gap-2">
                      <img className="w-10 max-md:w-8" src="wp.svg" alt="" />
                      <p className="font-bold max-md:text-sm">WhatsApp</p>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground flex text-center max-md:text-xs">
                      Tıklayarak WhatsaApp üzerinden mesaj yolu ile bize ulaşabilirsiniz...
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >

                    <div className="mb-2 mt-4 max-md:mt-2 text-lg font-medium flex flex-col items-center ">
                      <img className="max-md:w-10" src="instagram.svg" alt="" />
                      <p className="font-bold max-md:text-sm">Instagram</p>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground flex text-center max-md:text-xs">
                      Tıklayarak Instagram üzerinden mesaj yolu ile bize ulaşabilirsiniz...
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >

                    <div className="mb-2 mt-4 max-md:mt-2 text-lg font-medium flex justify-center items-center flex-col gap-2">
                      <img className="w-10 max-md:w-8" src="mail.svg" alt="" />
                      <p className="font-bold max-md:text-sm">E-Mail</p>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground flex text-center max-md:text-xs">
                      Tıklayarak E-Mail üzerinden mesaj yolu ile bize ulaşabilirsiniz...
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white max-md:text-xs py-1 px-2 font-bold bg-transparent max-md:text-black  ">Getting started</NavigationMenuTrigger>
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
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
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