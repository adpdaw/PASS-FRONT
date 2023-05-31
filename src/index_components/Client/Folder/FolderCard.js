import React from "react";
import {} from './FoldersPage.css'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import FolderForm from "./FolderForm";
import { useState } from "react";
import { useContext,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { datosContexto } from "../../Context/Context.js";

function FolderCard (props){
  var context = useContext(datosContexto);
  const [error, setError] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const url = `http://localhost/api/project/${props.id}`;

   const submitDelete = async(url)=>{
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if(confirmDelete){
      const response = await context.deleteProject(url);
      console.log(response)
      if (response.status === 200) {
        window.location.reload();
        
      } else {
        setError(true);
      }
    }
   
   }
    return (
        <React.Fragment>
            <div className="folderCard" key={props.index} id={props.index}>
            <div className="folder">
            <Link to={`/files/${props.id}`}>
               <h2>{props.project.name}</h2>
            </Link>

              <button onClick={()=>{submitDelete(url)}}><AiOutlineDelete size={30}/></button>
              <button  onClick={()=>{setShowModal(!showModal)}}><AiOutlineEdit size={30}/></button>
              </div>
              </div>

              {showModal ?
        <div className={showModal ? "modal" : null}>
          <FolderForm id={props.id} project={props.project} setShowModal={setShowModal} />
        </div>
        :
        null
      }
        </React.Fragment>
    )

}
export default FolderCard