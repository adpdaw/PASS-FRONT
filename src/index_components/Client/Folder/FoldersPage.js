import React, { useState } from "react";
import { useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import IndexHeader from "../../Header/IndexHeader";
import Footer from "../../Footer/Footer";
import { useForm } from "react-hook-form";
import {GiCancel} from "react-icons/gi";
import FolderCard from "./FolderCard";

import { datosContexto } from "../../Context/Context.js";
import {} from "./FoldersPage.css";
import FolderForm from "./FolderForm";

function FoldersPage() {
  var context = useContext(datosContexto);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const url = `http://localhost/api/project`;
    const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const Navigate = useNavigate();
 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await context.getProjects(url);
        console.log(response.data)
       //context.updateProjectList(response.data);
       console.log(context.projects)
        return response.data;
      } catch (error) {
        setError(true);
        return error;
      }
    }
    fetchData();
  },[]);

  
  
  return (
    <React.Fragment>
      <IndexHeader className="header" />

      <div className="projectsContainer">
        <h1>Projects</h1>
        <p>
          You can create here a project that contains a lot of Markdown files.
        </p>

        <div
          id="addProjectCard"
          className=" h-full w-full flex flex-col items-center justify-center bg-background hover:bg-secondary-300 climatetrade:hover:bg-primary-200 text-secondary-500 hover:text-secondary-800 rounded-lg"
        onClick={()=>{setShowModal(true); console.log(showModal)}}
        >
          <span>New Project</span>
              <svg viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg"style={{ height: "48px", strokeWidth: "1px", width: "48px" }} >
                <path
                  d="M9 13H15M12 10V16M3 17V7C3 5.89543 3.89543 5 5 5H11L13 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                ></path>
              </svg>
        </div>
        <div className="projectList">
           {context.projects.length==0 ? null :
           context.projects.map((project,index) => (
            <Link to={`/files/${project.id}`}>
                <FolderCard project={project} id={project.id} key={index}/>
            </Link>
           ))
           }
           
            
        </div>
      </div>
      {showModal ?
      <div className={showModal ? "modal" : null}>
        <FolderForm setShowModal={setShowModal}/>
      </div> 
      :
      null
      }
      




      <Footer />
    </React.Fragment>
  );
}

export default FoldersPage;
