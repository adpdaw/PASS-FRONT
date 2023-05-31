import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../img/faviconLogoround.png";
import logoMd from "../../img/logo/logo-nav.svg";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
       <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-7">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <a href="/" className="flex items-center shrink-1 w-8/12">
                      <img
                        src={logo}
                        className="h6 mr-3 sm:h-9"
                        alt="MDcreations Logo"
                      />
                      <span className="self-center text-3xl font-semibold whitespace-nowrap rounded text-indigo-700  md:hover:text-gray-400 md:p-0 dark:border-gray-700">
                        MDcreations
                      </span>
                    </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-400 text-black  px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="hover:underline hover:text-gray-400 text-black  px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="hover:underline hover:text-gray-400 text-black  px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Projects
                  </a>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-indigo-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className=" hover:bg-indigo-500 hover:text-gray-600 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className=" hover:bg-indigo-500 hover:text-gray-600 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className=" hover:bg-indigo-500 hover:text-gray-600 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      </div>
  );
}

export default Nav;