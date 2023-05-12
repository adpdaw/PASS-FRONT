import React, { createContext, useState } from "react";
import { getData, postData, putData, deleteData } from "../../biblioteca";
/**Este componente es el contexto de toda la aplicación. */
const datosContexto = createContext();

var listaInicial = [];
var objetoInicial = {};

function Context(props) {
  const [userConnected, setUserConnected] = useState(objetoInicial);
  const [user, setUser] = useState(objetoInicial);

  const [users, setUsers] = useState(listaInicial);
  const [loggedIn, setLogin] = useState(false);

  /***LOGIN******* */
  const login = async (url, object) => {
    try {
      const response = await postData(url, object);
      setUserConnected(response.data.user);
      setLogin(true);
      return response.data.path;
    } catch (error) {
      return error;
    }
  };

  /***Sign-up************ */

  const signup = async (url, object) => {
    try {
      const response = await postData(url, object);
      return response;
    } catch (error) {
      return error;
    }
  };

  /****Logout******************** */

  const logout = async (url) => {
    try {
      const response = await postData(url);
      setUserConnected(objetoInicial);
      setLogin(false);
      return response;
    } catch (error) {
      return error;
    }
  };

  /*****Update user********** */
  const updateUser = async (url, object) => {
    try {
      const response = await putData(url, object);
      if ((response.status = 200)) {
        setUser(object);
      }
      return response;
    } catch (error) {
      return error;
    }
  };

  /******Delete user******* */
  const deleteUser = async (url) => {
    try {
      const response = await deleteData(url);
      if ((response.status = 200)) {
        setUser(objetoInicial);
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  /**Traer todos los usuarios de la base de datos. */
  const getUsers = async (url) => {
    const usersList = await getData(url);
    setUsers(usersList);
  };
  /**Traer un usuario. */
  const getUser = async (url) => {
    const user = await getData(url);
    setUser(user);
  };

  /**Cambiar el estado de loggedIn. */
  const isLoggedIn = (boolean) => {
    setLogin(boolean);
  };
  /**Cambiar el estado de user. */
  const updateUserState = (object) => {
    setUser(object);
  };
  /**Cambiar el estado de lista de usuarios. */
  const updateListState = (list) => {
    setUsers(list);
  };

  const data = {
    user,
    users,
    getUsers,
    getUser,
    isLoggedIn,
    loggedIn,
    setLogin,
    updateListState,
    updateUserState,
    login,
    signup,
    updateUser,
    deleteUser,
    userConnected,
    setUserConnected,
    logout,
  };
  return (
    <datosContexto.Provider value={data}>
      {props.children}
    </datosContexto.Provider>
  );
}

export default Context;
export { datosContexto };
