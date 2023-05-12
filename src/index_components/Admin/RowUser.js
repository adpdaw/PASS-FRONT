import React from "react";
import { useContext } from "react";
import { datosContexto } from "../Context/Context";
import { Link } from "react-router-dom";

/*Este componente es para mostrar una fila de usuario en la tabla dinámica.*/
export const RowUser = (props) => {
  var context = useContext(datosContexto);

  return (
    <React.Fragment>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-indigo-300 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-10 h-10 rounded-full"
            src="./img/user.svg"
            alt="Jese"
          />
          <div className="pl-3">
            <div className="text-base font-semibold">{props.data.name}</div>
            <div className="font-normal text-gray-500">{props.data.email}</div>
          </div>
        </th>
        <td className="px-6 py-4">{props.data.user_type}</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-2 "></div>{" "}
            Online
          </div>
        </td>
        <td className="px-6 py-4">
          {/* <!-- Modal toggle --> */}
          <Link
            to="/editUser"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            type="button"
            onClick={() => {
              context.setShowModal(true);
              context.updateUserState(props.data);
            }}
          >
            EditUser
          </Link>
        </td>
      </tr>
    </React.Fragment>
  );
};
export default RowUser;
