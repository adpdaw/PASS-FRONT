import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { datosContexto } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import logo from "../../img/faviconLogoround.png";

/**Este componente es la cabecera de la página de inicio y sus enlaces cambian según el tipo de usuario. */
function IndexHeader() {
  var context = useContext(datosContexto);
  const [show, setShow] = useState(false);

  const Navigate = useNavigate();

  const url = "http://localhost/api/logout";
  /**Función que hace el logout. */
  const submitLogout = async () => {
    const response = await context.logout(url);
    if (response.status === 200) {
      Navigate("/");
    } else {
      alert("Something is wrong,please try again!!");
    }
  };

  return (
    <React.Fragment>
      <header className="header">
        <div className="navbar-area">
          <div className="container relative shadow-lg shadow-indigo-200">
            <div className="row items-center">
              <div className="w-full">
                <nav className=" flex items-center justify-between py-4 navbar navbar-expand-lg shadow-gray-100	 ">
                  <div className="container flex flex-wrap items-center justify-end mx-auto gap-10">
                    <a href="/" className="flex items-center shrink-1 w-8/12">
                      <img
                        src={logo}
                        className="h-6 mr-3 sm:h-9"
                        alt="MDcreations Logo"
                      />
                      <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-800">
                        MDcreations
                      </span>
                    </a>

                    {/* <!--menu user --> */}
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
                          <span className="sr-only">Open user menu</span>
                          <img
                            id="userPhoto"
                            className="w-8 h-8 rounded-full"
                            src="./img/user.svg"
                            alt=""
                          />
                        </button>
                        {/* <!-- Dropdown menu user --> */}
                        {show ? (
                          <div
                            className="absolute top-12 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="user-dropdown"
                          >
                            <div className="px-4 py-3">
                              <span className="block text-sm text-gray-900 dark:text-white">
                                {context.userConnected.name}{" "}
                              </span>
                              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                {" "}
                                {context.userConnected.email}{" "}
                              </span>
                            </div>
                            <ul
                              className="py-2"
                              aria-labelledby="user-menu-button"
                            >
                              <li>
                                <Link
                                  to="/user"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Profile
                                </Link>
                              </li>
                              <li>
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

                    <div
                      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-500"
                      id="mobile-menu-2"
                    >
                      <ul className="flex flex-col w-full p-4 mt-4 border border-gray-100 rounded-lg bg-300 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                          <Link
                            to="/"
                            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-indigo-100 md:bg-transparent md:text-indigo-700 md:p-0 dark:text-white"
                            aria-current="page"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={context.loggedIn ? "/user" : "/login"}
                            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-indigo md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-indigo dark:hover:bg-transparent dark:hover:text-indigo dark:border-gray-700"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-indigo md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-indigo dark:hover:bg-transparent dark:hover:text-indigo dark:border-gray-700"
                          >
                            Documents
                          </Link>
                        </li>
                        {context.loggedIn ? null : (
                          <li>
                            <Link
                              to="/login"
                              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-indigo md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-indigo dark:hover:bg-transparent dark:hover:text-indigo dark:border-gray-700"
                            >
                              Login
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default IndexHeader;
