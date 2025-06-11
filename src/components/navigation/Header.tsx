"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../button/ThemeToggle";
import { navbarItems } from "@/lib/utils/info/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 fixed bg-white/10 backdrop-blur-md border-white/20 border-b w-full animate-in duration-500 fade-in">
      <nav
        aria-label="Global"
        className="flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 transition-transform hover:scale-105"
          >
            <span className="sr-only">Velari Voyages</span>
            <Image
              alt="Velari Voyages Logo"
              src="/images/logo.png"
              className="w-auto h-8"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center hover:bg-white/10 -m-2.5 p-2.5 rounded-md transition-colors hover:scale-105"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="lg:flex items-center lg:gap-x-6 hidden">
          {navbarItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-1 font-semibold text-sm/6 hover:text-blue-300 transition-colors hover:scale-105"
                    type="button"
                  >
                    {item.label}
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-white/10 backdrop-blur-md border-white/20 min-w-[180px]"
                >
                  {item.dropdown.map((sub) => (
                    <DropdownMenuItem asChild key={sub.label}>
                      <a
                        href={sub.href}
                        className="block hover:bg-white/20 px-4 py-2 rounded-md text-sm transition-colors hover:translate-x-1"
                      >
                        {sub.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-semibold text-sm/6 hover:text-blue-300 transition-colors hover:scale-105"
              >
                {item.label}
              </a>
            )
          )}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="z-50 fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-white/10 backdrop-blur-md px-6 py-6 border-white/20 border-l w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="-m-1.5 p-1.5 transition-transform hover:scale-105"
            >
              <span className="sr-only">Velari Voyages</span>
              <Image
                alt="Velari Voyages Logo"
                src="/images/logo.png"
                className="w-auto h-8"
                width={32}
                height={32}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-white/10 -m-2.5 p-2.5 rounded-md transition-colors hover:scale-105"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navbarItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.label}>
                      <details>
                        <summary className="flex justify-between items-center hover:bg-white/10 -mx-3 px-3 py-2 border border-white/20 rounded-lg font-semibold text-base/7 cursor-pointer">
                          {item.label}
                          <ChevronDownIcon className="inline ml-2 w-4 h-4" />
                        </summary>
                        <div className="space-y-1 mt-2 pl-4">
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block hover:bg-white/10 -mx-3 px-3 py-2 border border-white/10 rounded-lg text-gray-300 text-sm transition-colors hover:translate-x-1 hover:"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </details>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:bg-white/10 -mx-3 px-3 py-2 border border-white/20 rounded-lg font-semibold text-base/7 transition-colors hover:translate-x-1"
                    >
                      {item.label}
                    </a>
                  )
                )}
                <div className="mt-4 pt-4 border-white/20 border-t">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
