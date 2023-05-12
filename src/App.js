import React from 'react';
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Context from './index_components/Context/Context.js';
import Login from './Login/Login.js';
import Signup from './Sign-up/Signup';
import UserForm from './index_components/Client/UserForm';
import IndexAdmin from './index_components/Admin/IndexAdmin';
import { IndexClient } from './index_components/Content/IndexClient';
import EditUser from './index_components/Admin/EditUser';
import IndexEditor from './Editor_components/editor/IndexEditor.js';
/**Este es el componente principal que tiene las routas utilizadas. */

function App() {
  return (
    <React.Fragment>
      <Context>
        <Routes>
          <Route path='/' element={<IndexClient/>}/>
          <Route path='/user' element={<UserForm/>}/>
          <Route path='/IndexAdmin' element={<IndexAdmin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/editUser' element={<EditUser/>}/>
          <Route path='/editor' element={<IndexEditor/>}/>

        </Routes>
      </Context>
   
    </React.Fragment>
 

  );
}

export default App;

