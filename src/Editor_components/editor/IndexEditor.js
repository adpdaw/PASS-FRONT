
import MainLayout from '../../Editor_components/main-layout/MainLayout.js'
import Editor from '../../Editor_components/editor/Editor.js';
import Preview from '../../Editor_components/preview/Preview.js';
import MarkdownProvider from '../../provider/markdown-provider.js';
import Sidebar from '../../Editor_components/sidebar/SideBar.js';
import NavBar from '../../Editor_components/navBar/NavBar.js'
import Footer from '../../Editor_components/footer/Footer.js'


function  IndexEditor  () {
  

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

export default IndexEditor;