"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex h-8 w-8 items-center justify-center bg-white text-center text-gray-800 transition ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="pointer-events-none fill-current"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0 group-aria-expanded:translate-x-0"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            y="7"
            width="16"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 w-full overflow-hidden"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="bg-gray-50 px-5 py-2">
            <li>
              <Link href="/about" className="flex justify-center text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>About</Link>
            </li>
            <li className="py-2">
              <span className="flex justify-center text-gray-800 font-medium">Services</span>
              <ul className="pl-4">
                <li>
                  <Link href="/services/immigration" className="flex justify-center text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Immigration</Link>
                </li>
                <li>
                  <Link href="/services/pre-arrival" className="flex justify-center text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Pre-Arrival</Link>
                </li>
                <li>
                  <Link href="/services/post-arrival" className="flex justify-center text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Post-Arrival</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog" className="flex justify-center text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/packages" className="flex justify-center text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Packages</Link>
            </li>
            <li>
              <Link href="/commitment" className="flex justify-center text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Our Commitment</Link>
            </li>
            <li>
              <Link href="/contact" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2" onClick={() => setMobileNavOpen(false)}>
                <span>Contact</span>
                <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                </svg>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
