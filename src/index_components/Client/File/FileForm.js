import React from 'react';
import { useContext } from "react";
import { datosContexto } from "../../Context/Context.js";
import { Link, useNavigate,useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Nav from '../../Header/Nav.js';



function FileForm(props) {

    var context = useContext(datosContexto);
    const [error, setError] = useState(false);
    
    const { projectId } = useParams();

    var url = `http://localhost/api/file?project_id=${projectId}`;

    var Navigate = useNavigate();
    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
      } = useForm({ mode: "all" });
    
      const onSubmit = async (data) => {
        let datos = {
          name: data.name,
        };
        var response = "";
        if(props.id === undefined){
           response = await context.createProject(url,datos);

        }else{
          url = `http://localhost/api/file/${props.id}`
           response = await context.updateProject(url,datos);
        }
          if (response.status === 200) {
            window.location.reload();
              Navigate(`/files/${projectId}`);

          } else {
            setError(true);
          }
        };

        const handleCancel = () => {
          props.setShowModal(false);
        };
        
       
    
  return (
    <React.Fragment>
      <Nav/>
          <div  className="fixed align-top top-1/3 left-72 right-1/4 right-0 z-50  w-8/12 p-4  h-[calc(100%-1rem)]">
            <form id='folderForm' onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  placeholder="Mi Project"
                  defaultValue={props.id==undefined ? '': props.file['name']}
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  />
                  <div className="error relative flex-col">
                  {errors.name && <span role="alert">This field is required </span>}
                  </div>
              </div>
              {error ? (
              <p className="text-red-700 p-5">
                The name of the file should be unique
              </p>
              ) : null}

              <button
              type="submit"
              id="btn-resetUser"
              className="text-white bg-indigo-700 hover:bg-indigo-800 shadow-indigo-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 dark:shadow-purple-800/80 m-2"
            >Save</button>   

            <button 
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 shadow-indigo-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 dark:shadow-purple-800/80 m-2"
            onClick={handleCancel}>
                Cancel
            </button>
           
            </form>



          </div>
            






   
    </React.Fragment>
 

  );
}

export default FileForm;

