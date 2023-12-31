'use client'
import Logo from 'components/Logo'
import MotArrow from 'components/icons/MotArrow'
import MotBurger from 'components/icons/MotBurger'
import MotEmail from 'components/icons/MotEmail'
import MotPig from 'components/icons/MotPig'
import MotWordpress from 'components/icons/MotWordpress'
import MotDev from 'components/icons/MotDev'
import MotUI from 'components/icons/MotUI'
import MotHosting from '@/componentsicons/MotHosting'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  FingerPrintIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const menu = [
  { name: 'Products', description: 'Personal Cloud, Secure Email, and VPN', href: '#', icon: MotEmail },
  { name: 'Pricing', description: 'See how much we take', href: '#', icon: MotPig },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Wordpress', description: 'Wordpress Hosting, Design', href: '#', icon: MotWordpress },
  { name: 'Hosting', description: 'Full Enterprise Cloud, VPS, Dedicated', href: '#', icon: MotHosting },
  { name: 'Web Development', description: 'Websites, Headless, iOS, Google Play', href: '#', icon: MotDev },
  { name: 'For Business', description: 'Business Email, Server, Tech Projects', href: '#', icon: ArrowPathIcon },
]
/* const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
] */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Motsinger Development</span>
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MotBurger className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-2xl font-semibold leading-6 text-motteal-900">
              <MotArrow className="h-8 w-8 flex-none fill-motteal-900" aria-hidden="true"/>         
              Menu
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md'> 
              
              <div id='3'className="absolute top-5 bottom-5 left-[-29px] right-[-29px] bg-white outline-motviolt-50 outline outline-8 z-[-3]"></div> 
              <div id='2 box'className="absolute top-5 bottom-5 left-[-30px] right-[-30px] bg-white z-[0] "></div>
              <div id='2 box'className="absolute top-8 bottom-8 left-[-37px] right-[-37px] bg-white z-[-0] "></div>
              <div id='1'className="absolute top-8 bottom-8 left-[-36px] right-[-36px] bg-white outline-motviolt-50 outline outline-8 z-[-5]"></div>
              <div id='2 box'className="absolute top-4 bottom-4 left-[-6px] right-[-6px] bg-white z-[-0] "></div>
              <div id='4' className="absolute top-2 bottom-2 left-[-20px] right-[-20px] bg-white outline-motviolt-50 outline outline-8 z-[-2]"></div> 
                {/*outline of border  */}
                
        
             
                
                <div className="p-4">
                  {menu.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div> */}
        
    

              </Popover.Panel>
            
            </Transition>
            
          </Popover>

        </Popover.Group>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-2xl font-semibold leading-6 text-motteal-900">
            Log in
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-motdark text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo />
            </a>
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-motviolt-600">
                        Products
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                       {/*  {[...menu, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-motviolt-600"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))} */}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-motviolt-600"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-motviolt-600"
                >
                  Wordpress
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-motviolt-600"
                >
                  Hosting
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-motviolt-600"
                >
                  Reasources
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-motviolt-600"
                >
                  For Business
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-motviolt-600"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
 
    </header>
  )
}
