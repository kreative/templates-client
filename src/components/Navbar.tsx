/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "What's Obsidian?", href: "/whats-obsidian" },
  { name: "FAQs", href: "/faqs" },
  {
    name: "Contact us",
    href: "https://support.kreativeusa.com/templates#submit-issue",
  },
  { name: "Get help", href: "https://support.kreativeusa.com/templates" },
  { name: "Request templates", href: "/request-template" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
    <div className="bg-red-600 text-center py-2">
      <p className="text-white">This project has been archived, all data you see is dummy data!</p>
    </div>
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Kreative Templates</span>
            <img
              className="h-7 w-auto"
              src="https://cdn.kreativeusa.com/k-templates/kreativetemplates-type-logo.png"
              alt="Kreative Templates logo in color"
            />
            <p className="text-md tracking-widest">FOR OBSIDIAN</p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              <Link
                href={item.href}
                className="text-lg font-normal leading-6 text-gray-800"
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            <Link
              href="/become-an-author"
              className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Become an author
            </Link>
          </motion.div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kreative Templates</span>
              <Image
                className="h-7 w-auto sm:hidden"
                src="https://cdn.kreativeusa.com/k-templates/kreativetemplates-type-logo.png"
                alt=""
                height={50}
                width={300}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/become-an-author"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Become an author
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </div>
  );
}
