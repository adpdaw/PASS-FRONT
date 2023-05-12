import React from "react";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { datosContexto } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

/** Este componente es un formulario controlado que permite modificar o borrar un usuario.*/
export const EditUser = () => {
  var context = useContext(datosContexto);

  const [error, setError] = useState(false);
  const Navigate = useNavigate();

  //Función de react hook form, se encarga de validar los formularios.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const url = `http://localhost/api/user/${context.user.id}`;

  /**Función que modifica un usuario ,recoge los datos de formulario y lo manda.  */
  const onSubmit = async (data) => {
    let datos = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phone,
      photo: data.photo,
      address: data.address,
      country: data.country,
      user_type: data.rol,
    };
    const response = await context.updateUser(url, datos);
    if (response.status === 200) {
      Navigate("/IndexAdmin");
    } else {
      setError(true);
    }
  };

  //Función para borrar un usuario.
  const submitDelete = async () => {
    const response = await context.deleteUser(url);
    if (response.status === 200) {
      Navigate("/IndexAdmin");
    } else {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <>
        <Header />
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-30 overflow-x-hidden overflow-y-auto"></div>
        <div
          className="fixed top-0 right-0 z-50 
         items-center justify-center w-full p-4 
         overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="absolute top-0 right-44 left-48 w-full h-full max-w-screen-md">
            <form
              action="GET"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-20"
            >
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    Navigate("/IndexAdmin");
                  }}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="editUserModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* <!-- First Name --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                      <span>
                        <i className="fas fa-exclamation-circle failure-icon"></i>
                        <i className="fas fa-check-circle success-icon"></i>
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={context.user.name}
                      name="name"
                      id="name"
                      className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      placeholder="Bonnie"
                      required=""
                      autoFocus
                      {...register("name", { required: true })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    <div className="error relative flex-col">
                      {errors.name && (
                        <span role="alert">This field is required </span>
                      )}
                    </div>
                  </div>

                  {/* <!-- Email --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={context.user.email}
                      name="email"
                      id="email"
                      className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      placeholder="example@company.com"
                      required=""
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
                      {errors.email && (
                        <span role="alert">{errors.email.message}</span>
                      )}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Phone number --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      defaultValue={context.user.phoneNumber}
                      id="phone"
                      className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      placeholder="123-456-678"
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
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Photo --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="photo"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Photo
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
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Address --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      defaultValue={context.user.address}
                      className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      placeholder=""
                      {...register("address", { required: false })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    <div className="error relative flex-col">
                      {errors.address && (
                        <span role="alert">This field is required </span>
                      )}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Country --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select an option
                      <span>
                        {" "}
                        <i className="fas fa-exclamation-circle failure-icon"></i>
                        <i className="fas fa-check-circle success-icon"></i>
                      </span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      {...register("country")}
                    >
                      <option defaultValue={""}>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Rol user --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="rol"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select an option
                      <span>
                        {" "}
                        <i className="fas fa-exclamation-circle failure-icon"></i>
                        <i className="fas fa-check-circle success-icon"></i>
                      </span>
                    </label>
                    <input
                      id="rol"
                      name="rol"
                      defaultValue={context.user.user_type}
                      className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      {...register("rol")}
                    />

                    <div className="error relative flex-col"></div>
                  </div>
                </div>
              </div>
              {/* // <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  id="btn-admin-update"
                  type="submit"
                  className="cursor-pointer text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Save all
                </button>
                <Link
                  id="btn-admin-delete"
                  onClick={() => {
                    submitDelete();
                  }}
                  className=" cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete User
                </Link>
              </div>
              {error ? (
                <p className="text-red-700 p-5">
                  Some of your information is wrong, please try again!
                </p>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};
export default EditUser;
