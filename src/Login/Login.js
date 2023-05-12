import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { datosContexto } from "../index_components/Context/Context";
/**Este componente es un formulario que te permite iniciar sesión. */
function Login() {
  const url = "http://localhost/api/login";
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  var context = useContext(datosContexto);

  /**Función que hace el LOGIN, y según el tipo de usuario te redirige a la zona de cliente o administrador. */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const pathApi = await context.login(url, values);
    if (
      values.email !== "" &&
      values.password !== "" &&
      pathApi.path !== undefined
    ) {
      Navigate(pathApi.path);
    } else {
      setError(true);
    }
  };
  /** Función que actualize el estado values.*/
  function handleChange(evt) {
    /*
        evt.target es el elemento que ejecuta el evento
        name identifica el input y value describe el valor actual
      */
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }

  return (
    <React.Fragment>
      <div className="h-screen overflow-auto flex items-center justify-center">
        <div className="w-full max-h-screen flex items-center justify-center">
          <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full sm:w-5/6 md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-full bg-white flex items-center justify-center bg-gradient-to-r from-indigo-100 to-indigo-400 ">
              <div className="w-full px-12 h-full">
                <h2 className="mt-6 text-center text-2xl font-bold tracking-wide text-gray-800">
                  Welcome Back!
                </h2>
                <p className="text-center text-sm text-gray-600 mt-2">
                  Don't have an account?
                  <a
                    href="signup"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                    title="Sign In"
                  >
                    {" "}
                    Sign in here
                  </a>
                </p>
                <form className="my-8 text-sm" onSubmit={handleSubmit}>
                  <div className="flex flex-col my-4">
                    <label htmlFor="emailLogin" className="text-gray-700">
                      Email Address{" "}
                      <span>
                        <i className="fas fa-exclamation-circle failure-icon"></i>
                        <i className="fas fa-check-circle success-icon"></i>
                      </span>
                    </label>
                    <input
                      type="email"
                      autoComplete="user-email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 rounded text-sm text-gray-900"
                      placeholder="Enter your email"
                    />
                    <div className="error relative flex-col"></div>
                  </div>
                  <div className="flex flex-col my-4">
                    <label htmlFor="passwordLogin" className="text-gray-700">
                      Password
                      <span>
                        <i className="fas fa-exclamation-circle failure-icon"></i>
                        <i className="fas fa-check-circle success-icon"></i>
                      </span>
                    </label>
                    {/* <div dangerouslySetInnerHTML={{ __html: alpineTemplate }} /> */}
                    <div className="relative flex items-center mt-2">
                      <input
                        className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 rounded text-sm text-gray-900"
                        autoComplete="current-password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        type={show ? "text" : "password"}
                      />
                      <button
                        type="button"
                        className="absolute right-3 bg-transparent flex items-center justify-center text-gray-600"
                        onClick={() => setShow(!show)}
                      >
                        {show ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            width={20}
                            color="red"
                          >
                            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            width={20}
                          >
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                          </svg>
                        )}
                      </button>{" "}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div>
                  <div className="my-4 flex items-center justify-between space-x-4">
                    <button
                      type="submit"
                      id="btn-login"
                      className="bg-indigo-600 hover:bg-indigo-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase"
                    >
                      Login
                    </button>
                    {error ? (
                      <p className="text-red-700 p-5">
                        One of your credentials is wrong, please try again!
                      </p>
                    ) : null}
                  </div>
                  <div className="my-4 flex items-center justify-end space-x-4">
                    <a
                      href="/signup"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                      title="Forgot Password"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
                <div className="flex items-center justify-between">
                  <div className="w-full h-[1px] bg-gray-500"></div>
                  <span className="text-sm uppercase mx-6 text-gray-600">
                    Or
                  </span>
                  <div className="w-full h-[1px] bg-gray-500"></div>
                </div>

                <div className="text-sm">
                  <a
                    href="/"
                    className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 326667 333333"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path
                        d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                        fill="#4285f4"
                      ></path>
                      <path
                        d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                        fill="#34a853"
                      ></path>
                      <path
                        d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                        fill="#fbbc04"
                      ></path>
                      <path
                        d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                        fill="#ea4335"
                      ></path>
                    </svg>

                    <span> Sign up with Google</span>
                  </a>
                  <a
                    href="/"
                    className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    <svg
                      fill="#1C2033"
                      className="w-5 h-5"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
                    </svg>
                    <span>Sign up with GitHub</span>
                  </a>
                  <a
                    href="/"
                    className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.88 122.31"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <title>linkedin-app</title>
                      <path
                        className="cls-1"
                        d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"
                        fill="#0a66c2"
                      ></path>
                      <path
                        className="cls-2"
                        d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"
                        fill="#fff"
                      ></path>
                    </svg>
                    <span>Sign up with LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 2xl:w-3/4 h-full bg-cover">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src="./img/logo/logo-CP.svg"
                    alt="Logo PassCode"
                    width="600"
                    height="550"
                  />
                </div>
                <p className="text-gray-500 mt-4 px-16 text-center">
                  Start building amazing MarkDown documents with PassCode, share
                  your projects with your team just with one click.
                </p>
                <a
                  href="/"
                  className="mt-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase"
                  title="Learn More"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
