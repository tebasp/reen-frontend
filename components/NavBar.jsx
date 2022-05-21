/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <header>
      <Popover className="relative bg-white">
        <div className="w-full mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Logo"
                  />
                </a>
              </Link>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/survey">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Encuestas
                </a>
              </Link>
            </Popover.Group>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/results">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
                  Resultados
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Movil Menu */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                      <span className="sr-only">Cerrar menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="#">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Home
                    </a>
                  </Link>

                  <Link href="#">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Encuestas
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-base font-medium text-white bg-primary-600 rounded px-4 py-2 hover:bg-primary-400">
                      Resultados
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}
