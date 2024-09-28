"use client"
import React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  href: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
    page: "home"
  },
  {
    label: "About",
    href: "/About",
    page: "about"
  },
  {
    label: "Blog",
    href: "/Blog",
    page: "Blog"
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  
  return (
    <header className="bg-white bg-opacity-70 w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-opacity-40 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div key={"/"} className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">
                <a href={"/"}>
                  Jiaming&#39;s Blog
                </a>
                </h2>
              </div>
            <div className="md:hidden">
              <button
                className="p-2 text-black-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return(
                  <div key={item.href}>
                    <a href={item.href}>
                      {item.label}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
