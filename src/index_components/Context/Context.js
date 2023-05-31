import React, { createContext, useState } from "react";
import { getData, postData, putData, deleteData, postDataHeaders, getDataHeaders,putDataHeaders,deleteDataHeaders } from "../../biblioteca";
import { set } from "react-hook-form";
/**Este componente es el contexto de toda la aplicación. */
const datosContexto = createContext();

var listaInicial = [];
var objetoInicial = {};

function Context(props) {
  const [user, setUser] = useState(objetoInicial);

  const [users, setUsers] = useState(listaInicial);

  const tokenStored = localStorage.getItem('token');
  var checkLogin = !!tokenStored;
  const [loggedIn, setLogin] = useState(checkLogin);

  const [project, setProject]= useState(objetoInicial);
  const [projects, setProjects] = useState(listaInicial);

  const [files, setFiles] = useState(listaInicial);


  const [token,setToken]=useState(objetoInicial);
  const [userConnected, setUserConnected] = useState(objetoInicial);

const saveToken = (user,token)=>{
  sessionStorage.setItem('token',JSON.stringify(token));
  sessionStorage.setItem('user',JSON.stringify(user));
  localStorage.setItem('token',token);
  setLogin(true)
  setToken(token);
  setUserConnected(user);

}

const getToken = ()=>{
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  setToken(userToken);
  return userToken;
}

const getUser2 = ()=>{
  const userString = sessionStorage.getItem('user');
  const user_detail = JSON.parse(userString);
  return user_detail;
}




  /***LOGIN******* */
  const login = async (url, object) => {
    try {
      const response = await postData(url, object);
      console.log(response)
      setUserConnected(response.data.user);
      saveToken(response.data.user,response.data.token);
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setLogin(true);
      const expirationTime = new Date().getTime() + (60 * 60 * 1000); // Set expiration time to 1 hour from now
      localStorage.setItem('expirationTime', expirationTime);
      return response.data.path;
    } catch (error) {
      console.log(error)
      return error;
    }
  };

  /*********Google Auth* */
//   const googleAuth = async (url) => {
//     try {
//       const response = await postData(url);
      
//   }catch{
//     return error;
//   }
// }

  /***Sign-up************ */

  const signup = async (url, object) => {
    try {
      const response = await postData(url, object);
      return response;
    } catch (error) {
      console.log(error)
      return error;
    }
  };

  /****Logout******************** */

  const logout = async (url) => {
    try {
      const response = await postDataHeaders(url,{},getToken());
      setUserConnected(objetoInicial);
      sessionStorage.clear();
      localStorage.clear();
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

/****************************************************************** */
/**Create a project */

const createProject = async (url, object) => {
  try {
    const response = await postDataHeaders(url, object,getToken());
    console.log(response)
    return response;
  }
  catch (error) {
    console.log(error)
    return error;
    }

}

/**Get All projects */
const getProject =async (url, object)=>{
  const project = await getData(url, object);
  setProject(project);
}
/**Get one project */
const getProjects = async (url) => {
  const projectsList = await getDataHeaders(url,getToken());
  setProjects(projectsList.data.listProjects)
  console.log(projects)
   return projectsList
};

/**Update a project */

const updateProject = async (url, object) => {
  try {
    const response = await putDataHeaders(url, object,getToken());
    if ((response.status = 200)) {
      setProject(object);
    }
    return response;
  } catch (error) {
    return error;
  }
};
/**Delete a project */
const deleteProject = async (url) => {
  try {
    const response = await deleteDataHeaders(url, getToken());
    console.log(response)
    if ((response.status = 200)) {
      setProject(objetoInicial);
      }
      return response;
  }
  catch (error) {
    return error;
    }
}

  /**Cambiar el estado de lista de usuarios. */
  const updateProjectList = (list) => {
    setProjects(list);
  };

/**************************************** */
/**Create a project */


/**Get All projects */
// const getProject =async (url, object)=>{
//   const project = await getData(url, object);
//   setProject(project);
// }
/**Get one project */
const getFiles = async (url) => {
  const FilesList = await getDataHeaders(url,getToken());
  setFiles(FilesList.data)
  console.log(FilesList)
   return FilesList;
};

/**Update a project */

// const updateProject = async (url, object) => {
//   try {
//     const response = await putDataHeaders(url, object,getToken());
//     if ((response.status = 200)) {
//       setProject(object);
//     }
//     return response;
//   } catch (error) {
//     return error;
//   }
// };
/**Delete a project */
// const deleteProject = async (url) => {
//   try {
//     const response = await deleteDataHeaders(url, getToken());
//     console.log(response)
//     if ((response.status = 200)) {
//       setProject(objetoInicial);
//       }
//       return response;
//   }
//   catch (error) {
//     return error;
//     }
// }

  /**Cambiar el estado de lista de usuarios. */
  // const updateProjectList = (list) => {
  //   setProjects(list);
  // };




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
    saveToken,
    setUserConnected,
    logout,
    projects,
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    updateProjectList,
    files,
    getFiles
  };
  return (
    <datosContexto.Provider value={data}>
      {props.children}
    </datosContexto.Provider>
  );
}

export default Context;
export { datosContexto };
