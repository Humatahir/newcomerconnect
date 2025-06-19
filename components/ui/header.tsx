'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed top-2 z-50 w-full md:top-6 transition-all duration-300 ${!top ? 'bg-white/90 shadow-lg' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 ${!top ? 'before:hidden' : 'bg-white/90 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'}`}>
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <Dropdown title="Services">
                {/* 2nd level */}
                <li>
                  <Link href="/services/immigration" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">
                    Immigration Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/pre-arrival" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">
                    Pre-Arrival Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/post-arrival" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">
                    Post-Arrival Services
                  </Link>
                </li>
              </Dropdown>
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/commitment"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-blue-600 text-white shadow-sm hover:bg-blue-700"
              >
                Book a Consultation
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
