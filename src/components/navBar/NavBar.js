import { useMarkdown } from "../../provider/markdown-provider";
import React, { useState, useRef, useEffect } from 'react';
import './navBar.css';
import logo from '../../img/favicon.png';


const NavBar = () => {

  const [markdown, setMarkdown] = useMarkdown();
  const [mode, setMode] = useState('light');


  // Cambia el modo al montar/desmontar el componente
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', mode);
    document.body.className = mode;
  }, [mode]);

  // Cambia el modo al hacer clic en el botón
  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const upLoadFile = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setMarkdown(event.target.result);
    };
    reader.readAsText(event.target.files[0]);

  };

  // const downloadFile = () => {
  //   const link = document.createElement('a');
  //   const file = new Blob([markdown], { type: 'text/plain' });
  //   link.href = URL.createObjectURL(file);
  //   link.download = 'Untitled.md';
  //   link.click();
  //   URL.revokeObjectURL(link.href);
  // };

  const downloadFile = () => {
    // Crea una ventana emergente con un formulario
    const popup = document.createElement('div');
    popup.innerHTML = `
      <form>
        <label for="filename">Name:</label>
        <input type="text" id="filename" name="filename"><br>
        
        <label for="formato">Format:</label>
        <select id="formato" name="formato">
          <option value="md">Markdown</option>
          <option value="txt">Texto plano</option>
          <option value="pdf">PDF</option>
          <option value="html">HTML</option>
        </select><br>
        
        <button type="submit">Descargar</button>
        <button onclick="document.body.removeChild(popup)">Cancel</button>
      </form>
    `;
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '1rem';
    popup.style.background = 'white';
    popup.style.boxShadow = 'var(--shadow3)';
    popup.style.zIndex = '999';
  
    // Agrega la ventana emergente al cuerpo del documento
    document.body.appendChild(popup);
  
    // Manejador de eventos para el envío del formulario
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Obtiene el valor del nombre de archivo y el formato seleccionado
      const filename = document.getElementById('filename').value;
      const formato = document.getElementById('formato').value;
  
      // Crea el archivo y lo descarga
      const link = document.createElement('a');
      let file;
  
      switch (formato) {
        case 'pdf':
          // Crea un archivo PDF a partir del contenido de markdown
          file = new Blob([markdown], { type: 'application/pdf' });
          link.download = `${filename}.pdf`;
          break;
        case 'txt':
          // Crea un archivo de texto plano a partir del contenido de markdown
          file = new Blob([markdown], { type: 'text/plain' });
          link.download = `${filename}.txt`;
          break;
        case 'html':
          // Crea un archivo HTML a partir del contenido de markdown
          file = new Blob([`<!DOCTYPE html><html><head><title>${filename}</title></head><body>${markdown}</body></html>`], { type: 'text/html' });
          link.download = `${filename}.html`;
          break;
        default:
          // Si se proporciona un formato desconocido, se utiliza el formato MD por defecto
          file = new Blob([markdown], { type: 'text/plain' });
          link.download = `${filename}.md`;
      }
  
      link.href = URL.createObjectURL(file);
      link.click();
      URL.revokeObjectURL(link.href);
  
      // Elimina la ventana emergente
      document.body.removeChild(popup);
    };
  
    // Asigna el manejador de eventos al formulario
    popup.querySelector('form').addEventListener('submit', handleSubmit);
  };
  

  return (
    <React.Fragment>
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">

          <img className='logo' src={logo} alt="logo" />

          <span className="logoName">PassCode ™</span>
          
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
     
        <ul>
        <span className="logoName upgradePlan">Upgrade to Premium</span>
          <label className="file">
            <input className="inputNav" aria-label="File browser" type="file" onChange={upLoadFile} />
            <span className="file-custom"></span>
          </label>
          <label className="file">
            <input className="inputNav" aria-label="File browser" type="'text/plain'" onClick={downloadFile} />
            <span className="file-customDownload"></span>
          </label>
          <li onClick={toggleMode} className="btn-mode" >{mode === 'light' ? '🌞' : '🌚'}</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
    </React.Fragment>
  );
}

export default NavBar;