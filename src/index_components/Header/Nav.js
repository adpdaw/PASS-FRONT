import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { datosContexto } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import logo from "../../img/faviconLogoround.png";
import {} from '../Client/Folder/FoldersPage.css';
import {AiOutlineUser} from 'react-icons/ai'
import { Transition } from "@headlessui/react";
import logoMd from "../../img/logo/logo-nav.svg";

function Nav() {
    var context = useContext(datosContexto);
    const [show, setShow] = useState(false); 
    const [isOpen, setIsOpen] = useState(false);

    //const [showBurger, setShowBurger] = useState(false);
    var user = JSON.parse(sessionStorage.getItem('user'));

    const Navigate = useNavigate();

    const url = "http://localhost/api/logout";
    /**Función que hace el logout. */
    const submitLogout = async () => {
      const response = await context.logout(url);
    if (response.status === 200) {
        Navigate("/login");
      } else {
        alert("Something is wrong,please try again!!");
      }
    };


    return (
      <div>
       <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-7">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <div className="flex items-baseline space-x-4 flex-shrink-0 pt-10 cursor-pointer">
               
                       <img
                        src={logoMd}
                        className=" mr-3 "
                        alt="MDcreations Logo"
                      />
            </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="hover:underline hover:text-gray-400 text-black  px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to={context.loggedIn ? "/user" : "/login"}
                    className="hover:underline hover:text-gray-400 text-black  px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Profile
                  </Link>

                  <Link
                    to="/"
                    className="hover:underline hover:text-gray-400 text-black  px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Projects
                  </Link>
                </div>
              </div>
             
            </div>
            {context.loggedIn ? (
                      <div className="center md:order-2">
                        <button
                          onClick={() => {
                            setShow(!show);
                          }}
                          type="button"
                          className="flex mr-3 text-sm bg-g 
                            rounded-full md:mr-0 focus:ring-2 focus:ring-green-300 
                            dark:focus:ring-zinc-600"
                          id="user-menu-button"
                          aria-expanded="false"
                          data-dropdown-toggle="user-dropdown"
                          data-dropdown-placement="bottom"
                        >
                          <AiOutlineUser size={30} color="black"/>
                        </button>
                        {/* <!-- Dropdown menu user --> */}
                        {show ? (
                          <div
                            className="absolute top-12 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="user-dropdown"
                          >
                            <div className="px-4 py-3">
                              <span className="block text-sm text-gray-900 dark:text-white">
                                {user.name}{" "}
                              </span>
                              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                {" "}
                                {user.email}{" "}
                              </span>
                            </div>
                            
                            <ul
                              className="py-2"
                              aria-labelledby="user-menu-button"
                            >
                                 <li className="text-xl">
                                <Link
                                  to="/user"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Profile
                                </Link>
                              </li>
                                 <li className="text-xl">
                                <Link
                                  onClick={() => {
                                    submitLogout();
                                  }}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Sign out
                                </Link>
                              </li>
                            </ul>

                            <button
                              data-collapse-toggle="mobile-menu-2"
                              type="button"
                              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              aria-controls="mobile-menu-2"
                              aria-expanded="false"
                            >
                              <span className="sr-only">Open main menu</span>
                              <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
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