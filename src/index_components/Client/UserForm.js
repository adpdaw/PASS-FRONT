import React from "react";
import Header from "../Header/Header.js";
import { useState } from "react";
import { useContext } from "react";
import { datosContexto } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
/**Este componente es un formulario controlado que permite modificar o borra tu propia cuenta. */
const UserForm = () => {
  const [show, setShow] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  /**Estado que muestre un mensaje de error. */
  const [error, setError] = useState(false);

  var context = useContext(datosContexto);
  const Navigate = useNavigate();

  const url = `http://localhost/api/user/${context.userConnected.id}`;

  //Hook de la api react-hook-form
  //https://react-hook-form.com
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  /** Función que mande una petición a la API para modificar tu cuenta. */
  const onSubmit = async (data) => {
    let datos = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phone,
      photo: data.photo,
      address: data.address,
      country: data.country,
      user_type: data.rol,
      password: data.password,
      password_confirmation: data.password_confirmation,
      termsAcceptation: data.terms,
    };
    const response = await context.updateUser(url, datos);
    if (response.status === 200) {
      if (context.userConnected.user_type === "admin") {
        Navigate("/IndexAdmin");
      } else {
        Navigate("/");
      }
    } else {
      setError(true);
    }
  };
  /**Función que te permite borrar tu cuenta. */
  const submitDelete = async () => {
    const response = await context.deleteUser(url);
    console.log(response);
    if (response.status === 200) {
      Navigate("/login");
    }
  };
  return (
    <React.Fragment>
      <Header />
      <div className="max-w-2xl mx-auto bg-white p-16">
        <h2 className="mb-5 font-medium text-heading-color">
          Welcome{" "}
          <span id="userOnForm" className="font-normal text-theme-color">
            {context.userConnected.name}
          </span>
        </h2>
        <p className="mb-5">
          You can add or delete information from your profile even change your
          email. We only require a valid name, email and password.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* <!-- Input First Name --> */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="John"
              defaultValue={context.userConnected.name}
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            <div className="error relative flex-col">
              {errors.name && <span role="alert">This field is required </span>}
            </div>
          </div>

          {/* <!-- Input email --> */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={context.userConnected.email}
              className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="john.doe@country.com"
              {...register("email", {
                required: "Email required...",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Invalid email format",
                },
              })}
            />
            <div className="error relative flex-col">
              {errors.email && <span role="alert">{errors.email.message}</span>}
            </div>
          </div>
          {/* <!-- Phone number and Photo --> */}
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            {/* <!-- Input phone number --> */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone number
                <span>
                  <i className="fas fa-exclamation-circle failure-icon"></i>
                  <i className="fas fa-check-circle success-icon"></i>
                </span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={context.userConnected.phoneNumber}
                className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                placeholder="123 456 678"
                pattern=""
                {...register("phone", {
                  required: false,
                  pattern: {
                    value: /[0-9]{9,12}/,
                    message: "Invalid format",
                  },
                })}
              />
              <div className="error relative flex-col">
                {errors.phone && (
                  <span role="alert">{errors.phone.message}</span>
                )}
              </div>
            </div>
            {/* <!-- Input Picture --> */}
            <div>
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Photo .jpg/.jpeg/.png/.gif
                <span>
                  <i className="fas fa-exclamation-circle failure-icon"></i>
                  <i className="fas fa-check-circle success-icon"></i>
                </span>
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                {...register("photo", {
                  required: false,
                  pattern: {
                    value: /(.jpg|.jpeg|.png|.gif)$/i,
                    message:
                      "Extension not allowed. Use: .jpeg/.jpg/.png/.gif.",
                  },
                })}
              />
              <div className="error relative flex-col">
                {errors.photo && (
                  <span role="alert">{errors.photo.message}</span>
                )}
              </div>
            </div>
          </div>
          {/* <!-- Input address --> */}
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Address
              <span>
                <i className="fas fa-exclamation-circle failure-icon"></i>
                <i className="fas fa-check-circle success-icon"></i>
              </span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={context.userConnected.address}
              className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="Av HalfDome 27"
              {...register("address", { required: false })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            <div className="error relative flex-col">
              {errors.address && (
                <span role="alert">This field is required </span>
              )}
            </div>
          </div>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            {/* <!-- Input country select --> */}
            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="country"
                name="country"
                className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                {...register("country")}
              >
                <option value="">Choose a country</option>
                <option value="Spain">Spain</option>
                <option value="Morocco">Morocco</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
              <div className="error relative flex-col"></div>
            </div>
            {/* <!-- Input rol select --> */}
            <div>
              <label
                htmlFor="user_type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
                <span>
                  <i className="fas fa-exclamation-circle failure-icon"></i>
                  <i className="fas fa-check-circle success-icon"></i>
                </span>
              </label>
              <input
                id="user_type"
                name="user_type"
                defaultValue={context.userConnected.user_type}
                className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                {...register("user_type")}
              />
              <div className="error relative flex-col"></div>
            </div>
          </div>

          {/* <!-- Input password --> */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Reset password
              <span>
                <i className="fas fa-exclamation-circle failure-icon"></i>
                <i className="fas fa-check-circle success-icon"></i>
              </span>
            </label>
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="•••••••••"
              {...register("password", {
                required: "Password is Required...",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,}$/,
                  message:
                    "Password Must Contain: At least 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                },
              })}
            />
            <button
              type="button"
              className="absolute top-10 left-50 right-2 rounded-full "
              onClick={() => setShow(!show)}
            >
              {show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width={20}
                  color="red"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  width={20}
                  color="#16a34a"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                  />
                </svg>
              )}
            </button>{" "}
            <div className="error relative flex-col">
              {errors.password && (
                <span role="alert">{errors.password.message}</span>
              )}
            </div>
          </div>
          {/* <!-- Input password repeat --> */}
          <div className="mb-6 relative ">
            <label
              htmlFor="password_confirmation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm password
              <span>
                <i className="fas fa-exclamation-circle failure-icon"></i>
                <i className="fas fa-check-circle success-icon"></i>
              </span>
            </label>
            <input
              type={showRepeat ? "text" : "password"}
              id="password_confirmation"
              name="password_confirmation"
              className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="•••••••••"
              {...register("password_confirmation", {
                required: true,
              })}
            />
            <button
              type="button"
              className=" absolute top-10 left-50 right-2  rounded-full "
              onClick={() => setShowRepeat(!showRepeat)}
            >
              {showRepeat ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width={20}
                  color="red"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  width={20}
                  color="#16a34a"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                  />
                </svg>
              )}
            </button>{" "}
            <div className="error relative flex-col">
              {watch("password_confirmation") !== watch("password") &&
              getValues("password_confirmation") ? (
                <p>Password does not match</p>
              ) : null}
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="termsAcceptation"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-indigo-100 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800"
                {...register("termsAcceptation", { required: true })}
                aria-invalid={errors.termsAcceptation ? "true" : "false"}
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the
              <a
                href="/"
                className="text-indigo-600 hover:underline dark:text-indigo-500"
              >
                Terms and Conditions
              </a>
              .
              <span>
                <i className="fas fa-exclamation-circle failure-icon"></i>
                <i className="fas fa-check-circle success-icon"></i>
              </span>
              <div className="error relative flex-col">
                {errors.termsAcceptation && (
                  <span role="alert">Terms must be accepted</span>
                )}
              </div>
            </label>
          </div>

          <button
            type="submit"
            id="btn-resetUser"
            className="text-white bg-indigo-700 hover:bg-indigo-800 shadow-indigo-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 dark:shadow-purple-800/80 m-2"
          >
            Save my Profile
          </button>
          {error ? (
            <p className="text-red-700 p-5">
              Something is wrong, please try again!
            </p>
          ) : null}
          <button
            onClick={() => {
              submitDelete();
            }}
            id="btn-deleteUser"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 m-2"
          >
            Delete my Account
          </button>
        </form>

        <p className="mt-5">
          {" "}
          <a
            className="text-indigo-600 hover:underline"
            href="/"
            target="_blank"
          >
            Data Policy.
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};
export default UserForm;
