
import './index.css';
import MainLayout from './components/main-layout/MainLayout.js';
import Editor from './components/editor/Editor.js';
import Preview from './components/preview/Preview.js';
import MarkdownProvider from './provider/markdown-provider.js';
import Sidebar from './components/sidebar/SideBar.js';
import NavBar from './components/navBar/NavBar.js'
import Footer from './components/footer/Footer.js'

function  App  () {

  return(  
    <MarkdownProvider>
       <NavBar/>
       <Sidebar/>
    <MainLayout>
      <MainLayout.Column>
    
        <Editor/>
      </MainLayout.Column>
      <MainLayout.Column>
        <Preview/>
      </MainLayout.Column>
    </MainLayout>
    <Footer/>
  </MarkdownProvider> 

  );
}

export default App;
