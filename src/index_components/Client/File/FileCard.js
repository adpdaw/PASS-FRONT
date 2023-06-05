import React from "react";
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import { useState } from "react";
import { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { datosContexto } from "../../Context/Context.js";
import FileForm from "./FileForm.js";
import {} from './FilesPage.css'

function FileCard (props){

  var context = useContext(datosContexto);
  const [error, setError] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const url = `http://localhost/api/file/${props.id}`;

   const submitDelete = async(url)=>{
    const confirmDelete = window.confirm('Are you sure you want to delete this file?');
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
            <div key={props.index} id={props.index}>
              <div className="fichero">
                <Link to={`/editor/${props.id}`}>
                <h2>.MD</h2>
                </Link>
                 <button onClick={()=>{submitDelete(url)}}><AiOutlineDelete size={25}/></button> 
                <button  onClick={()=>{setShowModal(!showModal)}}><AiOutlineEdit size={25}/></button>
              </div>
              <legend>{props.file.name}</legend>

            </div>

        {showModal ?
        <div className={showModal ? "modal" : null}>
          <FileForm id={props.id} file={props.file} setShowModal={setShowModal} />
        </div>
        :
        null
        }
        </React.Fragment>
    )

}
export default FileCard