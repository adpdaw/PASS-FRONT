import React from 'react';
import { useEffect } from 'react';
import './index.css';
import { Route,Routes,useNavigate} from 'react-router-dom';
import Context from './index_components/Context/Context.js';
import Login from './Login/Login.js';
import Signup from './Sign-up/Signup';
import UserForm from './index_components/Client/UserForm';
import IndexAdmin from './index_components/Admin/IndexAdmin';
import { IndexClient } from './index_components/Client/IndexClient';
import EditUser from './index_components/Admin/EditUser';
import IndexEditor from './Editor_components/editor/IndexEditor.js';
import FoldersPage from './index_components/Client/Folder/FoldersPage';
import FolderForm from './index_components/Client/Folder/FolderForm';
import FilesPage from './index_components/Client/File/FilesPage';
import GoogleAuthCallback from './Login/GoogleAuthCallBack';
import GithubAuthCallback from './Login/GithubAuthCallBack';
import LinkedinAuthCallback from './Login/LinkedinAuthCallBack';

/**Este es el componente principal que tiene las routas utilizadas. */

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('expirationTime');

    if (token && expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > parseInt(expirationTime, 10)) {
        // Token is expired, redirect to login page
        navigate('/login');
      }
    } else {
      // Token is not available, redirect to login page
      navigate('/login');
    }
  }, [navigate]);
   
  
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
          <Route path='/projects' element={<FoldersPage/>}/>
          <Route path='/projectForm' element={<FolderForm/>}/>
          <Route path='/files/:projectId' element={<FilesPage/>}/>
          <Route path="/auth-google/call-back" element={<GoogleAuthCallback/>} />
          <Route path="/auth-github/call-back" element={<GithubAuthCallback/>} />
          <Route path="/auth-linkedin/call-back" element={<LinkedinAuthCallback/>} />

        </Routes>
      </Context>
   
    </React.Fragment>
 

  );
}

export default App;

